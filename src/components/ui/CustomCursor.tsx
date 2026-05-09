import { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export function CustomCursor() {
  const [isMobile, setIsMobile] = useState(false);
  
  const cursorX = useSpring(0, { damping: 20, stiffness: 100 });
  const cursorY = useSpring(0, { damping: 20, stiffness: 100 });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('resize', checkMobile);
    };
  }, [cursorX, cursorY]);

  if (isMobile) return null;

  return (
    <motion.div
      style={{
        translateX: cursorX,
        translateY: cursorY,
      }}
      className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference"
    >
      <div className="w-full h-full rounded-full border border-white/20 relative">
        <div className="absolute inset-0 rounded-full bg-blue-600/30 blur-xl scale-150" />
      </div>
    </motion.div>
  );
}
