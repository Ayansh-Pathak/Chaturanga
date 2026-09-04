import React, { useState, useRef, useEffect } from 'react';
import { motion, useDragControls } from 'motion/react';
import { ChessPiece } from '../chess/ChessPiece';
import { Send, Sparkles, X, Minimize2, Maximize2, RotateCcw, Loader2 } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { apiUrl } from '../../utils/apiBase';
import { parseBasicMarkdown } from '../../utils/markdown';
import { logger } from '../../context/arena-init';

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
  const { user, geminiHistory, saveGeminiMessage, clearGeminiHistory } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const dragControls = useDragControls();
  const [isExpanded, setIsExpanded] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showCommands, setShowCommands] = useState(false);
  const [selectedModel, setSelectedModel] = useState('Gemini 3.8 Flash');

  const geminiModels = [
    'Gemini 3.8 Flash',
    'Gemini 3.8 Flash-Lite',
    'Gemini 1.5 Pro',
    'Gemini 1.5 Flash',
    'Gemini 1.0 Pro',
    'Nano Banana 2 – gemini-3.1-flash-image',
    'Nano Banana 2 Lite – gemini-3.1-flash-lite-image',
    'Nano Banana – gemini-2.5-flash-image'
  ];

  const chatbotCommands = [
    { cmd: '/analyze', desc: 'Analyze the current FEN position' },
    { cmd: '/suggest', desc: 'Suggest the next best move' },
    { cmd: '/opening', desc: 'Explain current opening theory' },
    { cmd: '/clear', desc: 'Clear chat history' },
    { cmd: '/model', desc: 'Change Gemini AI model' },
    { cmd: '/help', desc: 'Show all available commands' }
  ];

  const [messages, setMessages] = useState<ChatMessage[]>([]);

  useEffect(() => {
    if (geminiHistory.length > 0) {
      const formatted = geminiHistory.map(h => ({
        id: h.id,
        sender: h.sender,
        text: h.text,
        timestamp: (h.timestamp as any)?.toDate ? (h.timestamp as any).toDate().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Just now'
      }));
      setMessages(formatted);
    } else {
      setMessages([
        {
          id: 'welcome_msg',
          sender: 'gemini',
          text: `Namaste! ♟️ I am your **Chaturanga Grandmaster AI mentor**, powered by **Gemini**.

I am aware of your live chessboard, active tactical puzzles, and match moves. Ask me anything about opening theory, best moves in the current position, elephant bishop tactics, or game reviews!`,
          timestamp: 'Just now',
        },
      ]);
    }
  }, [geminiHistory]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    if (isOpen && !isMinimized) {
      scrollToBottom();
      // Auto-focus input when opened
      timeoutId = setTimeout(() => inputRef.current?.focus(), 100);
    }
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [messages, isOpen, isMinimized]);

  const handleSendMessage = async (textToSend?: string) => {
    const queryStr = (textToSend || inputMessage).trim();
    if (!queryStr || isLoading) return;

    // Handle Commands
    if (queryStr.startsWith('/')) {
      const parts = queryStr.split(' ');
      const command = parts[0].toLowerCase();
      const args = parts.slice(1).join(' ');

      if (command === '/clear') {
        if (user) {
          await clearGeminiHistory();
        } else {
          setMessages([{ id: 'reset', sender: 'gemini', text: 'Chat history cleared. How can I guide your chess strategy today?', timestamp: 'Just now' }]);
        }
        setInputMessage('');
        return;
      }

      if (command === '/help') {
        const helpText = chatbotCommands.map(c => `**${c.cmd}**: ${c.desc}`).join('\n');
        const helpMsg: ChatMessage = {
          id: `help_${Date.now()}`,
          sender: 'gemini',
          text: `Available Commands:\n\n${helpText}`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages(prev => [...prev, helpMsg]);
        setInputMessage('');
        return;
      }

      if (command === '/model') {
        if (!args) {
          const modelList = geminiModels.map(m => `• ${m}`).join('\n');
          const modelMsg: ChatMessage = {
            id: `model_${Date.now()}`,
            sender: 'gemini',
            text: `Current model: **${selectedModel}**\n\nAvailable models:\n${modelList}\n\nUse \`/model <name>\` to switch.`,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          };
          setMessages(prev => [...prev, modelMsg]);
        } else {
          const matchedModel = geminiModels.find(m => m.toLowerCase().includes(args.toLowerCase()));
          if (matchedModel) {
            setSelectedModel(matchedModel);
            const switchMsg: ChatMessage = {
              id: `switch_${Date.now()}`,
              sender: 'gemini',
              text: `Switched to model: **${matchedModel}**`,
              timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            };
            setMessages(prev => [...prev, switchMsg]);
          } else {
            const errMsg: ChatMessage = {
              id: `err_${Date.now()}`,
              sender: 'gemini',
              text: `Model "**${args}**" not found.`,
              timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            };
            setMessages(prev => [...prev, errMsg]);
          }
        }
        setInputMessage('');
        return;
      }

      // Contextual commands continue to the API with specific prompts
      let contextualQuery = queryStr;
      if (command === '/analyze') {
        contextualQuery = `Analyze this FEN position: ${currentFen}. What are the key strategic themes?`;
      } else if (command === '/suggest') {
        contextualQuery = `Suggest the next best move for ${currentFen.split(' ')[1] === 'w' ? 'White' : 'Black'} in this position: ${currentFen}.`;
      } else if (command === '/opening') {
        contextualQuery = `Explain the opening theory for the current board state. PGN moves so far: ${lastMoves.join(', ')}.`;
      }

      // Proceed with the contextual query
      await executeQuery(contextualQuery, queryStr);
      return;
    }

    await executeQuery(queryStr);
  };

  const executeQuery = async (query: string, displayQuery?: string) => {
    const userMsgText = displayQuery || query;
    if (user) {
      saveGeminiMessage({ sender: 'user', text: userMsgText });
    } else {
      const userMsg: ChatMessage = {
        id: `msg_${Date.now()}`,
        sender: 'user',
        text: userMsgText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, userMsg]);
    }

    setInputMessage('');
    setIsLoading(true);

    try {
      const url = apiUrl('/api/gemini/chat');
      if (!url) {
        throw new Error('Static host: API not available');
      }
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          model: selectedModel,
          history: messages.slice(-10).map((m) => ({ sender: m.sender, text: m.text })),
          context: {
            currentFen,
            lastMoves,
            gameMode,
            botElo,
            userRating: user?.stats?.rapid || 1650,
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
      const botReply = data.reply || 'I evaluated the position. Keep your king safe and control central outposts.';

      if (user) {
        saveGeminiMessage({ sender: 'gemini', text: botReply });
      } else {
        const botMsg: ChatMessage = {
          id: `gemini_${Date.now()}`,
          sender: 'gemini',
          text: botReply,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages((prev) => [...prev, botMsg]);
      }
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      logger.error('Chat error:', errorMessage);
      const botReply = `In this position (\`${currentFen.split(' ')[0]}\`), maintain central control with pawns and activate your pieces. Keep an eye out for tactical skewers and royal pins!`;
      if (user) {
        saveGeminiMessage({ sender: 'gemini', text: botReply });
      } else {
        const errorMsg: ChatMessage = {
          id: `gemini_err_${Date.now()}`,
          sender: 'gemini',
          text: botReply,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages((prev) => [...prev, errorMsg]);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const quickPrompts = [
    'Analyze current board position',
    'What is the best tactical move here?',
    'Explain the Elephant Bishop strategies',
    'How do I defend against Queen forks?',
    'Explain FIDE en passant',
  ];

  return (
    <div id="gemini-chatbot-container">
      {!isOpen && (
        <motion.div
          drag={true}
          dragMomentum={false}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 cursor-grab active:cursor-grabbing"
        >
          <button
            id="gemini-chatbot-trigger-btn"
            onClick={() => setIsOpen(true)}
            className="group relative w-14 h-14 rounded-full bg-black border-2 border-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.45)] hover:shadow-[0_0_35px_rgba(245,158,11,0.7)] flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer"
            title="Drag anywhere or click to chat with Gemini Chess Mentor"
          >
            <div className="w-9 h-9 flex items-center justify-center">
              <ChessPiece type="p" color="w" size="100%" />
            </div>
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-tr from-amber-500 to-yellow-300 rounded-full border-2 border-black flex items-center justify-center animate-pulse">
              <Sparkles size={8} className="text-black font-black" />
            </span>
            <span className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-[#141926] text-amber-300 text-xs font-bold whitespace-nowrap border border-amber-500/30 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Gemini Mentor (Draggable)
            </span>
          </button>
        </motion.div>
      )}

      {isOpen && (
        <motion.div
          drag={isExpanded ? false : true}
          dragListener={false}
          dragControls={dragControls}
          dragMomentum={false}
          className={
            "fixed z-50 bg-[#10141e] border-2 border-amber-500/60 rounded-2xl shadow-[0_15px_50px_rgba(0,0,0,0.85)] backdrop-blur-xl flex flex-col overflow-hidden transition-all duration-200 " +
            (isExpanded ? "w-[92vw] sm:w-[620px] h-[82vh]" : isMinimized ? "w-72 h-[60px]" : "w-[92vw] sm:w-[420px] h-[560px]")
          }
          style={isExpanded ? { top: '50%', left: '50%', transform: 'translate(-50%, -50%)', touchAction: 'none' } : { bottom: '24px', right: '24px', touchAction: 'none' }}
        >
          {/* Header (Draggable Handle) */}
          <div 
            onPointerDown={(e: React.PointerEvent<HTMLDivElement>) => {
                if (!isExpanded) dragControls.start(e);
              }}
            className="bg-gradient-to-r from-[#171c2b] via-[#1a2133] to-[#121622] px-4 py-3 border-b border-slate-700/80 flex items-center justify-between cursor-grab active:cursor-grabbing select-none"
          >
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-full bg-black border border-amber-400/80 flex items-center justify-center p-1 shadow-inner">
                <ChessPiece type="p" color="w" size="100%" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full border border-black" />
              </div>
              {!isMinimized && (
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
                    Model: {selectedModel} (Updated Weekly)
                  </p>
                </div>
              )}
            </div>

            <div className="flex items-center gap-1 text-slate-400">
              <div className="mr-2 hidden sm:block">
                <select
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  className="bg-slate-900 border border-amber-500/30 rounded px-2 py-0.5 text-[10px] text-amber-300 outline-none"
                >
                  {geminiModels.map(m => <option key={m} value={m}>{m}</option>)}
                </select>
              </div>
              <button
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.stopPropagation();
                  if (user) {
                    clearGeminiHistory();
                  } else {
                    setMessages([{ id: 'reset', sender: 'gemini', text: 'Chat history cleared. How can I guide your chess strategy today?', timestamp: 'Just now' }]);
                  }
                }}
                className="p-1.5 hover:bg-white/10 rounded-lg text-slate-400 transition-colors"
                title="Clear chat"
              >
                <RotateCcw size={14} />
              </button>
              <button
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.stopPropagation();
                  setIsExpanded(!isExpanded);
                }}
                className="p-1.5 hover:bg-white/10 rounded-lg text-slate-400 transition-colors hidden sm:block"
                title={isExpanded ? "Collapse" : "Expand"}
              >
                {isExpanded ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
              </button>
              <button
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.stopPropagation();
                  setIsMinimized(!isMinimized);
                }}
                className="p-1.5 hover:bg-white/10 rounded-lg text-slate-400 transition-colors"
                title={isMinimized ? "Expand window" : "Minimize window"}
              >
                <Minimize2 size={14} />
              </button>
              <button
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.stopPropagation();
                  setIsOpen(false);
                }}
                className="p-1.5 hover:bg-red-500/20 hover:text-red-400 rounded-lg text-slate-300 transition-colors ml-1"
                title="Minimize / Close Gemini Chatbot"
                aria-label="Minimize and Close"
              >
                <X size={18} className="stroke-[2.5]" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-opacity-5">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div
                      className={`max-w-[85%] rounded-2xl p-3 ${
                        msg.sender === 'user'
                          ? 'bg-amber-600 text-white rounded-tr-sm'
                          : 'bg-[#1e2536] text-slate-200 border border-slate-700/50 rounded-tl-sm'
                      } shadow-md`}
                    >
                      <div className="text-sm leading-relaxed whitespace-pre-wrap">{parseBasicMarkdown(msg.text)}</div>
                      <span className="text-[10px] text-white/50 block mt-1.5 text-right">{msg.timestamp}</span>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-[#1e2536] text-slate-200 border border-slate-700/50 rounded-2xl p-3 rounded-tl-sm flex items-center gap-2">
                      <Loader2 size={14} className="animate-spin text-amber-400" />
                      <span className="text-sm">Analyzing position...</span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className="px-4 py-2 bg-[#10141f] border-t border-slate-700/50 overflow-x-auto flex gap-2 hide-scrollbar">
                {quickPrompts.map((shortcut) => (
                  <button
                    key={shortcut}
                    onClick={() => handleSendMessage(shortcut)}
                    className="whitespace-nowrap px-3 py-1.5 rounded-full bg-[#1c2230] border border-slate-700 text-slate-300 hover:bg-[#252b3d] hover:text-amber-300 text-[11px] font-medium transition-all"
                  >
                    {shortcut}
                  </button>
                ))}
              </div>

              <form
                onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="p-3 bg-[#171c2b] border-t border-slate-700/80 flex flex-col gap-2 relative"
              >
                {showCommands && (
                  <div className="absolute bottom-full left-0 w-full bg-[#141926] border-t border-slate-700 shadow-2xl z-50 p-2 max-h-48 overflow-y-auto">
                    <div className="text-[10px] font-black text-amber-500 uppercase px-2 py-1 mb-1">Chatbot Commands</div>
                    {chatbotCommands.map(c => (
                      <button
                        key={c.cmd}
                        type="button"
                        onClick={() => {
                          setInputMessage(c.cmd);
                          setShowCommands(false);
                          inputRef.current?.focus();
                        }}
                        className="w-full text-left p-2 hover:bg-white/5 rounded-lg flex items-center justify-between group transition-colors"
                      >
                        <span className="text-xs font-bold text-slate-200 group-hover:text-amber-300">{c.cmd}</span>
                        <span className="text-[10px] text-slate-500 italic">{c.desc}</span>
                      </button>
                    ))}
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputMessage}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const val = e.target.value;
                      setInputMessage(val);
                      if (val === '/') setShowCommands(true);
                      else if (!val.startsWith('/')) setShowCommands(false);
                    }}
                    placeholder="Ask Gemini or type / for commands..."
                    className="flex-1 bg-[#10141f] border border-slate-700 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-slate-100 text-xs px-3.5 py-2.5 rounded-xl outline-none placeholder:text-slate-500 transition-all"
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !inputMessage.trim()}
                    className="p-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-md active:scale-95"
                  >
                    <Send size={16} />
                  </button>
                </div>
              </form>
            </>
          )}
        </motion.div>
      )}
    </div>
  );
};
export default GeminiChatbot;