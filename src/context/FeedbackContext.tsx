import React, { createContext, useContext, useState, useEffect } from 'react';
import { FeedbackPost, FeedbackComment } from '../types/chess';
import { useAuth } from './AuthContext';
import { db } from '@/src/utils/firebase-service';
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  onSnapshot,
  query,
  orderBy,
  arrayUnion,
  arrayRemove,
  setDoc,
  getDoc,
  Timestamp
} from 'firebase/firestore';

export interface Announcement {
  id: string;
  subject: string;
  text: string;
  authorName: string;
  authorAvatar: string;
  createdAt: any;
}

interface FeedbackContextType {
  feedbackPosts: FeedbackPost[];
  announcements: Announcement[];
  isAdmin: boolean;
  createFeedback: (title: string, content: string, category: FeedbackPost['category']) => void;
  toggleUpvote: (postId: string) => void;
  addComment: (postId: string, text: string) => void;
  postAnnouncement: (subject: string, text: string) => void;
  claimAdmin: (password: string) => Promise<boolean>;
}

const FeedbackContext = createContext<FeedbackContextType | undefined>(undefined);

export const FeedbackProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const [feedbackPosts, setFeedbackPosts] = useState<FeedbackPost[]>([]);
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);

  // Sync Feedback Posts
  useEffect(() => {
    const q = query(collection(db, 'feedback'), orderBy('votes', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const posts = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as FeedbackPost[];
      setFeedbackPosts(posts);
    });
    return unsubscribe;
  }, []);

  // Sync Announcements
  useEffect(() => {
    const q = query(collection(db, 'announcements'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Announcement[];
      setAnnouncements(data);
    });
    return unsubscribe;
  }, []);

  // Sync Admin Status
  useEffect(() => {
    if (!user) {
      setIsAdmin(false);
      return;
    }
    const checkAdmin = async () => {
      const adminDoc = await getDoc(doc(db, 'config', 'admin'));
      if (adminDoc.exists() && adminDoc.data().uid === user.id) {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    };
    checkAdmin();
  }, [user]);

  const claimAdmin = async (password: string): Promise<boolean> => {
    if (!user || password !== 'GhasdoodhooghasdoodhooILoveghasdoodhoo') return false;

    const adminDocRef = doc(db, 'config', 'admin');
    const adminDoc = await getDoc(adminDocRef);

    if (!adminDoc.exists()) {
      await setDoc(adminDocRef, { uid: user.id, claimedAt: Timestamp.now() });
      setIsAdmin(true);
      return true;
    }
    return false;
  };

  const createFeedback = async (title: string, content: string, category: FeedbackPost['category']) => {
    if (!user) return;
    const newPost = {
      authorId: user.id,
      authorName: user.username,
      authorAvatar: user.avatar,
      category,
      title,
      content,
      votes: 1,
      upvotedBy: [user.id],
      createdAt: new Date().toLocaleDateString(),
      status: 'Under Review',
      comments: []
    };
    await addDoc(collection(db, 'feedback'), newPost);
  };

  const toggleUpvote = async (postId: string) => {
    if (!user) return;
    const postRef = doc(db, 'feedback', postId);
    const post = feedbackPosts.find(p => p.id === postId);
    if (!post) return;

    const hasVoted = post.upvotedBy.includes(user.id);
    await updateDoc(postRef, {
      votes: hasVoted ? post.votes - 1 : post.votes + 1,
      upvotedBy: hasVoted ? arrayRemove(user.id) : arrayUnion(user.id)
    });
  };

  const addComment = async (postId: string, text: string) => {
    if (!user || !text.trim()) return;

    // Admin Command Handling
    if (text === '/password=GhasdoodhooghasdoodhooILoveghasdoodhoo') {
      await claimAdmin('GhasdoodhooghasdoodhooILoveghasdoodhoo');
      return;
    }

    const newComment: FeedbackComment = {
      id: `c_${Date.now()}`,
      authorId: user.id,
      authorName: user.username,
      authorAvatar: user.avatar,
      text: text.trim(),
      createdAt: 'Just now'
    };

    const postRef = doc(db, 'feedback', postId);
    await updateDoc(postRef, {
      comments: arrayUnion(newComment)
    });
  };

  const postAnnouncement = async (subject: string, text: string) => {
    if (!isAdmin || !user) return;
    await addDoc(collection(db, 'announcements'), {
      subject,
      text,
      authorName: user.username,
      authorAvatar: user.avatar,
      createdAt: Timestamp.now()
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedbackPosts,
        announcements,
        isAdmin,
        createFeedback,
        toggleUpvote,
        addComment,
        postAnnouncement,
        claimAdmin
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export const useFeedback = () => {
  const ctx = useContext(FeedbackContext);
  if (!ctx) throw new Error('useFeedback must be used within a FeedbackProvider');
  return ctx;
};
