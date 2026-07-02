import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '../ui/Button';
import tamjidPortrait from '../../assets/images/tamjid_portrait.png';

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 800], [1, 0]);

  const smoothTransition = { duration: 1.2, ease: [0.22, 1, 0.36, 1] };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black pt-20">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="ambient-glow absolute top-[-200px] left-[-100px] w-[600px] h-[600px] pointer-events-none" />
        <div className="ambient-glow-2 absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] pointer-events-none" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div 
            style={{ y: y1, opacity }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...smoothTransition, delay: 0.2 }}
              className="glass mb-8 flex items-center gap-3 rounded-full px-4 py-2"
            >
              <div className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
              <span className="text-[11px] font-medium uppercase tracking-widest text-white">
                Available for premium projects
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...smoothTransition, delay: 0.4 }}
              className="text-6xl font-black uppercase leading-[0.9] tracking-tighter text-white sm:text-8xl lg:text-[7rem] xl:text-[8rem]"
            >
              Designing <br />
              <span className="bg-gradient-to-r from-white via-white to-white/20 bg-clip-text text-transparent">
                Visual Legacy
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...smoothTransition, delay: 0.6 }}
              className="mt-12 max-w-xl text-lg font-light text-zinc-400 sm:text-xl"
            >
              Crafting high-end creative visuals for elite creators and global brands. 
              Thumbnail Design • Branding • Visual Storytelling
            </motion.p>

            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ ...smoothTransition, delay: 0.8 }}
               className="mt-16 flex flex-col items-center gap-6 sm:flex-row lg:mt-20"
             >
              <a href="https://www.behance.net/tamjidislam5" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="group h-16 px-10 text-lg shadow-[0_0_40px_rgba(59,130,246,0.5)] hover:shadow-[0_0_60px_rgba(59,130,246,0.7)] transition-all bg-white text-black hover:bg-zinc-200">
                  View My Works
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <a href="https://wa.me/8801631950874" target="_blank" rel="noopener noreferrer">
                <Button variant="glass" size="lg" className="group h-16 px-10 text-lg border-white/20 hover:bg-white/10 transition-all">
                  Contact Me
                </Button>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ ...smoothTransition, delay: 0.5 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/5] w-full max-w-[500px] overflow-hidden rounded-[60px] border border-white/10 glass p-3">
              <img 
                src={tamjidPortrait} 
                alt="Tamjid Islam" 
                className="h-full w-full rounded-[48px] object-cover contrast-[1.05] brightness-[1.05] transition-all duration-1000 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Float Badge */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-12 bottom-20 z-20"
            >
              <div className="glass rounded-3xl p-6 shadow-2xl backdrop-blur-3xl">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                    <span className="text-xl font-extrabold text-white">3+</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold tracking-tight text-white">Years Success</p>
                    <p className="text-[10px] font-black uppercase text-zinc-500">Experience</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 scroll-indicator">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex h-[35px] w-[20px] justify-center rounded-full border-2 border-white/20"
        >
          <div className="mt-2 h-2 w-1 rounded-full bg-white" />
        </motion.div>
      </div>
    </section>
  );
}
