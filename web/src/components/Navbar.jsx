import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';

const navLinks = [
  { name: 'Use Cases', href: '#use-cases' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Blog', href: '#blog' },
  { name: 'Support', href: '#support' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#05050A]/80 backdrop-blur-2xl border-b border-white/5 shadow-2xl shadow-black/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-600 to-pink-500 opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-600 to-pink-500 blur-md opacity-50 group-hover:opacity-80 transition-opacity" />
              <div className="relative w-full h-full rounded-xl flex items-center justify-center">
                <Zap className="w-5 h-5 text-white fill-white" />
              </div>
            </div>
            <span className="text-xl font-bold text-white tracking-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
              verbi<span className="text-transparent bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text">lab</span>
            </span>
          </a>

          {/* Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors group"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-pink-500 group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            ))}
          </div>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              className="px-5 py-2.5 text-sm font-semibold text-slate-300 hover:text-white border border-white/10 hover:border-violet-500/50 rounded-xl transition-all duration-300 hover:bg-violet-500/5"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Log In
            </button>
            <button
              className="btn-glow px-6 py-2.5 text-sm font-bold text-white rounded-xl"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Sign Up Free
            </button>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-white p-2">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0A0A14]/95 backdrop-blur-2xl border-t border-white/5"
          >
            <div className="px-6 py-6 space-y-2">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setMobileOpen(false)}
                  className="block py-3 px-4 text-slate-300 hover:text-white hover:bg-white/5 rounded-xl font-medium transition-all"
                  style={{ fontFamily: "'Outfit', sans-serif" }}>
                  {link.name}
                </a>
              ))}
              <div className="pt-4 flex gap-3">
                <button className="flex-1 py-3 border border-white/10 rounded-xl text-white font-semibold text-sm">Log In</button>
                <button className="flex-1 py-3 btn-glow rounded-xl text-white font-bold text-sm">Sign Up Free</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}