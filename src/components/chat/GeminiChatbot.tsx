import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChessPiece } from '../chess/ChessPiece';
import { Send, Bot, Sparkles, X, Minimize2, Maximize2, Trash2, HelpCircle, ChevronRight, Compass } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface ChatMessage {
  id: string;
  sender: 'user' | 'gemini';
  text: string;
  timestamp: string;
  isContextual?: boolean;
}

interface GeminiChatbotProps {
  currentFen?: string;
  lastMoves?: string[];
  gameMode?: string;
  botElo?: number;
  puzzleTheme?: string;
  puzzleRating?: number;
  tournamentInfo?: string;
  whitePlayer?: string;
  blackPlayer?: string;
}

export const GeminiChatbot: React.FC<GeminiChatbotProps> = ({
  currentFen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
  lastMoves = [],
  gameMode = 'Practice',
  botElo,
  puzzleTheme,
  puzzleRating,
  tournamentInfo,
  whitePlayer,
  blackPlayer,
}) => {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome_msg',
      sender: 'gemini',
      text: `Namaste! ♟️ I am your **Chaturanga Grandmaster AI mentor**, powered by **Gemini**.

I am aware of your live chessboard, active tactical puzzles, and match moves. Ask me anything about opening theory, best moves in the current position, elephant bishop tactics, or game reviews!`,
      timestamp: 'Just now',
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputMessage).trim();
    if (!query || isLoading) return;

    const userMsg: ChatMessage = {
      id: `msg_${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/gemini/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          history: messages.slice(-8).map((m) => ({ sender: m.sender, text: m.text })),
          context: {
            currentFen,
            lastMoves,
            gameMode,
            botElo,
            userRating: user?.stats.rapid || 1650,
            puzzleTheme,
            puzzleRating,
            tournamentInfo,
            whitePlayer,
            blackPlayer,
          },
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const botMsg: ChatMessage = {
        id: `gemini_${Date.now()}`,
        sender: 'gemini',
        text: data.reply || 'I evaluated the position. Keep your king safe and control central outposts.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err: any) {
      void('Chat error:', err);
      const errorMsg: ChatMessage = {
        id: `gemini_err_${Date.now()}`,
        sender: 'gemini',
        text: `In this position (\`${currentFen.split(' ')[0]}\`), maintain central control with pawns and activate your pieces. Keep an eye out for tactical skewers and royal pins!`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const quickPrompts = [
    'Analyze current board position',
    'What is the best tactical move here?',
    'Explain the Elephant Bishop strategies',
    'How do I defend against Queen forks?',
    'Explain FIDE en passant & 50-move rule',
  ];

  return (
    <motion.div drag dragMomentum={false} className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Floating Circle Button: White Pawn on Black Background with Gold Ring */}
      {!isOpen && (
        <button
          id="gemini-chatbot-trigger-btn"
            onClick={() => setIsOpen(true)}
            className="group relative w-14 h-14 rounded-full bg-black border-2 border-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.45)] hover:shadow-[0_0_35px_rgba(245,158,11,0.7)] flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer"
            title="Chat with Gemini Chess Coach (Content-Aware)"
          >
            {/* White Pawn inside Black Circle */}
            <div className="w-9 h-9 flex items-center justify-center">
              <ChessPiece type="p" color="w" size="100%" />
            </div>

            {/* Pulsing AI Badge */}
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-tr from-amber-500 to-yellow-300 rounded-full border-2 border-black flex items-center justify-center animate-pulse">
              <Sparkles size={8} className="text-black font-black" />
            </span>

            {/* Tooltip on hover */}
            <span className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-[#141926] text-amber-300 text-xs font-bold whitespace-nowrap border border-amber-500/30 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Gemini Chess Mentor
            </span>
          </button>
        )}

      {/* Floating / Expanded Chat Window */}
      {isOpen && (
        <div
          className={`bg-[#10141e] border-2 border-amber-500/60 rounded-2xl shadow-[0_15px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl flex flex-col overflow-hidden transition-all duration-300 ${
            isExpanded ? 'w-[92vw] sm:w-[620px] h-[82vh]' : 'w-[92vw] sm:w-[420px] h-[560px]'
          }`}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#171c2b] via-[#1a2133] to-[#121622] px-4 py-3 border-b border-slate-700/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-full bg-black border border-amber-400/80 flex items-center justify-center p-1 shadow-inner">
                <ChessPiece type="p" color="w" size="100%" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full border border-black" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm font-bold text-slate-100 font-cinzel tracking-wide">
                    Chaturanga Mentor
                  </h3>
                  <span className="px-1.5 py-0.5 text-[9px] font-extrabold uppercase rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
                    Gemini AI
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 flex items-center gap-1">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Content-aware chess reasoning
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 text-slate-400">
              <button
                onClick={() => setMessages([{ id: 'reset', sender: 'gemini', text: 'Chat history cleared. How can I guide your chess strategy today?', timestamp: 'Just now' }])}
                title="Clear chat"
                className="p-1.5 hover:text-red-400 hover:bg-slate-800 rounded-lg transition-colors"
              >
                <Trash2 size={15} />
              </button>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                title={isExpanded ? 'Collapse' : 'Expand'}
                className="p-1.5 hover:text-amber-400 hover:bg-slate-800 rounded-lg transition-colors"
              >
                {isExpanded ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Close chat"
                className="p-1.5 hover:text-slate-200 hover:bg-slate-800 rounded-lg transition-colors"
              >
                <X size={17} />
              </button>
            </div>
          </div>

          {/* Real-time Content Awareness Bar */}
          <div className="bg-[#141926] px-3 py-1.5 border-b border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
            <div className="flex items-center gap-1.5 truncate max-w-[70%]">
              <Compass size={12} className="text-amber-400 shrink-0" />
              <span className="truncate">
                Mode: <strong className="text-slate-200">{gameMode}</strong>
                {botElo && ` (Bot: ${botElo} Elo)`}
                {puzzleTheme && ` (Theme: ${puzzleTheme})`}
              </span>
            </div>
            <span className="text-[10px] text-amber-400/80 bg-amber-950/40 px-1.5 py-0.5 rounded border border-amber-500/20 font-mono">
              FEN Synced
            </span>
          </div>

          {/* Chat Messages List */}
          <div className="flex-1 p-3.5 overflow-y-auto space-y-3 custom-scrollbar">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'gemini' && (
                  <div className="w-7 h-7 rounded-full bg-black border border-amber-400/60 flex items-center justify-center shrink-0 mt-0.5">
                    <ChessPiece type="p" color="w" size="18px" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-amber-600 text-white rounded-tr-none shadow-md'
                      : 'bg-[#1b2234] border border-slate-700/80 text-slate-200 rounded-tl-none shadow-sm'
                  }`}
                >
                  <div className="whitespace-pre-wrap font-sans">
                    {msg.text}
                  </div>
                  <div
                    className={`text-[9px] mt-1.5 ${
                      msg.sender === 'user' ? 'text-amber-200/80 text-right' : 'text-slate-400 text-left'
                    }`}
                  >
                    {msg.timestamp}
                  </div>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-2.5 items-center text-slate-400 text-xs">
                <div className="w-7 h-7 rounded-full bg-black border border-amber-400/60 flex items-center justify-center shrink-0">
                  <ChessPiece type="p" color="w" size="18px" />
                </div>
                <div className="bg-[#1b2234] border border-slate-700/80 rounded-2xl rounded-tl-none px-3.5 py-2 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-bounce" />
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-bounce [animation-delay:0.2s]" />
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-bounce [animation-delay:0.4s]" />
                  <span className="text-[11px] text-slate-300 ml-1">Analyzing board & classical tactics...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompt Chips */}
          <div className="px-3 py-2 bg-[#121622] border-t border-slate-800/80 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {quickPrompts.map((prompt, i) => (
              <button
                key={i}
                onClick={() => handleSendMessage(prompt)}
                className="shrink-0 px-2.5 py-1 text-[11px] font-medium bg-[#1c2336] hover:bg-amber-500/20 text-slate-300 hover:text-amber-300 border border-slate-700 hover:border-amber-500/40 rounded-full transition-all flex items-center gap-1 cursor-pointer"
              >
                <span>{prompt}</span>
                <ChevronRight size={11} className="opacity-60" />
              </button>
            ))}
          </div>

          {/* Chat Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-[#171c2b] border-t border-slate-700/80 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask Gemini about this game, moves, or tactics..."
              className="flex-1 bg-[#10141f] border border-slate-700 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-slate-100 text-xs px-3.5 py-2.5 rounded-xl outline-none placeholder:text-slate-500 transition-all"
            />
            <button
              type="submit"
              disabled={isLoading || !inputMessage.trim()}
              className="p-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-md active:scale-95"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </motion.div>
  );
};
