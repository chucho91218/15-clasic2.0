"use client"

import { motion } from "framer-motion"
import { MapPin, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"

const LOCATION = {
  address: "Av. Santa Fe 1234",
  city: "CABA, Argentina",
  mapUrl: "https://maps.google.com/?q=Av.+Santa+Fe+1234,+CABA,+Argentina",
  embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168878895546!2d-58.40352492357791!3d-34.60373897295379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccab7d5b6d0a9%3A0x4a0a9e0a8c9a8a8a!2sAv.%20Santa%20Fe%201234%2C%20C1059ABF%20CABA!5e0!3m2!1ses!2sar!4v1234567890123!5m2!1ses!2sar"
}

export function LocationSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="font-serif text-2xl md:text-3xl text-foreground text-center mb-10"
        >
          Ubicación
        </motion.h2>

        {/* Address */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
          <div className="text-center">
            <p className="text-foreground text-lg">{LOCATION.address}</p>
            <p className="text-muted-foreground">{LOCATION.city}</p>
          </div>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative aspect-video rounded-lg overflow-hidden border border-border mb-6"
        >
          <iframe
            src={LOCATION.embedUrl}
            width="100%"
            height="100%"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
            title="Ubicación del bar"
          />
        </motion.div>

        {/* Directions Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex justify-center"
        >
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base"
          >
            <a
              href={LOCATION.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Navigation className="w-5 h-5 mr-2" />
              Cómo Llegar
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
