"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const EVENT_DATE = new Date("2026-10-03T20:00:00")

function getTimeLeft() {
  const now = new Date()
  const diff = EVENT_DATE.getTime() - now.getTime()

  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="font-serif text-5xl font-light text-primary md:text-6xl">
        {String(value).padStart(2, "0")}
      </span>
      <span className="font-sans text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
        {label}
      </span>
    </div>
  )
}

export function Countdown() {
  const [time, setTime] = useState(getTimeLeft)

  useEffect(() => {
    const timer = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative px-6 py-20">
      <motion.div
        className="mx-auto max-w-md text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
      >
        <p className="mb-2 font-sans text-xs tracking-[0.3em] text-accent uppercase">
          Faltan
        </p>

        <div className="flex items-center justify-center gap-6 md:gap-10">
          <CountdownUnit value={time.days} label="Días" />
          <span className="font-serif text-3xl font-light text-accent">:</span>
          <CountdownUnit value={time.hours} label="Horas" />
          <span className="font-serif text-3xl font-light text-accent">:</span>
          <CountdownUnit value={time.minutes} label="Min" />
        </div>

        <div className="mx-auto mt-8 flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-border" />
          <span className="font-serif text-sm text-accent italic">3 de Octubre de 2026</span>
          <span className="h-px w-16 bg-border" />
        </div>
      </motion.div>
    </section>
  )
}
