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
      {/* Header */}
      <header className="fixed w-full px-4 lg:px-6 h-16 flex items-center border-b bg-white/80 backdrop-blur-sm z-50">
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Database className="h-6 w-6 text-primary" />
              <div className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-primary animate-pulse" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Carbide Network
            </span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-primary transition-colors">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Login
            </Link>
            <Button variant="outline" className="relative overflow-hidden group">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full pt-24 pb-12 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container px-4 md:px-6 mx-auto flex flex-col items-center text-center gap-8">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Decentralized Storage Solution</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                The Future of
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary/80 to-primary bg-clip-text text-transparent">
                Decentralized Storage
              </span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-[700px] mx-auto">
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
          <div className="w-full max-w-5xl mx-auto mt-8 relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80"
              alt="Decentralized Network Visualization"
              width={1920}
              height={1080}
              priority
              className="w-full aspect-video object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl" />
                <div className="relative p-4 bg-white/10 backdrop-blur-sm rounded-full">
                  <Database className="h-12 w-12 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative flex flex-col items-center text-center p-6 bg-white rounded-xl border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Server className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Decentralized Storage</h3>
              <p className="text-muted-foreground">
                Host your own hardware storage devices and eliminate reliance on centralized providers.
              </p>
            </div>
            <div className="group relative flex flex-col items-center text-center p-6 bg-white rounded-xl border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Secure and Private</h3>
              <p className="text-muted-foreground">
                Blockchain technology ensures data integrity and privacy, giving you full ownership of your data.
              </p>
            </div>
            <div className="group relative flex flex-col items-center text-center p-6 bg-white rounded-xl border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Coins className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Earn Rewards</h3>
              <p className="text-muted-foreground">
                Contribute to the network by hosting storage devices and earn rewards for your participation.
              </p>
            </div>
            <div className="group relative flex flex-col items-center text-center p-6 bg-white rounded-xl border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Global Network</h3>
              <p className="text-muted-foreground">
                Access your data from anywhere in the world with our distributed network infrastructure.
              </p>
            </div>
            <div className="group relative flex flex-col items-center text-center p-6 bg-white rounded-xl border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">High Performance</h3>
              <p className="text-muted-foreground">
                Experience faster speeds and better reliability with our optimized network architecture.
              </p>
            </div>
            <div className="group relative flex flex-col items-center text-center p-6 bg-white rounded-xl border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Cpu className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">DePIN Protocol</h3>
              <p className="text-muted-foreground">
                Built on a Decentralized Physical Infrastructure Network protocol for maximum security and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section with Image */}
      <section id="how-it-works" className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
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
                src="https://images.unsplash.com/photo-1633886038251-66951c209216?auto=format&fit=crop&q=80"
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
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
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
          <div className="overflow-x-auto rounded-xl border shadow-sm">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b bg-gray-50">
                  <th className="text-left p-4">Features</th>
                  <th className="p-4 text-center">Carbide Network</th>
                  <th className="p-4 text-center">Traditional Cloud Storage</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50/50 transition-colors">
                  <td className="text-left p-4">Data Control</td>
                  <td className="p-4 text-center text-green-600 font-medium">Full Control</td>
                  <td className="p-4 text-center text-red-600 font-medium">Limited Control</td>
                </tr>
                <tr className="border-b hover:bg-gray-50/50 transition-colors">
                  <td className="text-left p-4">Cost</td>
                  <td className="p-4 text-center text-green-600 font-medium">Pay for What You Use</td>
                  <td className="p-4 text-center text-red-600 font-medium">Fixed Monthly Fees</td>
                </tr>
                <tr className="border-b hover:bg-gray-50/50 transition-colors">
                  <td className="text-left p-4">Earning Potential</td>
                  <td className="p-4 text-center text-green-600 font-medium">Yes</td>
                  <td className="p-4 text-center text-red-600 font-medium">No</td>
                </tr>
                <tr className="border-b hover:bg-gray-50/50 transition-colors">
                  <td className="text-left p-4">Privacy</td>
                  <td className="p-4 text-center text-green-600 font-medium">End-to-End Encryption</td>
                  <td className="p-4 text-center text-red-600 font-medium">Provider Dependent</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10">
              <ShieldCheck className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">FAQ</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Frequently Asked Questions</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Everything you need to know about Carbide Network.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-2">How secure is my data?</h3>
              <p className="text-muted-foreground">
                Your data is protected with military-grade encryption and distributed across multiple nodes for maximum security and redundancy.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-2">How do I earn rewards?</h3>
              <p className="text-muted-foreground">
                By contributing storage space to the network, you earn Carbide tokens based on the amount of space
                provided, uptime, and network demand.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-2">Can I access my files from anywhere?</h3>
              <p className="text-muted-foreground">
                Yes, Carbide Network provides web, desktop, and mobile applications that allow you to access your files
                from any device with an internet connection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <section className="w-full py-12 md:py-24 relative">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
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
      <footer className="w-full py-12 bg-white border-t">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Database className="h-6 w-6 text-primary" />
                  <div className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-primary animate-pulse" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Carbide Network
                </span>
              </div>
              <p className="text-muted-foreground">The future of decentralized storage.</p>
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
                    className="h-5 w-5"
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
                    className="h-5 w-5"
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
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
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
