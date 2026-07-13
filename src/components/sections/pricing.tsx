"use client"

import { motion } from "framer-motion"
import { Check, Sparkles, Shield, Star } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$49",
    duration: "per session",
    description: "Perfect for a quick refresh",
    popular: false,
    features: [
      "Bath & Brush",
      "Nail Trimming",
      "Ear Cleaning",
      "Blow Dry",
      "Basic Brush Out",
      "Paw Pad Trim",
    ],
  },
  {
    name: "Premium",
    price: "$89",
    duration: "per session",
    description: "Our most popular package",
    popular: true,
    features: [
      "Everything in Starter",
      "Full Haircut & Styling",
      "Deep Condition Treatment",
      "Teeth Brushing",
      "Deshedding Treatment",
      "Aromatherapy Finish",
      "Premium Bandana",
    ],
  },
  {
    name: "Luxury Spa",
    price: "$149",
    duration: "per session",
    description: "The ultimate pampering",
    popular: false,
    features: [
      "Everything in Premium",
      "Organic Spa Bath",
      "Coconut Oil Treatment",
      "Paw Massage",
      "Fragrance Mist",
      "Photo Session",
      "Gourmet Treats",
      "Priority Scheduling",
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-accent-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-green/5 rounded-full blur-3xl" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent-gold font-button text-sm tracking-widest uppercase">Pricing</span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-accent-dark mt-4 mb-6">
            Simple &amp; Transparent Pricing
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed font-body">
            Choose the perfect package for your pet&apos;s needs. No hidden fees, just premium care.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 transition-all duration-500 ${
                plan.popular
                  ? "bg-accent-dark text-white shadow-premium scale-105 lg:scale-110 border-2 border-accent-gold"
                  : "bg-white text-accent-dark shadow-card hover:shadow-card-hover border border-gray-100"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 bg-accent-gold text-white text-xs font-button font-bold rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 fill-white" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-heading font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm ${plan.popular ? "text-white/60" : "text-gray-500"}`}>{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-5xl font-heading font-bold">{plan.price}</span>
                <span className={`text-sm ml-2 ${plan.popular ? "text-white/60" : "text-gray-400"}`}>{plan.duration}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                      plan.popular ? "text-accent-gold" : "text-accent-green"
                    }`} />
                    <span className={plan.popular ? "text-white/80" : "text-gray-600"}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#booking"
                className={`block text-center w-full py-3.5 rounded-xl font-button font-semibold text-sm tracking-wide transition-all duration-300 ${
                  plan.popular
                    ? "bg-accent-gold text-white hover:bg-amber-600 shadow-premium"
                    : "bg-gray-100 text-accent-dark hover:bg-gray-200"
                }`}
              >
                Book Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
