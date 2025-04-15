"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Database,
  Shield,
  Coins,
  UserCircle,
  Cloud,
  Server,
  Lock,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Zap,
  Globe,
  ShieldCheck,
  BarChart3,
  Cpu,
} from "lucide-react"
import { useRef, useState } from "react"
import { EventCard } from "@/components/EventCard"

export default function LandingPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    setIsSubmitted(true)
    setEmail("")
  }

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Floating Menu */}
      <div className="fixed w-full px-4 lg:px-6 h-14 flex items-center z-50">
        <div className="relative flex items-center justify-between w-full max-w-7xl mx-auto mt-12">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/carbidelogo_white_medium.png"
                alt="Carbide Network"
                width={225}
                height={75}
              />
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/30 backdrop-blur-sm border border-primary/5">
              <Link href="#features" className="px-2 py-0.5 rounded-full text-sm font-light hover:bg-primary/5 hover:text-primary transition-colors">
                Features
              </Link>
              <Link href="#how-it-works" className="px-2 py-0.5 rounded-full text-sm font-light hover:bg-primary/5 hover:text-primary transition-colors">
                How It Works
              </Link>
              <Link href="#comparison" className="px-2 py-0.5 rounded-full text-sm font-light hover:bg-primary/5 hover:text-primary transition-colors">
                Comparison
              </Link>
              <Link href="#faq" className="px-2 py-0.5 rounded-full text-sm font-light hover:bg-primary/5 hover:text-primary transition-colors">
                FAQ
              </Link>
              <div className="h-2.5 w-px bg-primary/5 mx-0.5" />
              <Link href="#community" className="px-2 py-0.5 rounded-full text-sm font-light hover:bg-primary/5 hover:text-primary transition-colors">
                Community
              </Link>
            </div>
          </nav>
          <div className="flex items-center gap-1">
            <Button size="sm" className="relative overflow-hidden group rounded-full h-8">
              <span className="relative z-10">Docs</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="w-full h-screen relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0">
            <Image
              src="/images/cta-bg.jpg"
              alt="Decentralized Network Visualization"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div className="container h-full px-4 md:px-6 mx-auto relative flex flex-col items-center justify-center text-center gap-8">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/20">
              <Sparkles className="h-4 w-4 text-white" />
              <span className="text-sm font-light text-white">decentralizing cosumer storage</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white">
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Redefining the
              </span>
              <br />
              <span className="bg-gradient-to-r from-white/80 to-white bg-clip-text text-transparent">
                Consumer storage space
              </span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-[700px] mx-auto font-light">
              Take control of your data with Carbide Networks next-generation decentralized storage solution.
              Built for security, scalability, and true data ownership.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#cta">
              <Button size="lg" className="gap-2 group bg-white text-primary hover:bg-white/90">
                <span>Join the Network</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary/30 animate-pulse" />
            <div className="w-2 h-2 rounded-full bg-primary/30 animate-pulse delay-300" />
            <div className="w-2 h-2 rounded-full bg-primary/30 animate-pulse delay-600" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full h-screen bg-gray-50/50">
        <div className="container h-full px-4 md:px-6 mx-auto flex flex-col justify-center">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Key Features</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Why Choose Carbide Network?</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Disrupting traditional consumer storage services with a decentralized approach.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="group relative flex flex-col items-center text-center p-4 bg-white rounded-lg border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Server className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-1">Decentralized Storage</h3>
              <p className="text-sm text-muted-foreground">
                Host your own hardware storage devices and eliminate reliance on centralized providers.
              </p>
            </div>
            <div className="group relative flex flex-col items-center text-center p-4 bg-white rounded-lg border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <ShieldCheck className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-1">Secure and Private</h3>
              <p className="text-sm text-muted-foreground">
                Blockchain technology ensures data integrity and privacy, giving you full ownership of your data.
              </p>
            </div>
            <div className="group relative flex flex-col items-center text-center p-4 bg-white rounded-lg border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Coins className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-1">Earn Rewards</h3>
              <p className="text-sm text-muted-foreground">
                Contribute to the network by hosting storage devices and earn rewards for your participation.
              </p>
            </div>
            <div className="group relative flex flex-col items-center text-center p-4 bg-white rounded-lg border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Globe className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-1">Global Network</h3>
              <p className="text-sm text-muted-foreground">
                Access your data from anywhere in the world with our distributed network infrastructure.
              </p>
            </div>
            <div className="group relative flex flex-col items-center text-center p-4 bg-white rounded-lg border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <BarChart3 className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-1">High Performance</h3>
              <p className="text-sm text-muted-foreground">
                Experience faster speeds and better reliability with our optimized network architecture.
              </p>
            </div>
            <div className="group relative flex flex-col items-center text-center p-4 bg-white rounded-lg border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Cpu className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-1">DePIN Protocol</h3>
              <p className="text-sm text-muted-foreground">
                Built on a Decentralized Physical Infrastructure Network protocol for maximum security and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section with Image */}
      <section id="how-it-works" className="w-full h-screen bg-white dot-wave-pattern">
        <div className="container h-full px-4 md:px-6 mx-auto flex flex-col justify-center">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">How It Works</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Join the Decentralized Storage Revolution
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Simple steps to become part of the Carbide Network ecosystem.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 size-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="font-semibold text-primary">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Connect Your Storage</h3>
                  <p className="text-muted-foreground">
                    Set up your storage device and connect it to the Carbide Network using our simple installation process.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 size-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="font-semibold text-primary">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Configure Settings</h3>
                  <p className="text-muted-foreground">
                    Choose how much storage to contribute and set your preferences for network participation.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 size-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="font-semibold text-primary">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Start Earning</h3>
                  <p className="text-muted-foreground">
                    Begin earning rewards as your storage contributes to the decentralized network.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl group">
              <Image
                src="/images/carbide_works.png"
                alt="Network Setup Process"
                width={800}
                height={600}
                className="w-full aspect-4/3 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison" className="w-full h-screen bg-gray-50/50">
        <div className="container h-full px-4 md:px-6 mx-auto flex flex-col justify-center">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10">
              <BarChart3 className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Comparison</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Carbide Network vs. Traditional Storage</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              See how we stack up against centralized storage providers.
            </p>
          </div>
          <div className="overflow-x-auto rounded-xl border shadow-sm bg-white">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b bg-gray-50">
                  <th className="text-left p-6 font-semibold text-muted-foreground">Features</th>
                  <th className="p-6 text-center font-semibold">
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex items-center gap-2">
                        <Database className="h-5 w-5 text-primary" />
                        <span className="text-primary font-medium">Carbide Network</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Decentralized Solution</span>
                    </div>
                  </th>
                  <th className="p-6 text-center font-semibold">
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex items-center gap-2">
                        <Cloud className="h-5 w-5 text-muted-foreground" />
                        <span className="text-muted-foreground font-medium">Traditional Cloud Storage</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Centralized Solution</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50/50 transition-colors">
                  <td className="text-left p-6 font-medium">Data Control</td>
                  <td className="p-6 text-center">
                    <div className="flex items-center justify-center gap-2 text-green-600">
                      <CheckCircle2 className="h-5 w-5" />
                      <span className="font-medium">Full Control</span>
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="flex items-center justify-center gap-2 text-red-600">
                      <span className="font-medium">Limited Control</span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50/50 transition-colors">
                  <td className="text-left p-6 font-medium">Cost</td>
                  <td className="p-6 text-center">
                    <div className="flex items-center justify-center gap-2 text-green-600">
                      <CheckCircle2 className="h-5 w-5" />
                      <span className="font-medium">Pay for What You Use</span>
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="flex items-center justify-center gap-2 text-red-600">
                      <span className="font-medium">Fixed Monthly Fees</span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50/50 transition-colors">
                  <td className="text-left p-6 font-medium">Earning Potential</td>
                  <td className="p-6 text-center">
                    <div className="flex items-center justify-center gap-2 text-green-600">
                      <CheckCircle2 className="h-5 w-5" />
                      <span className="font-medium">Yes</span>
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="flex items-center justify-center gap-2 text-red-600">
                      <span className="font-medium">No</span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50/50 transition-colors">
                  <td className="text-left p-6 font-medium">Privacy</td>
                  <td className="p-6 text-center">
                    <div className="flex items-center justify-center gap-2 text-green-600">
                      <CheckCircle2 className="h-5 w-5" />
                      <span className="font-medium">End-to-End Encryption</span>
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="flex items-center justify-center gap-2 text-red-600">
                      <span className="font-medium">Provider Dependent</span>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="text-left p-6 font-medium">Reliability</td>
                  <td className="p-6 text-center">
                    <div className="flex items-center justify-center gap-2 text-green-600">
                      <CheckCircle2 className="h-5 w-5" />
                      <span className="font-medium">Distributed Network</span>
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="flex items-center justify-center gap-2 text-red-600">
                      <span className="font-medium">Single Point of Failure</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="w-full h-screen py-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
        <div className="container px-4 md:px-6 mx-auto relative">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20">
              <ShieldCheck className="h-4 w-4 text-white" />
              <span className="text-sm font-medium text-white">FAQ</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-white">Frequently Asked Questions</h2>
            <p className="max-w-[700px] text-white/70 md:text-xl">
              Everything you need to know about Carbide Network.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="group bg-white/5 p-6 rounded-xl border border-white/10 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm">
              <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">How secure is my data?</h3>
              <p className="text-sm text-white/70">
                Your data is protected with military-grade encryption and distributed across multiple nodes for maximum security and redundancy.
              </p>
            </div>
            <div className="group bg-white/5 p-6 rounded-xl border border-white/10 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm">
              <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Coins className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">How do I earn rewards?</h3>
              <p className="text-sm text-white/70">
                By contributing storage space to the network, you earn Carbide tokens based on the amount of space
                provided, uptime, and network demand.
              </p>
            </div>
            <div className="group bg-white/5 p-6 rounded-xl border border-white/10 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm">
              <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Globe className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Can I access my files from anywhere?</h3>
              <p className="text-sm text-white/70">
                Yes, Carbide Network provides web, desktop, and mobile applications that allow you to access your files
                from any device with an internet connection.
              </p>
            </div>
            <div className="group bg-white/5 p-6 rounded-xl border border-white/10 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm">
              <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Server className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">What hardware do I need?</h3>
              <p className="text-sm text-white/70">
                Any storage device with sufficient capacity can be used. We recommend a minimum of 1TB storage and a stable internet connection.
              </p>
            </div>
            <div className="group bg-white/5 p-6 rounded-xl border border-white/10 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm">
              <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Lock className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Is my data private?</h3>
              <p className="text-sm text-white/70">
                Yes, all data is encrypted before being stored, and only you have access to your encryption keys.
              </p>
            </div>
            <div className="group bg-white/5 p-6 rounded-xl border border-white/10 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm">
              <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <UserCircle className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">How do I get started?</h3>
              <p className="text-sm text-white/70">
                Simply download our application, connect your storage device, and follow the setup wizard to join the network.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Events Section */}
      <section id="community" className="w-full h-screen py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 text-primary"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <span className="text-sm font-medium text-primary">Community</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Community Events</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Join us in building the future of decentralized storage through our community events.
            </p>
          </div>
          <div className="relative">
            <div className="flex items-center gap-4">
              <button
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 hover:bg-white shadow-md transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto gap-4 py-4 px-4 scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                <EventCard
                  title="Disrupt with DePIN (IBW)"
                  description="Hosted around India Blockchain Week to explore how DePIN is revolutionizing decentralized infrastructure and storage solutions."
                  date="December 9, 2023"
                  location="Bengaluru"
                  imageUrl="/events/2023.png"
                  tweetUrl="https://x.com/ChaalPritam/status/1736350189538189456"
                />
                <EventCard
                  title="Disrupt with DePIN (Dubai)"
                  description="Discover the future of decentralized physical infrastructure networks at our exclusive Dubai event."
                  date="Friday 19, 2024"
                  location="Dubai"
                  imageUrl="/events/2024.png"
                  tweetUrl="https://x.com/ChaalPritam/status/1786815270679449952"
                />
                <EventCard
                  title="What to Build on DePIN"
                  description="Learn about innovative DePIN applications and discover how to build the next generation of decentralized infrastructure."
                  date="July 6, 2024"
                  location="Chennai"
                  imageUrl="/events/2024_1.png"
                  tweetUrl="https://x.com/ChaalPritam/status/1809841085721551154"
                />
                <EventCard
                  title="What to Build on DePIN"
                  description="Explore practical DePIN use cases and get hands-on experience building decentralized infrastructure solutions."
                  date="July 20, 2024"
                  location="Kochi"
                  imageUrl="/events/2024_2.png"
                  tweetUrl="https://x.com/ChaalPritam/status/1815346193578532927"
                />
                <EventCard
                  title="What to Build on DePIN"
                  description="Dive deep into DePIN architecture and learn how to create scalable decentralized infrastructure applications."
                  date="July 21, 2024"
                  location="Hyderabad"
                  imageUrl="/events/2024_3.png"
                  tweetUrl="https://x.com/ChaalPritam/status/1815395721425944993"
                />
                <EventCard
                  title="What to Build on DePIN"
                  description="We deep dive to discover how to leverage DePIN for building next-gen decentralized applications."
                  date="July 26, 2024"
                  location="Bangalore"
                  imageUrl="/events/2024_4.png"
                  tweetUrl="https://x.com/ChaalPritam/status/1818548912044605780"
                />
                <EventCard
                  title="What to Build on DePIN"
                  description="Learn about DePIN's potential to transform traditional infrastructure into decentralized networks."
                  date="August 3, 2024"
                  location="Pune"
                  imageUrl="/events/2024_5.png"
                  tweetUrl="https://x.com/ChaalPritam/status/1820003761533673594"
                />
                <EventCard
                  title="What to Build on DePIN"
                  description="Explore the intersection of DePIN and Web3 infrastructure at our Goa event."
                  date="August 6, 2024"
                  location="Goa"
                  imageUrl="/events/2024_6.png"
                  tweetUrl="https://x.com/ChaalPritam/status/1821097979010314748"
                />
              </div>
              <button
                onClick={scrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 hover:bg-white shadow-md transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <section id="cta" className="w-full h-[50vh] py-12 md:py-24 relative">
        <div className="absolute inset-0">
          <Image
            src="/images/cta-bg.jpg"
            alt="Network Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/80" />
        </div>
        <div className="container px-4 md:px-6 mx-auto relative">
          <div className="flex flex-col items-center text-center gap-6 text-white">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Join the Decentralized Storage Revolution</h2>
            <p className="max-w-[700px] md:text-xl opacity-90">
              Take control of your data today and be part of the future of storage.
            </p>
            {isSubmitted ? (
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg max-w-md w-full">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-white" />
                  <p className="text-white/90">Thank you for joining. We'll keep you updated.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md w-full">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full h-11 px-4 rounded-[8px] bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="bg-white hover:bg-white/90 text-primary group"
                >
                  <span>Join the Network</span>
                  <ChevronRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="w-full h-[50vh] py-12 bg-white border-t">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/images/carbidelogo.png"
                    alt="Carbide Network"
                    width={115}
                    height={40}
                  />
                </Link>
              </div>
              <p className="text-muted-foreground">Redefining the Consumer <br /> storage space.</p>
              <div className="flex gap-4">
                <Link href="https://x.com/carbidenetwork" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Link>
                <Link href="https://github.com/carbidenetwork" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </Link>
                <Link href="https://t.me/carbidenetwork" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M21.5 2L2 11l7 3.5L17 7l-6.5 8.5L21.5 2z"></path>
                    <path d="M2 11l7 3.5"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Features</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Security</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Enterprise</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Documentation</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">API Reference</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Community</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Partners</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
            <p>&copy; 2024 Carbide Network. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
