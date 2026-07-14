"use client"

import { motion } from "framer-motion"
import { Award, Heart, Sparkles, Leaf, Scissors, Shield, Users, Gem } from "lucide-react"

const features = [
  { icon: Award, title: "Certified Groomers", description: "All our groomers are IPG certified with years of professional experience." },
  { icon: Heart, title: "Pet-Friendly Environment", description: "Calming atmosphere designed to make every pet feel safe and comfortable." },
  { icon: Sparkles, title: "Stress-Free Grooming", description: "Fear-free techniques and positive reinforcement for a gentle experience." },
  { icon: Leaf, title: "Premium Organic Products", description: "Only the finest sulfate-free, hypoallergenic products for your pet." },
  { icon: Scissors, title: "Personalized Grooming", description: "Custom styling tailored to your pet's breed, coat, and personality." },
  { icon: Shield, title: "Safe & Hygienic Salon", description: "Medical-grade sanitation standards for the cleanest environment possible." },
  { icon: Users, title: "Experienced Staff", description: "A dedicated team passionate about pets with decades of combined experience." },
  { icon: Gem, title: "Affordable Luxury", description: "Premium grooming services at prices that offer exceptional value." },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }
  }
}

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-green/5 rounded-full blur-3xl" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent-gold font-button text-sm tracking-widest uppercase">Why Choose Us</span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-accent-dark mt-4 mb-6">
            The Premium Difference
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed font-body">
            We combine expertise, premium products, and genuine love for pets to deliver an unmatched grooming experience.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              className="group p-8 rounded-2xl bg-white shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 border border-gray-50"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-gold/10 to-amber-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-accent-gold" />
              </div>
              <h3 className="text-lg font-heading font-bold text-accent-dark mb-3">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-body">{feature.description}</p>
              <div className="mt-4 w-8 h-0.5 bg-accent-gold/30 group-hover:w-12 transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
