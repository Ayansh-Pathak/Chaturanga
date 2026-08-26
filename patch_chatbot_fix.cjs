const fs = require('fs');
const targetFile = 'src/components/chat/GeminiChatbot.tsx';
let content = fs.readFileSync(targetFile, 'utf8');

// The original component code already had some motion elements. Let's fully rewrite the render part safely.
// We'll replace the whole return statement.
const startIndex = content.indexOf('return (');
const oldRender = content.substring(startIndex);

const newRender = `return (
    <>
      {!isOpen && (
        <motion.div drag dragMomentum={false} className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
          <button
            id="gemini-chatbot-trigger-btn"
            onClick={() => setIsOpen(true)}
            className="group relative w-14 h-14 rounded-full bg-black border-2 border-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.45)] hover:shadow-[0_0_35px_rgba(245,158,11,0.7)] flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer"
            title="Chat with Gemini Chess Coach (Content-Aware)"
          >
            <div className="w-9 h-9 flex items-center justify-center">
              <ChessPiece type="p" color="w" size="100%" />
            </div>
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-tr from-amber-500 to-yellow-300 rounded-full border-2 border-black flex items-center justify-center animate-pulse">
              <Sparkles size={8} className="text-black font-black" />
            </span>
            <span className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-[#141926] text-amber-300 text-xs font-bold whitespace-nowrap border border-amber-500/30 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Gemini Chess Mentor
            </span>
          </button>
        </motion.div>
      )}

      {isOpen && (
        <motion.div
          drag
          dragControls={dragControls}
          dragListener={false}
          dragMomentum={false}
          className={\`fixed z-50 bg-[#10141e] border-2 border-amber-500/60 rounded-2xl shadow-[0_15px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl flex flex-col overflow-hidden transition-all duration-300 \${
            isExpanded ? 'w-[92vw] sm:w-[620px] h-[82vh]' : isMinimized ? 'w-72 h-[60px]' : 'w-[92vw] sm:w-[420px] h-[560px]'
          }\`}
          style={isExpanded ? { top: '50%', left: '50%', transform: 'translate(-50%, -50%)', touchAction: 'none' } : { bottom: '24px', right: '24px', touchAction: 'none' }}
        >
          {/* Header */}
          <div 
            className="bg-gradient-to-r from-[#171c2b] via-[#1a2133] to-[#121622] px-4 py-3 border-b border-slate-700/80 flex items-center justify-between cursor-move"
            onPointerDown={(e) => dragControls.start(e)}
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
                    Content-aware chess reasoning
                  </p>
                </div>
              )}
            </div>

            <div className="flex items-center gap-1 text-slate-400">
              <button
                onClick={() => setMessages([{ id: 'reset', sender: 'gemini', text: 'Chat history cleared. How can I guide your chess strategy today?', timestamp: 'Just now' }])}
                className="p-1.5 hover:bg-white/10 rounded-lg text-slate-400 transition-colors"
                title="Clear chat"
              >
                <RotateCcw size={14} />
              </button>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-1.5 hover:bg-white/10 rounded-lg text-slate-400 transition-colors hidden sm:block"
                title={isExpanded ? "Collapse" : "Expand"}
              >
                {isExpanded ? <X size={14} /> : <span className="text-lg leading-none mb-1">⤢</span>}
              </button>
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1.5 hover:bg-white/10 rounded-lg text-slate-400 transition-colors"
                title={isMinimized ? "Maximize" : "Minimize"}
              >
                {isMinimized ? <Maximize2 size={14} /> : <Minimize2 size={14} />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-red-500/20 hover:text-red-400 rounded-lg text-slate-400 transition-colors"
                title="Close chat"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-opacity-5">
                {messages.map((msg, i) => (
                  <div key={i} className={\`flex \${msg.sender === 'user' ? 'justify-end' : 'justify-start'}\`}>
                    <div
                      className={\`max-w-[85%] rounded-2xl p-3 \${
                        msg.sender === 'user'
                          ? 'bg-amber-600 text-white rounded-tr-sm'
                          : 'bg-[#1e2536] text-slate-200 border border-slate-700/50 rounded-tl-sm'
                      } shadow-md\`}
                    >
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
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
                {['Tactics here?', 'Evaluate position', 'Best move?'].map((shortcut) => (
                  <button
                    key={shortcut}
                    onClick={() => {
                      setInputMessage(shortcut);
                    }}
                    className="whitespace-nowrap px-3 py-1.5 rounded-full bg-[#1c2230] border border-slate-700 text-slate-300 hover:bg-[#252b3d] hover:text-amber-300 text-[11px] font-medium transition-all"
                  >
                    {shortcut}
                  </button>
                ))}
              </div>

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
            </>
          )}
        </motion.div>
      )}
    </>
  );
};
export default GeminiChatbot;`;

content = content.replace(oldRender, newRender);

fs.writeFileSync(targetFile, content, 'utf8');
console.log('Fully patched GeminiChatbot.tsx render section');
