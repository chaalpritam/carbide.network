"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"

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

  const navItems = [
    { label: "Install Node", href: "#install-node" },
    { label: "Ecosystem", href: "#products" },
    { label: "Team", href: "#team" },
    { label: "How it Works", href: "#how-it-works" },
    { label: "Events", href: "#events" },
    { label: "Providers", href: "#providers" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${scrolled
        ? "py-4"
        : "py-6"
        }`}
    >
      <nav className={`max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 transition-all duration-500 ${scrolled ? "scale-[0.98]" : "scale-100"
        }`}>
        <div className={`flex items-center justify-between transition-all duration-500 rounded-full px-8 ${scrolled
          ? "bg-white/70 backdrop-blur-xl border border-black/5 shadow-[0_8px_32px_rgba(0,0,0,0.04)] h-16"
          : "h-20"
          }`}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-0 group shrink-0">
            <span className="text-xl font-bold tracking-tighter">carbide</span>
            <span className="text-xl font-bold tracking-tighter italic-serif">.network</span>
          </Link>

          {/* Desktop Nav - Centered */}
          <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[13px] font-semibold text-black/40 hover:text-black transition-all duration-300 relative group px-1"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-500 ease-out group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Right side CTA + GitHub */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="https://github.com/carbidenetwork"
              target="_blank"
              className="text-[13px] font-semibold text-black/40 hover:text-black transition-colors duration-300"
            >
              GitHub
            </Link>
            <Link href="#cta" className="btn-primary !py-2.5 !px-6 !text-xs !rounded-full shadow-sm hover:shadow-md">
              Join Network
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 relative w-10 h-10 z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`absolute left-2 w-6 h-[1.5px] bg-black transition-all duration-300 ${mobileMenuOpen ? "top-[19px] rotate-45" : "top-3.5"
                }`}
            />
            <span
              className={`absolute left-2 top-[19px] w-6 h-[1.5px] bg-black transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
            />
            <span
              className={`absolute left-2 w-6 h-[1.5px] bg-black transition-all duration-300 ${mobileMenuOpen ? "top-[19px] -rotate-45" : "top-6.5"
                }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="md:hidden absolute top-full left-6 right-6 mt-4 bg-white/95 backdrop-blur-2xl rounded-[2.5rem] border border-black/5 shadow-2xl p-8 origin-top overflow-hidden"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className="text-3xl font-medium text-black/60 hover:text-black transition-colors flex items-center justify-between group"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                    <ArrowRight className="h-6 w-6 opacity-0 -translate-x-4 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                  </Link>
                </motion.div>
              ))}
              <div className="pt-8 mt-4 border-t border-black/5 flex flex-col gap-4">
                <Link
                  href="https://github.com/carbidenetwork"
                  target="_blank"
                  className="text-lg font-medium text-black/40 hover:text-black transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  GitHub
                </Link>
                <Link
                  href="#cta"
                  className="btn-primary w-full justify-center text-lg py-5 mt-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Join the Network
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
