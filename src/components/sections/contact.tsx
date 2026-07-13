"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, MessageCircle, Globe } from "lucide-react"

const contactInfo = [
  { icon: MapPin, label: "Address", value: "123 Luxury Pet Lane, Beverly Hills, CA 90210" },
  { icon: Phone, label: "Phone", value: "(555) 123-4567" },
  { icon: MessageCircle, label: "WhatsApp", value: "+1 (555) 123-4567" },
  { icon: Mail, label: "Email", value: "hello@21pooch.com" },
  { icon: Clock, label: "Working Hours", value: "Mon - Sat: 8:00 AM - 7:00 PM" },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-primary-lighter relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent-gold font-button text-sm tracking-widest uppercase">Contact</span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-accent-dark mt-4 mb-6">
            Get In Touch
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed font-body">
            We&apos;d love to hear from you. Reach out with any questions or to schedule a visit.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-5 p-5 bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-gold/10 to-amber-100 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-accent-gold" />
                </div>
                <div>
                  <p className="text-sm font-button font-medium text-gray-400 uppercase tracking-wider">{item.label}</p>
                  <p className="text-lg font-heading font-semibold text-accent-dark mt-1">{item.value}</p>
                </div>
              </motion.div>
            ))}

            <div className="flex gap-3 pt-4">
              <a href="#" className="w-12 h-12 rounded-xl bg-white shadow-card flex items-center justify-center text-accent-dark hover:bg-accent-gold hover:text-white transition-all duration-300">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-xl bg-white shadow-card flex items-center justify-center text-accent-dark hover:bg-accent-gold hover:text-white transition-all duration-300">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-xl bg-white shadow-card flex items-center justify-center text-accent-dark hover:bg-accent-gold hover:text-white transition-all duration-300">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-card h-[400px] lg:h-full min-h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27405770525!2d-118.69192057501147!3d34.02016130653294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f284288e4!2sBeverly%20Hills%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1686612345678!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
