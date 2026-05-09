import { motion } from 'motion/react';
import { PROJECTS } from '@/src/constants/data';
import { GlassCard } from '../ui/GlassCard';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

export function Projects() {
  return (
    <section id="projects" className="py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-start mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold tracking-tighter text-white sm:text-7xl uppercase"
          >
            Selected Works
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="p-0 border-none group cursor-pointer h-full" glow>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                     <span className="text-white text-sm font-medium flex items-center gap-2">
                        View Portfolio <ArrowUpRight className="w-4 h-4" />
                     </span>
                  </div>
                  <div className="absolute top-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                      <ExternalLink className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-blue-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-500 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
