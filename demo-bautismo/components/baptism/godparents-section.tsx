"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Heart } from "lucide-react"

interface GodparentProps {
  name: string
  role: string
  delay?: number
}

function GodparentCard({ name, role, delay = 0 }: GodparentProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className="text-center"
    >
      <p className="text-accent text-xs tracking-[0.3em] uppercase mb-2">
        {role}
      </p>
      <p className="font-serif text-xl md:text-2xl text-foreground">
        {name}
      </p>
    </motion.div>
  )
}

export function GodparentsSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-6"
          >
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
              <Heart className="w-6 h-6 text-accent" fill="currentColor" />
            </div>
          </motion.div>
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4">
            Con amor y bendiciones
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">
            Padrinos
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-16 h-px bg-accent mx-auto mt-6"
          />
        </motion.div>

        {/* Godparents */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 mb-16">
          <GodparentCard
            name="Carlos & María Rodríguez"
            role="Padrinos de Bautismo"
            delay={0.3}
          />
          <GodparentCard
            name="Ana & Roberto Hernández"
            role="Padrinos de Velación"
            delay={0.5}
          />
        </div>

        {/* Emotional Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="relative py-8">
            {/* Quote marks */}
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 0.15, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="absolute -top-2 left-0 md:-left-8 font-serif text-6xl md:text-8xl text-accent"
            >
              &ldquo;
            </motion.span>
            <p className="font-serif text-lg md:text-xl text-muted-foreground leading-relaxed italic px-8">
              Seremos guías en su camino de fe, acompañándola con amor en cada paso de su vida espiritual.
            </p>
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              animate={isInView ? { opacity: 0.15, x: 0 } : { opacity: 0, x: 10 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="absolute -bottom-2 right-0 md:-right-8 font-serif text-6xl md:text-8xl text-accent"
            >
              &rdquo;
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
