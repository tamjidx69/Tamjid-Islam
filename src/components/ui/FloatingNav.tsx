import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const NAV_ITEMS = [
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export function FloatingNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const smoothTransition = { duration: 1.2, ease: [0.22, 1, 0.36, 1] };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-40 w-full max-w-fit px-4">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={smoothTransition}
        className={cn(
          "flex items-center gap-8 py-2 pl-2 pr-2 rounded-full border border-white/10 transition-all duration-500",
          isScrolled ? "glass bg-black/50 backdrop-blur-3xl shadow-xl" : "bg-transparent backdrop-blur-none"
        )}
      >
        <div className="flex items-center gap-8">
          <a href="#" className="w-10 h-10 glass flex items-center justify-center font-bold text-lg text-blue-500 rounded-full transition-all duration-300 hover:scale-110">
            T
          </a>
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xs font-bold tracking-[0.2em] text-white/50 hover:text-white uppercase transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://wa.me/8801631950874"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-2 rounded-full bg-white text-black text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform duration-300"
            >
              Hire Me
            </a>
          </div>
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-3 text-white"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-20 left-0 right-0 p-4 rounded-3xl border border-white/10 bg-black/80 backdrop-blur-3xl md:hidden flex flex-col gap-4"
          >
             {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="p-4 text-sm font-bold tracking-[0.2em] text-white/50 hover:text-white uppercase border-b border-white/5 px-6"
              >
                {item.name}
              </a>
            ))}
             <a
              href="https://wa.me/8801631950874"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="p-4 text-sm font-bold tracking-[0.2em] text-blue-500 uppercase px-6"
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
