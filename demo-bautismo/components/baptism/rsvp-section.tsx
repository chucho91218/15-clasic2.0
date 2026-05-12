"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MessageCircle, Heart, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export function RsvpSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const whatsappNumber = "521234567890"
  const whatsappMessage = encodeURIComponent(
    "¡Hola! Confirmo mi asistencia al bautismo de Bautista el 15 de Junio. 🕊️"
  )
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <section ref={sectionRef} className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-6"
          >
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
              <Calendar className="w-8 h-8 text-accent" />
            </div>
          </motion.div>

          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4">
            Confirma tu asistencia
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            ¿Nos acompañas?
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-16 h-px bg-accent mx-auto mb-8"
          />
        </motion.div>

        {/* Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-muted-foreground leading-relaxed mb-10 max-w-md mx-auto"
        >
          Tu presencia es el mejor regalo. Por favor, confirma tu asistencia 
          antes del <span className="text-foreground font-medium">1 de Junio</span> para 
          poder preparar todo con cariño.
        </motion.p>

        {/* WhatsApp Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              size="lg"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-6 text-base font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                Confirmar por WhatsApp
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Additional Info */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-muted-foreground/60 text-sm mt-8"
        >
          También puedes llamar al +52 1234 567 890
        </motion.p>
      </div>
    </section>
  )
}

export function FooterSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" })

  return (
    <footer ref={sectionRef} className="py-16 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          {/* Heart Icon */}
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex justify-center mb-6"
          >
            <Heart className="w-6 h-6 text-accent" fill="currentColor" />
          </motion.div>

          {/* Closing Message */}
          <p className="font-serif text-xl md:text-2xl text-foreground mb-4">
            Con amor y bendiciones
          </p>
          <p className="text-muted-foreground text-sm tracking-[0.15em]">
            Familia García Mendoza
          </p>

          {/* Divider */}
          <div className="w-12 h-px bg-accent/30 mx-auto my-8" />

          {/* Date Reminder */}
          <p className="text-accent/80 text-sm">
            15 de Junio, 2026 • 
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
