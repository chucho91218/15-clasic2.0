import Image from "next/image"

export function Footer() {
  return (
    <footer className="px-6 pb-8 pt-12">
      <div className="mx-auto mb-6 max-w-xs opacity-40">
        <Image
          src="/images/floral-divider.jpg"
          alt=""
          width={400}
          height={80}
          className="w-full rounded-lg"
        />
      </div>
      <p className="text-center font-sans text-[10px] tracking-[0.2em] text-muted-foreground/60 uppercase">
        Invitaciones Web
      </p>
    </footer>
  )
}
