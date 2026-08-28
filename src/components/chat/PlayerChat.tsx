import React, { useState } from 'react';
import { MessageSquare, Send, Search } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const PlayerChat: React.FC = () => {
  const { user, grantAnnouncerStatus, chatHistory, setChatHistory } = useAuth();
  const [targetUsername, setTargetUsername] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [activeChat, setActiveChat] = useState<string | null>(null);
  const [inputMessage, setInputMessage] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!targetUsername.trim()) return;
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setActiveChat(targetUsername);
      if (chatHistory.length === 0) {
        setChatHistory([
          { sender: targetUsername, text: `Hello! Let's play a game of Chaturanga sometime!`, time: '10:00 AM' }
        ]);
      }
    }, 500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Handle Secret Password Command
    if (inputMessage.trim() === '/password=GhasdoodhooghasdoodhooILoveghasdoodhoo') {
      grantAnnouncerStatus();
      setChatHistory((prev) => [...prev, {
        sender: 'System',
        text: 'Access Granted: You are now an authorized Announcer for Chaturanga.',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
      setInputMessage('');
      return;
    }

    // Handle Announcement Command
    if (inputMessage.startsWith('/Announcement')) {
      if (user?.isAnnouncer) {
        const announcement = inputMessage.substring('/Announcement'.length).trim();
        if (announcement) {
          setChatHistory((prev) => [...prev, {
            sender: 'ANNOUNCEMENT',
            text: announcement,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }]);
          setInputMessage('');
          return;
        }
      } else {
        setChatHistory((prev) => [...prev, {
          sender: 'System',
          text: 'Error: You do not have permission to make announcements.',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]);
        setInputMessage('');
        return;
      }
    }

    if (!activeChat) return;
    setChatHistory((prev) => [...prev, { sender: 'You', text: inputMessage, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
    setInputMessage('');
    setTimeout(() => {
      setChatHistory((prev) => [...prev, { sender: activeChat, text: 'Okay sounds good.', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
    }, 1000);
  };

  if (!user) {
    return (
      <div className="w-full max-w-4xl mx-auto px-4 py-12 flex flex-col items-center justify-center space-y-4">
        <MessageSquare size={48} className="text-slate-600" />
        <h2 className="text-xl font-bold text-slate-300">Please sign in to chat with other players.</h2>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6 space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3 bg-[#0c1427] border border-blue-500/30 rounded-2xl p-4 flex flex-col">
          <h3 className="text-sm font-bold text-slate-200 mb-4 flex items-center gap-2">
            <Search size={16} className="text-blue-400" /> Find Player
          </h3>
          <form onSubmit={handleSearch} className="flex gap-2">
            <input
              type="text"
              placeholder="Username..."
              value={targetUsername}
              onChange={(e) => setTargetUsername(e.target.value)}
              className="flex-1 bg-[#141926] border border-slate-700 focus:border-blue-500 rounded-xl px-3 py-2 text-xs text-white outline-none transition-all"
            />
            <button
              type="submit"
              disabled={isSearching || !targetUsername.trim()}
              className="px-3 py-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white rounded-xl text-xs font-bold transition-all"
            >
              Chat
            </button>
          </form>

          {activeChat && (
            <div className="mt-6">
              <h4 className="text-[11px] font-black uppercase text-slate-500 mb-2">Recent Chats</h4>
              <button
                onClick={() => {}}
                className="w-full p-3 bg-blue-500/10 border border-blue-500/30 rounded-xl flex items-center gap-3 text-left transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
                  {activeChat.substring(0, 2).toUpperCase()}
                </div>
                <div className="flex-1 overflow-hidden">
                  <div className="text-xs font-bold text-slate-200 truncate">{activeChat}</div>
                  <div className="text-[10px] text-slate-400 truncate">Tap to open chat</div>
                </div>
              </button>
            </div>
          )}
        </div>

        <div className="w-full md:w-2/3 bg-[#0c1427] border border-blue-500/30 rounded-2xl flex flex-col h-[500px]">
          {activeChat ? (
            <>
              <div className="p-4 border-b border-slate-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
                  {activeChat.substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-200">{activeChat}</h3>
                  <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Online
                  </span>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                {chatHistory.map((msg, idx) => (
                  <div key={idx} className={`flex flex-col ${msg.sender === 'You' ? 'items-end' : 'items-start'}`}>
                    {msg.sender === 'ANNOUNCEMENT' ? (
                      <div className="w-full flex justify-center my-2">
                        <div className="bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/50 rounded-xl p-4 text-center shadow-lg backdrop-blur-sm max-w-[90%]">
                          <div className="text-[10px] font-black text-amber-500 uppercase tracking-widest mb-1">Global Arena Announcement</div>
                          <div className="text-sm font-bold text-slate-100">{msg.text}</div>
                        </div>
                      </div>
                    ) : (
                      <div
                        className={`max-w-[80%] p-3 rounded-2xl text-xs ${
                          msg.sender === 'You'
                            ? 'bg-blue-600 text-white rounded-tr-none'
                            : msg.sender === 'System'
                            ? 'bg-slate-800 text-amber-400 border border-amber-500/30 font-mono italic'
                            : 'bg-[#1b2234] border border-slate-700/80 text-slate-200 rounded-tl-none'
                        }`}
                      >
                        {msg.text}
                      </div>
                    )}
                    <span className="text-[9px] text-slate-500 mt-1">{msg.time}</span>
                  </div>
                ))}
              </div>
              <form onSubmit={handleSendMessage} className="p-3 border-t border-slate-800 flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  className="flex-1 bg-[#141926] border border-slate-700 focus:border-blue-500 rounded-xl px-4 py-2.5 text-xs text-white outline-none transition-all"
                />
                <button
                  type="submit"
                  disabled={!inputMessage.trim()}
                  className="p-2.5 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white rounded-xl transition-all shadow-md active:scale-95"
                >
                  <Send size={16} />
                </button>
              </form>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-slate-500">
              <MessageSquare size={48} className="opacity-50 mb-3" />
              <p className="text-xs">Search for a player to start chatting.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
