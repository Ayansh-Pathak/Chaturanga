import React, { createContext, useContext, useState, useEffect } from 'react';
import { FeedbackPost, FeedbackComment } from '../types/chess';
import { useAuth } from './AuthContext';

interface FeedbackContextType {
  feedbackPosts: FeedbackPost[];
  createFeedback: (title: string, content: string, category: FeedbackPost['category']) => void;
  toggleUpvote: (postId: string) => void;
  addComment: (postId: string, text: string) => void;
}

const initialFeedback: FeedbackPost[] = [];

const FeedbackContext = createContext<FeedbackContextType | undefined>(undefined);

export const FeedbackProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const [feedbackPosts, setFeedbackPosts] = useState<FeedbackPost[]>(() => {
    const saved = localStorage.getItem('chaturanga_feedback');
    return saved ? JSON.parse(saved) : initialFeedback;
  });

  useEffect(() => {
    localStorage.setItem('chaturanga_feedback', JSON.stringify(feedbackPosts));
  }, [feedbackPosts]);

  const createFeedback = (title: string, content: string, category: FeedbackPost['category']) => {
    const newPost: FeedbackPost = {
      id: `fb_${Date.now()}`,
      authorId: user ? user.id : 'guest',
      authorName: user ? user.username : 'Guest Player',
      authorAvatar: user ? user.avatar : 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
      category,
      title,
      content,
      votes: 1,
      upvotedBy: user ? [user.id] : ['guest'],
      createdAt: 'Just now',
      status: 'Under Review',
      comments: []
    };

    setFeedbackPosts((prev) => [newPost, ...prev]);
  };

  const toggleUpvote = (postId: string) => {
    const currentUserId = user ? user.id : 'guest';
    setFeedbackPosts((prev) =>
      prev.map((p) => {
        if (p.id === postId) {
          const hasVoted = p.upvotedBy.includes(currentUserId);
          return {
            ...p,
            votes: hasVoted ? p.votes - 1 : p.votes + 1,
            upvotedBy: hasVoted
              ? p.upvotedBy.filter((id) => id !== currentUserId)
              : [...p.upvotedBy, currentUserId]
          };
        }
        return p;
      })
    );
  };

  const addComment = (postId: string, text: string) => {
    if (!text.trim()) return;
    const newComment: FeedbackComment = {
      id: `c_${Date.now()}`,
      authorId: user ? user.id : 'guest',
      authorName: user ? user.username : 'Guest Player',
      authorAvatar: user ? user.avatar : 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
      text: text.trim(),
      createdAt: 'Just now'
    };

    setFeedbackPosts((prev) =>
      prev.map((p) => {
        if (p.id === postId) {
          return {
            ...p,
            comments: [...p.comments, newComment]
          };
        }
        return p;
      })
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedbackPosts,
        createFeedback,
        toggleUpvote,
        addComment
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
