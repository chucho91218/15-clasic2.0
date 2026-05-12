"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { X } from "lucide-react"
import Image from "next/image"

// Array actualizado con tus imágenes locales en /public
const galleryImages = [
  {
    id: 1,
    src: "/imagen1.webp",
    alt: "Momento bautismo 1",
    size: "tall"
  },
  {
    id: 2,
    src: "/imagen2.webp",
    alt: "Momento bautismo 2",
    size: "wide"
  },
  {
    id: 3,
    src: "/imagen3.webp",
    alt: "Momento bautismo 3",
    size: "square"
  },
  {
    id: 4,
    src: "/imagen4.webp",
    alt: "Momento bautismo 4",
    size: "square"
  },
  {
    id: 5,
    src: "/imagen5.webp",
    alt: "Momento bautismo 5",
    size: "wide"
  },
]

interface GalleryImageProps {
  image: typeof galleryImages[0]
  index: number
  onClick: () => void
}

function GalleryImage({ image, index, onClick }: GalleryImageProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const sizeClasses = {
    tall: "md:row-span-2",
    wide: "md:col-span-2",
    square: "",
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{ scale: 1.01 }}
      className={`relative overflow-hidden rounded-xl cursor-pointer group ${sizeClasses[image.size as keyof typeof sizeClasses]}`}
      onClick={onClick}
    >
      <div className="relative w-full h-full min-h-[250px]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-black/10 flex items-center justify-center backdrop-blur-[2px] transition-all"
        >
          <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-sm">
            <span className="text-slate-400 font-light text-xl">+</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

// IMPORTANTE: Agregado el default para evitar errores en page.tsx
export default function GallerySection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-slate-400 text-[10px] tracking-[0.4em] uppercase mb-4 font-medium">
            Momentos especiales
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-slate-800 italic">
            Galería de Vida
          </h2>
          <div className="w-12 h-[1px] bg-slate-200 mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {galleryImages.map((image, index) => (
            <GalleryImage
              key={image.id}
              image={image}
              index={index}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-8 right-8 text-slate-400 hover:text-slate-800 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8 font-thin" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative max-w-5xl w-full h-[70vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}