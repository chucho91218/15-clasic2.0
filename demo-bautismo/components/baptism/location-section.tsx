"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Church, PartyPopper, MapPin, Clock, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface LocationCardProps {
  type: "ceremony" | "celebration"
  title: string
  subtitle: string
  address: string
  time: string
  mapUrl: string
  icon: React.ReactNode
  delay?: number
}

function LocationCard({ title, subtitle, address, time, mapUrl, icon, delay = 0 }: LocationCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className="w-full"
    >
      <Card className="border-none shadow-none bg-card/50 backdrop-blur-sm overflow-hidden">
        <CardContent className="p-8 md:p-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6, delay: delay + 0.2 }}
            className="flex justify-center mb-6"
          >
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
              {icon}
            </div>
          </motion.div>

          <div className="text-center mb-8">
            <p className="text-accent text-xs tracking-[0.3em] uppercase mb-2">
              {subtitle}
            </p>
            <h3 className="font-serif text-2xl md:text-3xl text-foreground">
              {title}
            </h3>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4">
              <Clock className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
              <p className="text-foreground">{time}</p>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
              <p className="text-muted-foreground leading-relaxed">{address}</p>
            </div>
          </div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              variant="outline"
              className="w-full border-accent/30 text-foreground hover:bg-accent/10 hover:border-accent/50 transition-all duration-300"
              asChild
            >
              <a href={mapUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Ver mapa
              </a>
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function LocationSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4">
            Acompáñanos
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">
            Lugar y Hora
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-16 h-px bg-accent mx-auto mt-6"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-10">
          <LocationCard
            type="ceremony"
            title="Parroquia Virgen de las Flores"
            subtitle="Ceremonia"
            address="Morón, Provincia de Buenos Aires"
            time="12:00 hrs"
            mapUrl="https://www.google.com/maps/search/?api=1&query=Parroquia+Virgen+de+las+Flores+Moron"
            icon={<Church className="w-8 h-8 text-accent" />}
            delay={0.2}
          />
          <LocationCard
            type="celebration"
            title="El Galeón"
            subtitle="Celebración"
            address="Gdor. Inocencio Arias 2973, B1712CDO Morón, Provincia de Buenos Aires"
            time="14:30 hrs"
            mapUrl="https://www.google.com/maps/search/?api=1&query=El+Galeon+Moron+Gdor+Inocencio+Arias+2973"
            icon={<PartyPopper className="w-8 h-8 text-accent" />}
            delay={0.4}
          />
        </div>
      </div>
    </section>
  )
}