"use client"

import { useEffect } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/sections/hero"
import Trust from "@/components/sections/trust"
import WhyChooseUs from "@/components/sections/why-choose-us"
import Services from "@/components/sections/services"
import Process from "@/components/sections/process"
import Gallery from "@/components/sections/gallery"
import Testimonials from "@/components/sections/testimonials"
import Team from "@/components/sections/team"
import Pricing from "@/components/sections/pricing"
import FAQ from "@/components/sections/faq"
import Booking from "@/components/sections/booking"
import Contact from "@/components/sections/contact"
import Blog from "@/components/sections/blog"
import Footer from "@/components/footer"

export default function Home() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`)
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`)
    }
    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <WhyChooseUs />
        <Services />
        <Process />
        <Gallery />
        <Testimonials />
        <Team />
        <Pricing />
        <FAQ />
        <Booking />
        <Contact />
        <Blog />
      </main>
      <Footer />
    </>
  )
}
