import React from 'react';
import { motion } from 'framer-motion';

const useCases = [
  { title: 'Keyword Generator', desc: 'Utilizes natural language processing to generate engaging and relevant blog titles that rank.', color: '#A78BFA', glow: 'rgba(124,58,237,0.15)', num: '01', icon: '🔍' },
  { title: 'SEO Optimizer', desc: 'Writes effective cover letters by analyzing job descriptions, personalizing content, and providing feedback.', color: '#60A5FA', glow: 'rgba(96,165,250,0.15)', num: '02', icon: '📈' },
  { title: 'Content Writer', desc: 'Generates descriptive text for videos and articles, enhancing accessibility and improving searchability.', color: '#34D399', glow: 'rgba(52,211,153,0.15)', num: '03', icon: '✍️' },
  { title: 'Image Generation', desc: 'AI-powered tool that creates high-quality visuals based on your specifications and keywords.', color: '#F472B6', glow: 'rgba(244,114,182,0.15)', num: '04', icon: '🎨' },
  { title: 'Data Analyst', desc: 'Analyzes and profiles social media bios to provide insights on personality, interests, and behaviors.', color: '#FBBF24', glow: 'rgba(251,191,36,0.15)', num: '05', icon: '📊' },
  { title: 'Presentation', desc: 'An AI-powered tool that generates stunning new variants of existing products, designs, or content.', color: '#F87171', glow: 'rgba(248,113,113,0.15)', num: '06', icon: '🖥️' },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="py-32 px-6 lg:px-10 bg-[#05050A] relative overflow-hidden">
      <div className="absolute inset-0 mesh-grid opacity-40" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-8 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #7C3AED, transparent)' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-20 gap-8">
          <div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/8 mb-6">
              <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>Use Cases</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="text-5xl lg:text-6xl font-black text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
              Built for Every
              <br />
              <span className="gradient-text">Creative Need</span>
            </motion.h2>
          </div>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg max-w-sm lg:text-right leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Tailored to highlight real-world usage and outcomes of each feature
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {useCases.map((uc, i) => (
            <motion.div
              key={uc.title}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, ease: [0.22,1,0.36,1] }}
              className="glass group relative rounded-2xl p-7 overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(ellipse at 10% 10%, ${uc.glow} 0%, transparent 60%)` }} />

              {/* Top row */}
              <div className="flex items-start justify-between mb-5">
                <div className="text-3xl">{uc.icon}</div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full border"
                  style={{ color: uc.color, borderColor: `${uc.color}30`, background: `${uc.color}10`, fontFamily: "'Outfit', sans-serif" }}>
                  {uc.num}
                </span>
              </div>

              <h3 className="text-lg font-black text-white mb-3 group-hover:text-white transition-colors"
                style={{ fontFamily: "'Syne', sans-serif" }}>
                {uc.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-400 transition-colors mb-6"
                style={{ fontFamily: "'Outfit', sans-serif" }}>
                {uc.desc}
              </p>

              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0"
                style={{ color: uc.color, fontFamily: "'Outfit', sans-serif" }}>
                <span className="text-xs font-bold uppercase tracking-widest">Explore</span>
                <span>→</span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${uc.color}, transparent)` }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}