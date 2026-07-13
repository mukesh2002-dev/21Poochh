"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, PawPrint, Send } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

const bookingSchema = z.object({
  petName: z.string().min(1, "Pet name is required"),
  ownerName: z.string().min(1, "Your name is required"),
  phone: z.string().min(10, "Valid phone number required"),
  email: z.string().email("Valid email required"),
  petType: z.string().min(1, "Select pet type"),
  breed: z.string().min(1, "Breed is required"),
  preferredDate: z.string().min(1, "Select a date"),
  preferredTime: z.string().min(1, "Select a time"),
  service: z.string().min(1, "Select a service"),
  instructions: z.string().optional(),
})

type BookingForm = z.infer<typeof bookingSchema>

export default function Booking() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookingForm>({
    resolver: zodResolver(bookingSchema),
  })

  const onSubmit = () => {
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      reset()
    }, 3000)
  }

  const services = [
    "Bath & Brush",
    "Bath & Tidy",
    "Full Grooming",
    "Asian Fusion Grooming",
    "Cat Grooming",
    "Puppy Grooming",
    "Senior Pet Grooming",
    "Spa Treatment",
  ]

  return (
    <section id="booking" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent-gold/5 via-transparent to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent-gold font-button text-sm tracking-widest uppercase">Book Online</span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-accent-dark mt-4 mb-6">
            Schedule an Appointment
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed font-body">
            Ready to give your pet the luxury treatment? Fill out the form below and we&apos;ll confirm your appointment.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          {submitted ? (
            <div className="text-center p-16 bg-primary-light rounded-3xl">
              <div className="w-20 h-20 rounded-full bg-accent-green/10 flex items-center justify-center mx-auto mb-6">
                <PawPrint className="w-10 h-10 text-accent-green" />
              </div>
              <h3 className="text-3xl font-heading font-bold text-accent-dark mb-4">Booking Received!</h3>
              <p className="text-gray-500 text-lg">We&apos;ll confirm your appointment shortly. Check your phone or email.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="bg-primary-light rounded-3xl p-8 md:p-12 shadow-card">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-button font-medium text-accent-dark">Pet Name</label>
                  <input
                    {...register("petName")}
                    placeholder="e.g. Buddy"
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-gray-200 focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20 outline-none transition-all"
                  />
                  {errors.petName && <p className="text-xs text-red-500">{errors.petName.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-button font-medium text-accent-dark">Your Name</label>
                  <input
                    {...register("ownerName")}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-gray-200 focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20 outline-none transition-all"
                  />
                  {errors.ownerName && <p className="text-xs text-red-500">{errors.ownerName.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-button font-medium text-accent-dark">Phone Number</label>
                  <input
                    {...register("phone")}
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-gray-200 focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20 outline-none transition-all"
                  />
                  {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-button font-medium text-accent-dark">Email Address</label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-gray-200 focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20 outline-none transition-all"
                  />
                  {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-button font-medium text-accent-dark">Pet Type</label>
                  <select
                    {...register("petType")}
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-gray-200 focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20 outline-none transition-all"
                  >
                    <option value="">Select pet type</option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.petType && <p className="text-xs text-red-500">{errors.petType.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-button font-medium text-accent-dark">Breed</label>
                  <input
                    {...register("breed")}
                    placeholder="e.g. Golden Retriever"
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-gray-200 focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20 outline-none transition-all"
                  />
                  {errors.breed && <p className="text-xs text-red-500">{errors.breed.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-button font-medium text-accent-dark">Preferred Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      {...register("preferredDate")}
                      type="date"
                      className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-white border border-gray-200 focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20 outline-none transition-all"
                    />
                  </div>
                  {errors.preferredDate && <p className="text-xs text-red-500">{errors.preferredDate.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-button font-medium text-accent-dark">Preferred Time</label>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <select
                      {...register("preferredTime")}
                      className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-white border border-gray-200 focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20 outline-none transition-all"
                    >
                      <option value="">Select time</option>
                      <option value="09:00">9:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="16:00">4:00 PM</option>
                      <option value="17:00">5:00 PM</option>
                    </select>
                  </div>
                  {errors.preferredTime && <p className="text-xs text-red-500">{errors.preferredTime.message}</p>}
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <label className="text-sm font-button font-medium text-accent-dark">Service</label>
                  <select
                    {...register("service")}
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-gray-200 focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20 outline-none transition-all"
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  {errors.service && <p className="text-xs text-red-500">{errors.service.message}</p>}
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <label className="text-sm font-button font-medium text-accent-dark">Special Instructions</label>
                  <textarea
                    {...register("instructions")}
                    rows={3}
                    placeholder="Any special requests or concerns? (e.g., anxiety, medical conditions)"
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-gray-200 focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20 outline-none transition-all resize-none"
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="mt-8 w-full py-4 bg-accent-gold text-white rounded-xl font-button font-semibold text-sm tracking-wide uppercase hover:bg-amber-600 transition-colors shadow-premium flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Book Appointment
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
