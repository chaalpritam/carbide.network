import Link from "next/link"
import { Shield, Globe, DollarSign, Lock, ArrowRight, Check, Users, Calendar, MapPin } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function LandingPage() {
  return (
    <div className="bg-white text-black min-h-screen overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="section-padding pt-32 md:pt-40 pb-16 md:pb-20">
        <div className="max-w-[1440px] mx-auto text-center">
          {/* Badge */}
          <div className="animate-fade-in inline-flex items-center gap-2 bg-[#F5F5F5] rounded-full px-5 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse-dot" />
            <span className="text-sm text-black/60">Decentralized consumer storage</span>
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
          <div className="animate-fade-in-delay-2 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto mb-12">
            <div className="relative flex items-center w-full bg-[#F5F5F5] rounded-full overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent px-6 py-4 text-sm outline-none placeholder:text-black/30"
              />
              <Link
                href="#cta"
                className="btn-primary shrink-0 mr-1.5 text-sm px-6 py-2.5"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Social proof */}
          <div className="animate-fade-in-delay-2 flex items-center justify-center gap-3">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-black/5 border-2 border-white flex items-center justify-center"
                >
                  <span className="text-xs text-black/30">{i}</span>
                </div>
              ))}
            </div>
            <span className="text-sm text-black/40">150+ providers already online</span>
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

      {/* Value Props Grid */}
      <section id="technology" className="section-padding">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter mb-4">
              Built for <span className="italic-serif">security</span>.
            </h2>
            <p className="text-lg text-black/40 max-w-lg mx-auto">
              Your data is encrypted, distributed, and priced by the market — not a corporation.
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
                description: "Providers compete on price and quality. No corporate markup. Pure supply and demand — save 60-80%.",
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

      {/* Category Slider — "For everyone who stores." */}
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
              },
              {
                title: "Business",
                description: "Team files, compliance archives, and shared workspaces. Scale without the enterprise price tag.",
                bg: "bg-purple-50",
              },
              {
                title: "Enterprise",
                description: "Petabyte-scale storage with SLA guarantees. Multi-region redundancy and audit trails.",
                bg: "bg-amber-50",
              },
              {
                title: "Developers",
                description: "API-first storage for apps and services. S3-compatible with decentralized infrastructure.",
                bg: "bg-green-50",
              },
            ].map((card, i) => (
              <div
                key={i}
                className={`${card.bg} rounded-[2rem] p-8 min-w-[280px] md:min-w-[320px] flex-shrink-0 flex flex-col justify-between min-h-[400px] group hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <div>
                  <h3 className="text-2xl font-medium tracking-tight mb-4">{card.title}</h3>
                  <p className="text-sm text-black/40 leading-relaxed">{card.description}</p>
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

      {/* How It Works */}
      <section className="section-padding bg-[#F5F5F5]">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: steps */}
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter mb-12">
                How Carbide <span className="italic-serif">works</span>.
              </h2>

              <div className="space-y-10">
                {[
                  {
                    num: "01",
                    title: "Encrypt",
                    description: "Your files are encrypted with AES-256-GCM on your device before upload. Only you hold the keys.",
                  },
                  {
                    num: "02",
                    title: "Distribute",
                    description: "Encrypted chunks are spread across independent providers worldwide. You choose the redundancy level (1-10 copies).",
                  },
                  {
                    num: "03",
                    title: "Access",
                    description: "Retrieve from anywhere. Data is fetched from the fastest providers and decrypted locally on your device.",
                  },
                ].map((step, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="text-4xl font-medium text-black/10 shrink-0 w-14">{step.num}</div>
                    <div>
                      <h3 className="text-xl font-medium tracking-tight mb-2">{step.title}</h3>
                      <p className="text-sm text-black/40 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: mockup */}
            <div className="mockup-container aspect-square flex items-center justify-center">
              <div className="text-center p-12">
                <div className="w-20 h-20 rounded-3xl bg-black/5 flex items-center justify-center mx-auto mb-6">
                  <Lock className="h-8 w-8 text-black/30" />
                </div>
                <div className="space-y-3 max-w-xs mx-auto">
                  <div className="h-2 bg-black/5 rounded-full w-full" />
                  <div className="h-2 bg-black/5 rounded-full w-3/4 mx-auto" />
                  <div className="h-2 bg-black/5 rounded-full w-1/2 mx-auto" />
                </div>
                <div className="mt-8 flex justify-center gap-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-3 h-3 rounded-full bg-black/10" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Provider Section */}
      <section id="providers" className="section-padding">
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
                className="rounded-[2rem] border border-black/10 p-8 group hover:bg-black hover:text-white hover:border-black transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="text-sm text-black/40 group-hover:text-white/60 mb-2 transition-colors">{tier.uptime} uptime</div>
                <h3 className="text-2xl font-medium tracking-tight mb-2">{tier.tier}</h3>
                <div className="text-3xl font-medium tracking-tight mb-4">
                  {tier.price}
                </div>
                <p className="text-sm text-black/40 group-hover:text-white/60 leading-relaxed mb-8 transition-colors">
                  {tier.description}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-black/5 group-hover:border-white/10 transition-colors">
                  <span className="text-sm text-black/40 group-hover:text-white/60 transition-colors">Estimated earnings</span>
                  <span className="text-lg font-medium text-green-600 group-hover:text-green-400 transition-colors">{tier.earnings}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section id="pricing" className="section-padding">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter mb-4">
              Transparent <span className="italic-serif">pricing</span>.
            </h2>
            <p className="text-lg text-black/40 max-w-lg mx-auto">
              No hidden fees. No corporate markup. Just a marketplace connecting you to storage providers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Carbide */}
            <div className="hover-card border-2 border-black">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center">
                  <span className="text-white text-sm font-bold">C</span>
                </div>
                <div>
                  <div className="font-medium">Carbide Network</div>
                  <div className="text-xs text-black/40">Decentralized</div>
                </div>
              </div>
              <ul className="space-y-4">
                {[
                  "$0.002 - $0.012/GB/month",
                  "Client-side AES-256 encryption",
                  "You own your keys",
                  "1-10 copies, your choice",
                  "No single point of failure",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Traditional */}
            <div className="hover-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center">
                  <span className="text-black/30 text-sm font-bold">T</span>
                </div>
                <div>
                  <div className="font-medium text-black/40">Traditional Cloud</div>
                  <div className="text-xs text-black/30">Centralized</div>
                </div>
              </div>
              <ul className="space-y-4">
                {[
                  "$0.02 - $0.03/GB/month",
                  "Server-side encryption",
                  "Provider controlled keys",
                  "Fixed redundancy",
                  "Single point of failure",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-black/5 shrink-0 mt-0.5 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-black/20" />
                    </span>
                    <span className="text-sm text-black/40">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="section-padding bg-[#F5F5F5]">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Community intro */}
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter mb-6">
                Join the <span className="italic-serif">community</span>.
              </h2>
              <p className="text-lg text-black/40 leading-relaxed mb-10 max-w-lg">
                Carbide is built by its community. Developers, providers, and users shaping the future of decentralized storage together.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-10">
                {[
                  { value: "2,500+", label: "Community Members" },
                  { value: "150+", label: "Storage Providers" },
                  { value: "40+", label: "Contributors" },
                  { value: "12", label: "Countries" },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-3xl font-medium tracking-tight">{stat.value}</div>
                    <div className="text-sm text-black/40 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="https://t.me/carbidenetwork"
                  target="_blank"
                  className="btn-primary text-sm"
                >
                  <Users className="h-4 w-4 mr-2" />
                  Join Telegram
                </Link>
                <Link
                  href="https://github.com/carbidenetwork"
                  target="_blank"
                  className="btn-secondary text-sm"
                >
                  Contribute on GitHub
                </Link>
              </div>
            </div>

            {/* Right: Community highlights */}
            <div className="space-y-4">
              {[
                {
                  title: "Open Source First",
                  description: "All core protocols and clients are open source. Audit the code, submit PRs, or fork and build your own.",
                  icon: "code",
                },
                {
                  title: "Provider Network",
                  description: "Run a storage node and join a global network of independent operators earning passive income.",
                  icon: "globe",
                },
                {
                  title: "Governance",
                  description: "Community members shape protocol upgrades, fee structures, and the roadmap through open proposals.",
                  icon: "users",
                },
                {
                  title: "Builder Grants",
                  description: "Building on Carbide? Apply for grants to fund development of tools, integrations, and applications.",
                  icon: "spark",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 flex gap-5 items-start group hover:shadow-lg transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center shrink-0 group-hover:bg-black group-hover:text-white transition-all duration-300">
                    {item.icon === "code" && <span className="text-sm font-mono">{"/>"}</span>}
                    {item.icon === "globe" && <Globe className="h-4 w-4" />}
                    {item.icon === "users" && <Users className="h-4 w-4" />}
                    {item.icon === "spark" && <DollarSign className="h-4 w-4" />}
                  </div>
                  <div>
                    <h3 className="font-medium tracking-tight mb-1">{item.title}</h3>
                    <p className="text-sm text-black/40 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="section-padding">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter mb-4">
                Upcoming <span className="italic-serif">events</span>.
              </h2>
              <p className="text-lg text-black/40 max-w-lg">
                Meet the team, learn about decentralized storage, and connect with the community.
              </p>
            </div>
            <Link
              href="#"
              className="btn-secondary text-sm shrink-0"
            >
              View all events
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                date: "Mar 15, 2026",
                title: "Carbide Developer Day",
                description: "Hands-on workshop: build your first dApp on Carbide. Storage APIs, encryption, and provider integration.",
                location: "San Francisco, CA",
                type: "Workshop",
                bg: "bg-blue-50",
              },
              {
                date: "Mar 28, 2026",
                title: "DePIN Summit 2026",
                description: "Carbide at DePIN Summit — our team presents the provider economics model and marketplace roadmap.",
                location: "Austin, TX",
                type: "Conference",
                bg: "bg-purple-50",
              },
              {
                date: "Apr 10, 2026",
                title: "Community AMA",
                description: "Monthly AMA with the core team. Ask about protocol upgrades, provider onboarding, and what's next.",
                location: "Online — Telegram",
                type: "Online",
                bg: "bg-green-50",
              },
              {
                date: "Apr 22, 2026",
                title: "ETH Taipei Hackathon",
                description: "Join our bounty track: build storage-powered dApps and compete for prizes.",
                location: "Taipei, Taiwan",
                type: "Hackathon",
                bg: "bg-amber-50",
              },
              {
                date: "May 5, 2026",
                title: "Provider Onboarding Call",
                description: "New to hosting? Join our monthly call to set up your first storage node with live support.",
                location: "Online — Discord",
                type: "Online",
                bg: "bg-rose-50",
              },
              {
                date: "May 18, 2026",
                title: "Decentralized Storage Day",
                description: "A global community event celebrating open data infrastructure. Panels, demos, and lightning talks.",
                location: "Berlin, Germany",
                type: "Conference",
                bg: "bg-teal-50",
              },
            ].map((event, i) => (
              <div
                key={i}
                className={`${event.bg} rounded-[2rem] p-8 group hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-medium bg-white/80 rounded-full px-3 py-1">{event.type}</span>
                  <div className="flex items-center gap-1.5 text-xs text-black/40">
                    <Calendar className="h-3.5 w-3.5" />
                    {event.date}
                  </div>
                </div>
                <h3 className="text-xl font-medium tracking-tight mb-3">{event.title}</h3>
                <p className="text-sm text-black/40 leading-relaxed mb-6">{event.description}</p>
                <div className="flex items-center gap-1.5 text-sm text-black/40">
                  <MapPin className="h-4 w-4" />
                  {event.location}
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto mb-8">
            <div className="relative flex items-center w-full bg-[#F5F5F5] rounded-full overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent px-6 py-4 text-sm outline-none placeholder:text-black/30"
              />
              <Link
                href="https://github.com/carbidenetwork"
                target="_blank"
                className="btn-primary shrink-0 mr-1.5 text-sm px-6 py-2.5"
              >
                Get Started
              </Link>
            </div>
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
