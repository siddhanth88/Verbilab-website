import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-grid bg-slate-50/50">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-lime-200/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-700"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Your All-in-One AI Tool to Write, Design, and Create Smarter.</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] text-slate-900"
            >
              Verbilab Creates{' '}
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Human-Like
              </span>
              , High Impact Content In Seconds.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl font-semibold"
            >
              <span className="text-amber-600">Powered by AI.</span>{' '}
              <span className="text-violet-600">Inspired by You.</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-slate-600 max-w-xl"
            >
              Write smarter, design faster, and build more without switching tabs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-lime-400 to-yellow-400 text-slate-900 font-bold text-lg shadow-xl shadow-lime-400/40 hover:shadow-lime-400/50 hover:-translate-y-1 transition-all duration-200">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative w-full h-[600px] lg:h-[700px]"
          >
            {/* Animated AI Neural Network Visualization */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-slate-50 via-cyan-50/30 to-blue-50/40 shadow-2xl border-2 border-cyan-200/50 backdrop-blur-sm">
              {/* Animated Background Gradient */}
              <div className="absolute inset-0">
                <motion.div
                  animate={{
                    background: [
                      'radial-gradient(circle at 20% 30%, rgba(6, 182, 212, 0.6) 0%, transparent 60%)',
                      'radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.6) 0%, transparent 60%)',
                      'radial-gradient(circle at 50% 50%, rgba(190, 242, 100, 0.5) 0%, transparent 60%)',
                      'radial-gradient(circle at 20% 30%, rgba(6, 182, 212, 0.6) 0%, transparent 60%)',
                    ],
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-0"
                />
              </div>

              {/* Floating Particles */}
              {[...Array(30)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg shadow-cyan-400/50"
                  initial={{
                    x: Math.random() * 100 + '%',
                    y: Math.random() * 100 + '%',
                    opacity: 0,
                  }}
                  animate={{
                    y: [null, Math.random() * -100 - 50 + 'px', Math.random() * 100 + 50 + 'px'],
                    x: [null, Math.random() * 50 - 25 + 'px'],
                    opacity: [0, 1, 0],
                    scale: [0, 1.2, 0],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                    ease: 'easeInOut',
                  }}
                />
              ))}

              {/* Neural Network Nodes */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 600">
                {/* Animated Connections */}
                {[
                  [50, 100, 150, 200],
                  [100, 150, 200, 250],
                  [150, 200, 250, 300],
                  [200, 250, 300, 350],
                  [250, 300, 350, 400],
                  [300, 350, 400, 450],
                  [350, 400, 450, 500],
                ].map((path, i) => (
                  <motion.path
                    key={i}
                    d={`M ${path[0]} ${path[1]} Q ${path[2]} ${path[3]} ${path[4]} ${path[5]}`}
                    stroke="url(#gradient)"
                    strokeWidth="3"
                    fill="none"
                    opacity="0.6"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.6 }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      delay: i * 0.2,
                    }}
                  />
                ))}

                {/* Gradient Definition */}
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06B6D4" stopOpacity="1" />
                    <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#BEF264" stopOpacity="0.8" />
                  </linearGradient>
                </defs>

                {/* Animated Nodes */}
                {[
                  { x: 100, y: 150 },
                  { x: 200, y: 100 },
                  { x: 300, y: 150 },
                  { x: 150, y: 250 },
                  { x: 250, y: 250 },
                  { x: 100, y: 350 },
                  { x: 200, y: 400 },
                  { x: 300, y: 350 },
                  { x: 150, y: 450 },
                  { x: 250, y: 450 },
                ].map((node, i) => (
                  <g key={i}>
                    <motion.circle
                      cx={node.x}
                      cy={node.y}
                      r="10"
                      fill="url(#gradient)"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.8, 1, 0.8],
                      }}
                      transition={{
                        duration: 2 + i * 0.2,
                        repeat: Infinity,
                        delay: i * 0.1,
                        ease: 'easeInOut',
                      }}
                    />
                    <motion.circle
                      cx={node.x}
                      cy={node.y}
                      r="14"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="3"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{
                        scale: [1, 2.2, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2 + i * 0.2,
                        repeat: Infinity,
                        delay: i * 0.1,
                        ease: 'easeInOut',
                      }}
                    />
                  </g>
                ))}
              </svg>

              {/* Central AI Brain Visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="relative w-48 h-48"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  {/* Outer Ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-4 border-cyan-400/30"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  {/* Middle Ring */}
                  <motion.div
                    className="absolute inset-4 rounded-full border-4 border-blue-400/40"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.4, 0.7, 0.4],
                    }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                  />
                  {/* Inner Core */}
                  <motion.div
                    className="absolute inset-8 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-lime-400"
                    animate={{
                      scale: [1, 1.1, 1],
                      boxShadow: [
                        '0 0 20px rgba(6, 182, 212, 0.5)',
                        '0 0 40px rgba(59, 130, 246, 0.8)',
                        '0 0 20px rgba(6, 182, 212, 0.5)',
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className="text-4xl"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      >
                        ✨
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Floating AI Text Elements */}
              {['AI', 'GPT', 'ML', 'NLP'].map((text, i) => (
                <motion.div
                  key={text}
                  className="absolute text-cyan-500 font-bold text-3xl drop-shadow-lg"
                  style={{ textShadow: '0 0 10px rgba(6, 182, 212, 0.8)' }}
                  initial={{
                    x: Math.random() * 300 + 50,
                    y: Math.random() * 400 + 100,
                    opacity: 0,
                  }}
                  animate={{
                    y: [null, Math.random() * -50 - 25 + 'px', Math.random() * 50 + 25 + 'px'],
                    opacity: [0, 0.9, 0],
                    scale: [0.8, 1.1, 0.8],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 2,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: 'easeInOut',
                  }}
                >
                  {text}
                </motion.div>
              ))}

              {/* Animated Grid Overlay */}
              <div className="absolute inset-0 opacity-20">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                  }}
                />
              </div>

              {/* Glowing Orbs */}
              {[
                { x: '10%', y: '20%', color: 'rgba(6, 182, 212, 0.5)' },
                { x: '85%', y: '30%', color: 'rgba(59, 130, 246, 0.5)' },
                { x: '20%', y: '80%', color: 'rgba(190, 242, 100, 0.5)' },
                { x: '75%', y: '75%', color: 'rgba(251, 191, 36, 0.5)' },
              ].map((orb, i) => (
                <motion.div
                  key={i}
                  className="absolute w-40 h-40 rounded-full blur-3xl"
                  style={{ left: orb.x, top: orb.y, backgroundColor: orb.color }}
                  animate={{
                    scale: [1, 1.8, 1],
                    opacity: [0.5, 0.9, 0.5],
                  }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center text-slate-500 mt-20"
        >
          Adopted by Forward-Thinking Businesses. While They Focus on Strategy, Verbilab Handles the Content Workload.
        </motion.p>
      </div>
    </section>
  );
}
