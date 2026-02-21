import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-grid bg-slate-50/50">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-lime-200/30 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
        <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-700">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Your All-in-One AI Tool to Write, Design, and Create Smarter.</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-slate-900">
              Verbilab Creates{' '}
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Human-Like</span>
              , High Impact Content In Seconds.
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl font-semibold">
              <span className="text-amber-600">Powered by AI.</span> <span className="text-violet-600">Inspired by You.</span>
            </motion.p>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-slate-600 max-w-xl">
              Write smarter, design faster, and build more without switching tabs.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
              <button className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-lime-400 to-yellow-400 text-slate-900 font-bold text-lg shadow-xl shadow-lime-400/40 hover:shadow-lime-400/50 hover:-translate-y-1 transition-all duration-200">
                Get Started <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.3 }} className="relative">
            <div className="relative bg-slate-900 rounded-t-2xl p-3 shadow-2xl">
              <div className="aspect-video rounded-lg overflow-hidden bg-white border border-slate-200">
                <div className="h-full p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-bold text-slate-800">Hello, Surya</span>
                    <span className="text-sm text-slate-500">Plans & Pricing</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {['0 Words generated', '0 Images generated', '5,000 Words credit left', '0 Hours credit left'].map((stat) => (
                      <div key={stat} className="p-3 rounded-lg bg-slate-50 text-sm">
                        <div className="text-slate-500 text-xs">{stat.split(' ').slice(1).join(' ')}</div>
                        <div className="font-semibold text-slate-800">{stat.split(' ')[0]}</div>
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-700 mb-2">Most Popular</div>
                    <div className="flex gap-2 flex-wrap">
                      {['Question Generator', 'Keyword Generator', 'Headline Generator', 'Summarize'].map((item) => (
                        <div key={item} className="px-3 py-2 rounded-lg bg-slate-100 text-xs font-medium text-slate-700">{item}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-3 left-0 right-0 h-3 bg-slate-800 rounded-b-2xl mx-4" />
          </motion.div>
        </div>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
          className="text-center text-slate-500 mt-20">
          Adopted by Forward-Thinking Businesses. While They Focus on Strategy, Verbilab Handles the Content Workload.
        </motion.p>
      </div>
    </section>
  );
}
