import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: 0,
    color: '#64748B',
    glow: 'rgba(100,116,139,0.1)',
    features: ['5K Words Generate', '1 Image Generate', '40 Templates Access', 'Article Generator', 'Premium Templates', 'Smart Editor'],
    disabled: true,
    cta: 'Get Started Free',
  },
  {
    name: 'Standard',
    price: 1650,
    popular: true,
    color: '#A78BFA',
    glow: 'rgba(124,58,237,0.2)',
    features: ['100K Words Generate', '10 Images Generate', '40 Templates Access', 'Assistant Access', 'Article Generator', 'Content Rewriter', 'Premium Templates', 'Data Analyst Access', 'Smart Editor'],
    cta: 'Subscribe Now',
  },
  {
    name: 'Premium',
    price: 6900,
    color: '#F472B6',
    glow: 'rgba(244,114,182,0.2)',
    features: ['50M+ Words Generate', '50 Images Generate', '40 Templates Access', 'Assistant Access', 'Article Generator', 'Content Rewriter', 'Premium Templates', 'Data Analyst Access', 'Presentation Generator', 'Advanced Support', 'Smart Editor'],
    cta: 'Go Premium',
  },
];

export default function Pricing() {
  const [monthly, setMonthly] = useState(true);

  return (
    <section id="pricing" className="py-32 px-6 lg:px-10 bg-[#05050A] relative overflow-hidden">
      <div className="absolute inset-0 mesh-grid opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full opacity-8 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #7C3AED, transparent)' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/8 mb-6">
            <Sparkles className="w-3 h-3 text-violet-400" />
            <span className="text-violet-400 text-xs font-bold tracking-widest uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>Pricing</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-5xl lg:text-6xl font-black text-white mb-5" style={{ fontFamily: "'Syne', sans-serif" }}>
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg max-w-xl mx-auto" style={{ fontFamily: "'Outfit', sans-serif" }}>
            You're only charged based on your monthly usage. No hidden fees.
          </motion.p>
        </div>

        {/* Toggle */}
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="flex justify-center mb-16">
          <div className="flex p-1.5 rounded-2xl glass border border-white/8">
            {['Monthly', 'Yearly'].map((t) => (
              <button key={t}
                onClick={() => setMonthly(t === 'Monthly')}
                className={`px-8 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                  (t === 'Monthly') === monthly
                    ? 'bg-gradient-to-r from-violet-600 to-pink-600 text-white shadow-lg shadow-violet-500/25'
                    : 'text-slate-400 hover:text-white'
                }`}
                style={{ fontFamily: "'Outfit', sans-serif" }}>
                {t}
                {t === 'Yearly' && <span className="ml-2 text-xs text-emerald-400">Save 20%</span>}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, ease: [0.22,1,0.36,1] }}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${plan.popular ? 'md:scale-105 md:-translate-y-2' : ''}`}
            >
              {/* Gradient border for popular */}
              {plan.popular && (
                <div className="absolute inset-0 rounded-2xl p-px"
                  style={{ background: 'linear-gradient(135deg, #7C3AED, #EC4899, #06B6D4)' }}>
                  <div className="absolute inset-0 rounded-2xl bg-[#0C0C1A]" />
                </div>
              )}

              <div className={`relative rounded-2xl overflow-hidden h-full ${!plan.popular ? 'glass' : ''}`}
                style={plan.popular ? { background: 'linear-gradient(145deg, rgba(124,58,237,0.15), rgba(236,72,153,0.08))' } : {}}>

                {plan.popular && (
                  <div className="text-center py-2 text-xs font-bold tracking-widest uppercase text-violet-300"
                    style={{ background: 'linear-gradient(90deg, rgba(124,58,237,0.2), rgba(236,72,153,0.2))', fontFamily: "'Outfit', sans-serif" }}>
                    ✦ Most Popular ✦
                  </div>
                )}

                <div className="p-8">
                  {/* Name */}
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-black text-white" style={{ fontFamily: "'Syne', sans-serif" }}>{plan.name}</h3>
                    <div className="w-3 h-3 rounded-full" style={{ background: plan.color, boxShadow: `0 0 12px ${plan.color}` }} />
                  </div>

                  {/* Price */}
                  <div className="mb-8 pb-8 border-b border-white/8">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-black" style={{ color: plan.color, fontFamily: "'Syne', sans-serif" }}>
                        ₹{plan.price}
                      </span>
                      <span className="text-slate-500 text-sm" style={{ fontFamily: "'Outfit', sans-serif" }}>
                        /{monthly ? 'mo' : 'yr'}
                      </span>
                    </div>
                  </div>

                  {/* CTA */}
                  <button
                    disabled={plan.disabled}
                    className={`w-full py-3.5 rounded-xl font-bold text-sm mb-8 transition-all duration-300 ${
                      plan.disabled
                        ? 'bg-white/5 text-slate-500 cursor-not-allowed'
                        : plan.popular
                        ? 'btn-glow text-white'
                        : 'text-white border border-white/15 hover:border-violet-500/50 hover:bg-violet-500/8'
                    }`}
                    style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: '0.05em' }}>
                    {plan.cta}
                  </button>

                  {/* Features */}
                  <ul className="space-y-3.5">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ background: `${plan.color}18` }}>
                          <Check className="w-3 h-3" style={{ color: plan.color }} />
                        </div>
                        <span className="text-slate-400 text-sm" style={{ fontFamily: "'Outfit', sans-serif" }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}