"use client"
import { useEffect, useState } from "react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
      <header className={`fixed w-full z-80 top-0 transition-all ${scrolled ? "backdrop-blur-sm bg-white/80 shadow-sm" : "bg-white"}`}>

      <div className="max-w-7xl mx-auto px-9 py-9 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-90 h-17 bg-linear-to-b rounded-md flex items-center  text-white font-bold lg:text-4xl">
          </div>
          <span className="font-semibold">RouteSpec</span>
        </div>
        <nav className="hidden md:flex gap-8 items-center text-sm">
          <a href="#Home">Home</a>
          <a href="#Works">How it Works</a>
          <a href="#PricingPlans">Pricing</a>
          <a href="#Contact">Contact</a>
          <a href="#Features">Features</a>

          

          
        <button
  className="
    flex items-center justify-center
    text-white text-base font-medium
    hover:opacity-90 transition
  "
  style={{
    backgroundColor: "#661C71",
    width: "144px",
    height: "40px",
    gap: "8px",
    borderRadius: "35px",
    paddingTop: "8px",
    paddingRight: "16px",
    paddingBottom: "8px",
    paddingLeft: "16px",
    opacity: "1",
  }}
>
  Start Free Trial
</button>

        </nav>
        <div className="md:hidden">
          {/* Mobile menu */}
          <button aria-label="open menu">☰</button>
        </div>
      </div>
    </header>
   
  )
}
