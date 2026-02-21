import React from 'react';
import { motion } from 'framer-motion';
import { Star, Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#05050A]">
      {/* Awards section */}
      <section className="py-24 px-6 lg:px-10 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 mesh-grid opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full opacity-8 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, #7C3AED, transparent)' }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/8 mb-6">
              <span className="text-amber-400 text-xs font-bold tracking-widest uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>Recognition</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
              The Top-Rated{' '}
              <span className="gradient-text">All-In-One</span>
              <br />Optimization Tool
            </h2>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="flex flex-col md:flex-row items-center justify-center gap-20">
            {/* Google */}
            <div className="flex flex-col items-center gap-3 glass rounded-2xl px-10 py-8">
              <span className="text-slate-500 text-xs font-bold tracking-widest uppercase mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>Google</span>
              <div className="flex gap-1">
                {[1,2,3,4,5].map(i => <Star key={i} className={`w-5 h-5 ${i<=4?'fill-amber-400 text-amber-400':'fill-slate-700 text-slate-700'}`} />)}
              </div>
              <span className="text-2xl font-black text-white" style={{ fontFamily: "'Syne', sans-serif" }}>4.3</span>
              <span className="text-slate-500 text-sm" style={{ fontFamily: "'Outfit', sans-serif" }}>6 M+ Reviews</span>
            </div>

            {/* Trophy */}
            <div className="flex flex-col items-center gap-4">
              <div className="relative w-40 h-40 rounded-full flex flex-col items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #F59E0B, #D97706, #F59E0B)', boxShadow: '0 0 60px rgba(245,158,11,0.5), 0 0 120px rgba(245,158,11,0.2)' }}>
                <Star className="w-12 h-12 fill-amber-900 text-amber-900 mb-1" />
                <span className="text-amber-900 text-xs font-black tracking-[0.2em] uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>FIRST</span>
                <span className="text-amber-900 text-xs font-black tracking-[0.2em] uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>PLACE</span>
              </div>
              <div className="px-6 py-2 rounded-full font-black text-xs tracking-widest uppercase text-white"
                style={{ background: 'linear-gradient(90deg, #7C3AED, #EC4899)', fontFamily: "'Outfit', sans-serif" }}>
                First Place 🏆
              </div>
            </div>

            {/* Yandex */}
            <div className="flex flex-col items-center gap-3 glass rounded-2xl px-10 py-8">
              <span className="text-slate-500 text-xs font-bold tracking-widest uppercase mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>Yandex</span>
              <div className="flex gap-1">
                {[1,2,3,4,5].map(i => <Star key={i} className={`w-5 h-5 ${i<=4?'fill-amber-400 text-amber-400':'fill-slate-700 text-slate-700'}`} />)}
              </div>
              <span className="text-2xl font-black text-white" style={{ fontFamily: "'Syne', sans-serif" }}>4.8</span>
              <span className="text-slate-500 text-sm" style={{ fontFamily: "'Outfit', sans-serif" }}>8 M+ Reviews</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer links */}
      <section className="py-16 px-6 lg:px-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="lg:col-span-2">
              <a href="/" className="flex items-center gap-3 group mb-6">
                <div className="relative w-10 h-10">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-600 to-pink-500 opacity-90" />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-600 to-pink-500 blur-md opacity-40" />
                  <div className="relative w-full h-full rounded-xl flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white fill-white" />
                  </div>
                </div>
                <span className="text-xl font-bold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
                  verbi<span className="gradient-text">lab</span>
                </span>
              </a>
              <p className="text-slate-500 text-sm leading-relaxed max-w-sm" style={{ fontFamily: "'Outfit', sans-serif" }}>
                AI Writing Tool that provides users with a powerful and efficient tool for automatically creating unique, high-quality content — at scale.
              </p>
            </div>

            {/* Follow */}
            <div>
              <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>Follow Us</h4>
              <ul className="space-y-3.5">
                {['Facebook', 'Twitter', 'Instagram'].map(link => (
                  <li key={link}>
                    <a href="#" className="text-slate-500 hover:text-violet-400 text-sm font-medium transition-colors" style={{ fontFamily: "'Outfit', sans-serif" }}>{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>Company</h4>
              <ul className="space-y-3.5">
                {['FAQ', 'About Us', 'Contact Us', 'Terms of Use', 'Privacy Policy', 'Refund Policy'].map(link => (
                  <li key={link}>
                    <a href="#" className="text-slate-500 hover:text-violet-400 text-sm font-medium transition-colors" style={{ fontFamily: "'Outfit', sans-serif" }}>{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-600 text-sm" style={{ fontFamily: "'Outfit', sans-serif" }}>Copyright © 2025 Verbilab. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400" style={{ animation: 'pulse-dot 2s ease-in-out infinite', color: '#34D399' }} />
              <span className="text-slate-600 text-xs" style={{ fontFamily: "'Outfit', sans-serif" }}>All systems operational</span>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}