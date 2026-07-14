"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Clock, Star, ChevronRight } from "lucide-react"
import { services } from "@/lib/data"

export default function Services() {
  const [filter, setFilter] = useState<string>("all")
  const categories = ["all", "Bath & Brush", "Full Grooming", "Cat Grooming", "Spa Treatment"]

  const filtered = filter === "all" ? services : services.filter(s => s.title.includes(filter) || s.description.includes(filter.split(" ")[0]))

  return (
    <section id="services" className="py-24 bg-primary-lighter relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-accent-gold font-button text-sm tracking-widest uppercase">Our Services</span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-accent-dark mt-4 mb-6">
            Premium Grooming Services
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed font-body">
            From a quick refresh to a full luxury makeover, we offer everything your pet needs to look and feel their best.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-button font-medium transition-all duration-300 ${
                filter === cat
                  ? "bg-accent-gold text-white shadow-premium"
                  : "bg-white text-gray-600 hover:bg-gray-100 shadow-sm"
              }`}
            >
              {cat === "all" ? "All Services" : cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((service) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-button font-semibold text-accent-dark shadow-sm">
                    <span className="text-accent-gold">{service.price}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-heading font-bold text-accent-dark mb-2">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{service.description}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-400 font-body mb-4">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {service.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-accent-gold fill-accent-gold/30" />
                      Premium
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="#booking"
                      className="flex-1 text-center px-4 py-2.5 bg-accent-gold text-white rounded-xl text-xs font-button font-semibold tracking-wide hover:bg-amber-600 transition-colors"
                    >
                      Book Now
                    </a>
                    <button className="px-4 py-2.5 border border-gray-200 text-accent-dark rounded-xl text-xs font-button font-semibold hover:bg-gray-50 transition-colors flex items-center gap-1">
                      Details <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
