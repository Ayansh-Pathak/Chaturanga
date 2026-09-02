/**
 * Enhanced Storage Utility for Chaturanga
 * Handles JSON serialization, TTL (Time-To-Live), and Caching
 */

export const storage = {
  /**
   * Save data with optional TTL (in milliseconds)
   */
  set: (key: string, value: any, ttl?: number) => {
    const item = {
      value,
      expiry: ttl ? Date.now() + ttl : null,
    };
    localStorage.setItem(key, JSON.stringify(item));
  },

  /**
   * Retrieve data, checking for expiry
   */
  get: <T>(key: string): T | null => {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) return null;

    try {
      const item = JSON.parse(itemStr);
      if (item.expiry && Date.now() > item.expiry) {
        localStorage.removeItem(key);
        return null;
      }
      return item.value as T;
    } catch (e) {
      console.error('Storage parse error:', e);
      return null;
    }
  },

  /**
   * Remove a key
   */
  remove: (key: string) => {
    localStorage.removeItem(key);
  },

  /**
   * Clear all app-specific data
   */
  clear: () => {
    // Only clear keys starting with 'chaturanga_' to avoid affecting other apps on same domain
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith('chaturanga_')) {
        localStorage.removeItem(key);
      }
    });
  },
};
