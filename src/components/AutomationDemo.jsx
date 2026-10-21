import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Bot, Check } from 'lucide-react';

// Each exchange is a repetitive task collapsed into one message, taken from real projects.
const exchanges = [
  { ask: 'Buy 2GB MTN data', reply: '2GB MTN sent. Paid from wallet.', tag: 'Subwheel AI' },
  { ask: 'Download episodes 1–12', reply: '12 episodes zipped and ready.', tag: 'K-Anime' },
  { ask: 'Turn this sticker into a photo', reply: 'Here you go 🖼️', tag: 'Sophia-MD' },
  { ask: 'Create a Zoom meeting for 3pm', reply: 'Meeting created. Link sent.', tag: 'Zoom assistant · coming soon' },
];

const VISIBLE = 2; // exchanges shown per page; keeps the panel short
const INTERVAL = 3500;

const AutomationDemo = () => {
  const reduceMotion = useReducedMotion();
  const [start, setStart] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => setStart((s) => (s + VISIBLE) % exchanges.length), INTERVAL);
    return () => clearInterval(id);
  }, [reduceMotion]);

  const visible = Array.from({ length: VISIBLE }, (_, k) => exchanges[(start + k) % exchanges.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.5 }}
      className="w-full max-w-sm rounded-3xl bg-zinc-900/80 backdrop-blur border border-white/10 shadow-2xl shadow-fuchsia-500/10 overflow-hidden"
      aria-hidden="true"
    >
      <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10">
        <div className="p-2 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500">
          <Bot size={16} className="text-white" />
        </div>
        <div>
          <div className="text-sm font-semibold text-white">Your repetitive task</div>
          <div className="text-xs text-emerald-400">automated</div>
        </div>
      </div>

      <div className="p-5 h-[19.5rem] overflow-hidden">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={start}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="space-y-3"
          >
            {visible.map((e) => (
              <div key={e.tag} className="space-y-2">
                <div className="ml-auto w-fit max-w-[85%] px-4 py-2 rounded-2xl rounded-br-md bg-gradient-to-r from-violet-500 to-fuchsia-500 text-sm text-white">
                  {e.ask}
                </div>
                <div className="w-fit max-w-[85%] px-4 py-2 rounded-2xl rounded-bl-md bg-white/10 text-sm text-zinc-100">
                  <span className="flex items-center gap-1.5">
                    <Check size={14} className="text-emerald-400 shrink-0" /> {e.reply}
                  </span>
                  <span className="block mt-1 text-[10px] uppercase tracking-wider text-zinc-500">{e.tag}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default AutomationDemo;
