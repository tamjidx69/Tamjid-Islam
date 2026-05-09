import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '../ui/Button';

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 800], [1, 0]);

  return (
    <section className="relative flex items-center justify-center min-h-screen pt-20 overflow-hidden bg-black">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="ambient-glow absolute top-[-200px] left-[-100px] w-[600px] h-[600px] pointer-events-none" />
        <div className="ambient-glow-2 absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] pointer-events-none" />
      </div>

      <motion.div 
        style={{ y: y1, opacity }}
        className="relative z-10 flex flex-col items-center px-4 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass px-4 py-2 mb-8 rounded-full flex items-center gap-3"
        >
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-[11px] font-medium tracking-widest text-white uppercase">
            Available for premium projects
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="max-w-5xl text-6xl font-black leading-[0.9] tracking-tighter text-white sm:text-8xl lg:text-[10rem] uppercase"
        >
          Designing <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/20">
            Visual Legacy
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-xl mt-12 text-lg text-zinc-400 sm:text-xl font-light"
        >
          Crafting high-end creative visuals for elite creators and global brands. 
          Thumbnail Design • Branding • Visual Storytelling
        </motion.p>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.8 }}
           className="flex flex-col items-center gap-10 mt-28 sm:flex-row"
         >
          <a href="https://www.behance.net/tamjidislam5" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="group h-20 px-12 text-xl shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:shadow-[0_0_60px_rgba(59,130,246,0.6)] transition-all">
              View Behance
              <ArrowRight className="ml-2 w-6 h-6 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
          <a href="https://wa.me/8801631950874" target="_blank" rel="noopener noreferrer">
            <Button variant="glass" size="lg" className="group h-20 px-12 text-xl border-white/20 hover:bg-white/10 transition-all">
              Contact Me
            </Button>
          </a>
        </motion.div>
      </motion.div>

      {/* Floating UI Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [-2, 0, -2]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute hidden left-10 bottom-40 lg:block z-20"
      >
        <div className="glass p-6 rounded-3xl shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.5)]">
              <span className="font-extrabold text-white text-xl">3+</span>
            </div>
            <div>
              <p className="text-white font-bold text-sm tracking-tight">Years Work</p>
              <p className="text-[10px] text-zinc-500 uppercase font-black">Experience</p>
            </div>
          </div>
        </div>
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [3, 0, 3]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute hidden right-10 top-60 lg:block z-10"
      >
        <div className="glass p-6 rounded-3xl shadow-2xl translate-x-12">
          <p className="text-[10px] font-black text-blue-500 mb-2 uppercase tracking-[0.2em]">Active Collaborations</p>
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-zinc-800" />
            ))}
            <div className="w-10 h-10 rounded-full border-2 border-black bg-blue-600 flex items-center justify-center text-[10px] font-bold text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              +150
            </div>
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 scroll-indicator">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-[20px] h-[35px] border-2 border-white/20 rounded-full flex justify-center"
        >
          <div className="w-1 h-2 mt-2 bg-white rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
