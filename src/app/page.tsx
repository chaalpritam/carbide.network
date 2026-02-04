"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  ChevronDown,
  Shield,
  Zap,
  Globe,
  HardDrive,
  Lock,
  DollarSign,
  Check,
} from "lucide-react"
import { AnimatedBackground, FloatingOrbs } from "@/components/AnimatedBackground"
import { Globe as GlobeVisualizationSection } from "@/components/sections"
import { useEffect, useRef, useState } from "react"

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
  }

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden relative">
      {/* Universal Background particles */}
      <AnimatedBackground />
      <FloatingOrbs />

      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled
          ? "bg-black/80 backdrop-blur-2xl border-b border-white/5"
          : "bg-transparent"
          }`}
      >
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/carbidelogo.png"
              alt="Carbide"
              width={120}
              height={40}
              className="brightness-0 invert transition-opacity group-hover:opacity-80"
            />
          </Link>

          <div className="hidden md:flex items-center gap-12">
            {["Technology", "Providers", "Pricing"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[13px] text-white/50 hover:text-white transition-all duration-300 uppercase tracking-[0.2em] font-light"
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Link
              href="https://github.com/carbidenetwork"
              target="_blank"
              className="text-[13px] text-white/50 hover:text-white transition-all duration-300 uppercase tracking-[0.2em] font-light"
            >
              GitHub
            </Link>
            <Button
              className="bg-white text-black hover:bg-white/90 rounded-full px-8 h-11 text-[13px] uppercase tracking-[0.15em] font-medium transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href="#cta">Order Now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2 relative w-10 h-10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span
              className={`absolute left-2 w-6 h-[2px] bg-white transition-all duration-300 ${mobileMenuOpen ? "top-[19px] rotate-45" : "top-3"
                }`}
            />
            <span
              className={`absolute left-2 top-[19px] w-6 h-[2px] bg-white transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
            />
            <span
              className={`absolute left-2 w-6 h-[2px] bg-white transition-all duration-300 ${mobileMenuOpen ? "top-[19px] -rotate-45" : "top-7"
                }`}
            />
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-2xl border-b border-white/5 transition-all duration-500 ${mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
        >
          <div className="px-6 py-10 space-y-6">
            {["Technology", "Providers", "Pricing"].map((item, i) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-2xl text-white/70 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {item}
              </Link>
            ))}
            <div className="pt-6">
              <Button
                className="w-full bg-white text-black hover:bg-white/90 rounded-full h-14 text-base"
                asChild
              >
                <Link href="#cta" onClick={() => setMobileMenuOpen(false)}>
                  Order Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Full Screen */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <GlobeVisualizationSection />
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 pointer-events-none" />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div
            className="animate-fade-in"
            style={{ transform: `translateY(${scrollY * 0.3}px)`, opacity: 1 - scrollY / 700 }}
          >
            <h1 className="text-[clamp(2.5rem,8vw,6rem)] font-bold tracking-tighter leading-[0.9] mb-8 uppercase">
              REDEFINING
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                CONSUMER STORAGE
              </span>
            </h1>

            <p className="text-[clamp(1rem,2.5vw,1.25rem)] text-white/40 max-w-xl mx-auto mb-12 font-light tracking-wide animate-fade-in-delay">
              Your files. A global network of providers. No middlemen.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delay-2">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 rounded-full px-12 h-14 text-[15px] uppercase tracking-[0.15em] font-medium transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
                asChild
              >
                <Link href="#cta">
                  Order Now
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 group"
        >
          <span className="text-[11px] uppercase tracking-[0.3em] text-white/30 group-hover:text-white/50 transition-colors">
            Scroll
          </span>
          <ChevronDown className="h-5 w-5 text-white/30 group-hover:text-white/50 animate-bounce transition-colors" />
        </button>

        {/* Side Stats */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-12">
          {[
            { value: "99.9%", label: "UPTIME" },
            { value: "150+", label: "PROVIDERS" },
          ].map((stat, i) => (
            <div key={i} className="text-left">
              <div className="text-2xl font-light text-white/80">{stat.value}</div>
              <div className="text-[10px] tracking-[0.3em] text-white/30">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-12">
          {[
            { value: "$0.002", label: "PER GB/MO" },
            { value: "AES-256", label: "ENCRYPTED" },
          ].map((stat, i) => (
            <div key={i} className="text-right">
              <div className="text-2xl font-light text-white/80">{stat.value}</div>
              <div className="text-[10px] tracking-[0.3em] text-white/30">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Video-like Feature Section */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold tracking-tight leading-[1.1] mb-8">
                  YOUR DATA.
                  <br />
                  <span className="text-white/30">YOUR CONTROL.</span>
                </h2>
                <p className="text-lg text-white/40 leading-relaxed mb-12 max-w-lg">
                  Every file is encrypted on your device before it leaves. Split across
                  multiple independent providers. No single entity can access your data.
                </p>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-sm text-white/50">Network Active</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                    <span className="text-sm text-white/50">Providers Online</span>
                  </div>
                </div>
              </div>

              <div className="relative aspect-square">
                <EncryptionVisualization />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="relative py-40">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-24">
              <p className="text-[11px] uppercase tracking-[0.4em] text-blue-400 mb-6">Technology</p>
              <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight">
                ADVANCED DISTRIBUTED ARCHITECTURE
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
            {[
              {
                icon: Shield,
                title: "END-TO-END ENCRYPTION",
                description: "AES-256-GCM encryption happens on your device. Zero-knowledge architecture means providers never see your data.",
              },
              {
                icon: Zap,
                title: "CONFIGURABLE REDUNDANCY",
                description: "Choose 1-10 copies across the network. Critical files get maximum redundancy. You decide the tradeoff.",
              },
              {
                icon: Globe,
                title: "GLOBAL DISTRIBUTION",
                description: "Data spread across continents. Geographic redundancy protects against regional failures.",
              },
              {
                icon: Lock,
                title: "CLIENT-SIDE PROCESSING",
                description: "All encryption and decryption happens locally. Your keys never leave your device.",
              },
              {
                icon: DollarSign,
                title: "MARKETPLACE PRICING",
                description: "Providers compete on price and quality. No corporate markup. Pure supply and demand.",
              },
              {
                icon: HardDrive,
                title: "PROVIDER NETWORK",
                description: "Independent operators worldwide. Run a node, earn passive income. Strengthen the network.",
              },
            ].map((feature, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="group p-10 bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05] hover:border-white/10 transition-all duration-700">
                  <feature.icon className="h-6 w-6 text-white/30 mb-8 group-hover:text-blue-400 transition-colors duration-500" />
                  <h3 className="text-sm font-medium tracking-[0.1em] mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-white/30 leading-relaxed group-hover:text-white/50 transition-colors duration-500">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Horizontal Scroll Feel */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-32">
              <p className="text-[11px] uppercase tracking-[0.4em] text-blue-400 mb-6">How It Works</p>
              <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight">
                THREE STEPS TO DECENTRALIZED STORAGE
              </h2>
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-[60px] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent hidden lg:block" />

            <div className="grid lg:grid-cols-3 gap-16 lg:gap-8">
              {[
                {
                  num: "01",
                  title: "ENCRYPT",
                  description: "Your files are encrypted with AES-256-GCM on your device before upload. Only you hold the keys.",
                  visual: <EncryptStepVisual />,
                },
                {
                  num: "02",
                  title: "DISTRIBUTE",
                  description: "Encrypted chunks are spread across independent providers worldwide. You choose the redundancy level.",
                  visual: <DistributeStepVisual />,
                },
                {
                  num: "03",
                  title: "ACCESS",
                  description: "Retrieve from anywhere. Data is fetched from the fastest providers and decrypted locally.",
                  visual: <AccessStepVisual />,
                },
              ].map((step, i) => (
                <ScrollReveal key={i} delay={i * 200}>
                  <div className="relative text-center">
                    <div className="relative z-10 w-[120px] h-[120px] mx-auto mb-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center">
                      {step.visual}
                    </div>
                    <div className="text-[11px] tracking-[0.3em] text-blue-400 mb-4">{step.num}</div>
                    <h3 className="text-xl font-bold tracking-[0.05em] mb-4">{step.title}</h3>
                    <p className="text-sm text-white/30 leading-relaxed max-w-xs mx-auto">
                      {step.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Provider Section */}
      <section id="providers" className="relative py-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal>
              <div>
                <p className="text-[11px] uppercase tracking-[0.4em] text-green-400 mb-6">For Providers</p>
                <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight leading-[1.1] mb-8">
                  EARN PASSIVE
                  <br />
                  <span className="text-white/30">INCOME</span>
                </h2>
                <p className="text-lg text-white/40 leading-relaxed mb-12">
                  Share your unused disk space and earn money. Our desktop app handles
                  everything—just allocate storage and watch your earnings grow.
                </p>

                <div className="space-y-6 mb-12">
                  {[
                    { tier: "Home", price: "$0.002/GB", earnings: "$24/year per TB", uptime: "95%" },
                    { tier: "Professional", price: "$0.004/GB", earnings: "$48/year per TB", uptime: "99%" },
                    { tier: "Enterprise", price: "$0.008/GB", earnings: "$96/year per TB", uptime: "99.9%" },
                  ].map((tier, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between py-5 border-b border-white/5 group hover:border-white/10 transition-colors"
                    >
                      <div>
                        <div className="font-medium mb-1">{tier.tier}</div>
                        <div className="text-xs text-white/30">{tier.price} • {tier.uptime} uptime</div>
                      </div>
                      <div className="text-green-400 font-mono text-lg">{tier.earnings}</div>
                    </div>
                  ))}
                </div>

                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-white/90 rounded-full px-10 h-14 text-[13px] uppercase tracking-[0.15em] font-medium transition-all duration-500 hover:scale-105"
                  asChild
                >
                  <Link href="#cta">
                    Become a Provider
                    <ArrowRight className="ml-3 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-green-500/10 to-transparent rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-[clamp(4rem,10vw,8rem)] font-bold text-white/10">
                      $100
                    </div>
                    <div className="text-sm tracking-[0.3em] text-white/30 uppercase">
                      Per Month Potential
                    </div>
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute top-10 right-10 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs">
                  macOS & Windows
                </div>
                <div className="absolute bottom-20 left-0 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs">
                  One-click setup
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section id="pricing" className="relative py-40">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="text-[11px] uppercase tracking-[0.4em] text-blue-400 mb-6">Pricing</p>
              <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight mb-6">
                TRANSPARENT PRICING
              </h2>
              <p className="text-white/40 max-w-lg mx-auto">
                No hidden fees. No corporate markup. Just a marketplace connecting you to storage providers.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="p-6 text-left text-xs tracking-[0.2em] text-white/30 font-normal uppercase"></th>
                    <th className="p-6 text-center">
                      <div className="text-sm font-bold tracking-wide">CARBIDE</div>
                      <div className="text-xs text-blue-400 mt-1">Decentralized</div>
                    </th>
                    <th className="p-6 text-center text-white/30">
                      <div className="text-sm font-normal">Traditional Cloud</div>
                      <div className="text-xs text-white/20 mt-1">Centralized</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Price per GB/month", carbide: "$0.002 - $0.012", traditional: "$0.02 - $0.03" },
                    { feature: "Encryption", carbide: "Client-side AES-256", traditional: "Server-side" },
                    { feature: "Data ownership", carbide: "You own your keys", traditional: "Provider controlled" },
                    { feature: "Redundancy", carbide: "1-10 copies, your choice", traditional: "Fixed" },
                    { feature: "Single point of failure", carbide: "None", traditional: "Yes" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-white/5 last:border-b-0 hover:bg-white/[0.02] transition-colors">
                      <td className="p-6 text-sm text-white/50">{row.feature}</td>
                      <td className="p-6 text-center">
                        <span className="inline-flex items-center gap-2 text-sm text-green-400">
                          <Check className="h-4 w-4" />
                          {row.carbide}
                        </span>
                      </td>
                      <td className="p-6 text-center text-sm text-white/20">{row.traditional}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="relative py-40 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 via-blue-950/20 to-transparent" />
          <StarField density={1.5} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-[clamp(2.5rem,8vw,5rem)] font-bold tracking-tight leading-[1.1] mb-8">
              READY FOR
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                DECENTRALIZED STORAGE?
              </span>
            </h2>
            <p className="text-lg text-white/40 mb-16 max-w-xl mx-auto">
              Join the network. Store files at $0.002/GB or earn passive income as a provider.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 rounded-full px-14 h-16 text-[15px] uppercase tracking-[0.15em] font-medium transition-all duration-500 hover:scale-105 hover:shadow-[0_0_60px_rgba(255,255,255,0.3)]"
                asChild
              >
                <Link href="https://github.com/carbidenetwork" target="_blank">
                  Get Started
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <p className="mt-12 text-sm text-white/20">
              Available now on macOS, Windows, and iOS
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-10">
              <Image
                src="/images/carbidelogo.png"
                alt="Carbide"
                width={100}
                height={32}
                className="brightness-0 invert opacity-30"
              />
              <span className="text-xs text-white/20 tracking-wide">
                © {new Date().getFullYear()} Carbide Network
              </span>
            </div>

            <div className="flex items-center gap-8">
              {[
                { href: "https://x.com/carbidenetwork", icon: XIcon },
                { href: "https://github.com/carbidenetwork", icon: GitHubIcon },
                { href: "https://t.me/carbidenetwork", icon: TelegramIcon },
              ].map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  target="_blank"
                  className="text-white/20 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Scroll Reveal Component
function ScrollReveal({
  children,
  delay = 0
}: {
  children: React.ReactNode
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="transition-all duration-1000 ease-out"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

// Globe Visualization
function GlobeVisualization({ scrollY }: { scrollY: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rotation = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const drawGlobe = () => {
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const radius = Math.min(canvas.width, canvas.height) * 0.35

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Outer glow
      const gradient = ctx.createRadialGradient(centerX, centerY, radius * 0.5, centerX, centerY, radius * 1.5)
      gradient.addColorStop(0, "rgba(59, 130, 246, 0.1)")
      gradient.addColorStop(0.5, "rgba(59, 130, 246, 0.05)")
      gradient.addColorStop(1, "transparent")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Globe outline
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
      ctx.strokeStyle = "rgba(59, 130, 246, 0.2)"
      ctx.lineWidth = 1
      ctx.stroke()

      // Latitude lines
      for (let i = -3; i <= 3; i++) {
        const y = centerY + (radius * i) / 4
        const xRadius = Math.sqrt(radius * radius - Math.pow((radius * i) / 4, 2))
        if (xRadius > 0) {
          ctx.beginPath()
          ctx.ellipse(centerX, y, xRadius, xRadius * 0.1, 0, 0, Math.PI * 2)
          ctx.strokeStyle = "rgba(59, 130, 246, 0.1)"
          ctx.stroke()
        }
      }

      // Longitude lines (rotating)
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI + rotation.current
        ctx.beginPath()
        ctx.ellipse(centerX, centerY, radius * Math.abs(Math.cos(angle)), radius, 0, 0, Math.PI * 2)
        ctx.strokeStyle = "rgba(59, 130, 246, 0.08)"
        ctx.stroke()
      }

      // Nodes (providers)
      const nodes = [
        { lat: 0.3, lng: rotation.current },
        { lat: -0.2, lng: rotation.current + 1 },
        { lat: 0.5, lng: rotation.current + 2 },
        { lat: -0.4, lng: rotation.current + 3 },
        { lat: 0.1, lng: rotation.current + 4 },
        { lat: -0.3, lng: rotation.current + 5 },
        { lat: 0.4, lng: rotation.current + 1.5 },
        { lat: -0.1, lng: rotation.current + 2.5 },
      ]

      nodes.forEach((node) => {
        const x = centerX + radius * Math.cos(node.lng) * Math.cos(node.lat * Math.PI / 2) * 0.9
        const y = centerY + radius * Math.sin(node.lat * Math.PI / 2) * 0.9
        const z = Math.sin(node.lng)

        if (z > -0.3) {
          const opacity = (z + 1) / 2

          // Node glow
          const nodeGradient = ctx.createRadialGradient(x, y, 0, x, y, 15)
          nodeGradient.addColorStop(0, `rgba(59, 130, 246, ${opacity * 0.8})`)
          nodeGradient.addColorStop(1, "transparent")
          ctx.fillStyle = nodeGradient
          ctx.beginPath()
          ctx.arc(x, y, 15, 0, Math.PI * 2)
          ctx.fill()

          // Node core
          ctx.beginPath()
          ctx.arc(x, y, 3, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(147, 197, 253, ${opacity})`
          ctx.fill()
        }
      })

      // Draw connections between visible nodes
      ctx.strokeStyle = "rgba(59, 130, 246, 0.15)"
      ctx.lineWidth = 1
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const node1 = nodes[i]
          const node2 = nodes[j]
          const x1 = centerX + radius * Math.cos(node1.lng) * Math.cos(node1.lat * Math.PI / 2) * 0.9
          const y1 = centerY + radius * Math.sin(node1.lat * Math.PI / 2) * 0.9
          const z1 = Math.sin(node1.lng)
          const x2 = centerX + radius * Math.cos(node2.lng) * Math.cos(node2.lat * Math.PI / 2) * 0.9
          const y2 = centerY + radius * Math.sin(node2.lat * Math.PI / 2) * 0.9
          const z2 = Math.sin(node2.lng)

          if (z1 > -0.3 && z2 > -0.3) {
            const dist = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
            if (dist < radius * 0.8) {
              ctx.beginPath()
              ctx.moveTo(x1, y1)
              ctx.lineTo(x2, y2)
              ctx.stroke()
            }
          }
        }
      }

      rotation.current += 0.003
      animationId = requestAnimationFrame(drawGlobe)
    }

    window.addEventListener("resize", resize)
    resize()
    drawGlobe()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0"
      style={{ opacity: Math.max(0.3, 1 - scrollY / 500) }}
    />
  )
}

// Encryption Visualization
function EncryptionVisualization() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Central lock */}
      <div className="absolute w-32 h-32 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center animate-pulse">
        <Lock className="h-12 w-12 text-blue-400/50" />
      </div>

      {/* Orbiting data */}
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="absolute w-4 h-4 rounded bg-blue-400/30 animate-orbit"
          style={{
            animationDuration: `${8 + i * 2}s`,
            animationDelay: `${i * -2}s`,
          }}
        />
      ))}

      {/* Rings */}
      <div className="absolute w-48 h-48 rounded-full border border-white/5" />
      <div className="absolute w-64 h-64 rounded-full border border-white/5" />
      <div className="absolute w-80 h-80 rounded-full border border-white/5" />
    </div>
  )
}

// Step Visuals
function EncryptStepVisual() {
  return <Lock className="h-10 w-10 text-blue-400/50" />
}

function DistributeStepVisual() {
  return <Globe className="h-10 w-10 text-blue-400/50" />
}

function AccessStepVisual() {
  return <Zap className="h-10 w-10 text-blue-400/50" />
}

// Star Field
function StarField({ density = 1 }: { density?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let stars: { x: number; y: number; size: number; opacity: number; twinkleSpeed: number }[] = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initStars()
    }

    const initStars = () => {
      stars = []
      const count = Math.floor((canvas.width * canvas.height) / 10000) * density

      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.5 + 0.2,
          twinkleSpeed: Math.random() * 0.02 + 0.01,
        })
      }
    }

    let time = 0
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 0.016

      stars.forEach((star) => {
        const twinkle = Math.sin(time * star.twinkleSpeed * 60) * 0.3 + 0.7
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * twinkle})`
        ctx.fill()
      })

      animationId = requestAnimationFrame(animate)
    }

    window.addEventListener("resize", resize)
    resize()
    animate()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationId)
    }
  }, [density])

  return <canvas ref={canvasRef} className="absolute inset-0" />
}

// Social Icons
function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  )
}
