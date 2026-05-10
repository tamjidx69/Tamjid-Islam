import { PROCESS_STEPS } from '@/src/constants/data';
import { motion } from 'motion/react';

export function CreativeProcess() {
  const smoothTransition = { duration: 1.2, ease: [0.22, 1, 0.36, 1] };

  return (
    <section className="py-32 bg-black border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...smoothTransition, delay: 0.1 }}
            className="text-xs font-medium tracking-[0.5em] text-blue-500 uppercase"
          >
            Efficiency x Quality
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...smoothTransition, delay: 0.2 }}
            className="mt-6 text-5xl font-bold tracking-tighter text-white sm:text-7xl uppercase"
          >
            Creative Workflow
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12">
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ ...smoothTransition, delay: index * 0.1 }}
              className="relative group"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ ...smoothTransition, delay: 0.2 + (index * 0.1) }}
                className="absolute -top-10 left-0 text-[8rem] font-black text-white/[0.03] select-none group-hover:text-blue-600/10 transition-colors"
              >
                0{index + 1}
              </motion.div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-4">
                  <motion.span 
                    initial={{ width: 0 }}
                    whileInView={{ width: 32 }}
                    viewport={{ once: true }}
                    transition={{ ...smoothTransition, delay: 0.5 + (index * 0.1) }}
                    className="h-[1px] bg-blue-600 block" 
                  />
                  {step.title}
                </h3>
                <p className="text-zinc-500 leading-relaxed max-w-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
