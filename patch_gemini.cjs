const fs = require('fs');

const targetFile = 'src/components/chat/GeminiChatbot.tsx';
let content = fs.readFileSync(targetFile, 'utf8');

// 1. Add imports
content = content.replace("import { motion } from 'motion/react';", "import { motion, useDragControls } from 'motion/react';\nimport { Maximize2, Minimize2 } from 'lucide-react';");
if(!content.includes("Minimize2")) {
  content = content.replace("import { X, Send, Sparkles, Loader2, Image as ImageIcon } from 'lucide-react';", "import { X, Send, Sparkles, Loader2, Image as ImageIcon, Maximize2, Minimize2 } from 'lucide-react';");
}

// 2. Add state
const stateHook = `  const [isOpen, setIsOpen] = useState(false);`;
const newStateHook = `  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const dragControls = useDragControls();`;
content = content.replace(stateHook, newStateHook);

// 3. Update the floating chat window to use motion.div and handle minimize
const renderOld = `{/* Floating / Expanded Chat Window */}
      {isOpen && (
        <div
          className={\`bg-[#10141e] border-2 border-amber-500/60 rounded-2xl shadow-[0_15px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl flex flex-col overflow-hidden transition-all duration-300 \${
            isExpanded ? 'w-[80vw] h-[80vh] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50' : 'w-80 md:w-96 h-[500px]'
          }\`}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-900 to-[#141926] p-3 flex items-center justify-between border-b border-amber-500/30">`;

const renderNew = `{/* Floating / Expanded Chat Window */}
      {isOpen && (
        <motion.div
          drag
          dragControls={dragControls}
          dragListener={false}
          dragMomentum={false}
          className={\`bg-[#10141e] border-2 border-amber-500/60 rounded-2xl shadow-[0_15px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl flex flex-col overflow-hidden transition-all duration-300 \${
            isExpanded ? 'w-[80vw] h-[80vh] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50' : isMinimized ? 'w-80 md:w-96 h-14' : 'w-80 md:w-96 h-[500px]'
          }\`}
          style={isExpanded ? {} : { touchAction: 'none' }}
        >
          {/* Header */}
          <div 
            className="bg-gradient-to-r from-slate-900 to-[#141926] p-3 flex items-center justify-between border-b border-amber-500/30 cursor-move"
            onPointerDown={(e) => dragControls.start(e)}
          >`;
content = content.replace(renderOld, renderNew);

// 4. Close div for motion
content = content.replace("</form>\n        </div>\n      )}", "</form>\n          </div>\n        </motion.div>\n      )}");

// 5. Add minimize button
const buttonsOld = `<button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-1.5 hover:bg-white/10 rounded-lg text-slate-400 transition-colors"
                title={isExpanded ? "Collapse" : "Expand"}
              >
                {isExpanded ? <X size={14} /> : <span className="text-lg leading-none mb-1">⤢</span>}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-red-500/20 hover:text-red-400 rounded-lg text-slate-400 transition-colors"
                title="Close chat"
              >
                <X size={16} />
              </button>`;
const buttonsNew = `<button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-1.5 hover:bg-white/10 rounded-lg text-slate-400 transition-colors"
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
              </button>`;
content = content.replace(buttonsOld, buttonsNew);

fs.writeFileSync(targetFile, content, 'utf8');
console.log('Patched GeminiChatbot.tsx');
