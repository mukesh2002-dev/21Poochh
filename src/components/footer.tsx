"use client"

import { motion } from "framer-motion"
import { PawPrint, Mail, Phone, MapPin, Globe, MessageCircle } from "lucide-react"

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
]

const services = [
  "Bath & Brush",
  "Full Grooming",
  "Cat Grooming",
  "Spa Treatment",
  "Deshedding",
]

export default function Footer() {
  return (
    <footer className="bg-accent-dark text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-gold/30 to-transparent" />

      <div className="absolute top-20 right-20 w-64 h-64 bg-accent-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-accent-green/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-gold to-amber-500 flex items-center justify-center">
                <PawPrint className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-heading font-bold">21Pooch</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Where luxury meets love. Premium pet grooming services for dogs and cats who deserve the very best.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white/60 hover:bg-accent-gold hover:text-white transition-all duration-300">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white/60 hover:bg-accent-gold hover:text-white transition-all duration-300">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white/60 hover:bg-accent-gold hover:text-white transition-all duration-300">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-accent-gold text-sm transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent-gold/60" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-heading font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-white/60 hover:text-accent-gold text-sm transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent-gold/60" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-heading font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="w-4 h-4 mt-0.5 text-accent-gold flex-shrink-0" />
                123 Luxury Pet Lane, Beverly Hills
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Phone className="w-4 h-4 text-accent-gold flex-shrink-0" />
                (555) 123-4567
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Mail className="w-4 h-4 text-accent-gold flex-shrink-0" />
                hello@21pooch.com
              </li>
            </ul>

            <div className="mt-8">
              <h5 className="text-sm font-button font-semibold text-white/80 mb-3">Newsletter</h5>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2.5 rounded-xl bg-white/10 border border-white/10 text-white text-sm placeholder:text-white/30 outline-none focus:border-accent-gold/50 transition-colors"
                />
                <button className="px-4 py-2.5 bg-accent-gold text-white rounded-xl text-sm font-button font-semibold hover:bg-amber-600 transition-colors">
                  Join
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>&copy; {new Date().getFullYear()} 21Pooch. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
