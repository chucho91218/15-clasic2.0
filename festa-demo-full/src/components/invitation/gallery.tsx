"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

// Limitado a 6 imágenes para el Paquete Full
const photos = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-3.jpg",
  "/images/gallery-4.jpg",
  "/images/gallery-5.jpg",
  "/images/gallery-6.jpg",
]

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const openPhoto = (index: number) => setSelectedIndex(index)
  const closePhoto = () => setSelectedIndex(null)

  const goNext = () => {
    if (selectedIndex === null) return
    setSelectedIndex((selectedIndex + 1) % photos.length)
  }

  const goPrev = () => {
    if (selectedIndex === null) return
    setSelectedIndex((selectedIndex - 1 + photos.length) % photos.length)
  }

  return (
    <section className="px-6 py-20 bg-[#fdfcf9]">
      <motion.div
        className="mx-auto max-w-4xl" // Aumentado a 4xl para que las 3 columnas respiren mejor
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
      >
        <p className="mb-2 text-center font-sans text-xs tracking-[0.3em] text-accent uppercase">
          Recuerdos
        </p>
        <h2 className="mb-10 text-center font-serif text-3xl font-light tracking-wide text-primary md:text-4xl">
          Mis Momentos
        </h2>

        {/* Photo grid: Ajustada a 3 columnas para el diseño 3 arriba / 3 abajo */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {photos.map((src, i) => (
            <motion.button
              key={src}
              className="group relative aspect-[3/4] overflow-hidden rounded-lg shadow-sm"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              onClick={() => openPhoto(i)}
              aria-label={`Ver foto ${i + 1}`}
            >
              <Image
                src={src}
                alt={`Momento especial ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/10" />
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Lightbox - Sin cambios, funciona perfecto para verlas en grande */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePhoto}
          >
            <button
              className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              onClick={closePhoto}
            >
              <X className="h-5 w-5" />
            </button>

            <button
              className="absolute left-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              onClick={(e) => { e.stopPropagation(); goPrev() }}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              className="absolute right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              onClick={(e) => { e.stopPropagation(); goNext() }}
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <motion.div
              key={selectedIndex}
              className="relative h-[80vh] w-full max-w-4xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={photos[selectedIndex]}
                alt={`Foto ${selectedIndex + 1}`}
                fill
                className="rounded-lg object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}