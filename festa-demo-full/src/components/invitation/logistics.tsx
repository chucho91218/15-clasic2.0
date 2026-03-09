"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, MapPin, Shirt } from "lucide-react"
import Image from "next/image"

const details = [
  {
    icon: Calendar,
    label: "Fecha",
    value: "Sábado 3 de Octubre, 2026",
  },
  {
    icon: Clock,
    label: "Hora",
    value: "20:00 hs",
  },
  {
    icon: MapPin,
    label: "Lugar",
    value: "Salón de Eventos La Estancia",
  },
  {
    icon: Shirt,
    label: "Dress Code",
    value: "Elegante Sport",
  },
]

export function Logistics() {
  return (
    <section className="relative px-6 py-20">
      {/* Floral divider */}
      <div className="mx-auto mb-12 max-w-xs opacity-50">
        <Image
          src="/images/floral-divider.jpg"
          alt=""
          width={400}
          height={80}
          className="w-full rounded-lg"
        />
      </div>

      <motion.div
        className="mx-auto max-w-md"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="mb-10 text-center font-serif text-3xl font-light tracking-wide text-primary md:text-4xl">
          La Celebración
        </h2>

        <div className="flex flex-col gap-6">
          {details.map((item, i) => (
            <motion.div
              key={item.label}
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-secondary">
                <item.icon className="h-4 w-4 text-accent" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-sans text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                  {item.label}
                </p>
                <p className="font-sans text-sm font-light leading-relaxed text-primary">
                  {item.value}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action buttons */}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button className="rounded-full border border-primary bg-transparent px-8 py-3 font-sans text-xs tracking-[0.2em] text-primary uppercase transition-colors hover:bg-primary hover:text-primary-foreground">
            Agendar
          </button>
          <button className="rounded-full border border-primary bg-transparent px-8 py-3 font-sans text-xs tracking-[0.2em] text-primary uppercase transition-colors hover:bg-primary hover:text-primary-foreground">
            {"¿Cómo Llegar?"}
          </button>
        </div>
      </motion.div>
    </section>
  )
}
