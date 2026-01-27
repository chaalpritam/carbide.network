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
  { value: "60-80%", label: "Cheaper", accent: true },
  { value: "1-10x", label: "Replication" },
  { value: "99.9%", label: "Uptime" },
  { value: "E2E", label: "Encrypted" },
]

const features = [
  {
    Icon: StorageIcon,
    title: "Truly Decentralized",
    description: "No Big Tech middlemen. Your files live on a network of independent providers worldwide.",
  },
  {
    Icon: ReplicationIcon,
    title: "You Pick the Copies",
    description: "Want 10 copies of your wedding photos? Just 1 for temp files? You decide, not us.",
  },
  {
    Icon: SavingsIcon,
    title: "Save Real Money",
    description: "We're talking 60-80% less than AWS or Dropbox. Do the math, you'll like it.",
  },
  {
    Icon: SecurityIcon,
    title: "Actually Private",
    description: "Your files are encrypted before they leave your device. Providers can't peek. Period.",
  },
  {
    Icon: EarningsIcon,
    title: "Earn While You Sleep",
    description: "Got spare disk space? Turn it into passive income. Set your price, we handle the rest.",
  },
  {
    Icon: GlobalIcon,
    title: "Access Everywhere",
    description: "Desktop, mobile, web - your files follow you. Fast downloads from nearby providers.",
  },
]

const comparisonData = [
  { feature: "Who owns your data?", carbide: "You, always", traditional: "Technically... them" },
  { feature: "Backup copies", carbide: "1-10, you choose", traditional: "Whatever they decide" },
  { feature: "Monthly cost", carbide: "60-80% less", traditional: "$$$" },
  { feature: "Can they read your files?", carbide: "Nope, encrypted", traditional: "Yep, they can" },
  { feature: "Earn money?", carbide: "Become a provider!", traditional: "Lol no" },
]

const faqs = [
  {
    question: "Is my data really safe?",
    answer: "Your files are encrypted with AES-256 before upload - the same encryption banks use. We split files into chunks across multiple providers. Even if one goes down, your data is safe.",
  },
  {
    question: "How much can I earn as a provider?",
    answer: "Depends on how much space you share and your uptime. Most home providers earn $20-100/month with just spare hard drive space. The more reliable you are, the more you earn.",
  },
  {
    question: "What's this replication thing?",
    answer: "You pick how many copies of your files exist on the network. Important stuff? Set it to 5 or 10 copies. Random backups? Maybe just 2. You're in control.",
  },
  {
    question: "What do I need to become a provider?",
    answer: "A computer, some free disk space (100GB minimum), and decent internet. That's it. Our app handles all the technical stuff - just install and earn.",
  },
  {
    question: "How is it so much cheaper?",
    answer: "No fancy data centers or corporate overhead. We're a marketplace connecting people with spare storage to people who need it. Everyone wins.",
  },
  {
    question: "What about mobile?",
    answer: "iOS app is ready now, Android is coming soon. You can also access everything through your web browser from any device.",
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
                className="h-7 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="#features" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Features</Link>
              <Link href="#how-it-works" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">How It Works</Link>
              <Link href="#pricing" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Pricing</Link>
              <Link href="#faq" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">FAQ</Link>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <Button variant="ghost" size="sm" asChild>
                <Link href="https://docs.carbide.network" target="_blank">
                  Docs
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

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b">
            <div className="px-4 py-4 space-y-3">
              <Link href="#features" className="block py-2 text-gray-600" onClick={() => setMobileMenuOpen(false)}>Features</Link>
              <Link href="#how-it-works" className="block py-2 text-gray-600" onClick={() => setMobileMenuOpen(false)}>How It Works</Link>
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
            {/* Left content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6">
                <Sparkles className="h-4 w-4" />
                Now in public beta
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
                Cloud storage,
                <br />
                <span className="text-gradient">without the cloud</span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg sm:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0 mb-8">
                Store your files on a decentralized network. Pay less. Keep control.
                Or flip it and earn by sharing your spare space.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-10">
                <Button size="lg" className="h-12 px-6 bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/20" asChild>
                  <Link href="#cta">
                    Start for Free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-6" asChild>
                  <Link href="#how-it-works">
                    <Play className="mr-2 h-4 w-4" />
                    How it works
                  </Link>
                </Button>
              </div>

              {/* Quick stats */}
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

            {/* Right illustration */}
            <div className="lg:pl-8">
              <HeroIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* Social proof */}
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
              Features
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Storage that makes sense
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              No corporate nonsense. Just good tech that respects your data and your wallet.
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

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-4">
              <Layers className="h-4 w-4" />
              How It Works
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Two ways to use Carbide
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Need storage? We got you. Have extra space? Get paid.
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
                  <h3 className="text-xl font-bold text-gray-900">Store Files</h3>
                  <p className="text-sm text-gray-500">Save money on storage</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { n: "1", text: "Upload your files (they get encrypted first)" },
                  { n: "2", text: "Pick how many backup copies you want" },
                  { n: "3", text: "Choose providers by price or speed" },
                  { n: "4", text: "Access from anywhere, anytime" },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600 text-white text-sm font-medium flex items-center justify-center">
                      {step.n}
                    </span>
                    <span className="text-gray-700 pt-0.5">{step.text}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700" asChild>
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
                  <h3 className="text-xl font-bold text-gray-900">Earn Money</h3>
                  <p className="text-sm text-gray-500">Monetize spare space</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { n: "1", text: "Download our provider app (it's free)" },
                  { n: "2", text: "Pick how much space to share" },
                  { n: "3", text: "Set your price per GB" },
                  { n: "4", text: "Watch the earnings roll in" },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-green-600 text-white text-sm font-medium flex items-center justify-center">
                      {step.n}
                    </span>
                    <span className="text-gray-700 pt-0.5">{step.text}</span>
                  </div>
                ))}
              </div>

              <Button variant="outline" className="w-full mt-6 border-green-200 text-green-700 hover:bg-green-50" asChild>
                <Link href="#cta">
                  <Download className="mr-2 h-4 w-4" />
                  Become a Provider
                </Link>
              </Button>
            </div>
          </div>

          {/* Network visualization */}
          <NetworkIllustration />
        </div>
      </section>

      {/* Comparison Section */}
      <section id="pricing" className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 text-green-700 text-sm font-medium mb-4">
              <TrendingDown className="h-4 w-4" />
              Compare
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Us vs. the big guys
            </h2>
            <p className="text-lg text-gray-600">
              Spoiler: we win on pretty much everything.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-gray-50">
                  <th className="text-left p-4 font-medium text-gray-500"></th>
                  <th className="p-4 text-center">
                    <span className="font-bold text-blue-600">Carbide</span>
                  </th>
                  <th className="p-4 text-center">
                    <span className="text-gray-400">Traditional</span>
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

          {/* Savings callout */}
          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <SavingsIcon className="w-16 h-16 flex-shrink-0" />
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-bold text-green-800">Save $50-100/month</h3>
                <p className="text-green-700 text-sm">Compared to Dropbox, Google Drive, or AWS S3</p>
              </div>
              <Button className="sm:ml-auto bg-green-600 hover:bg-green-700" asChild>
                <Link href="#cta">
                  Start Saving
                </Link>
              </Button>
            </div>
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
              Questions? Answers.
            </h2>
            <p className="text-lg text-gray-400">
              The stuff people usually ask us.
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
              Meet us IRL
            </h2>
            <p className="text-lg text-gray-600">
              We do events. Come say hi.
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
                description="India Blockchain Week - exploring decentralized infrastructure"
                date="Dec 9, 2023"
                location="Bengaluru"
                imageUrl="/events/2023.png"
                tweetUrl="https://x.com/ChaalPritam/status/1736350189538189456"
              />
              <EventCard
                title="DePIN Dubai"
                description="The future of physical infrastructure networks"
                date="Apr 19, 2024"
                location="Dubai"
                imageUrl="/events/2024.png"
                tweetUrl="https://x.com/ChaalPritam/status/1786815270679449952"
              />
              <EventCard
                title="Build on DePIN"
                description="Workshop on building decentralized infrastructure apps"
                date="Jul 6, 2024"
                location="Chennai"
                imageUrl="/events/2024_1.png"
                tweetUrl="https://x.com/ChaalPritam/status/1809841085721551154"
              />
              <EventCard
                title="Build on DePIN"
                description="Hands-on DePIN development session"
                date="Jul 20, 2024"
                location="Kochi"
                imageUrl="/events/2024_2.png"
                tweetUrl="https://x.com/ChaalPritam/status/1815346193578532927"
              />
              <EventCard
                title="Build on DePIN"
                description="Deep dive into DePIN architecture"
                date="Jul 21, 2024"
                location="Hyderabad"
                imageUrl="/events/2024_3.png"
                tweetUrl="https://x.com/ChaalPritam/status/1815395721425944993"
              />
              <EventCard
                title="Build on DePIN"
                description="Building next-gen decentralized apps"
                date="Jul 26, 2024"
                location="Bangalore"
                imageUrl="/events/2024_4.png"
                tweetUrl="https://x.com/ChaalPritam/status/1818548912044605780"
              />
              <EventCard
                title="Build on DePIN"
                description="Decentralized infrastructure workshop"
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
            Ready to ditch Big Cloud?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Join the waitlist. We&apos;ll hook you up with early access.
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
                Join Waitlist
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </form>
          )}

          <p className="mt-4 text-sm text-white/50">
            No spam. We promise.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-50 border-t">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <Image
                src="/images/carbidelogo.png"
                alt="Carbide"
                width={80}
                height={26}
                className="h-6 w-auto opacity-60"
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
