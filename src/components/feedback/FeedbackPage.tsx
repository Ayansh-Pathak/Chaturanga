import React, { useState } from 'react';
import { useFeedback } from '../../context/FeedbackContext';
import { useAuth } from '../../context/AuthContext';
import { FeedbackPost } from '../../types/chess';
import { 
  MessageSquare, 
  ThumbsUp, 
  PlusCircle, 
  Send,
  Megaphone,
  ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const FeedbackPage: React.FC = () => {
  const { feedbackPosts, announcements, isAdmin, createFeedback, toggleUpvote, addComment, postAnnouncement } = useFeedback();
  const { user } = useAuth();

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeTab, setActiveTab] = useState<'discussion' | 'announcements'>('discussion');
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [showAnnouncementModal, setShowAnnouncementModal] = useState(false);
  const [expandedPostId, setExpandedPostId] = useState<string | null>(feedbackPosts[0]?.id || null);
  const [commentInputs, setCommentInputs] = useState<Record<string, string>>({});

  // Submission Form
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState<FeedbackPost['category']>('Features');

  // Announcement Form
  const [annSubject, setAnnSubject] = useState('');
  const [annBody, setAnnBody] = useState('');

  const categories = ['All', 'Features', 'Tournaments', 'Bug Report', 'Chess Rules', 'General'];

  const filteredPosts = feedbackPosts.filter((post) => {
    if (selectedCategory === 'All') return true;
    return post.category === selectedCategory;
  });

  const handleSubmitFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    createFeedback(title.trim(), content.trim(), category);
    setShowSubmitModal(false);
    setTitle('');
    setContent('');

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch {
      // no-op
    }
  };

  const handlePostComment = (postId: string, e: React.FormEvent) => {
    e.preventDefault();
    const text = commentInputs[postId];
    if (!text || !text.trim()) return;

    if (text.trim() === '/Announcement') {
      if (isAdmin) {
        setShowAnnouncementModal(true);
        setCommentInputs((prev) => ({ ...prev, [postId]: '' }));
      } else {
        addComment(postId, 'Error: You do not have permission to make announcements.');
        setCommentInputs((prev) => ({ ...prev, [postId]: '' }));
      }
      return;
    }

    addComment(postId, text);
    setCommentInputs((prev) => ({ ...prev, [postId]: '' }));
  };

  const handleSubmitAnnouncement = (e: React.FormEvent) => {
    e.preventDefault();
    if (!annSubject.trim() || !annBody.trim()) return;

    postAnnouncement(annSubject.trim(), annBody.trim());
    setShowAnnouncementModal(false);
    setAnnSubject('');
    setAnnBody('');
    setActiveTab('announcements');

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {}
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-6 rounded-3xl bg-gradient-to-r from-[#0c1427] via-[#101b33] to-[#1f0f1e] border border-blue-500/30 shadow-[0_10px_35px_rgba(37,99,235,0.15)]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <MessageSquare className="text-blue-400" size={26} />
            <h1 className="text-2xl sm:text-3xl font-black text-white font-cinzel">
              Community Hub
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
            Discuss rules, suggest features, and check the latest grand arena announcements.
          </p>
        </div>

        <button
          onClick={() => setShowSubmitModal(true)}
          className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-500 hover:to-red-500 text-white font-black text-xs sm:text-sm shadow-xl shadow-blue-600/25 transition-all active:scale-95 border border-blue-400/30"
        >
          <PlusCircle size={18} />
          <span>Post Feedback</span>
        </button>
      </div>

      {/* Primary Navigation Tabs */}
      <div className="flex items-center gap-4 border-b border-slate-800">
        <button
          onClick={() => setActiveTab('discussion')}
          className={`pb-3 px-2 text-sm font-black transition-all flex items-center gap-2 ${
            activeTab === 'discussion'
              ? 'text-blue-400 border-b-2 border-blue-500'
              : 'text-slate-500 hover:text-slate-300'
          }`}
        >
          <MessageSquare size={16} />
          Discussion
        </button>
        <button
          onClick={() => setActiveTab('announcements')}
          className={`pb-3 px-2 text-sm font-black transition-all flex items-center gap-2 ${
            activeTab === 'announcements'
              ? 'text-red-400 border-b-2 border-red-500'
              : 'text-slate-500 hover:text-slate-300'
          }`}
        >
          <Megaphone size={16} />
          Announcements
          {announcements.length > 0 && (
            <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">
              {announcements.length}
            </span>
          )}
        </button>
      </div>

      {activeTab === 'discussion' ? (
        <>
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-blue-600 to-red-600 text-white shadow-md font-extrabold'
                    : 'bg-[#090e1c] text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Main Feedback List */}
          <div className="space-y-4">
            {filteredPosts.map((post) => {
              const isUpvoted = user ? post.upvotedBy.includes(user.id) : false;
              const isExpanded = expandedPostId === post.id;

              const getStatusBadge = (status: FeedbackPost['status']) => {
                switch (status) {
                  case 'Implemented': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40';
                  case 'Planned': return 'bg-blue-500/20 text-blue-300 border-blue-500/40';
                  case 'In Progress': return 'bg-red-500/20 text-red-300 border-red-500/40';
                  default: return 'bg-slate-700/40 text-slate-300 border-slate-600/40';
                }
              };

              return (
                <div key={post.id} className="p-5 sm:p-6 rounded-3xl bg-gradient-to-b from-[#0c1427] to-[#120e1e] border border-blue-500/30 shadow-xl space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <button onClick={() => toggleUpvote(post.id)} className={`flex flex-col items-center justify-center w-12 py-2 rounded-2xl border transition-all ${isUpvoted ? 'bg-blue-500/20 border-blue-500/60 text-blue-400' : 'bg-[#101b33] border-slate-700/80 text-slate-400'}`}>
                        <ThumbsUp size={16} fill={isUpvoted ? '#3b82f6' : 'none'} />
                        <span className="text-xs font-black mt-1 font-mono">{post.votes}</span>
                      </button>
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-slate-800 text-blue-300 border border-blue-500/30 uppercase">{post.category}</span>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase border ${getStatusBadge(post.status)}`}>{post.status}</span>
                        </div>
                        <h3 className="text-base sm:text-lg font-black text-white font-cinzel leading-snug">{post.title}</h3>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-slate-400 whitespace-nowrap">
                      <img src={post.authorAvatar} alt={post.authorName} className="w-6 h-6 rounded-full object-cover ring-1 ring-blue-400/40" />
                      <span className="font-semibold text-slate-300 hidden sm:inline">{post.authorName}</span>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-15">{post.content}</p>
                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between pl-15">
                    <button onClick={() => setExpandedPostId(isExpanded ? null : post.id)} className="flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors">
                      <MessageSquare size={14} />
                      <span>{post.comments.length} Comments</span>
                    </button>
                    <span className="text-[10px] text-slate-500">Posted {post.createdAt}</span>
                  </div>
                  {isExpanded && (
                    <div className="pl-4 sm:pl-15 pt-3 space-y-3">
                      <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                        {post.comments.map((comment) => (
                          <div key={comment.id} className="p-3 rounded-2xl bg-[#090e1c] border border-slate-800 space-y-1">
                            <div className="flex items-center justify-between text-[11px]">
                              <div className="flex items-center gap-2">
                                <img src={comment.authorAvatar} alt={comment.authorName} className="w-5 h-5 rounded-full object-cover ring-1 ring-blue-500/30" />
                                <span className="font-bold text-blue-300">{comment.authorName}</span>
                              </div>
                              <span className="text-[10px] text-slate-500">{comment.createdAt}</span>
                            </div>
                            <p className="text-xs text-slate-200 pl-7">{comment.text}</p>
                          </div>
                        ))}
                      </div>
                      <form onSubmit={(e) => handlePostComment(post.id, e)} className="flex gap-2 pt-2">
                        <input
                          type="text"
                          value={commentInputs[post.id] || ''}
                          onChange={(e) => setCommentInputs({ ...commentInputs, [post.id]: e.target.value })}
                          placeholder={isAdmin ? "Type /Announcement to broadcast..." : "Write a comment..."}
                          className="flex-1 px-3.5 py-2 rounded-xl bg-[#090e1c] border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-400"
                        />
                        <button type="submit" className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-red-600 text-white font-bold text-xs flex items-center gap-1">
                          <Send size={13} /> Send
                        </button>
                      </form>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </>
      ) : (
        /* Announcements View */
        <div className="space-y-6">
          {announcements.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center space-y-3">
              <Megaphone size={48} className="text-slate-700" />
              <p className="text-slate-500 font-bold">No arena announcements yet.</p>
            </div>
          ) : (
            announcements.map((ann) => (
              <div key={ann.id} className="relative p-6 rounded-3xl bg-gradient-to-br from-[#1e0f1e] to-[#0c1427] border border-red-500/30 shadow-2xl overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Megaphone size={80} className="text-red-500" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-red-500/20 text-red-400">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-white uppercase tracking-wider">{ann.subject || 'Official Announcement'}</h4>
                    <p className="text-[10px] text-slate-400 font-bold uppercase">From the Arena Administrator</p>
                  </div>
                </div>
                <p className="text-base text-slate-100 leading-relaxed font-medium">
                  {ann.text}
                </p>
                <div className="mt-6 pt-4 border-t border-red-500/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src={ann.authorAvatar} alt={ann.authorName} className="w-6 h-6 rounded-full border border-red-500/50" />
                    <span className="text-[11px] font-bold text-red-300">{ann.authorName}</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">
                    {ann.createdAt?.toDate?.() ? ann.createdAt.toDate().toLocaleString() : 'Just now'}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* Announcement Modal */}
      {showAnnouncementModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
          <div className="relative w-full max-w-xl bg-gradient-to-b from-[#1e0f1e] to-[#0c1427] border border-red-500/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(239,68,68,0.3)]">
            <h2 className="text-xl font-black text-white font-cinzel mb-4 flex items-center gap-2">
              <Megaphone className="text-red-400" size={22} />
              Broadcast Arena Announcement
            </h2>
            <form onSubmit={handleSubmitAnnouncement} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Subject</label>
                <input
                  type="text"
                  value={annSubject}
                  onChange={(e) => setAnnSubject(e.target.value)}
                  placeholder="Announcement Subject..."
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0a0f1d] border border-slate-700 text-xs text-white focus:outline-none focus:border-red-400"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Body Content</label>
                <textarea
                  value={annBody}
                  onChange={(e) => setAnnBody(e.target.value)}
                  placeholder="What will be written in the body of the announcement?"
                  required
                  rows={6}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0a0f1d] border border-slate-700 text-xs text-white focus:outline-none focus:border-red-400"
                />
              </div>
              <div className="flex items-center gap-2 pt-2">
                <button type="button" onClick={() => setShowAnnouncementModal(false)} className="flex-1 py-2.5 rounded-xl bg-slate-800 text-slate-300 font-bold text-xs">Cancel</button>
                <button type="submit" className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-blue-600 text-white font-black text-xs">Broadcast</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Post Feedback Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-gradient-to-b from-[#0e172a] to-[#160d24] border border-blue-500/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(59,130,246,0.3)]">
            <h2 className="text-xl font-black text-white font-cinzel mb-4 flex items-center gap-2">
              <MessageSquare className="text-blue-400" size={22} />
              Community Discussion
            </h2>
            <form onSubmit={handleSubmitFeedback} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Category</label>
                <select value={category} onChange={(e) => setCategory(e.target.value as FeedbackPost['category'])} className="w-full px-3.5 py-2.5 rounded-xl bg-[#0a0f1d] border border-slate-700 text-xs text-white focus:outline-none focus:border-blue-400">
                  <option value="Features">Features & Customization</option>
                  <option value="Tournaments">Tournament Formats</option>
                  <option value="Chess Rules">FIDE Rules & AI</option>
                  <option value="Bug Report">Bug Report</option>
                  <option value="General">General</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Topic summary..." required className="w-full px-3.5 py-2.5 rounded-xl bg-[#0a0f1d] border border-slate-700 text-xs text-white focus:outline-none focus:border-blue-400" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Content</label>
                <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Your thoughts..." required rows={4} className="w-full px-3.5 py-2.5 rounded-xl bg-[#0a0f1d] border border-slate-700 text-xs text-white focus:outline-none focus:border-blue-400" />
              </div>
              <div className="flex items-center gap-2 pt-2">
                <button type="button" onClick={() => setShowSubmitModal(false)} className="flex-1 py-2.5 rounded-xl bg-slate-800 text-slate-300 font-bold text-xs">Cancel</button>
                <button type="submit" className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-red-600 text-white font-black text-xs">Post</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
