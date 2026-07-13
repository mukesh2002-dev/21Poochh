"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { testimonials } from "@/lib/data"

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((c) => (c + 1) % testimonials.length)
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent-green/5 via-transparent to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent-gold font-button text-sm tracking-widest uppercase">Testimonials</span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-accent-dark mt-4 mb-6">
            What Pet Parents Say
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed font-body">
            Real reviews from real pet parents who trust us with their furry family members.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
                className="bg-primary-light rounded-3xl p-8 md:p-12 shadow-card"
              >
                <div className="flex items-start gap-2 mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent-gold fill-accent-gold" />
                  ))}
                </div>

                <Quote className="w-10 h-10 text-accent-gold/30 mb-4" />

                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonials[current].customerImage}
                      alt={testimonials[current].name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-heading font-bold text-accent-dark">{testimonials[current].name}</p>
                      <p className="text-sm text-gray-500">
                        {testimonials[current].petName} &middot; {testimonials[current].petType}
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                    <img
                      src={testimonials[current].petImage}
                      alt={testimonials[current].petName}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-xs font-medium text-gray-600">Verified Pet Parent</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white shadow-card hover:shadow-card-hover flex items-center justify-center text-accent-dark hover:text-accent-gold transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === current ? "bg-accent-gold w-8" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white shadow-card hover:shadow-card-hover flex items-center justify-center text-accent-dark hover:text-accent-gold transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
