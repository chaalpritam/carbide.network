"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Coins,
  Server,
  Lock,
  Zap,
  HardDrive,
  Layers,
  TrendingDown,
  Users,
  ChevronLeft,
  ExternalLink,
  Menu,
  X,
  Play,
  Download,
  Smartphone,
  Monitor,
} from "lucide-react"
import { useRef, useState } from "react"
import { EventCard } from "@/components/EventCard"
import { HeroIllustration } from "@/components/illustrations/HeroIllustration"
import { NetworkIllustration } from "@/components/illustrations/NetworkIllustration"
import {
  StorageIcon,
  ReplicationIcon,
  SavingsIcon,
  SecurityIcon,
  EarningsIcon,
  GlobalIcon,
} from "@/components/illustrations/FeatureIcons"

const stats = [
  { value: "60-80%", label: "Cost Savings", description: "vs traditional cloud" },
  { value: "1-10x", label: "Replication", description: "user configurable" },
  { value: "99.9%", label: "Uptime", description: "distributed network" },
  { value: "AES-256", label: "Encryption", description: "end-to-end security" },
]

const features = [
  {
    Icon: StorageIcon,
    title: "Decentralized Storage",
    description: "Your data distributed across a global network of providers. No single point of failure, no central authority controlling your files.",
    highlight: true,
    color: "blue",
  },
  {
    Icon: ReplicationIcon,
    title: "Custom Replication",
    description: "Choose 1-10 copies of your data based on importance. Critical files get more redundancy, backups stay affordable.",
    highlight: true,
    color: "purple",
  },
  {
    Icon: SavingsIcon,
    title: "60-80% Cost Savings",
    description: "Pay only for what you use. Our marketplace-driven pricing beats traditional cloud storage providers significantly.",
    highlight: false,
    color: "green",
  },
  {
    Icon: SecurityIcon,
    title: "Zero-Knowledge Security",
    description: "AES-256-GCM encryption before upload. Only you hold the keys. Providers store encrypted chunks they cannot read.",
    highlight: false,
    color: "blue",
  },
  {
    Icon: EarningsIcon,
    title: "Earn as Provider",
    description: "Monetize your spare storage capacity. Set your own prices, track earnings in real-time, withdraw anytime.",
    highlight: false,
    color: "amber",
  },
  {
    Icon: GlobalIcon,
    title: "Global Network",
    description: "Access your data from anywhere. Intelligent routing finds the fastest providers based on your location.",
    highlight: false,
    color: "indigo",
  },
]

const comparisonData = [
  { feature: "Data Ownership", carbide: "You own it completely", traditional: "Provider controls access" },
  { feature: "Replication Control", carbide: "1-10 copies, your choice", traditional: "Fixed, provider decides" },
  { feature: "Cost Structure", carbide: "60-80% cheaper, pay per use", traditional: "Fixed monthly fees" },
  { feature: "Privacy", carbide: "Zero-knowledge encryption", traditional: "Provider can access" },
  { feature: "Earning Potential", carbide: "Earn by providing storage", traditional: "No opportunity" },
  { feature: "Single Point of Failure", carbide: "Distributed, resilient", traditional: "Centralized risk" },
]

const faqs = [
  {
    question: "How secure is my data on Carbide Network?",
    answer: "Your data is encrypted with AES-256-GCM before leaving your device. Files are split into chunks and distributed across multiple providers. Only you hold the encryption keys - providers cannot read your data.",
  },
  {
    question: "How do I earn by providing storage?",
    answer: "Download the Carbide Provider app, allocate spare disk space, and set your price per GB/month. The network automatically matches you with users, and you earn based on storage provided and uptime maintained.",
  },
  {
    question: "What is configurable replication?",
    answer: "Unlike traditional storage with fixed redundancy, you choose how many copies of your data exist (1-10). Critical files can have 5+ copies across different regions, while backups might need only 2.",
  },
  {
    question: "What hardware do I need to become a provider?",
    answer: "Any computer with at least 100GB free storage and stable internet. We recommend 1TB+ for better earnings. The app handles everything else - no technical expertise required.",
  },
  {
    question: "How is pricing determined?",
    answer: "Providers set their own prices. Users choose providers based on price, reputation, location, and tier. Home providers typically charge $0.002/GB/month, enterprise tiers around $0.01/GB/month.",
  },
  {
    question: "Can I access my files from mobile devices?",
    answer: "Yes, our iOS SDK is production-ready with native Swift integration. Android support is coming soon. You can also access files via desktop apps and web interface.",
  },
]

const platforms = [
  { name: "macOS", icon: Monitor, available: true },
  { name: "Windows", icon: Monitor, available: true },
  { name: "iOS", icon: Smartphone, available: true },
  { name: "Android", icon: Smartphone, available: false, coming: true },
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
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -340, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 340, behavior: 'smooth' })
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="container-custom">
          <nav className="flex items-center justify-between h-20">
            <Link href="/" className="relative z-10">
              <Image
                src="/images/carbidelogo.png"
                alt="Carbide Network"
                width={140}
                height={45}
                className="h-10 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 px-2 py-1.5 rounded-full glass">
              <Link href="#features" className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground rounded-full hover:bg-black/5 transition-colors">
                Features
              </Link>
              <Link href="#how-it-works" className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground rounded-full hover:bg-black/5 transition-colors">
                How It Works
              </Link>
              <Link href="#comparison" className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground rounded-full hover:bg-black/5 transition-colors">
                Compare
              </Link>
              <Link href="#faq" className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground rounded-full hover:bg-black/5 transition-colors">
                FAQ
              </Link>
              <Link href="#events" className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground rounded-full hover:bg-black/5 transition-colors">
                Events
              </Link>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <Button variant="ghost" size="sm" className="font-medium" asChild>
                <Link href="https://docs.carbide.network" target="_blank">
                  Docs
                  <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                </Link>
              </Button>
              <Button size="sm" className="font-medium bg-primary hover:bg-primary/90" asChild>
                <Link href="#cta">
                  Get Started
                </Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-black/5 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b shadow-lg">
            <div className="container-custom py-4 flex flex-col gap-2">
              <Link href="#features" className="px-4 py-3 text-sm font-medium hover:bg-gray-50 rounded-lg" onClick={() => setMobileMenuOpen(false)}>Features</Link>
              <Link href="#how-it-works" className="px-4 py-3 text-sm font-medium hover:bg-gray-50 rounded-lg" onClick={() => setMobileMenuOpen(false)}>How It Works</Link>
              <Link href="#comparison" className="px-4 py-3 text-sm font-medium hover:bg-gray-50 rounded-lg" onClick={() => setMobileMenuOpen(false)}>Compare</Link>
              <Link href="#faq" className="px-4 py-3 text-sm font-medium hover:bg-gray-50 rounded-lg" onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
              <Link href="#events" className="px-4 py-3 text-sm font-medium hover:bg-gray-50 rounded-lg" onClick={() => setMobileMenuOpen(false)}>Events</Link>
              <hr className="my-2" />
              <Link href="https://docs.carbide.network" target="_blank" className="px-4 py-3 text-sm font-medium hover:bg-gray-50 rounded-lg flex items-center">
                Documentation <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
              </Link>
              <Button className="mt-2" asChild>
                <Link href="#cta" onClick={() => setMobileMenuOpen(false)}>Get Started</Link>
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">
        {/* Background elements */}
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '-2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl" />

        <div className="container-custom relative z-10 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-sm font-medium text-blue-700">DePIN Storage Marketplace</span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                <span className="text-foreground">Storage that</span>
                <br />
                <span className="text-gradient">you control</span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                The decentralized storage network where you choose your replication,
                control your costs, and own your data. Save 60-80% compared to traditional cloud.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
                <Button size="lg" className="h-14 px-8 text-base font-semibold bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25" asChild>
                  <Link href="#cta">
                    Start Storing
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-base font-semibold" asChild>
                  <Link href="#how-it-works">
                    <Play className="mr-2 h-4 w-4" />
                    See How It Works
                  </Link>
                </Button>
              </div>

              {/* Platform badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <span className="text-sm text-muted-foreground mr-2">Available on:</span>
                {platforms.map((platform, index) => (
                  <div
                    key={index}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm ${
                      platform.available
                        ? 'bg-gray-100 text-gray-700'
                        : 'bg-gray-50 text-gray-400'
                    }`}
                  >
                    <platform.icon className="h-4 w-4" />
                    {platform.name}
                    {platform.coming && <span className="text-xs">(Soon)</span>}
                  </div>
                ))}
              </div>
            </div>

            {/* Right illustration */}
            <div className="hidden lg:block">
              <HeroIllustration />
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-100 shadow-sm">
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm font-semibold text-foreground/80">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section-padding bg-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="container-custom relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-6">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Why Carbide</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Storage reimagined for the
              <br className="hidden sm:block" />
              <span className="text-gradient"> decentralized era</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built on DePIN principles with user-first design. Your data, your rules, your savings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                  feature.highlight
                    ? 'bg-gradient-to-br from-primary/5 to-purple-500/5 border-primary/20 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5'
                    : 'bg-white hover:border-gray-300 hover:shadow-lg'
                }`}
              >
                <div className="mb-6 transition-transform group-hover:scale-110">
                  <feature.Icon className="w-20 h-20" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="section-padding bg-gray-50 relative overflow-hidden">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-6">
              <Layers className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">How It Works</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Simple for users.
              <br className="hidden sm:block" />
              <span className="text-gradient"> Profitable for providers.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you need storage or have storage to share, Carbide makes it seamless.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            {/* For Users */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                  <HardDrive className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">For Storage Users</h3>
                  <p className="text-muted-foreground">Store your files securely</p>
                </div>
              </div>
              <div className="space-y-6">
                {[
                  { step: "1", title: "Upload & Encrypt", desc: "Files encrypted locally with your keys before leaving your device.", color: "blue" },
                  { step: "2", title: "Choose Replication", desc: "Select 1-10 copies based on how critical your data is.", color: "blue" },
                  { step: "3", title: "Select Providers", desc: "Pick from home, professional, or enterprise providers.", color: "blue" },
                  { step: "4", title: "Access Anywhere", desc: "Retrieve your files from any device via our apps.", color: "blue" },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {item.step}
                    </div>
                    <div className="pt-1">
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button className="w-full h-12" asChild>
                  <Link href="#cta">
                    Start Storing Files
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* For Providers */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">
                  <Coins className="w-7 h-7 text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">For Storage Providers</h3>
                  <p className="text-muted-foreground">Earn from your spare space</p>
                </div>
              </div>
              <div className="space-y-6">
                {[
                  { step: "1", title: "Install the App", desc: "One-click installation with our desktop GUI. No expertise needed.", color: "green" },
                  { step: "2", title: "Allocate Storage", desc: "Choose how much disk space to contribute. Start with 100GB.", color: "green" },
                  { step: "3", title: "Set Your Price", desc: "Control your rates. Typically $0.002-0.005/GB/month.", color: "green" },
                  { step: "4", title: "Earn Passively", desc: "Track real-time earnings. Network handles everything.", color: "green" },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-green-600 font-bold text-sm group-hover:bg-green-600 group-hover:text-white transition-colors">
                      {item.step}
                    </div>
                    <div className="pt-1">
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button variant="outline" className="w-full h-12 border-green-200 text-green-700 hover:bg-green-50" asChild>
                  <Link href="#cta">
                    <Download className="mr-2 h-4 w-4" />
                    Download Provider App
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Network Illustration */}
          <NetworkIllustration />
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-6">
              <TrendingDown className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Comparison</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              See how we
              <span className="text-gradient"> stack up</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Carbide Network vs traditional centralized cloud storage providers.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl border shadow-sm">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b">
                    <th className="text-left p-6 font-semibold text-muted-foreground">Feature</th>
                    <th className="p-6 text-center">
                      <div className="inline-flex items-center gap-2 text-primary font-bold">
                        <Server className="h-5 w-5" />
                        Carbide Network
                      </div>
                    </th>
                    <th className="p-6 text-center">
                      <div className="inline-flex items-center gap-2 text-muted-foreground font-semibold">
                        Traditional Cloud
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="border-b last:border-b-0 hover:bg-gray-50/50 transition-colors">
                      <td className="p-6 font-medium">{row.feature}</td>
                      <td className="p-6 text-center">
                        <div className="inline-flex items-center gap-2 text-green-600">
                          <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                          <span className="font-medium text-sm">{row.carbide}</span>
                        </div>
                      </td>
                      <td className="p-6 text-center">
                        <span className="text-muted-foreground text-sm">{row.traditional}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Cost comparison highlight */}
            <div className="mt-8 p-8 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                  <div className="hidden sm:block">
                    <SavingsIcon className="w-24 h-24" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-green-800 mb-2">Save up to 80% on storage costs</h3>
                    <p className="text-green-700">
                      Average user saves $50-100/month compared to AWS S3, Google Cloud, or Dropbox.
                    </p>
                  </div>
                </div>
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-600/25 flex-shrink-0" asChild>
                  <Link href="#cta">
                    Calculate Savings
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-padding bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-gray-900" />

        {/* Decorative elements */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="container-custom relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 mb-6">
              <Lock className="h-4 w-4 text-blue-400" />
              <span className="text-sm font-semibold text-blue-400">FAQ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Frequently asked
              <span className="text-gradient-blue"> questions</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Everything you need to know about Carbide Network.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm"
              >
                <h3 className="text-lg font-semibold mb-3 text-white">{faq.question}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-6">
              <Users className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Community</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Building together
              <span className="text-gradient"> worldwide</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join our global community of builders and learn about DePIN at our events.
            </p>
          </div>

          <div className="relative">
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border flex items-center justify-center hover:bg-gray-50 transition-colors -ml-6"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide scroll-smooth"
            >
              <EventCard
                title="Disrupt with DePIN (IBW)"
                description="Exploring how DePIN is revolutionizing decentralized infrastructure at India Blockchain Week."
                date="December 9, 2023"
                location="Bengaluru"
                imageUrl="/events/2023.png"
                tweetUrl="https://x.com/ChaalPritam/status/1736350189538189456"
              />
              <EventCard
                title="Disrupt with DePIN (Dubai)"
                description="Discover the future of decentralized physical infrastructure networks."
                date="April 19, 2024"
                location="Dubai"
                imageUrl="/events/2024.png"
                tweetUrl="https://x.com/ChaalPritam/status/1786815270679449952"
              />
              <EventCard
                title="What to Build on DePIN"
                description="Learn about innovative DePIN applications and building next-gen infrastructure."
                date="July 6, 2024"
                location="Chennai"
                imageUrl="/events/2024_1.png"
                tweetUrl="https://x.com/ChaalPritam/status/1809841085721551154"
              />
              <EventCard
                title="What to Build on DePIN"
                description="Hands-on experience building decentralized infrastructure solutions."
                date="July 20, 2024"
                location="Kochi"
                imageUrl="/events/2024_2.png"
                tweetUrl="https://x.com/ChaalPritam/status/1815346193578532927"
              />
              <EventCard
                title="What to Build on DePIN"
                description="Deep dive into DePIN architecture and scalable applications."
                date="July 21, 2024"
                location="Hyderabad"
                imageUrl="/events/2024_3.png"
                tweetUrl="https://x.com/ChaalPritam/status/1815395721425944993"
              />
              <EventCard
                title="What to Build on DePIN"
                description="Leveraging DePIN for building next-gen decentralized applications."
                date="July 26, 2024"
                location="Bangalore"
                imageUrl="/events/2024_4.png"
                tweetUrl="https://x.com/ChaalPritam/status/1818548912044605780"
              />
              <EventCard
                title="What to Build on DePIN"
                description="Transforming traditional infrastructure into decentralized networks."
                date="August 3, 2024"
                location="Pune"
                imageUrl="/events/2024_5.png"
                tweetUrl="https://x.com/ChaalPritam/status/1820003761533673594"
              />
              <EventCard
                title="What to Build on DePIN"
                description="Exploring the intersection of DePIN and Web3 infrastructure."
                date="August 6, 2024"
                location="Goa"
                imageUrl="/events/2024_6.png"
                tweetUrl="https://x.com/ChaalPritam/status/1821097979010314748"
              />
            </div>

            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border flex items-center justify-center hover:bg-gray-50 transition-colors -mr-6"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="section-padding bg-gradient-to-br from-primary via-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Ready to take control
              <br />
              of your data?
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-xl mx-auto">
              Join thousands who are already saving money and earning rewards with decentralized storage.
            </p>

            {isSubmitted ? (
              <div className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <CheckCircle2 className="h-6 w-6 text-green-400" />
                <p className="text-lg font-medium">You are on the list. We will be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 h-14 px-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 text-base"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="h-14 px-8 bg-white text-primary hover:bg-white/90 font-semibold shadow-lg"
                >
                  Get Early Access
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            )}

            <p className="mt-6 text-sm text-white/60">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gray-50 border-t">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2">
              <Link href="/" className="inline-block mb-6">
                <Image
                  src="/images/carbidelogo.png"
                  alt="Carbide Network"
                  width={140}
                  height={45}
                  className="h-10 w-auto"
                />
              </Link>
              <p className="text-muted-foreground mb-6 max-w-xs">
                The decentralized storage marketplace. Your data, your rules, your savings.
              </p>
              <div className="flex gap-4">
                <Link
                  href="https://x.com/carbidenetwork"
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>
                <Link
                  href="https://github.com/anthropics"
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </Link>
                <Link
                  href="https://t.me/carbidenetwork"
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-3">
                <li><Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</Link></li>
                <li><Link href="#comparison" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Security</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Enterprise</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Developers</h4>
              <ul className="space-y-3">
                <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Documentation</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">API Reference</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">iOS SDK</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Provider App</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
                <li><Link href="#events" className="text-muted-foreground hover:text-foreground transition-colors">Events</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Careers</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Carbide Network. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
