import { HeroSection } from "@/components/baptism/hero-section"
import LocationSection from "@/components/baptism/location-section"
import { GodparentsSection } from "@/components/baptism/godparents-section"
import GallerySection from "@/components/baptism/gallery-section"
import { RsvpSection, FooterSection } from "@/components/baptism/rsvp-section"

export default function BaptismInvitation() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <LocationSection />
      <GodparentsSection />
      <GallerySection />
      <RsvpSection />
      <FooterSection />
    
    </main>
  )
}
