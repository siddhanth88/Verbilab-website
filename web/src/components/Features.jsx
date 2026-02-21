import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Search, PenTool, Image, BarChart3, Presentation, Calendar } from 'lucide-react';

const features = [
  { icon: FileText, title: 'Keywords Generator' },
  { icon: Search, title: 'SEO Optimizer' },
  { icon: PenTool, title: 'Content' },
  { icon: Image, title: 'Image Creation' },
  { icon: BarChart3, title: 'Data Analyst' },
  { icon: Presentation, title: 'Presentations' },
  { icon: Calendar, title: 'Scheduler' },
];

export default function Features() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold text-center text-slate-900 mb-16"
        >
          From ideas to Publishing
          <br />
          <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
            Verbilab does it ALL
          </span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group p-6 rounded-2xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-slate-200 to-slate-300 group-hover:from-cyan-500 group-hover:to-blue-600 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110">
                <feature.icon className="w-7 h-7 text-slate-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-semibold text-slate-800 group-hover:text-slate-900">{feature.title}</h3>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
