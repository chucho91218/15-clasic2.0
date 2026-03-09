"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Gift, Copy, Check } from "lucide-react"

export function Gifts() {
  const [showCBU, setShowCBU] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <section className="px-6 py-20">
      <motion.div
        className="mx-auto max-w-md text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-border bg-secondary">
          <Gift className="h-6 w-6 text-accent" strokeWidth={1.5} />
        </div>

        <h2 className="mb-4 font-serif text-3xl font-light tracking-wide text-primary md:text-4xl">
          Regalos
        </h2>

        <p className="mx-auto mb-8 max-w-xs font-sans text-sm leading-relaxed font-light text-muted-foreground">
          {"Nada es más importante que tu presencia, pero si deseás hacerme un presente..."}
        </p>

        <button
          onClick={() => setShowCBU(!showCBU)}
          className="rounded-full border border-primary bg-transparent px-8 py-3 font-sans text-xs tracking-[0.2em] text-primary uppercase transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          {showCBU ? "Ocultar" : "Ver CBU/Alias"}
        </button>

        <AnimatePresence>
          {showCBU && (
            <motion.div
              className="mt-6 overflow-hidden rounded-xl border border-border bg-card p-6 shadow-sm"
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: 24 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="mb-4">
                <p className="font-sans text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                  Alias
                </p>
                <div className="mt-1 flex items-center justify-center gap-2">
                  <p className="font-sans text-sm text-primary">iara.quince.2026</p>
                  <button
                    onClick={() => handleCopy("iara.quince.2026")}
                    className="text-muted-foreground transition-colors hover:text-primary"
                    aria-label="Copiar alias"
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-green-600" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <p className="font-sans text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                  CBU
                </p>
                <p className="mt-1 font-sans text-xs text-primary tracking-wider">
                  0000003100012345678901
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
