"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Music } from "lucide-react"

interface MusicPlayerProps {
  shouldPlay: boolean; // Nueva prop para recibir la orden del WelcomeScreen
}

export function MusicPlayer({ shouldPlay }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    audioRef.current = new Audio("/images/Miley Cyrus - The Climb.mp3")
    audioRef.current.loop = true

    // Si el usuario ya ingresó, intentamos reproducir
    if (shouldPlay) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(err => console.log("Error al reproducir:", err))
    }
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [shouldPlay]) // Se dispara cuando shouldPlay cambia a true

  const toggleMusic = () => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <button
      onClick={toggleMusic}
      className="fixed top-6 right-6 z-[100] flex h-12 w-12 items-center justify-center rounded-full border border-[#D9C5B2]/30 bg-white/80 text-[#1A2A40] shadow-lg backdrop-blur-md transition-all hover:scale-110 active:scale-95"
    >
      <motion.div
        animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
        transition={isPlaying ? { duration: 4, repeat: Infinity, ease: "linear" } : { duration: 0.3 }}
      >
        <Music className={`h-5 w-5 ${isPlaying ? "opacity-100" : "opacity-40"}`} />
      </motion.div>
      
      {isPlaying && (
        <motion.span 
          className="absolute inset-0 rounded-full border-2 border-[#1A2A40]/20"
          initial={{ scale: 1, opacity: 0.5 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      )}
    </button>
  )
}