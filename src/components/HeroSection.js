import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiMinus } from 'react-icons/fi';

const HeroSection = () => {
  return (
    <section className="relative min-h-[100dvh] w-full bg-[#050505] text-[#e5e5e5] overflow-hidden selection:bg-white selection:text-black">
      
      {/* Background Layer: Handles Mobile & Desktop differently */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury Architecture"
          className="h-full w-full object-cover grayscale brightness-[0.4] lg:brightness-[0.6] lg:translate-x-[20%]"
        />
        {/* Gradient for text protection on mobile */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#050505] lg:hidden" />
      </div>

      <div className="relative z-10 flex flex-col min-h-[100dvh]">
        
        {/* Top: Minimal Nav */}
        <header className="flex justify-between items-center p-6 md:p-10 lg:px-20">
          <div className="flex items-center gap-4">
            <span className="text-xs font-black uppercase tracking-[0.4em]"> <span className="opacity-30"> </span></span>
            <div className="h-px w-8 bg-white/20 hidden sm:block" />
            <span className="text-[9px] font-medium uppercase tracking-[0.3em] opacity-40 hidden sm:block"> </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-[9px] uppercase tracking-widest font-bold"> </span>
          </div>
        </header>

        {/* Middle: The Headline */}
        <main className="flex-1 flex flex-col justify-center px-6 md:px-10 lg:px-20 py-12">
          <div className="max-w-4xl">
            <h1 className="text-[12vw] sm:text-[10vw] lg:text-[7vw] font-light leading-[0.9] tracking-tighter mb-6 lg:mb-10">
              ARCHITECTURAL <br />
              <span className="font-serif italic text-white/40">Curations.</span>
            </h1>
            
            {/* CTA & Description Wrapper */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 lg:gap-12">
              <Link to="/properties" className="group flex items-center gap-6 bg-white text-black pl-8 pr-4 py-4 rounded-full transition-all hover:pr-6 active:scale-95">
                <span className="text-[10px] font-black uppercase tracking-widest">Explore</span>
                <div className="bg-black text-white p-2 rounded-full group-hover:rotate-45 transition-transform duration-300">
                  <FiArrowUpRight size={18} />
                </div>
              </Link>
              <p className="max-w-[280px] text-[11px] md:text-xs uppercase tracking-[0.15em] leading-relaxed text-white/50">
                Strategic acquisitions reserved for the global vanguard of design.
              </p>
            </div>
          </div>
        </main>

        {/* Bottom: Information Grid */}
        <footer className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border-t border-white/10 backdrop-blur-md">
          <div className="p-6 lg:px-20 flex flex-col gap-2 bg-[#050505]/80 lg:bg-transparent">
            <span className="text-[8px] font-bold text-white/30 uppercase tracking-widest">Coordinates</span>
            <span className="text-[10px] tabular-nums tracking-widest leading-none">6.4654° N / 3.4064° E</span>
          </div>
          <div className="p-6 flex flex-col gap-2 bg-[#050505]/80 lg:bg-transparent border-l border-white/10">
            <span className="text-[8px] font-bold text-white/30 uppercase tracking-widest">Portfolio</span>
            <span className="text-[10px] tabular-nums tracking-widest leading-none">Vol. 12 / 026</span>
          </div>
          <div className="hidden lg:flex p-6 flex-col gap-2 border-l border-white/10">
            <span className="text-[8px] font-bold text-white/30 uppercase tracking-widest">Capital</span>
            <span className="text-[10px] tabular-nums tracking-widest leading-none">$4.2B+ AUM</span>
          </div>
          <div className="hidden lg:flex p-6 flex-col gap-2 border-l border-white/10">
            <span className="text-[8px] font-bold text-white/30 uppercase tracking-widest">Current Status</span>
            <span className="text-[10px] tabular-nums tracking-widest leading-none">Open for Inquiry</span>
          </div>
        </footer>
      </div>

      {/* Background Grain */}
      <div className="pointer-events-none absolute inset-0 z-50 opacity-[0.05] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
};

export default HeroSection;