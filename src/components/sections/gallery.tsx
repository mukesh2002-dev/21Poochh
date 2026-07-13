"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Maximize2 } from "lucide-react"
import { galleryImages } from "@/lib/data"

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-24 bg-primary-lighter relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent-gold font-button text-sm tracking-widest uppercase">Gallery</span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-accent-dark mt-4 mb-6">
            Our Work Speaks
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed font-body">
            See the transformations and happy moments from our salon.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="break-inside-avoid group relative rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => setSelected(image.id)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-accent-dark/0 group-hover:bg-accent-dark/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                    <Maximize2 className="w-5 h-5 text-accent-dark" />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs font-button text-white/80 bg-accent-gold/80 px-3 py-1 rounded-full">
                  {image.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.button
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </motion.button>
            <motion.img
              key={selected}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              src={galleryImages.find(img => img.id === selected)?.src}
              alt=""
              className="max-w-full max-h-[90vh] rounded-2xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
