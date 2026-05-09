import { motion } from 'motion/react';
import { GlassCard } from '../ui/GlassCard';

export function About() {
  return (
    <section id="about" className="py-32 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative transition-transform duration-700 hover:rotate-1"
          >
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden glass border-white/5 relative z-10 p-2">
               <img 
                src="/input_file_5.png" 
                alt="Tamjid Portrait" 
                className="w-full h-full object-cover rounded-[32px] transition-all duration-1000 hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -z-0" />
            <div className="absolute -top-10 -left-10 w-40 h-40 border border-white/10 rounded-full -z-0" />
          </motion.div>

          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-medium tracking-[0.5em] text-blue-500 uppercase"
            >
              The Mindset
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-6 text-5xl font-bold tracking-tighter text-white sm:text-7xl uppercase leading-[0.9]"
            >
              Creative <br /> Strategy <br /> over Template <br /> <span className="text-blue-500">Design.</span>
            </motion.h2>
            
            <div className="mt-12 space-y-6 text-lg text-zinc-400 font-light leading-relaxed max-w-xl">
              <p>
                I am Tamjid, a visual storyteller based in Chittagong, Bangladesh. With over 3 years of experience in the creative industry, I've dedicated my career to bridging the gap between raw creativity and strategic performance.
              </p>
              <p>
                My approach is simple: every pixel must serve a purpose. Whether it's a high-stakes YouTube thumbnail or a premium brand identity, I focus on the psychological impact of design—ensuring your message isn't just seen, but remembered.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <span className="text-3xl font-black text-white block">150+</span>
                <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest mt-1">Creators Influenced</span>
              </div>
               <div>
                <span className="text-3xl font-black text-white block">500+</span>
                <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest mt-1">Projects Delivered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
