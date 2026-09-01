import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase, connectDatabaseEmulator } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAuRCFW0cV8h-QRwDnr98cGidckrtj6Be8",
  authDomain: "chaturanga-by-ayansh-pathak.firebaseapp.com",
  projectId: "chaturanga-by-ayansh-pathak",
  storageBucket: "chaturanga-by-ayansh-pathak.firebasestorage.app",
  messagingSenderId: "1057979643450",
  appId: "1:1057979643450:web:d25d19d69186e241e0e703",
  measurementId: "G-VXE6Z8S5PS",
  databaseURL: "https://chaturanga-by-ayansh-pathak-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);
export const auth = getAuth(app);
export const rtdb = getDatabase(app);
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

// Connect to emulators in development with additional safety
if ((import.meta as any).env?.DEV && typeof window !== 'undefined') {
  // Only connect if not already connected (prevents error on HMR)
  if (!(auth as any)._emulatorConnected) {
    try {
      connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true });
      connectFirestoreEmulator(db, '127.0.0.1', 8080);
      connectDatabaseEmulator(rtdb, '127.0.0.1', 9000);
      (auth as any)._emulatorConnected = true;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn("Could not connect to Firebase Emulators. Using production instead.", e);
    }
  }
}

/**
 * Arena Grandmaster Logger
 */
export const logger = {
  log: (message: string, ...args: any[]) => {
    if ((import.meta as any).env?.DEV) {
      // eslint-disable-next-line no-console
      console.log(`[Arena] ${message}`, ...args);
    }
  },
  warn: (message: string, ...args: any[]) => {
    if ((import.meta as any).env?.DEV) {
      // eslint-disable-next-line no-console
      console.warn(`[Arena Warning] ${message}`, ...args);
    }
  },
  error: (message: string, ...args: any[]) => {
    // eslint-disable-next-line no-console
    console.error(`[Arena Error] ${message}`, ...args);
  }
};

export default app;
