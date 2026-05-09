/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { useLenis } from './hooks/use-lenis';
import { Preloader } from './components/sections/Preloader';
import { Hero } from './components/sections/Hero';
import { FloatingNav } from './components/ui/FloatingNav';
import { Services } from './components/sections/Services';
import { CreativeProcess } from './components/sections/CreativeProcess';
import { Skills } from './components/sections/Skills';
import { About } from './components/sections/About';
import { Testimonials } from './components/sections/Testimonials';
import { SocialContact } from './components/sections/SocialContact';
import { Footer } from './components/sections/Footer';
import { CustomCursor } from './components/ui/CustomCursor';

export default function App() {
  const [loading, setLoading] = useState(true);
  useLenis();

  return (
    <main className="relative min-h-screen bg-black overflow-x-hidden font-sans selection:bg-blue-600 selection:text-white">
      <CustomCursor />
      
      <AnimatePresence mode="wait">
        {loading ? (
          <Preloader key="preloader" onComplete={() => setLoading(false)} />
        ) : (
          <div key="content">
            <FloatingNav />
            <Hero />
            <div className="relative z-10">
              <Services />
              <About />
              <CreativeProcess />
              <Skills />
              <Testimonials />
              <SocialContact />
              <Footer />
            </div>
            
            {/* Ambient Noise Overlay */}
            <div className="fixed inset-0 z-[100] opacity-[0.02] pointer-events-none bg-noise" />
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
