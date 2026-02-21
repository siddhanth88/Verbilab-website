import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white">
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-3xl font-bold text-center text-slate-900 mb-12">
            The top rated All-In-One optimization tool
          </motion.h2>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-slate-900 mb-3">Google</div>
              <div className="flex gap-0.5 mb-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className={`w-6 h-6 ${i <= 4 ? 'fill-amber-400 text-amber-400' : 'fill-amber-200 text-amber-200'}`} />
                ))}
              </div>
              <div className="text-slate-600">4.3 (6 M+)</div>
            </div>

            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 flex flex-col items-center justify-center shadow-2xl border-4 border-amber-300">
                <Star className="w-10 h-10 text-amber-900 mb-0.5" />
                <span className="text-xs font-bold text-amber-900">FIRST</span>
                <span className="text-xs font-bold text-amber-900">PLACE</span>
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                FIRST PLACE
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-slate-900 mb-3">Yandex</div>
              <div className="flex gap-0.5 mb-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className={`w-6 h-6 ${i <= 4 ? 'fill-amber-400 text-amber-400' : 'fill-amber-200 text-amber-200'}`} />
                ))}
              </div>
              <div className="text-slate-600">4.8 (8 M+)</div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-2">
              <a href="/" className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-lime-400 to-yellow-400 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">V</span>
                  </div>
                </div>
                <span className="text-xl font-bold text-slate-900">verbilab</span>
              </a>
              <p className="text-slate-600 text-sm max-w-md leading-relaxed">
                AI Writing Tool is a website that provides users with a powerful and efficient tool for automatically creating unique content.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-4">Follow Us</h3>
              <ul className="space-y-3">
                {['Facebook', 'Twitter', 'Instagram'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-slate-600 hover:text-cyan-600 transition-colors text-sm">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-4">Support</h3>
              <ul className="space-y-3">
                {['FAQ', 'About Us', 'Contact Us'].map((link) => (
                  <li key={link}><a href="#" className="text-slate-600 hover:text-cyan-600 transition-colors text-sm">{link}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-4">Policy</h3>
              <ul className="space-y-3">
                {['Terms of Use', 'Privacy Policy', 'Refund Policy'].map((link) => (
                  <li key={link}><a href="#" className="text-slate-600 hover:text-cyan-600 transition-colors text-sm">{link}</a></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-12 mt-12 border-t border-slate-200 text-center">
            <p className="text-slate-600 text-sm">Copyright © 2025 Verbilab</p>
          </div>
        </div>
      </section>
    </footer>
  );
}
