"use client"
import { useEffect, useState } from "react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrolled(currentScrollY > 20)

      // Hide navbar on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setVisible(false)
      } else {
        setVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50 transition-transform duration-300 ${
        scrolled ? "backdrop-blur-sm bg-white/90 shadow-md" : "bg-white"
      }`}
      style={{
        width: "1054px",
        height: "70px",
        transform: visible ? "translateY(0)" : "translateY(-100%)",
      }}
    >
      <div className="flex items-center justify-between h-full px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <span className="font-semibold text-xl">RouteSpec</span>
        </div>\

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-[81px] text-sm">
          <a href="#Home" className="hover:text-purple-700 transition">Home</a>
          <a href="#Works" className="hover:text-purple-700 transition">How it Works</a>
          <a href="#PricingPlans" className="hover:text-purple-700 transition">Pricing</a>
          <a href="#Contact" className="hover:text-purple-700 transition">Contact</a>
          <a href="#Features" className="hover:text-purple-700 transition">Features</a>

          {/* Rounded Button */}
          <button
            className="flex items-center justify-center text-white text-base font-medium hover:opacity-90 transition rounded-full gap-2"
            style={{
              width: "144px",
              height: "40px",
              backgroundColor: "#661C71",
              paddingTop: "8px",
              paddingRight: "16px",
              paddingBottom: "8px",
              paddingLeft: "16px",
            }}
          >
            Start Free Trial
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button
            aria-label="open menu"
            className="text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md w-full mt-1 rounded-b-lg">
          <nav className="flex flex-col gap-4 p-4 text-center">
            <a href="#Home" className="hover:text-purple-700 transition">Home</a>
            <a href="#Works" className="hover:text-purple-700 transition">How it Works</a>
            <a href="#PricingPlans" className="hover:text-purple-700 transition">Pricing</a>
            <a href="#Contact" className="hover:text-purple-700 transition">Contact</a>
            <a href="#Features" className="hover:text-purple-700 transition">Features</a>
            <button
              className="mt-2 w-full bg-[#661C71] text-white rounded-full py-2 hover:opacity-90 transition"
            >
              Start Free Trial
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
