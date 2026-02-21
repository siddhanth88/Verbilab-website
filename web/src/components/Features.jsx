import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Search, PenTool, Image, BarChart3, Presentation, Calendar } from 'lucide-react';

const features = [
  { icon: FileText, title: 'Keywords Generator', color: '#A78BFA', glow: 'rgba(124,58,237,0.3)' },
  { icon: Search, title: 'SEO Optimizer', color: '#60A5FA', glow: 'rgba(96,165,250,0.3)' },
  { icon: PenTool, title: 'Content Writer', color: '#F472B6', glow: 'rgba(244,114,182,0.3)' },
  { icon: Image, title: 'Image Creation', color: '#34D399', glow: 'rgba(52,211,153,0.3)' },
  { icon: BarChart3, title: 'Data Analyst', color: '#FBBF24', glow: 'rgba(251,191,36,0.3)' },
  { icon: Presentation, title: 'Presentations', color: '#F87171', glow: 'rgba(248,113,113,0.3)' },
  { icon: Calendar, title: 'Scheduler', color: '#A78BFA', glow: 'rgba(124,58,237,0.3)' },
];

export default function Features() {
  return (
    <section className="py-32 px-6 lg:px-10 bg-[#05050A] relative overflow-hidden">
      <div className="absolute inset-0 mesh-grid opacity-50" />
      {/* Center gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #7C3AED 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/8 mb-6">
            <span className="text-violet-400 text-xs font-bold tracking-widest uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>Full Suite</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-5" style={{ fontFamily: "'Syne', sans-serif" }}>
            From Ideas to Publishing —
            <br />
            <span className="gradient-text">Verbilab Does It ALL</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Every tool you need, in one intelligent AI workspace
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, ease: [0.22,1,0.36,1] }}
              className="glass group relative rounded-2xl p-6 cursor-pointer overflow-hidden"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(circle at 40% 40%, ${feature.glow} 0%, transparent 65%)` }} />

              {/* Icon */}
              <div className="relative w-12 h-12 rounded-xl mb-5 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ background: `${feature.color}18`, border: `1px solid ${feature.color}30` }}>
                <feature.icon className="w-5 h-5 transition-colors" style={{ color: feature.color }} />
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-md"
                  style={{ background: feature.color }} />
              </div>

              <h3 className="font-bold text-sm text-slate-300 group-hover:text-white transition-colors" style={{ fontFamily: "'Outfit', sans-serif" }}>
                {feature.title}
              </h3>

              {/* Bottom line reveal */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-full h-0.5 rounded-full transition-all duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${feature.color}, transparent)` }} />
            </motion.div>
          ))}

          {/* Coming soon card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
            className="rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-3 border border-dashed border-white/10">
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center">
              <span className="text-slate-600 text-xl font-light">+</span>
            </div>
            <p className="text-slate-600 text-xs uppercase tracking-widest" style={{ fontFamily: "'Outfit', sans-serif" }}>More Soon</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}