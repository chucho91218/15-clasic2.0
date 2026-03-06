"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 py-20">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Floating butterfly decorations */}
      <motion.div
        className="absolute top-16 left-8 w-20 opacity-40 md:w-28"
        animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/images/butterfly-corner.jpg"
          alt=""
          width={112}
          height={112}
          className="rounded-full"
        />
      </motion.div>

      <motion.div
        className="absolute right-6 bottom-24 w-16 opacity-30 md:w-24"
        animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Image
          src="/images/butterfly-corner.jpg"
          alt=""
          width={96}
          height={96}
          className="rounded-full scale-x-[-1]"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center gap-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.p
          className="font-sans text-xs tracking-[0.35em] text-accent uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Estás invitado/a a celebrar
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <h1 className="font-serif text-6xl leading-tight font-light tracking-wide text-primary md:text-8xl">
            MIS 15
          </h1>
          <div className="my-3 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-accent" />
            <span className="font-serif text-2xl text-accent italic">*</span>
            <span className="h-px w-12 bg-accent" />
          </div>
          <h2 className="font-serif text-5xl font-light tracking-widest text-primary md:text-7xl">
            IARA
          </h2>
        </motion.div>

        <motion.p
          className="mt-4 max-w-xs font-sans text-sm leading-relaxed font-light text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Acompañame en este día tan especial
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          className="mt-12 flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="font-sans text-[10px] tracking-widest text-muted-foreground uppercase">
            Deslizá
          </span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="text-accent">
            <path d="M8 4V20M8 20L2 14M8 20L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
