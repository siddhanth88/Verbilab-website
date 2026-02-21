import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { num: '01', title: 'Select use-case', desc: 'Choose from a wide range of ready-to-use content templates designed for all your business and creative needs.' },
  { num: '02', title: 'Add Your Context', desc: 'Help the AI understand your requirements by entering key details. The more relevant the input, the better the output.' },
  { num: '03', title: 'Get High-Quality Results', desc: "Receive plagiarism-free, tailored content that's ready to publish across any platform—fast, easy, and reliable." },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 bg-grid">
      <div className="max-w-7xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold text-center text-slate-900 mb-4">
          How It Works?
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-xl text-slate-600 text-center mb-16">
          Use these steps to generate high-quality content.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <motion.div key={step.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="group relative bg-white rounded-2xl p-8 border border-slate-100 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300">
              <div className="absolute -top-4 left-8 w-14 h-14 rounded-full bg-gradient-to-br from-lime-400 to-yellow-400 flex items-center justify-center text-slate-900 font-bold shadow-lg group-hover:scale-110 transition-transform">
                {step.num}
              </div>
              <div className="h-48 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 mb-6 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-slate-300/50" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
