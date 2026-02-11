"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useRef } from "react"
import { Shield, Globe, DollarSign, Lock, ArrowRight, Check, Calendar, MapPin, Server, Smartphone, HardDrive, Code, Compass, Github, Twitter, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HowItWorks } from "@/components/how-it-works"
import { InteractiveTerminal } from "@/components/terminal"
import { NewsletterForm } from "@/components/newsletter-form"

export default function LandingPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" })
    }
  }

  return (
    <div className="bg-white text-black min-h-screen overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="section-padding pt-32 md:pt-40 pb-16 md:pb-20">
        <div className="max-w-[1440px] mx-auto text-center">
          {/* Badge */}
          <div className="animate-fade-in inline-flex items-center gap-2 bg-[#F5F5F5] rounded-full px-5 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse-dot" />
            <span className="text-sm text-black/60">decentralized consumer storage</span>
          </div>

          {/* Heading */}
          <h1 className="animate-fade-in text-[56px] md:text-[84px] lg:text-[100px] font-medium tracking-tighter leading-[0.95] mb-8 max-w-5xl mx-auto">
            Redefine how you{" "}
            <span className="italic-serif">store</span> your{" "}
            <span className="italic-serif">data</span>.
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-in-delay text-lg md:text-xl text-black/40 max-w-xl mx-auto mb-12 leading-relaxed">
            Your files. A global network of providers. No middlemen. Save 60-80% on storage costs.
          </p>

          {/* Email capture */}
          <div className="animate-fade-in-delay-2 mb-12">
            <NewsletterForm />
          </div>

          {/* Social proof */}
          <div className="animate-fade-in-delay-2 flex items-center justify-center gap-4">
            <div className="flex -space-x-3">
              {[
                "bg-blue-100 text-blue-600",
                "bg-purple-100 text-purple-600",
                "bg-amber-100 text-amber-600",
                "bg-emerald-100 text-emerald-600"
              ].map((style, i) => (
                <div
                  key={i}
                  className={`w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold shadow-sm ${style}`}
                >
                  {["JD", "AS", "MK", "TL"][i]}
                </div>
              ))}
              <div className="w-10 h-10 rounded-full bg-black border-2 border-white flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
                +150
              </div>
            </div>
            <span className="text-sm font-medium text-black/40">Trusted by providers worldwide</span>
          </div>
        </div>
      </section>

      {/* Stats Marquee */}
      <section className="py-8 border-y border-black/5 overflow-hidden">
        <div className="animate-marquee flex items-center gap-16 whitespace-nowrap">
          {[
            "99.9% Uptime",
            "$0.002/GB",
            "AES-256 Encryption",
            "150+ Providers",
            "Global Distribution",
            "Client-Side Encryption",
            "1-10x Redundancy",
            "Zero Knowledge",
            "99.9% Uptime",
            "$0.002/GB",
            "AES-256 Encryption",
            "150+ Providers",
            "Global Distribution",
            "Client-Side Encryption",
            "1-10x Redundancy",
            "Zero Knowledge",
          ].map((stat, i) => (
            <span key={i} className="text-sm font-medium text-black/30 tracking-wide flex items-center gap-4">
              <span className="w-1.5 h-1.5 rounded-full bg-black/20" />
              {stat}
            </span>
          ))}
        </div>
      </section>

      {/* Mac Mini Provider CTA */}
      <section id="install-node" className="section-padding bg-black text-white">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-5 py-2 mb-8">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-dot" />
                <span className="text-sm text-white/60">Become a provider</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter mb-6">
                Your Mac Mini is a{" "}
                <span className="italic-serif">storage node</span>.
              </h2>

              <p className="text-lg text-white/40 max-w-lg mb-10 leading-relaxed">
                Turn your idle Mac Mini into a Carbide provider. Install the node, share your unused disk space, and start earning - all while contributing to a decentralized storage network.
              </p>

              <div className="space-y-5 mb-10">
                {[
                  { title: "One-command install", description: "Download Carbide Node and get running in under 5 minutes. No DevOps required." },
                  { title: "Always-on, low power", description: "Mac Mini draws just 6W idle - perfect for 24/7 storage hosting at near-zero energy cost." },
                  { title: "Set and forget", description: "Auto-updates, health monitoring, and smart allocation. Your node manages itself." },
                  { title: "Earn passively", description: "Get paid per GB stored and per GB served. Earnings deposit directly to your wallet." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-green-400" />
                    </div>
                    <div>
                      <div className="text-sm font-medium mb-1">{item.title}</div>
                      <div className="text-sm text-white/40 leading-relaxed">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="#cta"
                  className="inline-flex items-center justify-center gap-2 bg-white text-black rounded-full px-8 py-4 text-sm font-medium hover:bg-white/90 transition-colors"
                >
                  Install Carbide Node
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 rounded-full px-8 py-4 text-sm font-medium text-white/60 hover:border-white/40 hover:text-white transition-colors"
                >
                  Read the docs
                </Link>
              </div>
            </div>

            {/* Right: Terminal mockup */}
            <div className="lg:pl-8">
              <InteractiveTerminal />
            </div>
          </div>
        </div>
      </section>

      {/* Value Props Grid */}
      <section id="technology" className="section-padding">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter mb-4">
              Built for <span className="italic-serif">security</span>.
            </h2>
            <p className="text-lg text-black/40 max-w-lg mx-auto">
              Your data is encrypted, distributed, and priced by the market - not a corporation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "End-to-End Encryption",
                description: "AES-256-GCM encryption happens on your device. Zero-knowledge architecture means providers never see your data.",
              },
              {
                icon: Globe,
                title: "Global Distribution",
                description: "Data spread across continents and independent providers. Geographic redundancy protects against regional failures.",
              },
              {
                icon: DollarSign,
                title: "Marketplace Pricing",
                description: "Providers compete on price and quality. No corporate markup. Pure supply and demand - save 60-80%.",
              },
            ].map((feature, i) => (
              <div key={i} className="hover-card group">
                <div className="w-12 h-12 rounded-2xl bg-black/5 flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-all duration-300">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-medium mb-3 tracking-tight">{feature.title}</h3>
                <p className="text-sm text-black/40 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="section-padding bg-[#F5F5F5]">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter mb-4">
              The Carbide <span className="italic-serif">ecosystem</span>.
            </h2>
            <p className="text-lg text-black/40 max-w-lg mx-auto">
              A complete suite of products for decentralized storage - from infrastructure to consumer apps.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Server,
                title: "Carbide Node",
                tag: "Infrastructure",
                description: "The backbone of the network. Run a storage node to contribute disk space, serve files, and earn rewards as a provider.",
              },
              {
                icon: Smartphone,
                title: "Carbide iOS App",
                tag: "Consumer",
                description: "Access your decentralized storage on the go. Upload, browse, and share files - all encrypted end-to-end on your iPhone.",
              },
              {
                icon: HardDrive,
                title: "Carbide Drive",
                tag: "Desktop",
                description: "A native desktop client that mounts your Carbide storage as a local drive. Drag, drop, and sync - just like a hard drive.",
              },
              {
                icon: Code,
                title: "Carbide iOS SDK",
                tag: "Developer",
                description: "Integrate decentralized storage into any iOS app. Simple Swift APIs for upload, download, encryption, and key management.",
              },
              {
                icon: Smartphone,
                title: "Carbide Android App",
                tag: "Consumer",
                description: "Decentralized storage in your pocket. Manage, upload, and share files securely from any Android device.",
              },
              {
                icon: Compass,
                title: "Carbide Discovery Service",
                tag: "Protocol",
                description: "The coordination layer that connects clients to optimal providers. Handles peer discovery, health checks, and routing.",
              },
            ].map((product, i) => (
              <div
                key={i}
                className="bg-white rounded-[2rem] p-8 group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                    <product.icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-medium text-black/40 bg-black/5 rounded-full px-3 py-1">{product.tag}</span>
                </div>
                <h3 className="text-xl font-medium tracking-tight mb-3">{product.title}</h3>
                <p className="text-sm text-black/40 leading-relaxed mb-6">{product.description}</p>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-flex items-center gap-2 text-sm font-medium">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Slider - "For everyone who stores." */}
      <section className="section-padding">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter mb-12">
            For everyone who <span className="italic-serif">stores</span>.
          </h2>

          <div className="flex gap-6 overflow-x-auto no-scrollbar pb-4">
            {[
              {
                title: "Personal",
                description: "Photos, documents, and backups. Secure and affordable storage for your personal files.",
                bg: "bg-blue-50",
                features: [
                  "Auto-sync photos & videos from any device",
                  "End-to-end encrypted personal vault",
                  "Share files with expiring links",
                  "Up to 10x redundancy for critical files",
                  "Starting at $0.002/GB - 80% cheaper than iCloud",
                ],
              },
              {
                title: "Business",
                description: "Team files, compliance archives, and shared workspaces. Scale without the enterprise price tag.",
                bg: "bg-purple-50",
                features: [
                  "Team workspaces with role-based access",
                  "Compliance-ready audit logs & retention policies",
                  "Seamless integration with existing workflows",
                  "No per-seat pricing - pay only for storage used",
                  "Geographic redundancy across 30+ regions",
                ],
              },
              {
                title: "Enterprise",
                description: "Petabyte-scale storage with SLA guarantees. Multi-region redundancy and audit trails.",
                bg: "bg-amber-50",
                features: [],
              },
              {
                title: "Developers",
                description: "API-first storage for apps and services. S3-compatible with decentralized infrastructure.",
                bg: "bg-green-50",
                features: [],
              },
            ].map((card, i) => (
              <div
                key={i}
                className={`${card.bg} rounded-[2rem] p-8 min-w-[280px] md:min-w-[320px] flex-shrink-0 flex flex-col justify-between min-h-[400px] group hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <div>
                  <h3 className="text-2xl font-medium tracking-tight mb-4">{card.title}</h3>
                  <p className="text-sm text-black/40 leading-relaxed">{card.description}</p>
                  {card.features.length > 0 && (
                    <ul className="mt-6 space-y-3">
                      {card.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-2.5">
                          <Check className="h-4 w-4 text-black/30 shrink-0 mt-0.5" />
                          <span className="text-sm text-black/50 leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-flex items-center gap-2 text-sm font-medium">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section-padding bg-[#F5F5F5]">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter mb-4">
              The <span className="italic-serif">team</span>.
            </h2>
            <p className="text-lg text-black/40 max-w-lg mx-auto">
              A small team of contributors building the future of decentralized storage.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Chaal Pritam",
                role: "Core Contributor",
                initials: "CP",
                image: "/team/chaalpritam.png",
                color: "bg-blue-100 text-blue-700",
                github: "https://github.com/chaalpritam",
                twitter: "https://x.com/chaalpritam",
              },
              {
                name: "Kaushik K",
                role: "Core Contributor",
                initials: "KK",
                image: "/team/kaushik.png",
                color: "bg-purple-100 text-purple-700",
                github: "https://github.com/KaushikKC",
                twitter: "https://x.com/0xkaushik_k",
              },
              {
                name: "Sathish Kumar",
                role: "Core Contributor",
                initials: "SK",
                image: "/team/sathish.png",
                color: "bg-emerald-100 text-emerald-700",
                github: "https://github.com/sathishkumarmsk",
                twitter: "https://x.com/msk_sathishcode",
              },
              {
                name: "Sudharsanan",
                role: "Core Contributor",
                initials: "S",
                image: "/team/sudharsanan.png",
                color: "bg-rose-100 text-rose-700",
                github: "https://github.com/sksudharsanan",
                twitter: "https://x.com/sksudharsanan",
              },
            ].map((member, i) => (
              <div
                key={i}
                className="bg-white rounded-[2rem] p-10 text-center group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-black/[0.02]"
              >
                <div className={`relative w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 transition-transform duration-500 group-hover:scale-110 shadow-inner overflow-hidden ${member.color}`}>
                  <span className="text-2xl font-bold tracking-tighter absolute inset-0 flex items-center justify-center z-0">{member.initials}</span>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover relative z-10"
                    sizes="96px"
                  />
                </div>
                <h3 className="text-xl font-medium tracking-tight mb-2">{member.name}</h3>
                <p className="text-sm font-medium text-black/30 mb-8 uppercase tracking-widest">{member.role}</p>
                <div className="flex items-center justify-center gap-4">
                  <Link
                    href={member.github}
                    target="_blank"
                    className="w-11 h-11 rounded-full bg-[#F5F5F5] flex items-center justify-center hover:bg-black hover:text-white transition-all duration-500 shadow-sm"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                  <Link
                    href={member.twitter}
                    target="_blank"
                    className="w-11 h-11 rounded-full bg-[#F5F5F5] flex items-center justify-center hover:bg-black hover:text-white transition-all duration-500 shadow-sm"
                  >
                    <Twitter className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks />

      {/* Events Section */}
      <section id="events" className="section-padding overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 bg-black/5 rounded-full px-4 py-1.5 mb-4">
                <Calendar className="h-4 w-4 text-black/40" />
                <span className="text-xs font-medium uppercase tracking-widest text-black/40">Community Timeline</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter">
                Our Community <span className="italic-serif">events</span>.
              </h2>
            </div>
            <div className="flex gap-2">
              <button
                onClick={scrollLeft}
                className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
                aria-label="Scroll left"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={scrollRight}
                className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
                aria-label="Scroll right"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-8 px-4 -mx-4"
          >
            {[
              {
                title: "Disrupt with DePIN (IBW)",
                description: "Hosted around India Blockchain Week to explore how DePIN is revolutionizing decentralized infrastructure and storage solutions.",
                date: "Dec 9, 2023",
                location: "Bengaluru",
                image: "/events/2023.png",
                tweet: "https://x.com/ChaalPritam/status/1736350189538189456",
                bg: "bg-blue-50",
              },
              {
                title: "Disrupt with DePIN (Dubai)",
                description: "Discover the future of decentralized physical infrastructure networks at our exclusive Dubai event.",
                date: "May 19, 2024",
                location: "Dubai",
                image: "/events/2024.png",
                tweet: "https://x.com/ChaalPritam/status/1786815270679449952",
                bg: "bg-purple-50",
              },
              {
                title: "What to Build on DePIN",
                description: "Learn about innovative DePIN applications and discover how to build the next generation of decentralized infrastructure.",
                date: "July 6, 2024",
                location: "Chennai",
                image: "/events/2024_1.png",
                tweet: "https://x.com/ChaalPritam/status/1809841085721551154",
                bg: "bg-emerald-50",
              },
              {
                title: "What to Build on DePIN",
                description: "Explore practical DePIN use cases and get hands-on experience building decentralized infrastructure solutions.",
                date: "July 20, 2024",
                location: "Kochi",
                image: "/events/2024_2.png",
                tweet: "https://x.com/ChaalPritam/status/1815346193578532927",
                bg: "bg-amber-50",
              },
              {
                title: "What to Build on DePIN",
                description: "Dive deep into DePIN architecture and learn how to create scalable decentralized infrastructure applications.",
                date: "July 21, 2024",
                location: "Hyderabad",
                image: "/events/2024_3.png",
                tweet: "https://x.com/ChaalPritam/status/1815395721425944993",
                bg: "bg-rose-50",
              },
              {
                title: "What to Build on DePIN",
                description: "We deep dive to discover how to leverage DePIN for building next-gen decentralized applications.",
                date: "July 26, 2024",
                location: "Bangalore",
                image: "/events/2024_4.png",
                tweet: "https://x.com/ChaalPritam/status/1818548912044605780",
                bg: "bg-teal-50",
              },
              {
                title: "What to Build on DePIN",
                description: "Learn about DePIN's potential to transform traditional infrastructure into decentralized networks.",
                date: "August 3, 2024",
                location: "Pune",
                image: "/events/2024_5.png",
                tweet: "https://x.com/ChaalPritam/status/1820003761533673594",
                bg: "bg-indigo-50",
              },
              {
                title: "What to Build on DePIN",
                description: "Explore the intersection of DePIN and Web3 infrastructure at our Goa event.",
                date: "August 6, 2024",
                location: "Goa",
                image: "/events/2024_6.png",
                tweet: "https://x.com/ChaalPritam/status/1821097979010314748",
                bg: "bg-sky-50",
              },
              {
                title: "let's talk decentralization (Chennai)",
                description: "A deep-dive masterclass into the world of DePIN, DeSci, and DeAI. Exploring why decentralization matters and how to build for the future.",
                date: "May 24, 2025",
                location: "Chennai",
                image: "/events/2024_1.png",
                tweet: "https://x.com/Web3Chennai/status/1926615633157845280",
                bg: "bg-violet-50",
              },
            ].map((event, i) => (
              <div
                key={i}
                className={`min-w-[320px] md:min-w-[400px] ${event.bg} rounded-[2rem] overflow-hidden group hover:shadow-2xl transition-all duration-500 snap-start flex flex-col`}
              >
                {/* Event Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div className="absolute inset-0 bg-black/5 z-10" />
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6 z-20">
                    <span className="text-xs font-bold uppercase tracking-widest bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm">
                      {event.location}
                    </span>
                  </div>
                </div>

                {/* Event Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-4 text-black/40">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-medium">{event.date}</span>
                  </div>

                  <h3 className="text-2xl font-medium tracking-tight mb-3 group-hover:text-black transition-colors">
                    {event.title}
                  </h3>

                  <p className="text-sm text-black/50 leading-relaxed mb-8 flex-grow">
                    {event.description}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-black/[0.05]">
                    <Link
                      href={event.tweet}
                      target="_blank"
                      className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all duration-300"
                    >
                      View Highlights <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link href={event.tweet} target="_blank">
                      <Twitter className="h-5 w-5 text-black/20 hover:text-blue-400 transition-colors" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Provider Section */}
      <section id="providers" className="section-padding bg-[#F5F5F5]">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter mb-4">
              Earn passive <span className="italic-serif">income</span>.
            </h2>
            <p className="text-lg text-black/40 max-w-lg mx-auto">
              Share your unused disk space and earn money. Our desktop app handles everything.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                tier: "Home",
                price: "$0.002/GB",
                earnings: "$24/year per TB",
                uptime: "95%",
                description: "Perfect for getting started. Share spare storage from your personal computer.",
              },
              {
                tier: "Professional",
                price: "$0.004/GB",
                earnings: "$48/year per TB",
                uptime: "99%",
                description: "Dedicated hardware with higher uptime. Premium rates for reliable providers.",
              },
              {
                tier: "Enterprise",
                price: "$0.008/GB",
                earnings: "$96/year per TB",
                uptime: "99.9%",
                description: "Data center grade. Maximum earnings with SLA guarantees and top-tier rates.",
              },
            ].map((tier, i) => (
              <div
                key={i}
                className="bg-white/40 backdrop-blur-sm rounded-[2rem] border border-black/[0.03] p-10 group hover:bg-white transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] hover:border-black/5"
              >
                <div className="text-sm font-medium text-black/30 mb-2">{tier.uptime} uptime</div>
                <h3 className="text-2xl font-medium tracking-tight mb-2">{tier.tier}</h3>
                <div className="text-4xl font-bold tracking-tighter mb-6">
                  {tier.price}
                </div>
                <p className="text-sm text-black/40 leading-relaxed mb-10">
                  {tier.description}
                </p>
                <div className="flex items-center justify-between pt-8 border-t border-black/[0.03]">
                  <span className="text-sm font-medium text-black/30">Estimated earnings</span>
                  <span className="text-xl font-bold">{tier.earnings}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter mb-6">
            Ready for <span className="italic-serif">decentralized</span> storage?
          </h2>
          <p className="text-lg text-black/40 mb-12 max-w-lg mx-auto">
            Join the network. Store files at $0.002/GB or earn passive income as a provider.
          </p>

          {/* Email capture */}
          <div className="mb-8">
            <NewsletterForm />
          </div>

          <p className="text-sm text-black/30">
            Available on macOS, Windows, and iOS
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
