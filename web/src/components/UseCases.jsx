import React from 'react';
import { motion } from 'framer-motion';

const useCases = [
  { title: 'Keyword Generator', desc: 'Utilizes natural language processing to generate engaging and relevant blog titles.', color: 'from-cyan-400 to-blue-400' },
  { title: 'SEO Optimizer', desc: 'Writes effective cover letters by analyzing job descriptions, personalizing content, and providing feedback for enhancement.', color: 'from-violet-400 to-purple-500' },
  { title: 'Content Writer', desc: 'Generates descriptive text for videos, enhancing accessibility and improving searchability.', color: 'from-emerald-400 to-green-500' },
  { title: 'Image Generation', desc: 'AI-powered tool that creates high-quality articles based on user specifications and keywords.', color: 'from-orange-400 to-amber-500' },
  { title: 'Data Analyst', desc: 'Analyzes and profiles social media bios to provide insights on personality, interests, and behaviors.', color: 'from-amber-400 to-yellow-500' },
  { title: 'Presentation', desc: 'An AI-powered tool that generates new variants of existing products, designs, or content.', color: 'from-lime-400 to-green-400' },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold text-center text-slate-900 mb-4">
          Use Cases
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-xl text-slate-600 text-center mb-16">
          Tailored to highlight real-world usage and outcomes of each feature
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((uc, i) => (
            <motion.div key={uc.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="group bg-white rounded-2xl p-8 border border-slate-100 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 cursor-pointer">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${uc.color} mb-6 flex items-center justify-center group-hover:scale-110 transition-transform`} />
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">{uc.title}</h3>
              <p className="text-slate-600">{uc.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
