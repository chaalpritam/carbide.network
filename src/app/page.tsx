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

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Floating Menu */}
      <div className="fixed w-full px-4 lg:px-6 h-14 flex items-center z-50">
        <div className="relative flex items-center justify-between w-full max-w-7xl mx-auto mt-12">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Database className="h-4 w-4 text-white" />
              <div className="absolute -top-0.5 -right-0.5 h-1 w-1 rounded-full bg-white animate-pulse" />
            </div>
            <span className="text-base font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Carbide Network
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-1">
            <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/30 backdrop-blur-sm border border-primary/5">
              <Link href="#features" className="px-2 py-0.5 rounded-full text-sm font-medium hover:bg-primary/5 hover:text-primary transition-colors">
                Features
              </Link>
              <Link href="#how-it-works" className="px-2 py-0.5 rounded-full text-sm font-medium hover:bg-primary/5 hover:text-primary transition-colors">
                How It Works
              </Link>
              <Link href="#faq" className="px-2 py-0.5 rounded-full text-sm font-medium hover:bg-primary/5 hover:text-primary transition-colors">
                FAQ
              </Link>
              <div className="h-2.5 w-px bg-primary/5 mx-0.5" />
              <Link href="#" className="px-2 py-0.5 rounded-full text-sm font-medium hover:bg-primary/5 hover:text-primary transition-colors">
                Docs
              </Link>
              <Link href="#" className="px-2 py-0.5 rounded-full text-sm font-medium hover:bg-primary/5 hover:text-primary transition-colors">
                Blog
              </Link>
            </div>
          </nav>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="sm" className="text-sm font-medium hover:text-primary h-8">
              Login
            </Button>
            <Button size="sm" className="relative overflow-hidden group rounded-full h-8">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
            <Button variant="outline" size="icon" className="md:hidden rounded-full h-8 w-8">
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
                className="h-3.5 w-3.5"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
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
              <span className="text-sm font-medium text-white">Decentralized Storage Solution</span>
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
            <p className="text-white/90 text-lg md:text-xl max-w-[700px] mx-auto">
              Take control of your data with Carbide Network's next-generation decentralized storage solution.
              Built for security, scalability, and true data ownership.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="gap-2 group">
              <span>Join the Network</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="relative overflow-hidden group">
              <span className="relative z-10">Learn More</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
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
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 h-[calc(100vh-300px)]">
            <div className="group relative flex flex-col items-center text-center p-8 bg-white rounded-xl border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Server className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Decentralized Storage</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Host your own hardware storage devices and eliminate reliance on centralized providers.
              </p>
            </div>
            <div className="group relative flex flex-col items-center text-center p-8 bg-white rounded-xl border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Secure and Private</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Blockchain technology ensures data integrity and privacy, giving you full ownership of your data.
              </p>
            </div>
            <div className="group relative flex flex-col items-center text-center p-8 bg-white rounded-xl border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Coins className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Earn Rewards</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Contribute to the network by hosting storage devices and earn rewards for your participation.
              </p>
            </div>
            <div className="group relative flex flex-col items-center text-center p-8 bg-white rounded-xl border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Global Network</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Access your data from anywhere in the world with our distributed network infrastructure.
              </p>
            </div>
            <div className="group relative flex flex-col items-center text-center p-8 bg-white rounded-xl border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">High Performance</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Experience faster speeds and better reliability with our optimized network architecture.
              </p>
            </div>
            <div className="group relative flex flex-col items-center text-center p-8 bg-white rounded-xl border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Cpu className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">DePIN Protocol</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
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
                src="/images/how-it-works.jpg"
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
      <section className="w-full h-screen bg-gray-50/50">
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
      <section id="faq" className="w-full h-screen bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
        <div className="container h-full px-4 md:px-6 mx-auto relative flex flex-col justify-center">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20">
              <ShieldCheck className="h-4 w-4 text-white" />
              <span className="text-sm font-medium text-white">FAQ</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-white">Frequently Asked Questions</h2>
            <p className="max-w-[700px] text-white/70 md:text-xl">
              Everything you need to know about Carbide Network.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 h-[calc(100vh-300px)]">
            <div className="group bg-white/5 p-8 rounded-xl border border-white/10 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">How secure is my data?</h3>
                <p className="text-base text-white/80 leading-relaxed">
                  Your data is protected with military-grade encryption and distributed across multiple nodes for maximum security and redundancy.
                </p>
              </div>
            </div>
            <div className="group bg-white/5 p-8 rounded-xl border border-white/10 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Coins className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">How do I earn rewards?</h3>
                <p className="text-base text-white/80 leading-relaxed">
                  By contributing storage space to the network, you earn Carbide tokens based on the amount of space
                  provided, uptime, and network demand.
                </p>
              </div>
            </div>
            <div className="group bg-white/5 p-8 rounded-xl border border-white/10 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Can I access my files from anywhere?</h3>
                <p className="text-base text-white/80 leading-relaxed">
                  Yes, Carbide Network provides web, desktop, and mobile applications that allow you to access your files
                  from any device with an internet connection.
                </p>
              </div>
            </div>
            <div className="group bg-white/5 p-8 rounded-xl border border-white/10 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Server className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">What hardware do I need?</h3>
                <p className="text-base text-white/80 leading-relaxed">
                  Any storage device with sufficient capacity can be used. We recommend a minimum of 1TB storage and a stable internet connection.
                </p>
              </div>
            </div>
            <div className="group bg-white/5 p-8 rounded-xl border border-white/10 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Lock className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Is my data private?</h3>
                <p className="text-base text-white/80 leading-relaxed">
                  Yes, all data is encrypted before being stored, and only you have access to your encryption keys.
                </p>
              </div>
            </div>
            <div className="group bg-white/5 p-8 rounded-xl border border-white/10 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <UserCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">How do I get started?</h3>
                <p className="text-base text-white/80 leading-relaxed">
                  Simply download our application, connect your storage device, and follow the setup wizard to join the network.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <section className="w-full h-[50vh] relative">
        <div className="absolute inset-0">
          <Image
            src="/images/cta-bg.jpg"
            alt="Network Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/80" />
        </div>
        <div className="container h-full px-4 md:px-6 mx-auto relative">
          <div className="flex flex-col items-center text-center gap-6 text-white h-full justify-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Join the Decentralized Storage Revolution</h2>
            <p className="max-w-[700px] md:text-xl opacity-90">
              Take control of your data today and be part of the future of storage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="outline" className="bg-white hover:bg-white/90 text-primary group">
                <span>Get Started</span>
                <ChevronRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 group">
                <span>Learn More</span>
                <ChevronRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full h-[50vh] bg-white border-t">
        <div className="container h-full px-4 md:px-6 mx-auto flex flex-col justify-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Database className="h-8 w-8 text-primary" />
                  <div className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-primary animate-pulse" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Carbide Network
                </span>
              </div>
              <p className="text-muted-foreground text-lg">The future of decentralized storage.</p>
              <div className="flex gap-4">
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
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
                    className="h-6 w-6"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
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
                    className="h-6 w-6"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
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
                    className="h-6 w-6"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-6">Product</h3>
              <ul className="space-y-4">
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-base">Features</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-base">Security</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-base">Enterprise</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-base">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-6">Resources</h3>
              <ul className="space-y-4">
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-base">Documentation</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-base">API Reference</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-base">Blog</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-base">Community</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-6">Company</h3>
              <ul className="space-y-4">
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-base">About</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-base">Careers</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-base">Contact</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-base">Partners</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
            <p className="text-base">&copy; 2024 Carbide Network. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
