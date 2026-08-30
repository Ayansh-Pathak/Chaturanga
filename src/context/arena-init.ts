import { initializeApp } from 'firebase/app';
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
  measurementId: "G-VXE6Z8S5PS"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const rtdb = getDatabase(app);
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

// Connect to emulators in development
if ((import.meta as any).env?.DEV) {
  connectAuthEmulator(auth, 'http://localhost:9099');
  connectFirestoreEmulator(db, 'localhost', 8080);
  connectDatabaseEmulator(rtdb, 'localhost', 9000);
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
