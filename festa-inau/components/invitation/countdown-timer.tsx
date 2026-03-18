"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface CountdownTimerProps {
  targetDate: Date
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function calculateTimeLeft(targetDate: Date): TimeLeft {
  const difference = targetDate.getTime() - new Date().getTime()
  
  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }
  
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  }
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <motion.div
          key={value}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-mono font-medium text-foreground tabular-nums"
        >
          {String(value).padStart(2, "0")}
        </motion.div>
      </div>
      <span className="text-xs md:text-sm uppercase tracking-widest text-muted-foreground mt-2">
        {label}
      </span>
    </div>
  )
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calculateTimeLeft(targetDate))
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate))
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  if (!mounted) {
    return (
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-10">
            Cuenta Regresiva
          </h2>
          <div className="flex justify-center gap-6 md:gap-12">
            {["Días", "Horas", "Minutos", "Segundos"].map((label) => (
              <TimeUnit key={label} value={0} label={label} />
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="font-serif text-2xl md:text-3xl text-foreground mb-10"
        >
          Cuenta Regresiva
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex justify-center gap-6 md:gap-12"
        >
          <TimeUnit value={timeLeft.days} label="Días" />
          <div className="text-4xl md:text-6xl lg:text-7xl text-primary/50 self-start mt-1">:</div>
          <TimeUnit value={timeLeft.hours} label="Horas" />
          <div className="text-4xl md:text-6xl lg:text-7xl text-primary/50 self-start mt-1">:</div>
          <TimeUnit value={timeLeft.minutes} label="Minutos" />
          <div className="text-4xl md:text-6xl lg:text-7xl text-primary/50 self-start mt-1 hidden md:block">:</div>
          <div className="hidden md:block">
            <TimeUnit value={timeLeft.seconds} label="Segundos" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
