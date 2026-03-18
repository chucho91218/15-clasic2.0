"use client"

import { WelcomeSection } from "@/components/invitation/welcome-section" // Importación
import { HeroSection } from "@/components/invitation/hero-section"
import { EventInfo } from "@/components/invitation/event-info"
import { CountdownTimer } from "@/components/invitation/countdown-timer"
import { LocationSection } from "@/components/invitation/location-section"
import { ProcessGallery } from "@/components/invitation/process-gallery"
import { SocialButton } from "@/components/invitation/social-button"
import { MusicPlayer } from "@/components/invitation/music-player"
import { Instagram } from "lucide-react"

export default function InvitationPage() {
  return (
    <main className="relative min-h-screen bg-background">
      {/* El WelcomeSection va arriba de todo */}
      <WelcomeSection />

      <HeroSection />
      <EventInfo />
      <CountdownTimer targetDate={new Date("2026-05-25T21:00:00")} />
      <LocationSection />
      <ProcessGallery />
      <SocialButton />
      
      <footer className="py-20 px-4 border-t border-zinc-900 bg-black">
  <div className="max-w-md mx-auto flex flex-col items-center text-center space-y-6">
    {/* Instagram de la empresa */}
    <div className="flex items-center gap-2 text-zinc-500">
      <Instagram className="w-4 h-4" />
      <span className="text-[10px] tracking-[0.4em] uppercase">@festa_invitaciones</span>
    </div>

    {/* Texto Principal */}
    <div className="space-y-2">
      <h3 className="text-xs tracking-[0.5em] uppercase text-zinc-400 font-light">
        Diseño exclusivo para eventos
      </h3>
      <p className="font-serif italic text-sm text-zinc-600">
        Hecho con amor por Festa
      </p>
    </div>
  </div>
</footer>
      
      <MusicPlayer />
    </main>
  )
}