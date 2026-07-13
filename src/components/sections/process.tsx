"use client"

import { motion } from "framer-motion"
import { Calendar, Heart, Sparkles, Scissors, CheckCircle, Smile } from "lucide-react"

const steps = [
  { icon: Calendar, title: "Book Appointment", description: "Choose your service and preferred time slot online." },
  { icon: Heart, title: "Pet Health Check", description: "Gentle assessment to ensure your pet is comfortable." },
  { icon: Sparkles, title: "Bath & Spa", description: "Luxurious bath with premium organic products." },
  { icon: Scissors, title: "Hair Styling", description: "Expert trimming and styling by certified groomers." },
  { icon: CheckCircle, title: "Quality Check", description: "Thorough review to ensure perfection." },
  { icon: Smile, title: "Happy Pickup", description: "Your pet leaves looking and feeling fantastic!" },
]

export default function Process() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent-gold/5 via-transparent to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent-gold font-button text-sm tracking-widest uppercase">Our Process</span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-accent-dark mt-4 mb-6">
            The Grooming Journey
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed font-body">
            From arrival to departure, every step is designed with your pet&apos;s comfort and happiness in mind.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-gold/40 via-accent-gold/20 to-transparent -translate-x-1/2" />

          <div className="grid lg:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-start gap-6 p-6 lg:p-8 rounded-2xl bg-white shadow-card hover:shadow-card-hover transition-all duration-500 group ${
                  index % 2 === 0 ? "lg:pr-16" : "lg:pl-16 lg:col-start-2"
                }`}
              >
                <div className="relative flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-gold/10 to-amber-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-6 h-6 text-accent-gold" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent-gold text-white text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-heading font-bold text-accent-dark mb-2">{step.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
