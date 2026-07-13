"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Star, Shield, Heart, Award } from "lucide-react"

const stats = [
  { icon: Heart, value: 5000, suffix: "+", label: "Happy Pets", sublabel: "Loving owners" },
  { icon: Award, value: 10, suffix: "+", label: "Years Experience", sublabel: "Since 2016" },
  { icon: Shield, value: 100, suffix: "%", label: "Safe Products", sublabel: "Organic & natural" },
  { icon: Star, value: 4.9, suffix: "★", label: "Customer Rating", sublabel: "Google Reviews" },
]

function AnimatedCounter({ to, suffix, duration = 2 }: { to: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const end = to
    const increment = end / (duration * 60)
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 1000 / 60)
    return () => clearInterval(timer)
  }, [isInView, to, duration])

  return (
    <span ref={ref}>
      {count.toLocaleString("en-US", { maximumFractionDigits: to % 1 === 0 ? 0 : 1 })}
      {suffix}
    </span>
  )
}

export default function Trust() {
  return (
    <section className="py-20 bg-primary-light relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-light via-white to-primary-light" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="text-center p-8 rounded-2xl bg-white shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-gold/10 to-amber-100 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-6 h-6 text-accent-gold" />
                </div>
                <div className="text-4xl lg:text-5xl font-heading font-bold text-accent-dark mb-2">
                  <AnimatedCounter to={stat.value} suffix={stat.suffix} />
                </div>
                <p className="font-semibold text-accent-dark mb-1">{stat.label}</p>
                <p className="text-sm text-gray-500 font-body">{stat.sublabel}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
