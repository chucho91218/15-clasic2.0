"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, Users, Utensils, Music, Plus, Minus, ChevronDown } from "lucide-react"

export function RsvpForm() {
  const [count, setCount] = useState(1)
  const [guests, setGuests] = useState([{ name: "", dietary: "Ninguna", song: "" }])

  const dietaryOptions = [
    "Ninguna",
    "Vegano/a",
    "Vegetariano/a",
    "Celíaco/a",
    "Diabético/a",
    "Intolerante a la lactosa",
    "Hipertenso/a",
    "Otro (especificar)"
  ]

  const handleCountChange = (newCount: number) => {
    if (newCount < 1 || newCount > 6) return
    setCount(newCount)
    const newGuests = [...guests]
    if (newCount > guests.length) {
      for (let i = guests.length; i < newCount; i++) {
        newGuests.push({ name: "", dietary: "Ninguna", song: "" })
      }
    } else {
      newGuests.splice(newCount)
    }
    setGuests(newGuests)
  }

  const updateGuest = (index: number, field: string, value: string) => {
    const newGuests = [...guests]
    newGuests[index] = { ...newGuests[index], [field]: value }
    setGuests(newGuests)
  }

  const sendWhatsApp = () => {
    // Tu número para pruebas
    const phone = "543573690769" 
    let message = `¡Hola! Confirmo asistencia para los 15 de Iara 🌟\n\n`
    message += `Total de invitados: ${count}\n`
    message += `--------------------------\n`

    guests.forEach((g, i) => {
      message += `👤 Invitado ${i + 1}: ${g.name || "Sin nombre"}\n`
      message += `🍎 Dieta: ${g.dietary}\n`
      if (g.song) message += `🎵 Canción: ${g.song}\n`
      message += `\n`
    });

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <section className="px-6 py-20 bg-[#FDFBF9]">
      <div className="mx-auto max-w-xl">
        <div className="mb-12 text-center">
          <p className="text-[10px] tracking-[0.3em] text-[#8E8E8E] uppercase mb-2">Confirmación</p>
          <h2 className="font-serif text-4xl text-[#1A2A40]">¿Venís a mi fiesta?</h2>
        </div>

        {/* Selector de cantidad de personas */}
        <div className="mb-10 flex flex-col items-center justify-center space-y-4 rounded-3xl bg-white p-8 border border-[#D9C5B2]/30 shadow-sm">
          <label className="text-[11px] font-bold uppercase tracking-widest text-[#1A2A40]/60 text-center">
            ¿Cuántas personas confirman?
          </label>
          <div className="flex items-center gap-10">
            <button 
              onClick={() => handleCountChange(count - 1)} 
              className="p-3 rounded-full border border-[#D9C5B2] hover:bg-[#D9C5B2]/10 transition-colors"
            >
              <Minus className="h-4 w-4 text-[#1A2A40]" />
            </button>
            <span className="font-serif text-4xl text-[#1A2A40] w-10 text-center">{count}</span>
            <button 
              onClick={() => handleCountChange(count + 1)} 
              className="p-3 rounded-full border border-[#D9C5B2] hover:bg-[#D9C5B2]/10 transition-colors"
            >
              <Plus className="h-4 w-4 text-[#1A2A40]" />
            </button>
          </div>
        </div>

        {/* Formularios dinámicos por invitado */}
        <div className="space-y-6">
          <AnimatePresence mode="popLayout">
            {guests.map((guest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="rounded-3xl border border-[#D9C5B2]/30 bg-white p-8 shadow-sm"
              >
                <div className="mb-6 flex items-center gap-2 border-b border-[#D9C5B2]/20 pb-3 text-[#1A2A40]/40">
                  <Users className="h-4 w-4" />
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Invitado {index + 1}</span>
                </div>
                
                <div className="space-y-6">
                  <input
                    type="text"
                    placeholder="Nombre y Apellido"
                    className="w-full bg-transparent border-b border-[#D9C5B2]/50 py-3 outline-none focus:border-[#1A2A40] transition-colors text-base"
                    onChange={(e) => updateGuest(index, "name", e.target.value)}
                  />

                  <div className="grid grid-cols-1 gap-6">
                    {/* Selector de Dieta */}
                    <div className="relative space-y-2">
                      <label className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#1A2A40]/50 font-bold">
                        <Utensils className="h-3 w-3" /> Restricción Alimentaria
                      </label>
                      <div className="relative">
                        <select
                          className="w-full appearance-none bg-transparent border-b border-[#D9C5B2]/50 py-3 outline-none focus:border-[#1A2A40] transition-colors text-sm pr-10 cursor-pointer"
                          value={guest.dietary}
                          onChange={(e) => updateGuest(index, "dietary", e.target.value)}
                        >
                          {dietaryOptions.map(option => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-[#1A2A40]/30 pointer-events-none" />
                      </div>
                    </div>

                    {/* Canción sugerida */}
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#1A2A40]/50 font-bold">
                        <Music className="h-3 w-3" /> Canción que no puede faltar
                      </label>
                      <input
                        type="text"
                        placeholder="Título y Artista"
                        className="w-full bg-transparent border-b border-[#D9C5B2]/50 py-3 outline-none focus:border-[#1A2A40] transition-colors text-sm"
                        onChange={(e) => updateGuest(index, "song", e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Botón Final Único */}
        <button
          onClick={sendWhatsApp}
          className="mt-12 w-full rounded-full bg-[#1A2A40] py-6 text-[12px] font-bold tracking-[0.3em] text-white shadow-xl hover:bg-[#1A2A40]/90 transition-all flex items-center justify-center gap-3 active:scale-95"
        >
          <MessageCircle className="h-5 w-5" />
          CONFIRMAR ASISTENCIA
        </button>
      </div>
    </section>
  )
}