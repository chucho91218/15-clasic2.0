"use client"

import { motion } from "framer-motion"
import { Instagram } from "lucide-react"

export function SocialButton() {
  return (
    <section className="py-16 px-4 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        
      </motion.div>

      <motion.a
        href="https://instagram.com/tu_cuenta" // Reemplaza con la cuenta real
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center gap-3 px-8 py-3 border border-zinc-800 rounded-full text-zinc-300 hover:bg-zinc-900 transition-all duration-300 group"
      >
        <Instagram className="w-4 h-4 group-hover:text-zinc-100" />
        <span className="text-xs tracking-[0.3em] uppercase group-hover:text-zinc-100">
          @ElBarDeLaEsquina
        </span>
      </motion.a>
    </section>
  )
}