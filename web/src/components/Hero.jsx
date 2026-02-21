import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Star } from 'lucide-react';

const BRANDS = ['Dr. Aditeya\'s', 'Admission Arrow', 'Ceat Study', 'Suvidhi', 'Dr. Suman Bohra', 'Tekrella'];

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-24 pb-20 px-6 lg:px-10 overflow-hidden bg-[#05050A] mesh-grid">

      {/* === BACKGROUND MAGIC === */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Main violet orb */}
        <div className="orb-float absolute top-[-100px] left-[-150px] w-[700px] h-[700px] rounded-full opacity-25"
          style={{ background: 'radial-gradient(circle, #7C3AED 0%, #4C1D95 40%, transparent 70%)' }} />
        {/* Pink orb */}
        <div className="orb-float2 absolute top-[10%] right-[-100px] w-[500px] h-[500px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #EC4899 0%, #9D174D 40%, transparent 70%)' }} />
        {/* Cyan bottom orb */}
        <div className="orb-float absolute bottom-[-150px] left-[30%] w-[600px] h-[400px] rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #06B6D4 0%, #0E7490 40%, transparent 70%)' }} />

        {/* Glowing horizontal line */}
        <div className="absolute top-[45%] left-0 right-0 h-px opacity-20"
          style={{ background: 'linear-gradient(90deg, transparent, #7C3AED, #EC4899, #06B6D4, transparent)' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[85vh]">

          {/* LEFT CONTENT */}
          <div className="space-y-8 pt-10">

            {/* Badge */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22,1,0.36,1] }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-violet-500/30 shimmer-line overflow-hidden">
                <div className="w-1.5 h-1.5 rounded-full bg-violet-400" style={{ animation: 'pulse-dot 2s ease-in-out infinite', color: '#A78BFA' }} />
                <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                <span className="text-xs font-semibold text-violet-300 tracking-wide" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  Your All-in-One AI Tool to Write, Design & Create Smarter
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.22,1,0.36,1] }}>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.05] tracking-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
                <span className="text-white block">Verbilab</span>
                <span className="block gradient-text">Creates</span>
                <span className="text-white block leading-tight">Human-Like</span>
                <span className="text-white/50 block text-4xl lg:text-5xl xl:text-6xl font-bold mt-2">Content In Seconds.</span>
              </h1>
            </motion.div>

            {/* Sub */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
              className="flex flex-wrap items-center gap-3">
              <span className="px-4 py-1.5 rounded-full text-sm font-bold border border-pink-500/40 text-pink-300 bg-pink-500/10" style={{ fontFamily: "'Outfit', sans-serif" }}>
                ⚡ Powered by AI
              </span>
              <span className="px-4 py-1.5 rounded-full text-sm font-bold border border-cyan-500/40 text-cyan-300 bg-cyan-500/10" style={{ fontFamily: "'Outfit', sans-serif" }}>
                ✦ Inspired by You
              </span>
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg text-slate-400 max-w-md leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Write smarter, design faster, and build more — without switching tabs.
            </motion.p>

            {/* CTA */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4">
              <button className="btn-glow group inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-white font-bold text-base" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl text-slate-300 hover:text-white font-semibold text-sm border border-white/10 hover:border-white/20 transition-all glass" style={{ fontFamily: "'Outfit', sans-serif" }}>
                See Demo
                <span className="text-xs opacity-60">↗</span>
              </button>
            </motion.div>

            {/* Social proof */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
              className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {['#7C3AED','#EC4899','#06B6D4','#84CC16'].map((c, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-[#05050A] flex items-center justify-center text-xs font-bold text-white" style={{ background: c }}>
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-xs text-slate-500" style={{ fontFamily: "'Outfit', sans-serif" }}>Trusted by 10,000+ creators</p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT — DASHBOARD MOCKUP */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotateY: -10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22,1,0.36,1] }}
            className="relative hidden lg:block -mt-16"
            style={{ perspective: '1000px' }}
          >
            {/* Outer glow */}
            <div className="absolute -inset-4 rounded-3xl opacity-50" style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.3) 0%, transparent 70%)' }} />

            {/* Main card */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl" style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)' }}>
              {/* Top bar */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/5" style={{ background: 'rgba(255,255,255,0.03)' }}>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#28CA41]" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="mx-auto max-w-xs h-6 rounded-md flex items-center justify-center px-3 border border-white/8 text-xs text-slate-500" style={{ background: 'rgba(255,255,255,0.03)', fontFamily: "'Outfit', sans-serif" }}>
                    verbilab.com/dashboard
                  </div>
                </div>
                <button className="px-3 py-1.5 rounded-lg text-xs font-bold text-white btn-glow" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  + Create
                </button>
              </div>

              {/* Dashboard */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-slate-500 text-xs mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>Welcome back</p>
                    <h3 className="text-white font-bold text-lg" style={{ fontFamily: "'Syne', sans-serif" }}>Hello, Surya 👋</h3>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10">
                    <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                    <span className="text-violet-300 text-xs font-semibold" style={{ fontFamily: "'Outfit', sans-serif" }}>Pro Plan</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-4 gap-2 mb-5">
                  {[
                    { label: 'Words Gen.', val: '0', color: '#A78BFA', bg: 'rgba(124,58,237,0.1)' },
                    { label: 'Images Gen.', val: '0', color: '#F472B6', bg: 'rgba(236,72,153,0.1)' },
                    { label: 'Credits', val: '5K', color: '#34D399', bg: 'rgba(52,211,153,0.1)' },
                    { label: 'Hours Left', val: '0', color: '#60A5FA', bg: 'rgba(96,165,250,0.1)' },
                  ].map((s) => (
                    <div key={s.label} className="rounded-xl p-3 text-center border border-white/5" style={{ background: s.bg }}>
                      <div className="text-xl font-black mb-0.5" style={{ color: s.color, fontFamily: "'Syne', sans-serif" }}>{s.val}</div>
                      <div className="text-[9px] uppercase tracking-wider text-slate-500" style={{ fontFamily: "'Outfit', sans-serif" }}>{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Most Popular */}
                <div className="mb-3">
                  <div className="flex items-center gap-2 mb-2.5">
                    <div className="w-1 h-4 rounded-full bg-gradient-to-b from-violet-500 to-pink-500" />
                    <span className="text-xs font-bold text-slate-300 uppercase tracking-widest" style={{ fontFamily: "'Outfit', sans-serif" }}>Most Popular</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { name: 'Question Generator', color: '#A78BFA', bg: 'rgba(124,58,237,0.1)', border: 'rgba(124,58,237,0.3)' },
                      { name: 'Keyword Generator', color: '#60A5FA', bg: 'rgba(96,165,250,0.08)', border: 'rgba(96,165,250,0.25)' },
                      { name: 'Headline Generator', color: '#34D399', bg: 'rgba(52,211,153,0.08)', border: 'rgba(52,211,153,0.25)' },
                      { name: 'Summarize Text', color: '#F472B6', bg: 'rgba(244,114,182,0.08)', border: 'rgba(244,114,182,0.25)' },
                    ].map((item) => (
                      <div key={item.name} className="px-3 py-2.5 rounded-xl border cursor-pointer hover:scale-[1.02] transition-transform" style={{ background: item.bg, borderColor: item.border }}>
                        <span className="text-xs font-semibold" style={{ color: item.color, fontFamily: "'Outfit', sans-serif" }}>{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}
              className="absolute -right-10 top-12 glass rounded-2xl px-4 py-3 border border-violet-500/30 shadow-xl"
              style={{ boxShadow: '0 10px 40px rgba(124,58,237,0.2)' }}>
              <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-0.5" style={{ fontFamily: "'Outfit', sans-serif" }}>AI Generated</p>
              <p className="text-white font-bold text-sm" style={{ fontFamily: "'Syne', sans-serif" }}>5K+ Words/mo</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4 }}
              className="absolute -left-8 bottom-20 glass rounded-2xl px-4 py-3 border border-emerald-500/30 shadow-xl"
              style={{ boxShadow: '0 10px 40px rgba(52,211,153,0.15)' }}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400" style={{ animation: 'pulse-dot 2s ease-in-out infinite', color: '#34D399' }} />
                <p className="text-emerald-300 font-semibold text-xs" style={{ fontFamily: "'Outfit', sans-serif" }}>Content Ready</p>
              </div>
              <p className="text-white text-sm font-bold mt-0.5" style={{ fontFamily: "'Syne', sans-serif" }}>Blog post generated!</p>
            </motion.div>
          </motion.div>
        </div>

        {/* BRAND STRIP */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
          className="mt-20 pt-10 border-t border-white/5">
          <p className="text-center text-xs text-slate-600 tracking-[0.3em] uppercase mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Adopted by Forward-Thinking Businesses
          </p>
          <div className="flex flex-wrap justify-center gap-10 items-center">
            {BRANDS.map((brand) => (
              <span key={brand} className="text-slate-600 hover:text-slate-400 text-sm font-semibold transition-colors tracking-wide" style={{ fontFamily: "'Outfit', sans-serif" }}>
                {brand}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}