"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Coins,
  Lock,
  Zap,
  HardDrive,
  Layers,
  TrendingDown,
  Users,
  ChevronLeft,
  Menu,
  X,
  Play,
  Download,
  Smartphone,
  Monitor,
  Sparkles,
  Package,
  Terminal,
  Globe,
  Server,
  Apple,
  ExternalLink,
} from "lucide-react"
import { useRef, useState } from "react"
import { EventCard } from "@/components/EventCard"
import { HeroIllustration } from "@/components/illustrations/HeroIllustration"
import { NetworkIllustration } from "@/components/illustrations/NetworkIllustration"
import { AnimatedBackground, FloatingOrbs, GridBackground } from "@/components/AnimatedBackground"
import {
  StorageIcon,
  ReplicationIcon,
  SavingsIcon,
  SecurityIcon,
  EarningsIcon,
  GlobalIcon,
} from "@/components/illustrations/FeatureIcons"

// Real stats from carbide-node
const stats = [
  { value: "60-80%", label: "Cheaper", accent: true },
  { value: "1-10x", label: "Copies" },
  { value: "99.9%", label: "Uptime" },
  { value: "AES-256", label: "Encrypted" },
]

// Features based on actual carbide capabilities
const features = [
  {
    Icon: StorageIcon,
    title: "Decentralized Network",
    description: "Your files distributed across independent providers worldwide. No Big Tech middlemen, no single point of failure.",
  },
  {
    Icon: ReplicationIcon,
    title: "1-10 Copies, You Choose",
    description: "Critical files? Set 5 copies on enterprise providers. Temp backups? Just 2 on home providers. Your call.",
  },
  {
    Icon: SavingsIcon,
    title: "60-80% Cost Savings",
    description: "Home tier: $0.002/GB/month. Enterprise: $0.008/GB/month. No data centers, no corporate overhead.",
  },
  {
    Icon: SecurityIcon,
    title: "AES-256-GCM Encryption",
    description: "Client-side encryption before upload. Providers store encrypted chunks. Only you have the keys.",
  },
  {
    Icon: EarningsIcon,
    title: "Earn $20-100/month",
    description: "Share 1TB of spare space as a home provider at $0.002/GB. That's ~$24/year passive income per TB.",
  },
  {
    Icon: GlobalIcon,
    title: "iOS, macOS, Windows",
    description: "Native iOS SDK with Swift. Desktop apps via Tauri. Android coming soon. Access from anywhere.",
  },
]

// Accurate pricing tiers from carbide-node
const pricingTiers = [
  {
    tier: "Home",
    price: "$0.002",
    earnings: "~$24/year per TB",
    uptime: "95%",
    desc: "Spare disk space"
  },
  {
    tier: "Professional",
    price: "$0.004",
    earnings: "~$48/year per TB",
    uptime: "99%",
    desc: "Dedicated hardware"
  },
  {
    tier: "Enterprise",
    price: "$0.008",
    earnings: "~$96/year per TB",
    uptime: "99.9%",
    desc: "SLA guaranteed"
  },
]

// User storage presets from carbide-node
const storagePresets = [
  { name: "Critical", copies: 5, price: "$0.01/GB", providers: "Enterprise only" },
  { name: "Important", copies: 3, price: "$0.005/GB", providers: "Mixed" },
  { name: "Backup", copies: 2, price: "$0.002/GB", providers: "Home OK" },
]

// Comparison based on actual carbide differentiators
const comparisonData = [
  { feature: "Replication control", carbide: "1-10 copies, you choose", traditional: "Fixed by provider" },
  { feature: "Cost per GB/month", carbide: "$0.002-0.012", traditional: "$0.02-0.03" },
  { feature: "Encryption", carbide: "AES-256-GCM client-side", traditional: "Server-side (they can read)" },
  { feature: "Provider earnings", carbide: "$20-100/month passive", traditional: "Not possible" },
  { feature: "Single point of failure", carbide: "Distributed network", traditional: "Centralized" },
]

// FAQs with accurate technical details
const faqs = [
  {
    question: "How is my data protected?",
    answer: "Files are encrypted with AES-256-GCM before leaving your device - the same encryption standard used by banks. Data is then split into chunks distributed across multiple providers. Even if one provider fails, your files are safe with redundant copies.",
  },
  {
    question: "How much can I earn as a provider?",
    answer: "Home providers earn ~$24/year per TB at $0.002/GB/month. With 1TB of spare space and good uptime (95%+), expect $20-100/month. Professional tiers ($0.004-0.008/GB) earn more but require dedicated hardware and higher uptime.",
  },
  {
    question: "What does 1-10 replication mean?",
    answer: "You choose how many copies of each file exist on the network. Critical files (photos, documents)? Set 5 copies on enterprise providers with 99.9% uptime. Temporary backups? Just 2 copies on cheaper home providers.",
  },
  {
    question: "What do I need to run a provider node?",
    answer: "Minimum: 100GB free disk space and stable internet. We recommend 500GB+ for meaningful earnings. Our Tauri-based desktop app (macOS/Windows) handles everything - one-click install, auto-start, real-time earnings dashboard.",
  },
  {
    question: "How does pricing work?",
    answer: "Providers set their own rates by tier. Home: $0.002/GB/month, Professional: $0.004, Enterprise: $0.008, Global CDN: $0.012. Users pick providers based on price, reputation score, and geographic proximity.",
  },
  {
    question: "Which platforms are supported?",
    answer: "Native iOS SDK (Swift 5.9+, iOS 16+) is production-ready. Desktop provider app works on macOS and Windows via Tauri. Android SDK is in development. Web access coming soon.",
  },
]

const platforms = [
  { name: "macOS", icon: Monitor, available: true },
  { name: "Windows", icon: Monitor, available: true },
  { name: "iOS", icon: Smartphone, available: true },
  { name: "Android", icon: Smartphone, available: false, coming: true },
]

// Products from carbide ecosystem
const products = [
  {
    name: "Carbide Provider",
    description: "Desktop app to run a storage provider node. One-click setup, real-time earnings dashboard, auto-start on boot.",
    icon: Server,
    platforms: ["macOS", "Windows"],
    status: "Available",
    statusColor: "green",
    features: ["Tauri-based GUI", "Real-time earnings", "Auto LaunchAgent", "Live logs viewer"],
    cta: "Download",
    href: "#cta",
  },
  {
    name: "Carbide iOS SDK",
    description: "Native Swift SDK for integrating decentralized storage into iOS and macOS apps. Zero external dependencies.",
    icon: Apple,
    platforms: ["iOS 16+", "macOS 13+"],
    status: "Available",
    statusColor: "green",
    features: ["Swift 5.9+", "AES-256 encryption", "Keychain storage", "Progress tracking"],
    cta: "View Docs",
    href: "https://github.com/carbidenetwork",
  },
  {
    name: "Carbide CLI",
    description: "Command-line tools for power users. Upload, download, manage files, and interact with providers directly.",
    icon: Terminal,
    platforms: ["macOS", "Linux", "Windows"],
    status: "Available",
    statusColor: "green",
    features: ["File operations", "Provider management", "Scripting support", "JSON output"],
    cta: "Install",
    href: "#cta",
  },
  {
    name: "Discovery Service",
    description: "Central registry that coordinates the marketplace. Find providers, get quotes, check health status.",
    icon: Globe,
    platforms: ["Cloud API"],
    status: "Live",
    statusColor: "green",
    features: ["11 REST endpoints", "Health monitoring", "Geographic search", "Quote aggregation"],
    cta: "API Docs",
    href: "https://github.com/carbidenetwork",
  },
  {
    name: "Android SDK",
    description: "Native Kotlin SDK for Android apps. Same great features as iOS SDK, optimized for Android.",
    icon: Smartphone,
    platforms: ["Android 8+"],
    status: "Coming Soon",
    statusColor: "yellow",
    features: ["Kotlin native", "Jetpack Compose", "Background sync", "Material Design"],
    cta: "Notify Me",
    href: "#cta",
  },
  {
    name: "Web Dashboard",
    description: "Browser-based interface to manage your files and monitor provider earnings from anywhere.",
    icon: Monitor,
    platforms: ["Web"],
    status: "In Development",
    statusColor: "yellow",
    features: ["File manager", "Analytics", "Multi-device", "No install"],
    cta: "Notify Me",
    href: "#cta",
  },
]

export default function LandingPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setEmail("")
  }

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -340, behavior: 'smooth' })
  }

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 340, behavior: 'smooth' })
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/carbidelogo.png"
                alt="Carbide"
                width={100}
                height={32}
              />
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link href="#features" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Features</Link>
              <Link href="#products" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Products</Link>
              <Link href="#pricing" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Pricing</Link>
              <Link href="#faq" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">FAQ</Link>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <Button variant="ghost" size="sm" asChild>
                <Link href="https://github.com/anthropics" target="_blank">
                  GitHub
                </Link>
              </Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700" asChild>
                <Link href="#cta">Get Started</Link>
              </Button>
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </nav>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b">
            <div className="px-4 py-4 space-y-3">
              <Link href="#features" className="block py-2 text-gray-600" onClick={() => setMobileMenuOpen(false)}>Features</Link>
              <Link href="#products" className="block py-2 text-gray-600" onClick={() => setMobileMenuOpen(false)}>Products</Link>
              <Link href="#pricing" className="block py-2 text-gray-600" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
              <Link href="#faq" className="block py-2 text-gray-600" onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
              <hr />
              <Button className="w-full bg-blue-600" asChild>
                <Link href="#cta" onClick={() => setMobileMenuOpen(false)}>Get Started</Link>
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6">
                <Sparkles className="h-4 w-4" />
                v1.0.0 Production Release
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
                Consumer storage,
                <br />
                <span className="text-gradient">reimagined</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0 mb-8">
                Rebuilding consumer storage in a decentralized way, without Google or Apple.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-10">
                <Button size="lg" className="h-12 px-6 bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/20" asChild>
                  <Link href="#cta">
                    Start Storing
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-6" asChild>
                  <Link href="#how-it-works">
                    <Play className="mr-2 h-4 w-4" />
                    Become a Provider
                  </Link>
                </Button>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-6 text-sm">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className={`text-xl font-bold ${stat.accent ? 'text-green-600' : 'text-gray-900'}`}>
                      {stat.value}
                    </div>
                    <div className="text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:pl-8">
              <HeroIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* Platform availability */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="text-sm text-gray-500">Available on:</span>
            {platforms.map((platform, i) => (
              <div
                key={i}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm ${
                  platform.available
                    ? 'bg-white border text-gray-700'
                    : 'bg-gray-100 text-gray-400'
                }`}
              >
                <platform.icon className="h-4 w-4" />
                {platform.name}
                {platform.coming && <span className="text-xs">(Soon)</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 text-purple-700 text-sm font-medium mb-4">
              <Zap className="h-4 w-4" />
              Core Features
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What makes Carbide different
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              User-configurable replication, client-side encryption, and a marketplace where providers set their own prices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl border border-gray-100 bg-white hover:border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4">
                  <feature.Icon className="w-14 h-14" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium mb-4">
              <Package className="h-4 w-4" />
              Products
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              The Carbide ecosystem
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to store files or run a provider node. Native apps, SDKs, and APIs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <div
                key={i}
                className="group flex flex-col p-6 rounded-2xl border border-gray-200 bg-white hover:border-gray-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                    <product.icon className="w-6 h-6 text-gray-600 group-hover:text-indigo-600 transition-colors" />
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    product.statusColor === 'green'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {product.status}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{product.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {product.platforms.map((platform, j) => (
                    <span key={j} className="px-2 py-0.5 rounded bg-gray-100 text-gray-600 text-xs">
                      {platform}
                    </span>
                  ))}
                </div>

                <div className="flex-1">
                  <ul className="space-y-1.5 mb-6">
                    {product.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="h-3.5 w-3.5 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  variant={product.statusColor === 'green' ? 'default' : 'outline'}
                  className={product.statusColor === 'green' ? 'bg-indigo-600 hover:bg-indigo-700' : ''}
                  size="sm"
                  asChild
                >
                  <Link href={product.href} target={product.href.startsWith('http') ? '_blank' : undefined}>
                    {product.cta}
                    {product.href.startsWith('http') && <ExternalLink className="ml-1.5 h-3.5 w-3.5" />}
                    {!product.href.startsWith('http') && product.statusColor === 'green' && <ArrowRight className="ml-1.5 h-3.5 w-3.5" />}
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-4">
              <Layers className="h-4 w-4" />
              How It Works
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Store files or earn money
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Two ways to use Carbide: pay for decentralized storage, or get paid for sharing your spare capacity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* For Users */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                  <HardDrive className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Store Your Files</h3>
                  <p className="text-sm text-gray-500">$0.002-0.012/GB/month</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                {[
                  { n: "1", text: "Files encrypted with AES-256-GCM on your device" },
                  { n: "2", text: "Choose replication factor: 1-10 copies" },
                  { n: "3", text: "Pick providers by price, reputation, or region" },
                  { n: "4", text: "Access via iOS SDK, desktop app, or API" },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600 text-white text-sm font-medium flex items-center justify-center">
                      {step.n}
                    </span>
                    <span className="text-gray-700 pt-0.5">{step.text}</span>
                  </div>
                ))}
              </div>

              {/* Storage presets */}
              <div className="bg-gray-50 rounded-xl p-4 mb-6">
                <p className="text-xs font-medium text-gray-500 mb-3">STORAGE PRESETS</p>
                <div className="space-y-2">
                  {storagePresets.map((preset, i) => (
                    <div key={i} className="flex items-center justify-between text-sm">
                      <span className="font-medium text-gray-700">{preset.name}</span>
                      <span className="text-gray-500">{preset.copies} copies • {preset.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                <Link href="#cta">
                  Start Storing
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* For Providers */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                  <Coins className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Earn as Provider</h3>
                  <p className="text-sm text-gray-500">$20-100/month passive income</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                {[
                  { n: "1", text: "Download Tauri desktop app (macOS/Windows)" },
                  { n: "2", text: "Allocate disk space (100GB minimum)" },
                  { n: "3", text: "Set your price tier ($0.002-0.012/GB)" },
                  { n: "4", text: "Auto-start, real-time earnings dashboard" },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-green-600 text-white text-sm font-medium flex items-center justify-center">
                      {step.n}
                    </span>
                    <span className="text-gray-700 pt-0.5">{step.text}</span>
                  </div>
                ))}
              </div>

              {/* Provider tiers */}
              <div className="bg-gray-50 rounded-xl p-4 mb-6">
                <p className="text-xs font-medium text-gray-500 mb-3">PROVIDER TIERS</p>
                <div className="space-y-2">
                  {pricingTiers.map((tier, i) => (
                    <div key={i} className="flex items-center justify-between text-sm">
                      <span className="font-medium text-gray-700">{tier.tier}</span>
                      <span className="text-gray-500">{tier.price}/GB • {tier.uptime} uptime</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button variant="outline" className="w-full border-green-200 text-green-700 hover:bg-green-50" asChild>
                <Link href="#cta">
                  <Download className="mr-2 h-4 w-4" />
                  Download Provider App
                </Link>
              </Button>
            </div>
          </div>

          <NetworkIllustration />
        </div>
      </section>

      {/* Pricing/Comparison Section */}
      <section id="pricing" className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 text-green-700 text-sm font-medium mb-4">
              <TrendingDown className="h-4 w-4" />
              Pricing
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Carbide vs Traditional Cloud
            </h2>
            <p className="text-lg text-gray-600">
              No data centers. No corporate overhead. Just a marketplace connecting storage supply and demand.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm mb-8">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-gray-50">
                  <th className="text-left p-4 font-medium text-gray-500"></th>
                  <th className="p-4 text-center">
                    <span className="font-bold text-blue-600">Carbide</span>
                  </th>
                  <th className="p-4 text-center">
                    <span className="text-gray-400">AWS/Dropbox</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={i} className="border-b last:border-b-0">
                    <td className="p-4 text-gray-700">{row.feature}</td>
                    <td className="p-4 text-center">
                      <span className="inline-flex items-center gap-1.5 text-green-600 font-medium text-sm">
                        <CheckCircle2 className="h-4 w-4" />
                        {row.carbide}
                      </span>
                    </td>
                    <td className="p-4 text-center text-gray-400 text-sm">
                      {row.traditional}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Provider earnings highlight */}
          <div className="grid md:grid-cols-3 gap-4">
            {pricingTiers.map((tier, i) => (
              <div key={i} className="p-5 rounded-xl bg-gray-50 border border-gray-100 text-center">
                <p className="text-sm font-medium text-gray-500 mb-1">{tier.tier} Provider</p>
                <p className="text-2xl font-bold text-gray-900">{tier.price}<span className="text-sm font-normal text-gray-500">/GB/mo</span></p>
                <p className="text-sm text-green-600 font-medium">{tier.earnings}</p>
                <p className="text-xs text-gray-400 mt-1">{tier.uptime} uptime • {tier.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-28 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-blue-300 text-sm font-medium mb-4">
              <Lock className="h-4 w-4" />
              FAQ
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Common questions
            </h2>
            <p className="text-lg text-gray-400">
              Technical details about the Carbide network.
            </p>
          </div>

          <div className="grid gap-4">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 text-orange-700 text-sm font-medium mb-4">
              <Users className="h-4 w-4" />
              Community
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              DePIN events worldwide
            </h2>
            <p className="text-lg text-gray-600">
              Building the decentralized physical infrastructure network community.
            </p>
          </div>

          <div className="relative">
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg border flex items-center justify-center hover:bg-gray-50 -ml-5"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto gap-5 pb-4 scrollbar-hide"
            >
              <EventCard
                title="Disrupt with DePIN"
                description="India Blockchain Week - decentralized infrastructure"
                date="Dec 9, 2023"
                location="Bengaluru"
                imageUrl="/events/2023.png"
                tweetUrl="https://x.com/ChaalPritam/status/1736350189538189456"
              />
              <EventCard
                title="DePIN Dubai"
                description="Physical infrastructure networks in the Middle East"
                date="Apr 19, 2024"
                location="Dubai"
                imageUrl="/events/2024.png"
                tweetUrl="https://x.com/ChaalPritam/status/1786815270679449952"
              />
              <EventCard
                title="Build on DePIN"
                description="Workshop: building decentralized infrastructure"
                date="Jul 6, 2024"
                location="Chennai"
                imageUrl="/events/2024_1.png"
                tweetUrl="https://x.com/ChaalPritam/status/1809841085721551154"
              />
              <EventCard
                title="Build on DePIN"
                description="Hands-on DePIN development workshop"
                date="Jul 20, 2024"
                location="Kochi"
                imageUrl="/events/2024_2.png"
                tweetUrl="https://x.com/ChaalPritam/status/1815346193578532927"
              />
              <EventCard
                title="Build on DePIN"
                description="DePIN architecture deep dive"
                date="Jul 21, 2024"
                location="Hyderabad"
                imageUrl="/events/2024_3.png"
                tweetUrl="https://x.com/ChaalPritam/status/1815395721425944993"
              />
              <EventCard
                title="Build on DePIN"
                description="Decentralized apps on physical infrastructure"
                date="Jul 26, 2024"
                location="Bangalore"
                imageUrl="/events/2024_4.png"
                tweetUrl="https://x.com/ChaalPritam/status/1818548912044605780"
              />
              <EventCard
                title="Build on DePIN"
                description="DePIN workshop for developers"
                date="Aug 3, 2024"
                location="Pune"
                imageUrl="/events/2024_5.png"
                tweetUrl="https://x.com/ChaalPritam/status/1820003761533673594"
              />
              <EventCard
                title="Build on DePIN"
                description="DePIN meets Web3 infrastructure"
                date="Aug 6, 2024"
                location="Goa"
                imageUrl="/events/2024_6.png"
                tweetUrl="https://x.com/ChaalPritam/status/1821097979010314748"
              />
            </div>

            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg border flex items-center justify-center hover:bg-gray-50 -mr-5"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 md:py-28 bg-gradient-to-br from-blue-600 to-violet-600">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Join the decentralized storage network
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Store files at $0.002/GB or earn passive income as a provider. Production-ready, v1.0.0.
          </p>

          {isSubmitted ? (
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 border border-white/20">
              <CheckCircle2 className="h-5 w-5 text-green-400" />
              <span>You&apos;re on the list!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                required
                className="flex-1 h-12 px-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <Button type="submit" size="lg" className="h-12 bg-white text-blue-600 hover:bg-white/90 font-semibold">
                Get Early Access
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </form>
          )}

          <p className="mt-4 text-sm text-white/50">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-50 border-t">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col gap-6">
              <Image
                src="/images/carbidelogo.png"
                alt="Carbide"
                width={80}
                height={26}
              />
              <span className="text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Carbide Network
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Link href="https://x.com/carbidenetwork" target="_blank" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-blue-100 hover:text-blue-600 transition-colors">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
              <Link href="https://github.com/carbidenetwork" target="_blank" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 hover:text-gray-700 transition-colors">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </Link>
              <Link href="https://t.me/carbidenetwork" target="_blank" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-blue-100 hover:text-blue-500 transition-colors">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
