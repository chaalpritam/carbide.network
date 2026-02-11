"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-black/5"
          : "bg-white/80 backdrop-blur-md"
        }`}
    >
      <nav className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-0 group">
          <span className="text-xl font-semibold tracking-tight">carbide</span>
          <span className="text-xl font-semibold tracking-tight italic-serif">.network</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {["Technology", "Providers", "Pricing"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-black/40 hover:text-black transition-colors duration-300 relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Link
            href="https://github.com/carbidenetwork"
            target="_blank"
            className="text-sm font-medium text-black/40 hover:text-black transition-colors duration-300 relative group"
          >
            GitHub
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full" />
          </Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link href="#cta" className="btn-primary px-8">
            Join the Network
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 relative w-10 h-10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`absolute left-2 w-6 h-[2px] bg-black transition-all duration-300 ${mobileMenuOpen ? "top-[19px] rotate-45" : "top-3"
              }`}
          />
          <span
            className={`absolute left-2 top-[19px] w-6 h-[2px] bg-black transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
          />
          <span
            className={`absolute left-2 w-6 h-[2px] bg-black transition-all duration-300 ${mobileMenuOpen ? "top-[19px] -rotate-45" : "top-7"
              }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-black/5 transition-all duration-500 origin-top ${mobileMenuOpen ? "scale-y-100 opacity-100 visible" : "scale-y-0 opacity-0 invisible"
          }`}
      >
        <div className="px-6 py-10 space-y-6">
          {["Technology", "Providers", "Pricing"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-2xl font-medium text-black/60 hover:text-black transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Link
            href="https://github.com/carbidenetwork"
            target="_blank"
            className="block text-2xl font-medium text-black/60 hover:text-black transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            GitHub
          </Link>
          <div className="pt-6">
            <Link
              href="#cta"
              className="btn-primary w-full justify-center text-lg py-5"
              onClick={() => setMobileMenuOpen(false)}
            >
              Join the Network
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
