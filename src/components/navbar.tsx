"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, PawPrint } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "glass shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-gold to-amber-500 flex items-center justify-center shadow-premium group-hover:scale-105 transition-transform duration-300">
              <PawPrint className="w-5 h-5 text-white" />
            </div>
            <span className={cn(
              "text-xl font-heading font-bold transition-colors duration-300",
              scrolled ? "text-accent-dark" : "text-white"
            )}>
              21Pooch
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={cn(
                  "text-sm font-button font-medium tracking-wide transition-all duration-300 hover:text-accent-gold relative group",
                  scrolled ? "text-gray-700" : "text-white/90"
                )}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#booking"
              className="px-6 py-2.5 bg-accent-gold text-white rounded-full text-sm font-button font-semibold tracking-wide hover:bg-amber-600 transition-all duration-300 shadow-premium hover:shadow-lg hover:-translate-y-0.5"
            >
              Book Now
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              "md:hidden p-2 rounded-lg transition-colors",
              scrolled ? "text-gray-700" : "text-white"
            )}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass border-t border-white/20"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setMobileOpen(false)}
                  className="block text-gray-700 font-button font-medium text-lg hover:text-accent-gold transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#booking"
                onClick={() => setMobileOpen(false)}
                className="block text-center px-6 py-3 bg-accent-gold text-white rounded-full font-button font-semibold"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
