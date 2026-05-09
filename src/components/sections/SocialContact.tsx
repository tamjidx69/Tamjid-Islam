import { SOCIAL_LINKS } from '@/src/constants/data';
import { motion } from 'motion/react';
import { Button } from '../ui/Button';
import { GlassCard } from '../ui/GlassCard';
import * as Icons from 'lucide-react';

export function SocialContact() {
  return (
    <section id="contact" className="py-32 bg-black relative overflow-hidden">
        {/* Glow Background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-5xl font-bold tracking-tighter text-white sm:text-8xl lg:text-9xl uppercase mb-12"
          >
            LET'S <br /> CREATE <br /> <span className="text-blue-600">HISTORY</span>
          </motion.h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="https://wa.me/8801631950874" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button size="lg" className="h-20 px-12 text-xl font-bold w-full">
                START A PROJECT
              </Button>
            </a>
            <a href="mailto:tamjidx69@gmail.com" className="w-full sm:w-auto">
              <Button variant="glass" size="lg" className="h-20 px-12 text-xl font-bold w-full">
                EMAIL ME
              </Button>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {SOCIAL_LINKS.map((link, index) => {
            const IconComponent = (Icons as any)[link.icon] || Icons.Share2;
            return (
              <motion.a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <GlassCard className="flex flex-col items-center justify-center p-6 h-full group hover:border-blue-600 transition-colors duration-500">
                  <IconComponent className="w-6 h-6 text-zinc-500 group-hover:text-blue-600 group-hover:scale-110 transition-all" />
                  <span className="mt-4 text-[10px] font-bold tracking-widest text-zinc-600 group-hover:text-white uppercase transition-colors">
                    {link.name}
                  </span>
                </GlassCard>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
