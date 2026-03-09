'use client'

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

interface WelcomeScreenProps {
  isOpen: boolean;
  onEnter: () => void;
}

export default function WelcomeScreen({ isOpen, onEnter }: WelcomeScreenProps) {
  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="fixed inset-0 z-[110] flex flex-col items-center justify-center overflow-hidden bg-black"
        >
          {/* Fondo Inmersivo corregido: Menos blur para que se aprecie la calidad */}
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/hero-bg.jpg" 
              alt="Background"
              fill
              className="object-cover opacity-60 blur-[2px]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
          </div>

          <div className="relative z-10 flex flex-col items-center space-y-12 px-6 text-center">
            {/* Logo: Filtro para limpiar la cuadrícula y hacerlo blanco puro */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-28 h-28 md:w-36 md:h-36 relative"
            >
             
            </motion.div>

            {/* Texto Editorial con mejor contraste */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="space-y-4"
            >
              <p className="tracking-[0.6em] text-[10px] md:text-xs uppercase text-[#D9C5B2] font-light">
                Una noche inolvidable
              </p>
              <h1 className="font-serif italic text-5xl md:text-7xl text-white font-light tracking-wide">
                Estás invitado
              </h1>
            </motion.div>

            {/* Botón Mejorado: Borde más visible y color oro sólido */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={onEnter}
              className="mt-12 px-20 py-4 border border-[#D9C5B2] text-[#D9C5B2] text-[11px] uppercase tracking-[0.4em] font-medium transition-all duration-500 hover:bg-[#D9C5B2] hover:text-black shadow-[0_0_20px_rgba(217,197,178,0.2)]"
            >
              Ingresar
            </motion.button>
          </div>
          
          {/* Decoración vertical final */}
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: "80px" }}
            transition={{ delay: 2, duration: 1.2 }}
            className="absolute bottom-10 w-px bg-gradient-to-t from-[#D9C5B2]/60 to-transparent"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}