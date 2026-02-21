import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Select Use-Case',
    desc: 'Choose from a wide range of ready-to-use content templates designed for all your business and creative needs.',
    color: '#A78BFA',
    glow: 'rgba(124,58,237,0.2)',
    emoji: '🎯',
  },
  {
    num: '02',
    title: 'Add Your Context',
    desc: 'Help the AI understand your requirements. The more relevant the input, the better and more personalized the output.',
    color: '#F472B6',
    glow: 'rgba(244,114,182,0.2)',
    emoji: '✍️',
  },
  {
    num: '03',
    title: 'Get Quality Results',
    desc: "Receive plagiarism-free, tailored content that's ready to publish across any platform — fast, easy, and reliable.",
    color: '#34D399',
    glow: 'rgba(52,211,153,0.2)',
    emoji: '🚀',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-32 px-6 lg:px-10 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #05050A 0%, #080812 50%, #05050A 100%)' }}>
      {/* Decorative glows */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[600px] rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #7C3AED, transparent)' }} />
      <div className="absolute right-0 top-1/3 w-[300px] h-[400px] rounded-full opacity-8 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #EC4899, transparent)' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/8 mb-6">
            <span className="text-pink-400 text-xs font-bold tracking-widest uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>Process</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-5xl lg:text-6xl font-black text-white mb-5" style={{ fontFamily: "'Syne', sans-serif" }}>
            How It <span className="gradient-text">Works?</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Three simple steps to world-class content
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-px"
            style={{ background: 'linear-gradient(90deg, rgba(124,58,237,0.3), rgba(236,72,153,0.3), rgba(52,211,153,0.3))' }} />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, ease: [0.22,1,0.36,1] }}
              className="glass group relative rounded-2xl p-8 overflow-hidden"
            >
              {/* BG glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(ellipse at 20% 20%, ${step.glow} 0%, transparent 65%)` }} />

              {/* Step badge */}
              <div className="relative w-14 h-14 rounded-2xl flex items-center justify-center font-black text-xl mb-8 z-10 transition-all duration-300 group-hover:scale-110"
                style={{ background: `${step.color}18`, border: `1px solid ${step.color}40`, color: step.color, fontFamily: "'Syne', sans-serif" }}>
                {step.num}
              </div>

              {/* Big emoji */}
              <div className="text-4xl mb-6">{step.emoji}</div>

              <h3 className="text-xl font-black text-white mb-4 group-hover:text-white transition-colors"
                style={{ fontFamily: "'Syne', sans-serif" }}>
                {step.title}
              </h3>
              <p className="text-slate-500 leading-relaxed text-sm group-hover:text-slate-400 transition-colors"
                style={{ fontFamily: "'Outfit', sans-serif" }}>
                {step.desc}
              </p>

              <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${step.color}, transparent)` }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}