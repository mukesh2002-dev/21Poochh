"use client"

import { motion } from "framer-motion"
import { Globe, Award } from "lucide-react"
import { teamMembers } from "@/lib/data"

export default function Team() {
  return (
    <section className="py-24 bg-primary-lighter relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent-gold font-button text-sm tracking-widest uppercase">Our Team</span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-accent-dark mt-4 mb-6">
            Meet the Grooming Artists
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed font-body">
            Passionate professionals dedicated to making every pet look and feel their absolute best.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <a href="#" className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center hover:bg-accent-gold hover:text-white transition-colors">
                      <Globe className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center hover:bg-accent-gold hover:text-white transition-colors">
                      <Globe className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-button text-accent-gold bg-accent-gold/10 px-3 py-1 rounded-full">
                      {member.experience}
                    </span>
                  </div>
                  <h3 className="text-lg font-heading font-bold text-accent-dark">{member.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{member.role}</p>
                  <div className="flex items-start gap-2 text-xs text-gray-400">
                    <Award className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                    <span>{member.certifications}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
