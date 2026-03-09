"use client"

import { useState } from "react"
import { HeroSection } from "@/components/invitation/hero-section"
import { Countdown } from "@/components/invitation/countdown"
import { Logistics } from "@/components/invitation/logistics"
import { Gallery } from "@/components/invitation/gallery"
import { Gifts } from "@/components/invitation/gifts"
import { RsvpForm } from "@/components/invitation/rsvp-form"
import { Footer } from "@/components/invitation/footer"
import { MusicPlayer } from "@/components/invitation/music-player"
import WelcomeScreen from "@/components/invitation/welcome-screen"

export default function Page() {
  const [hasEntered, setHasEntered] = useState(false)

  return (
    <main className="min-h-svh bg-background overflow-x-hidden">
      {/* Overlay de Bienvenida: Controla el acceso y el sonido */}
      <WelcomeScreen isOpen={hasEntered} onEnter={() => setHasEntered(true)} />

      {/* Reproductor: Solo inicia cuando hasEntered es true */}
      <MusicPlayer shouldPlay={hasEntered} />

      {/* Contenido: El Hero se mantiene y el resto aparece con fade */}
      <HeroSection />
      
      <div className={hasEntered ? "opacity-100 transition-opacity duration-1000" : "opacity-0 pointer-events-none"}>
        <Countdown />
        <Logistics />
        <Gallery /> 
        <Gifts /> 
        <RsvpForm /> 
        <Footer />
      </div>
    </main>
  )
}