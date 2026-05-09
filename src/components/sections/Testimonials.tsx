import { motion } from 'motion/react';
import { GlassCard } from '../ui/GlassCard';
import { Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: '1',
    content: "Tamjid-er kaj er quality osadharon. Specially thumbnail design gulo amader channel-er CTR onek bariye diyeche. Highly recommended!",
    author: "Tanvir Ahmed",
    role: "Bangla Tech YouTuber"
  },
  {
    id: '2',
    content: "Minimalist and clean logos are his specialty. He delivered exactly what I envisioned for my startup. Khub-e bhalo experience silo.",
    author: "Nabila Tabassum",
    role: "Product Designer"
  },
  {
    id: '3',
    content: "Design sensetivity on point! The cinematic posters he made were world-class. Great professional to work with from Chittagong.",
    author: "Rashed Karim",
    role: "Creative Director"
  }
];

export function Testimonials() {
  return (
    <section className="py-32 bg-[#050505]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-medium tracking-[0.5em] text-blue-500 uppercase"
          >
            Digital Reputation
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 text-5xl font-bold tracking-tighter text-white sm:text-7xl uppercase"
          >
            Elite Feedback
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="h-full relative overflow-hidden group py-12" glow>
                <div className="absolute top-0 right-0 p-8 text-blue-600/10 group-hover:text-blue-600/20 transition-colors">
                  <Quote size={80} />
                </div>
                <p className="text-lg text-zinc-300 italic mb-8 relative z-10 leading-relaxed">
                  "{t.content}"
                </p>
                <div className="mt-auto relative z-10">
                  <h4 className="text-white font-bold tracking-tight">{t.author}</h4>
                  <p className="text-xs text-zinc-600 uppercase tracking-widest mt-1">{t.role}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
