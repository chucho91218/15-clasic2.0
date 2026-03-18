"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MailOpen } from "lucide-react" // Ícono elegante

export function WelcomeSection() {
  const [isOpen, setIsOpen] = useState(false)

  // Animaciones para el contenedor principal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { 
      y: "-100vh", // Se desliza hacia arriba
      opacity: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } // Ease-out suave
    }
  }

  // Animaciones para el contenido de texto
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { delay: 0.5, duration: 0.6 }
    }
  }

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-zinc-950 px-6 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Contenido centrado */}
          <motion.div 
            className="max-w-md flex flex-col items-center gap-8"
            variants={textVariants}
          >
            {/* Ícono o Logo sutil */}
            <div className="p-4 rounded-full bg-zinc-900 border border-zinc-800">
              <MailOpen className="w-10 h-10 text-zinc-400 stroke-1" />
            </div>

            {/* Texto Personal y Exclusivo */}
            <div className="space-y-3">
              <h1 className="text-3xl md:text-4xl font-extralight text-zinc-100 tracking-tight">
                Una invitación personal
              </h1>
              <p className="text-zinc-400 text-base font-light leading-relaxed">
                Después de mucho esfuerzo, abrimos las puertas de <span className="text-zinc-100 font-normal">[Nombre del Bar]</span>. Diseñamos este espacio para compartir momentos con la gente que queremos.
              </p>
              <p className="text-zinc-200 text-lg font-medium pt-2">
                Estás invitado.
              </p>
            </div>

            {/* Botón Minimalista para "Abrir" */}
            <motion.button
              onClick={() => setIsOpen(true)}
              className="mt-6 px-10 py-3 bg-zinc-100 text-zinc-950 rounded-full text-sm font-semibold tracking-wide hover:bg-white transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ingresar
            </motion.button>
          </motion.div>

          {/* Sombra sutil de fondo */}
          <div className="absolute inset-0 bg-[url('/bg-texture.png')] opacity-10 pointer-events-none"></div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}