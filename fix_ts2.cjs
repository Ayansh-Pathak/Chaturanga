const fs = require('fs');

// Fix GeminiChatbot.tsx
let f1 = fs.readFileSync('src/components/chat/GeminiChatbot.tsx', 'utf8');
f1 = f1.replace(
  "import { Send, Sparkles, X, Minimize2, Maximize2, Trash2, ChevronRight, Compass } from 'lucide-react';",
  "import { Send, Sparkles, X, Minimize2, Maximize2, Trash2, ChevronRight, Compass, RotateCcw, Loader2 } from 'lucide-react';"
);
fs.writeFileSync('src/components/chat/GeminiChatbot.tsx', f1);

// Fix ClubsAndTeamsHub.tsx
let f2 = fs.readFileSync('src/components/clubs/ClubsAndTeamsHub.tsx', 'utf8');
f2 = f2.replace(
  "const { clubs, createClub, joinClub, leaveClub, deleteClub, updateClubIcon, postMessage } = useClubs();",
  "const { clubs, createClub, joinClub, leaveClub, deleteClub, updateClubIcon, postMessage, updateClubBanner } = useClubs();"
);
fs.writeFileSync('src/components/clubs/ClubsAndTeamsHub.tsx', f2);

console.log('Fixed TS errors again');
