import { SERVICES } from '@/src/constants/data';
import { motion } from 'motion/react';
import { GlassCard } from '../ui/GlassCard';
import * as Icons from 'lucide-react';

export function Services() {
  return (
    <section id="services" className="py-32 bg-[#050505]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-medium tracking-[0.4em] text-blue-500 uppercase"
            >
              Capabilities
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-6 text-5xl font-bold tracking-tighter text-white sm:text-7xl uppercase leading-[0.9]"
            >
              SERVICES <br /> WE <br /> PROVIDE
            </motion.h2>
            <p className="mt-8 text-lg text-zinc-500 max-w-md font-light leading-relaxed">
              Merging artistic vision with strategic design to create visuals that don't just look good, but perform at the highest level.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SERVICES.map((service, index) => {
              const IconComponent = (Icons as any)[service.icon];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <GlassCard className="h-full group hover:bg-blue-600/5 transition-colors" glow>
                    <div className="mb-6 inline-flex p-3 rounded-xl bg-blue-600/10 border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                      <IconComponent className="w-6 h-6 text-blue-500 group-hover:text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm text-zinc-500 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    {service.url && (
                      <a 
                        href={service.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[10px] font-bold tracking-widest text-blue-500 uppercase flex items-center gap-2 hover:text-white transition-colors"
                      >
                        View Work <Icons.ArrowUpRight size={12} />
                      </a>
                    )}
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
