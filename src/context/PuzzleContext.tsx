import React, { createContext, useContext, useState, useEffect } from 'react';
import { PuzzleData } from '../types/chess';
import { db, logger } from './arena-init';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  limit,
  orderBy,
  setDoc,
  writeBatch
} from 'firebase/firestore';
import { PUZZLES_DATABASE } from '../data/puzzleDatabase';

interface PuzzleContextType {
  getPuzzle: (id: number) => Promise<PuzzleData | null>;
  getDailyPuzzle: () => Promise<PuzzleData | null>;
  getRandomPuzzle: (minRating?: number, maxRating?: number) => Promise<PuzzleData | null>;
  syncPuzzlesToFirestore: () => Promise<void>; // Utility for migration
}

const PuzzleContext = createContext<PuzzleContextType | undefined>(undefined);

export const PuzzleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const getPuzzle = async (id: number): Promise<PuzzleData | null> => {
    const docRef = doc(db, 'puzzles', id.toString());
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data() as PuzzleData;
    }
    return null;
  };

  const getDailyPuzzle = async (): Promise<PuzzleData | null> => {
    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
    const docRef = doc(db, 'daily_puzzles', today);

    // Deterministic ID for the day as fallback
    const dateObj = new Date();
    const fallbackId = (dateObj.getUTCDate() + (dateObj.getUTCMonth() + 1) * 31) % 5000 + 1;

    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const dailyData = docSnap.data();
        return getPuzzle(dailyData.puzzleId);
      } else {
        // Attempt to set it for everyone else
        try {
          await setDoc(docRef, { puzzleId: fallbackId, date: today });
        } catch (e) {
          // If write fails (e.g. not logged in), just return the fallback
          logger.warn("Could not sync daily puzzle to Firestore, using deterministic fallback.");
        }
        return getPuzzle(fallbackId);
      }
    } catch (err) {
      logger.error("Error fetching daily puzzle from Firestore:", err);
      return getPuzzle(fallbackId);
    }
  };

  const getRandomPuzzle = async (minRating = 800, maxRating = 2650): Promise<PuzzleData | null> => {
    // Pick a random ID in range (simple approach for now)
    const randomId = Math.floor(Math.random() * 5120) + 1;
    return getPuzzle(randomId);
  };

  const syncPuzzlesToFirestore = async () => {
    // Split into batches of 500
    for (let i = 0; i < PUZZLES_DATABASE.length; i += 500) {
      const batch = writeBatch(db);
      const chunk = PUZZLES_DATABASE.slice(i, i + 500);
      chunk.forEach(p => {
        const docRef = doc(db, 'puzzles', p.id.toString());
        batch.set(docRef, p);
      });
      await batch.commit();
    }
  };

  return (
    <PuzzleContext.Provider value={{ getPuzzle, getDailyPuzzle, getRandomPuzzle, syncPuzzlesToFirestore }}>
      {children}
    </PuzzleContext.Provider>
  );
};

export const usePuzzles = () => {
  const context = useContext(PuzzleContext);
  if (!context) throw new Error('usePuzzles must be used within a PuzzleProvider');
  return context;
};
