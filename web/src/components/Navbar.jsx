import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

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
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-slate-200/50' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/25 group-hover:shadow-cyan-500/40 transition-shadow duration-300">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-lime-400 to-yellow-400 flex items-center justify-center">
                <span className="text-white text-sm font-black">V</span>
              </div>
            </div>
            <span className="text-2xl font-bold text-slate-900 tracking-tight">verbilab</span>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2.5 text-slate-600 hover:text-cyan-600 font-medium rounded-lg hover:bg-slate-50 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <button className="px-5 py-2.5 rounded-xl border-2 border-slate-900 text-slate-900 font-semibold hover:bg-slate-900 hover:text-white transition-all duration-200">
              Log In
            </button>
            <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-lime-400 to-yellow-400 text-slate-900 font-semibold shadow-lg shadow-lime-400/30 hover:shadow-lime-400/50 hover:-translate-y-0.5 transition-all duration-200">
              Sign Up
            </button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setMobileOpen(false)} className="block py-3 px-4 text-slate-600 font-medium rounded-lg hover:bg-slate-50">
                  {link.name}
                </a>
              ))}
              <div className="pt-4 flex gap-3">
                <button className="flex-1 py-3 rounded-xl border-2 border-slate-900 font-semibold">Log In</button>
                <button className="flex-1 py-3 rounded-xl bg-gradient-to-r from-lime-400 to-yellow-400 font-semibold">Sign Up</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
