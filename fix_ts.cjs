const fs = require('fs');

// Fix GeminiChatbot.tsx
let f1 = fs.readFileSync('src/components/chat/GeminiChatbot.tsx', 'utf8');
f1 = f1.replace("import { motion, useDragControls } from 'motion/react';\nimport { Maximize2, Minimize2 } from 'lucide-react';", "import { motion, useDragControls } from 'motion/react';");
if(!f1.includes('RotateCcw')) f1 = f1.replace("import { X, Send, Sparkles, Loader2, Image as ImageIcon, Maximize2, Minimize2 } from 'lucide-react';", "import { X, Send, Sparkles, Loader2, Image as ImageIcon, Maximize2, Minimize2, RotateCcw } from 'lucide-react';");
if(!f1.includes('Loader2')) f1 = f1.replace("import { X, Send, Sparkles, Image as ImageIcon, Maximize2, Minimize2, RotateCcw }", "import { X, Send, Sparkles, Loader2, Image as ImageIcon, Maximize2, Minimize2, RotateCcw }");
fs.writeFileSync('src/components/chat/GeminiChatbot.tsx', f1);

// Fix ClubContext.tsx
let f2 = fs.readFileSync('src/context/ClubContext.tsx', 'utf8');
if (!f2.includes('updateClubBanner: (clubId: string, banner: string) => void;')) {
  f2 = f2.replace('updateClubIcon: (clubId: string, icon: string) => void;', 'updateClubIcon: (clubId: string, icon: string) => void;\n  updateClubBanner: (clubId: string, banner: string) => void;');
  fs.writeFileSync('src/context/ClubContext.tsx', f2);
}
console.log('Fixed TS errors');
