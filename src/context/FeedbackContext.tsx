import React, { createContext, useContext, useState, useEffect } from 'react';
import { FeedbackPost, FeedbackComment } from '../types/chess';
import { useAuth } from './AuthContext';

interface FeedbackContextType {
  feedbackPosts: FeedbackPost[];
  createFeedback: (title: string, content: string, category: FeedbackPost['category']) => void;
  toggleUpvote: (postId: string) => void;
  addComment: (postId: string, text: string) => void;
}

const initialFeedback: FeedbackPost[] = [
  {
    id: 'fb_1',
    authorId: 'user_master_1',
    authorName: 'ArjunaWarrior',
    authorAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
    category: 'Features',
    title: 'Support for Berserk mode in Arena tournaments and custom Elephant piece themes',
    content: 'The custom Elephant head Bishop and Royal Crown King look incredible! Could we also get special sound themes for the Elephant moves in blitz games?',
    votes: 24,
    upvotedBy: ['user_master_1', 'bot_1', 'bot_2'],
    createdAt: 'Aug 24, 2026',
    status: 'Implemented',
    comments: [
      {
        id: 'c1',
        authorId: 'bot_1',
        authorName: 'Grandmaster Vishy',
        authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
        text: 'The elephant bishop illustration captures the true essence of ancient Indian Chaturanga warfare.',
        createdAt: 'Aug 24, 18:20'
      },
      {
        id: 'c2',
        authorId: 'bot_2',
        authorName: 'Sage Chanakya',
        authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
        text: 'Agreed! The crown king is visually distinct and fully FIDE compliant.',
        createdAt: 'Aug 25, 08:45'
      }
    ]
  },
  {
    id: 'fb_2',
    authorId: 'bot_3',
    authorName: 'Grand Tactician',
    authorAvatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80',
    category: 'Tournaments',
    title: 'Double Round Robin Swiss tiebreak calculations using Sonneborn-Berger',
    content: 'Requesting to show Buchholz cut-1 and Sonneborn-Berger tiebreaks on the live standings table for Swiss and Round Robin events.',
    votes: 18,
    upvotedBy: ['bot_3', 'user_master_1'],
    createdAt: 'Aug 23, 2026',
    status: 'Planned',
    comments: [
      {
        id: 'c3',
        authorId: 'user_master_1',
        authorName: 'ArjunaWarrior',
        authorAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
        text: 'Very important for 5-round Swiss tournaments with tight scores.',
        createdAt: 'Aug 23, 21:10'
      }
    ]
  },
  {
    id: 'fb_3',
    authorId: 'bot_6',
    authorName: 'Drona Strategist',
    authorAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
    category: 'Chess Rules',
    title: 'Verify 50-move rule and threefold repetition claims on FIDE clocks',
    content: 'The engine handles en passant and castling flawlessly. Testing automated draw offering when insufficient material remains on board.',
    votes: 15,
    upvotedBy: ['bot_6'],
    createdAt: 'Aug 22, 2026',
    status: 'Implemented',
    comments: []
  }
];

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
      authorName: user ? user.username : 'ArjunaWarrior',
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
      authorName: user ? user.username : 'ArjunaWarrior',
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
