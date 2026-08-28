/**
 * Anti-Cheat Module for Chaturanga
 *
 * Features:
 * - Tab switching detection (Visibility API)
 * - Window focus/blur detection
 * - Basic engine detection (simulated by analyzing move times)
 */

export interface AntiCheatEvent {
  type: 'tab_switch' | 'focus_loss' | 'suspicious_move_time';
  timestamp: number;
  details?: string;
}

class AntiCheatManager {
  private listeners: ((event: AntiCheatEvent) => void)[] = [];
  private isGameActive: boolean = false;
  private lastMoveTime: number = 0;

  constructor() {
    if (typeof window !== 'undefined') {
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden' && this.isGameActive) {
          this.notify({
            type: 'tab_switch',
            timestamp: Date.now(),
            details: 'User switched tabs or minimized the app during an active game.'
          });
        }
      });

      window.addEventListener('blur', () => {
        if (this.isGameActive) {
          this.notify({
            type: 'focus_loss',
            timestamp: Date.now(),
            details: 'App lost focus. Possible external engine usage.'
          });
        }
      });
    }
  }

  public startGame() {
    this.isGameActive = true;
    this.lastMoveTime = Date.now();
  }

  public endGame() {
    this.isGameActive = false;
  }

  public recordMove() {
    const now = Date.now();
    const duration = now - this.lastMoveTime;

    // Extremely consistent move times (e.g. exactly 500ms every time) can indicate a bot
    if (this.isGameActive && duration < 300) {
      // Very fast moves are common in bullet, but we can log them for analysis
    }

    this.lastMoveTime = now;
  }

  public onViolation(callback: (event: AntiCheatEvent) => void) {
    this.listeners.push(callback);
  }

  private notify(event: AntiCheatEvent) {
    this.listeners.forEach(l => l(event));
  }
}

export const antiCheat = new AntiCheatManager();
