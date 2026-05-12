"use client"

import { motion } from "framer-motion"
import { Cross } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      {/* Subtle decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 30%, oklch(0.78 0.12 85 / 0.15) 0%, transparent 50%)`,
        }}
      />
      
      {/* Gold line accent */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
        className="absolute top-32 left-1/2 -translate-x-1/2 w-24 h-px bg-accent"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center z-10"
      >
        {/* Cross icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <Cross className="w-12 h-12 text-accent" strokeWidth={1} />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="absolute inset-0 blur-xl bg-accent/20"
            />
          </div>
        </motion.div>

        {/* Invitation text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4"
        >
          Te invitamos al Bautismo de
        </motion.p>

        {/* Child name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-foreground tracking-wide mb-6"
        >
          Bautista
        </motion.h1>

        {/* Surname */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="font-serif text-xl md:text-2xl text-accent tracking-[0.2em]"
        >
          García Mendoza
        </motion.p>

        {/* Date */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-16"
        >
          <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase mb-2">
            Sábado
          </p>
          <p className="font-serif text-3xl md:text-4xl text-foreground">
            15 de Junio
          </p>
          <p className="text-accent text-lg tracking-[0.15em] mt-1">2026</p>
        </motion.div>
      </motion.div>

      {/* Bottom gold line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 2, ease: "easeOut" }}
        className="absolute bottom-32 left-1/2 -translate-x-1/2 w-24 h-px bg-accent"
      />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border border-accent/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 bg-accent rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
