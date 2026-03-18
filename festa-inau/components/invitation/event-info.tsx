"use client"

import { motion } from "framer-motion"
import { Calendar, Clock } from "lucide-react"

export function EventInfo() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-10">
            Detalles del Evento
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Date */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col items-center p-8 rounded-lg bg-card border border-border"
          >
            <Calendar className="w-8 h-8 text-primary mb-4" />
            <span className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
              Fecha
            </span>
            <span className="font-serif text-2xl md:text-3xl text-foreground">
              Sábado
            </span>
            <span className="text-primary text-lg font-medium">
              25 de Mayo
            </span>
          </motion.div>

          {/* Time */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col items-center p-8 rounded-lg bg-card border border-border"
          >
            <Clock className="w-8 h-8 text-primary mb-4" />
            <span className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
              Hora
            </span>
            <span className="font-serif text-2xl md:text-3xl text-foreground">
              Desde las
            </span>
            <span className="text-primary text-lg font-medium">
              19:00 Hs
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
