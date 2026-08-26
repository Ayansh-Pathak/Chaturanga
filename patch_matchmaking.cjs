const fs = require('fs');

// --- 1. Modify server.ts to add /api/matchmake ---
let serverCode = fs.readFileSync('server.ts', 'utf8');

const matchmakeLogic = `// 4. In-Memory Matchmaking for "Play Online"
const matchmakingQueue = [];

app.post("/api/matchmake", (req, res) => {
  const { id, name, rating, timeControl, avatar, country } = req.body;
  const now = Date.now();
  
  // Clean up old entries (> 5 mins)
  for (let i = matchmakingQueue.length - 1; i >= 0; i--) {
    if (now - matchmakingQueue[i].timestamp > 5 * 60 * 1000) {
      if (matchmakingQueue[i].res && !matchmakingQueue[i].res.headersSent) {
        matchmakingQueue[i].res.json({ status: "timeout" });
      }
      matchmakingQueue.splice(i, 1);
    }
  }
  
  // Find match (same timeControl, Elo deviation <= 20)
  const matchIndex = matchmakingQueue.findIndex(p => 
    p.timeControl === timeControl && 
    Math.abs(p.rating - rating) <= 20 &&
    p.id !== id
  );
  
  if (matchIndex !== -1) {
    const opponent = matchmakingQueue.splice(matchIndex, 1)[0];
    const matchId = "match_" + Date.now();
    const isWhite = Math.random() < 0.5;
    
    if (opponent.res && !opponent.res.headersSent) {
      opponent.res.json({
        status: "match",
        matchId,
        color: isWhite ? "w" : "b",
        opponent: { id, name, rating, avatar, country }
      });
    }
    
    return res.json({
      status: "match",
      matchId,
      color: !isWhite ? "w" : "b",
      opponent: { id: opponent.id, name: opponent.name, rating: opponent.rating, avatar: opponent.avatar, country: opponent.country }
    });
  }
  
  // Add to queue
  matchmakingQueue.push({ id, name, rating, timeControl, avatar, country, timestamp: now, res });
  
  // Keep connection open for up to 25s
  setTimeout(() => {
    const idx = matchmakingQueue.findIndex(p => p.id === id && p.timestamp === now);
    if (idx !== -1) {
      const p = matchmakingQueue.splice(idx, 1)[0];
      if (p.res && !p.res.headersSent) {
        p.res.json({ status: "waiting" });
      }
    }
  }, 25000);
});

app.post("/api/matchmake/cancel", (req, res) => {
  const { id } = req.body;
  const idx = matchmakingQueue.findIndex(p => p.id === id);
  if (idx !== -1) {
    const p = matchmakingQueue.splice(idx, 1)[0];
    if (p.res && !p.res.headersSent) {
      p.res.json({ status: "cancelled" });
    }
  }
  res.json({ success: true });
});

// Vite middleware`;

serverCode = serverCode.replace("// Vite middleware", matchmakeLogic);
fs.writeFileSync('server.ts', serverCode);
console.log('Patched server.ts with matchmaking');

// --- 2. Modify PlayHub.tsx ---
let playHubCode = fs.readFileSync('src/components/play/PlayHub.tsx', 'utf8');

// We need to add state for matchmaking cancellation
if (!playHubCode.includes('const [matchmakingController, setMatchmakingController]')) {
  playHubCode = playHubCode.replace(
    'const [isMatchmaking, setIsMatchmaking] = useState(false);',
    'const [isMatchmaking, setIsMatchmaking] = useState(false);\n  const [matchmakingController, setMatchmakingController] = useState<AbortController | null>(null);'
  );
}

// Replace handleStartNewGame
const oldStart = `const handleStartNewGame = () => {
    if (mode === 'online') {
      setIsMatchmaking(true);
      setOnlineOpponent(null);
      setTimeout(() => {
        setIsMatchmaking(false);
        const myElo = user ? user.stats.rapid : 1500;
        const diff = Math.floor(Math.random() * 41) - 20; // -20 to +20 deviation
        const oppElo = myElo + diff;

        let playAsBlack = false;
        if (myElo > oppElo) {
          playAsBlack = Math.random() < 0.75;
        } else if (myElo < oppElo) {
          playAsBlack = Math.random() > 0.75;
        } else {
          playAsBlack = Math.random() < 0.5;
        }

        setMyColor(playAsBlack ? 'b' : 'w');

        setOnlineOpponent({
          name: 'Grandmaster_X',
          rating: oppElo,
          country: '🇬🇧',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
        });
        setGameKey((prev) => prev + 1);
      }, 3000);
    } else {
      setGameKey((prev) => prev + 1);
      setMyColor('w');
    }
  };`;

const newStart = `const handleStartNewGame = () => {
    if (mode === 'online') {
      setIsMatchmaking(true);
      setOnlineOpponent(null);
      
      const tc = isCustomTime ? \`\${customMinutes}+\${customIncrement}\` : selectedTimeControl;
      
      const pollMatchmaking = async () => {
        const controller = new AbortController();
        setMatchmakingController(controller);
        try {
          const res = await fetch('/api/matchmake', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: user?.id || 'guest_' + Math.random(),
              name: user?.username || 'Guest',
              rating: user?.stats.rapid || 1500,
              timeControl: tc,
              avatar: user?.avatar || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
              country: '🇮🇳'
            }),
            signal: controller.signal
          });
          const data = await res.json();
          if (data.status === 'match') {
            setIsMatchmaking(false);
            setMyColor(data.color as 'w' | 'b');
            setOnlineOpponent(data.opponent);
            setGameKey(prev => prev + 1);
            setMatchmakingController(null);
          } else if (data.status === 'waiting' || data.status === 'timeout') {
            // Keep polling if we're still supposed to be matchmaking
            setMatchmakingController(null);
            setTimeout(() => {
              if (document.getElementById('cancel-matchmaking-btn')) {
                 pollMatchmaking();
              }
            }, 1000);
          } else {
             setIsMatchmaking(false);
          }
        } catch (e: any) {
          if (e.name !== 'AbortError') {
             setIsMatchmaking(false);
             setMatchmakingController(null);
          }
        }
      };
      pollMatchmaking();
    } else {
      setGameKey((prev) => prev + 1);
      setMyColor('w');
    }
  };

  const handleCancelMatchmaking = () => {
    if (matchmakingController) {
      matchmakingController.abort();
      setMatchmakingController(null);
    }
    fetch('/api/matchmake/cancel', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({ id: user?.id || 'guest' })
    }).catch(() => {});
    setIsMatchmaking(false);
  };`;

playHubCode = playHubCode.replace(oldStart, newStart);

// Replace Cancel button
playHubCode = playHubCode.replace(
  `onClick={() => setIsMatchmaking(false)}`,
  `id="cancel-matchmaking-btn"\n                  onClick={handleCancelMatchmaking}`
);

fs.writeFileSync('src/components/play/PlayHub.tsx', playHubCode);
console.log('Patched PlayHub.tsx with matchmaking');

