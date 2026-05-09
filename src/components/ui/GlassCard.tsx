import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glow?: boolean;
}

export function GlassCard({ children, className, glow = false }: GlassCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.01 }}
      className={cn(
        "glass relative overflow-hidden rounded-3xl p-6 transition-all duration-500",
        glow && "hover:border-blue-500/30 hover:shadow-[0_0_50px_-12px_rgba(59,130,246,0.3)]",
        className
      )}
    >
      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
