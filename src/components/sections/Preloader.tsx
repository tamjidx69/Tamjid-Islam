import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export function Preloader({ onComplete }: { onComplete: () => void; key?: string | number }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 1000);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
    >
      <div className="ambient-glow absolute top-[-200px] left-[-100px] w-[600px] h-[600px] pointer-events-none" />
      <div className="ambient-glow-2 absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] pointer-events-none" />
      
      <div className="relative flex flex-col items-center w-full max-w-xs space-y-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <span className="text-4xl font-bold tracking-tighter text-white uppercase sm:text-6xl">
            Tamjid<span className="text-blue-600">.</span>
          </span>
          <span className="mt-2 text-[10px] tracking-[0.4em] text-zinc-500 uppercase">
            Creative Legacy System
          </span>
        </motion.div>

        <div className="relative w-full h-[2px] bg-white/5 rounded-full overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full bg-blue-600"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex justify-between w-full">
          <span className="text-[10px] tracking-widest text-zinc-500 uppercase">Loading Assets</span>
          <span className="text-[10px] tracking-widest text-white uppercase">{progress}%</span>
        </div>
      </div>
    </motion.div>
  );
}
