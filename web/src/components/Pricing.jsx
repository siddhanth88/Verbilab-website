import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  { name: 'Standard', price: 1650, popular: true, features: ['100K Words Generate', '10 Images Generate', '40 Templates Access', 'Assistant Access', 'Article Generator', 'Content Rewriter', 'Premium Templates', 'Data Analyst Access', 'Smart Editor'] },
  { name: 'Free', price: 0, popular: false, features: ['5K Words Generate', '1 Images Generate', '40 Templates Access', 'Article Generator', 'Premium Templates', 'Smart Editor'], disabled: true },
  { name: 'Premium', price: 6900, popular: false, features: ['50M+ Words Generate', '50 Images Generate', '40 Templates Access', 'Assistant Access', 'Article Generator', 'Content Rewriter', 'Premium Templates', 'Data Analyst Access', 'Presentation Generator', 'Advanced Support', 'Smart Editor'] },
];

export default function Pricing() {
  const [monthly, setMonthly] = useState(true);

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 bg-grid">
      <div className="max-w-7xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold text-center text-slate-900 mb-4">
          Our Pricing
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-xl text-slate-600 text-center mb-8 max-w-2xl mx-auto">
          Our plans are simple and transparent—you're only charged based on your monthly usage
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="flex justify-center gap-2 mb-16">
          <button onClick={() => setMonthly(true)}
            className={`px-6 py-2.5 rounded-full font-semibold transition-all ${monthly ? 'bg-slate-900 text-white shadow-lg' : 'text-slate-600 hover:bg-slate-100'}`}>
            MONTHLY
          </button>
          <button onClick={() => setMonthly(false)}
            className={`px-6 py-2.5 rounded-full font-semibold transition-all ${!monthly ? 'bg-slate-900 text-white shadow-lg' : 'text-slate-600 hover:bg-slate-100'}`}>
            YEARLY
          </button>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div key={plan.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 bg-white border-2 transition-all duration-300 ${
                plan.popular ? 'border-cyan-500 shadow-xl shadow-cyan-500/20 md:scale-105' : 'border-slate-200 hover:border-cyan-300 hover:shadow-xl'
              }`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-gradient-to-r from-lime-400 to-yellow-400 text-slate-900 text-sm font-bold shadow-lg">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold text-slate-900 mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-slate-900">₹{plan.price}</span>
                <span className="text-slate-600 ml-1">/{monthly ? 'Month' : 'Year'}</span>
              </div>

              <button disabled={plan.disabled}
                className={`w-full py-4 rounded-xl font-bold text-lg mb-6 transition-all duration-200 ${
                  plan.disabled ? 'bg-slate-200 text-slate-500 cursor-not-allowed' : 'bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5'
                }`}>
                SUBSCRIBE
              </button>

              <ul className="space-y-4">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
