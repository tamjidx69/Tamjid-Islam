import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="py-12 bg-black border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
             <span className="text-2xl font-bold tracking-tighter text-white uppercase">
              Tamjid<span className="text-blue-600">.</span>
            </span>
            <p className="mt-2 text-xs text-zinc-600 tracking-widest uppercase">
              Digital Creative Authority
            </p>
          </div>

          <div className="flex items-center gap-12">
            <div className="flex flex-col items-center md:items-end text-center md:text-right">
              <span className="text-[10px] font-bold tracking-widest text-zinc-600 uppercase mb-2">Location</span>
              <p className="text-white text-sm">Chittagong, Bangladesh</p>
            </div>
            <div className="flex flex-col items-center md:items-end text-center md:text-right">
              <span className="text-[10px] font-bold tracking-widest text-zinc-600 uppercase mb-2">Social</span>
              <p className="text-white text-sm">@tamjidislamx</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <p className="text-[10px] text-zinc-700 uppercase tracking-widest">
            © 2024 TAMJID. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] text-zinc-700 hover:text-white uppercase tracking-widest transition-colors">Privacy Policy</a>
            <a href="#" className="text-[10px] text-zinc-700 hover:text-white uppercase tracking-widest transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
