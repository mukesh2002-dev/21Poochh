"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { PawPrint, Star, ChevronDown, Clock, Sparkles, Shield } from "lucide-react"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const { clientX, clientY } = e
      const x = (clientX / window.innerWidth - 0.5) * 20
      const y = (clientY / window.innerHeight - 0.5) * 20
      containerRef.current.style.setProperty("--mouse-x", x + "px")
      containerRef.current.style.setProperty("--mouse-y", y + "px")
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen overflow-hidden bg-gradient-to-br from-accent-dark via-accent-dark to-gray-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-gold/10 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-green/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-amber-500/5 rounded-full blur-2xl animate-float" />
        <motion.div
          className="absolute top-[15%] left-[8%] w-16 h-16 border border-accent-gold/20 rounded-full"
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[25%] right-[12%] w-8 h-8 bg-accent-gold/10 rounded-full"
          animate={{ y: [0, 10, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute bottom-[30%] left-[15%] w-12 h-12 border border-white/10 rounded-lg rotate-45"
          animate={{ rotate: [45, 55, 45], y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full pt-20">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/10"
            >
              <Sparkles className="w-4 h-4 text-accent-gold" />
              <span className="text-sm font-button text-white/80 tracking-wide">
                Premium Pet Grooming Salon
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight"
            >
              Luxury Grooming
              <br />
              <span className="text-gradient">Experience</span>
              <br />
              For Dogs &amp; Cats
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-xl text-white/60 max-w-lg leading-relaxed font-body"
            >
              Professional grooming, stress-free care, and a spa experience your pet will truly enjoy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#booking"
                className="group px-8 py-4 bg-accent-gold text-white rounded-full font-button font-semibold text-sm tracking-wider uppercase transition-all duration-300 hover:bg-amber-600 shadow-premium hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2"
              >
                Book Appointment
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-block"
                >
                  {">"}
                </motion.span>
              </a>
              <a
                href="#services"
                className="group px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-button font-semibold text-sm tracking-wider uppercase transition-all duration-300 hover:bg-white/20 border border-white/10 flex items-center gap-2"
              >
                View Services
                <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex items-center gap-6 pt-4"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-accent-dark bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center text-xs font-bold text-accent-dark"
                  >
                    <PawPrint className="w-4 h-4" />
                  </div>
                ))}
              </div>
              <div className="text-white/60 text-sm font-body">
                <span className="text-white font-semibold">5000+</span> Happy Pets
              </div>
              <div className="flex items-center gap-1 text-accent-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden image-glow">
              <img
                src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800"
                alt="Happy dog in luxury salon"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent-dark/40 via-transparent to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute -bottom-6 -left-6 glass rounded-2xl p-5 shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-green/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-accent-green" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-accent-dark">100% Safe</p>
                  <p className="text-xs text-gray-500">Premium Products</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="absolute -top-6 -right-6 glass rounded-2xl p-5 shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-gold/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-accent-gold" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-accent-dark">Express Service</p>
                  <p className="text-xs text-gray-500">Under 45 min</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/40 cursor-pointer"
        >
          <span className="text-xs font-button tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  )
}
