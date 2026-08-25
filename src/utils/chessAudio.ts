// Chess.com standard audio sound effects manager with WebAudio acoustic fallback

const CHESS_COM_SOUNDS = {
  moveSelf: 'https://images.chesscomfiles.com/chess-themes/sounds/_MP3_/default/move-self.mp3',
  moveOpponent: 'https://images.chesscomfiles.com/chess-themes/sounds/_MP3_/default/move-opponent.mp3',
  capture: 'https://images.chesscomfiles.com/chess-themes/sounds/_MP3_/default/capture.mp3',
  check: 'https://images.chesscomfiles.com/chess-themes/sounds/_MP3_/default/move-check.mp3',
  castle: 'https://images.chesscomfiles.com/chess-themes/sounds/_MP3_/default/castle.mp3',
  promote: 'https://images.chesscomfiles.com/chess-themes/sounds/_MP3_/default/promote.mp3',
  gameEnd: 'https://images.chesscomfiles.com/chess-themes/sounds/_MP3_/default/game-end.mp3',
  illegal: 'https://images.chesscomfiles.com/chess-themes/sounds/_MP3_/default/illegal.mp3',
  tenseconds: 'https://images.chesscomfiles.com/chess-themes/sounds/_MP3_/default/tenseconds.mp3',
};

class ChessSoundManager {
  private ctx: AudioContext | null = null;
  private soundEnabled: boolean = true;
  private audioCache: Map<string, HTMLAudioElement[]> = new Map();
  private maxPoolSize = 6;

  constructor() {
    if (typeof window !== 'undefined') {
      // Preload primary sound pools
      Object.entries(CHESS_COM_SOUNDS).forEach(([key, url]) => {
        const pool: HTMLAudioElement[] = [];
        for (let i = 0; i < 3; i++) {
          try {
            const audio = new Audio(url);
            audio.preload = 'auto';
            pool.push(audio);
          } catch {
            // Ignore audio constructor errors
          }
        }
        this.audioCache.set(key, pool);
      });
    }
  }

  private initCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  public setSoundEnabled(enabled: boolean) {
    this.soundEnabled = enabled;
  }

  public isSoundEnabled(): boolean {
    return this.soundEnabled;
  }

  private playSoundFile(soundKey: keyof typeof CHESS_COM_SOUNDS, fallbackFn: () => void) {
    if (!this.soundEnabled) return;

    try {
      const pool = this.audioCache.get(soundKey);
      let audioToPlay: HTMLAudioElement | null = null;

      if (pool && pool.length > 0) {
        // Find one that is paused / ended or grab the oldest
        audioToPlay = pool.find((a) => a.paused || a.ended) || null;
        if (!audioToPlay) {
          if (pool.length < this.maxPoolSize) {
            audioToPlay = new Audio(CHESS_COM_SOUNDS[soundKey]);
            audioToPlay.preload = 'auto';
            pool.push(audioToPlay);
          } else {
            audioToPlay = pool[0];
          }
        }
      } else {
        audioToPlay = new Audio(CHESS_COM_SOUNDS[soundKey]);
      }

      if (audioToPlay) {
        audioToPlay.currentTime = 0;
        const playPromise = audioToPlay.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Fallback to synthetic WebAudio if audio playback is blocked
            fallbackFn();
          });
        }
      } else {
        fallbackFn();
      }
    } catch {
      fallbackFn();
    }
  }

  // --- Synthetic WebAudio fallbacks matching exact timber ---
  private synthMove(freq = 280, duration = 0.07) {
    this.initCtx();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now);
      osc.frequency.exponentialRampToValueAtTime(110, now + duration);

      gain.gain.setValueAtTime(0.35, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + duration);
    } catch {}
  }

  private synthCapture() {
    this.initCtx();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(420, now);
      osc.frequency.exponentialRampToValueAtTime(140, now + 0.1);

      gain.gain.setValueAtTime(0.4, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.1);
    } catch {}
  }

  private synthCheck() {
    this.initCtx();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, now); // D5
      osc.frequency.setValueAtTime(880, now + 0.08); // A5

      gain.gain.setValueAtTime(0.35, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.22);
    } catch {}
  }

  public playMove(isOpponent: boolean = false) {
    this.playSoundFile(isOpponent ? 'moveOpponent' : 'moveSelf', () => this.synthMove(isOpponent ? 250 : 300));
  }

  public playCapture() {
    this.playSoundFile('capture', () => this.synthCapture());
  }

  public playCheck() {
    this.playSoundFile('check', () => this.synthCheck());
  }

  public playCastle() {
    this.playSoundFile('castle', () => {
      this.synthMove(320, 0.06);
      setTimeout(() => this.synthMove(260, 0.06), 60);
    });
  }

  public playPromote() {
    this.playSoundFile('promote', () => {
      this.synthMove(440, 0.08);
      setTimeout(() => this.synthMove(660, 0.12), 70);
    });
  }

  public playVictory() {
    this.playSoundFile('gameEnd', () => {
      this.initCtx();
      if (!this.ctx) return;
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, index) => {
        const now = this.ctx!.currentTime + index * 0.09;
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

        osc.connect(gain);
        gain.connect(this.ctx!.destination);

        osc.start(now);
        osc.stop(now + 0.3);
      });
    });
  }

  public playError() {
    this.playSoundFile('illegal', () => {
      this.initCtx();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(180, now);
      osc.frequency.setValueAtTime(120, now + 0.12);

      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.18);
    });
  }

  public playTenSeconds() {
    this.playSoundFile('tenseconds', () => this.synthMove(600, 0.05));
  }
}

export const chessAudio = new ChessSoundManager();
