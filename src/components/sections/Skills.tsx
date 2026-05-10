import { SKILLS } from '@/src/constants/data';
import { motion } from 'motion/react';
import { GlassCard } from '../ui/GlassCard';

export function Skills() {
  const smoothTransition = { duration: 1.2, ease: [0.22, 1, 0.36, 1] };

  return (
    <section className="py-32 bg-[#050505]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SKILLS.map((skill, index) => (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...smoothTransition, delay: index * 0.05 }}
                >
                  <GlassCard className="p-4 flex items-center justify-between group overflow-hidden">
                    <span className="font-bold text-white tracking-tight">{skill.name}</span>
                    <span className="text-xs text-blue-500 font-mono">{skill.level}%</span>
                    <motion.div 
                      className="absolute bottom-0 left-0 h-[2px] bg-blue-600"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.2 + (index * 0.1) }}
                    />
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ ...smoothTransition, delay: 0.1 }}
              className="text-xs font-medium tracking-[0.5em] text-blue-500 uppercase"
            >
              Mastery System
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...smoothTransition, delay: 0.2 }}
              className="mt-6 text-5xl font-bold tracking-tighter text-white sm:text-7xl uppercase leading-[0.9]"
            >
              Precision <br /> 
              Meet <br /> 
              Passion
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...smoothTransition, delay: 0.3 }}
              className="mt-8 text-lg text-zinc-500 max-w-md font-light leading-relaxed"
            >
              Equipped with world-class tools and a refined eye for detail, I ensure every pixel serves a purpose in your brand's growth story.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
