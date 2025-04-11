import Link from "next/link"
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
} from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white">
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <Database className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Carbide Network</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:underline underline-offset-4">
              How It Works
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:underline underline-offset-4">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Login
            </Link>
            <Button variant="outline">Get Started</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container px-4 md:px-6 mx-auto flex flex-col items-center text-center gap-6">
          <div className="space-y-3">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              The Future of Decentralized Storage
            </h1>
            <p className="text-muted-foreground md:text-xl max-w-[700px] mx-auto">
              Take control of your data with Carbide Network's next-generation decentralized storage solution.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="gap-2">
              Join the Network <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
          <div className="w-full max-w-3xl mx-auto mt-8 relative">
            <div className="aspect-video rounded-lg overflow-hidden border shadow-xl bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
              <img
                src="/placeholder.svg?height=720&width=1280"
                alt="Carbide Network Dashboard"
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Database className="h-20 w-20 text-primary opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-lg bg-primary/5 px-3 py-1 text-sm text-primary">Key Features</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Why Choose Carbide Network?</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Disrupting traditional consumer storage services with a decentralized approach.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg border shadow-sm">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Server className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Decentralized Storage</h3>
              <p className="text-muted-foreground">
                Host your own hardware storage devices and eliminate reliance on centralized providers.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg border shadow-sm">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Secure and Private</h3>
              <p className="text-muted-foreground">
                Blockchain technology ensures data integrity and privacy, giving you full ownership of your data.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg border shadow-sm">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Coins className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Earn Rewards</h3>
              <p className="text-muted-foreground">
                Contribute to the network by hosting storage devices and earn rewards for your participation.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg border shadow-sm">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <UserCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Superior User Experience</h3>
              <p className="text-muted-foreground">
                Enjoy a seamless and intuitive storage solution with a user-friendly interface.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg border shadow-sm">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Cloud className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Alternative to Centralized Providers</h3>
              <p className="text-muted-foreground">
                Replace traditional cloud storage services with better performance, lower costs, and more control.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg border shadow-sm">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Lock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">DePIN Protocol</h3>
              <p className="text-muted-foreground">
                Built on a Decentralized Physical Infrastructure Network protocol for maximum security and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-lg bg-primary/5 px-3 py-1 text-sm text-primary">How It Works</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Join the Decentralized Storage Revolution
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Simple steps to become part of the Carbide Network ecosystem.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="relative flex flex-col items-center p-6 bg-white rounded-lg border shadow-sm">
              <div className="absolute -top-4 -left-4 h-10 w-10 rounded-full bg-primary/20 border border-primary flex items-center justify-center text-primary font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mt-4 mb-2">Connect Your Hardware</h3>
              <p className="text-muted-foreground text-center">
                Set up your storage device and connect it to the Carbide Network.
              </p>
            </div>
            <div className="relative flex flex-col items-center p-6 bg-white rounded-lg border shadow-sm">
              <div className="absolute -top-4 -left-4 h-10 w-10 rounded-full bg-primary/20 border border-primary flex items-center justify-center text-primary font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mt-4 mb-2">Share Your Storage</h3>
              <p className="text-muted-foreground text-center">
                Allocate unused storage space to contribute to the decentralized network.
              </p>
            </div>
            <div className="relative flex flex-col items-center p-6 bg-white rounded-lg border shadow-sm">
              <div className="absolute -top-4 -left-4 h-10 w-10 rounded-full bg-primary/20 border border-primary flex items-center justify-center text-primary font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mt-4 mb-2">Earn Rewards</h3>
              <p className="text-muted-foreground text-center">
                Get rewarded for your contribution while helping build a more secure internet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-lg bg-primary/5 px-3 py-1 text-sm text-primary">Comparison</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Carbide Network vs. Traditional Storage</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              See how we stack up against centralized storage providers.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4">Features</th>
                  <th className="p-4 text-center">Carbide Network</th>
                  <th className="p-4 text-center">Traditional Cloud Storage</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-medium">Data Ownership</td>
                  <td className="p-4 text-center">
                    <CheckCircle2 className="h-5 w-5 text-primary mx-auto" />
                  </td>
                  <td className="p-4 text-center">Limited</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Privacy</td>
                  <td className="p-4 text-center">
                    <CheckCircle2 className="h-5 w-5 text-primary mx-auto" />
                  </td>
                  <td className="p-4 text-center">Varies</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Earn While Storing</td>
                  <td className="p-4 text-center">
                    <CheckCircle2 className="h-5 w-5 text-primary mx-auto" />
                  </td>
                  <td className="p-4 text-center">No</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Decentralized</td>
                  <td className="p-4 text-center">
                    <CheckCircle2 className="h-5 w-5 text-primary mx-auto" />
                  </td>
                  <td className="p-4 text-center">No</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Cost Efficiency</td>
                  <td className="p-4 text-center">
                    <CheckCircle2 className="h-5 w-5 text-primary mx-auto" />
                  </td>
                  <td className="p-4 text-center">Expensive Long-term</td>
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
            <div className="inline-block rounded-lg bg-primary/5 px-3 py-1 text-sm text-primary">FAQ</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Frequently Asked Questions</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Get answers to common questions about Carbide Network.
            </p>
          </div>
          <div className="grid gap-6 max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <h3 className="text-xl font-bold mb-2">What hardware do I need to join Carbide Network?</h3>
              <p className="text-muted-foreground">
                You can use almost any storage device with an internet connection. This includes external hard drives,
                NAS devices, or even dedicated servers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <h3 className="text-xl font-bold mb-2">How secure is my data on Carbide Network?</h3>
              <p className="text-muted-foreground">
                Extremely secure. We use blockchain technology and encryption to ensure your data remains private and
                intact. Your files are split and distributed across the network, making them virtually impossible to
                compromise.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <h3 className="text-xl font-bold mb-2">How do I earn rewards?</h3>
              <p className="text-muted-foreground">
                By contributing storage space to the network, you earn Carbide tokens based on the amount of space
                provided, uptime, and network demand.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <h3 className="text-xl font-bold mb-2">Can I access my files from anywhere?</h3>
              <p className="text-muted-foreground">
                Yes, Carbide Network provides web, desktop, and mobile applications that allow you to access your files
                from any device with an internet connection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-primary/5 text-foreground">
        <div className="container px-4 md:px-6 mx-auto flex flex-col items-center text-center gap-6">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Join the Decentralized Storage Revolution</h2>
          <p className="max-w-[700px] md:text-xl text-muted-foreground">
            Take control of your data today and be part of the future of storage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="gap-2">
              Get Started <ChevronRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 bg-white border-t">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Database className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">Carbide Network</span>
              </div>
              <p className="text-muted-foreground">The future of decentralized storage.</p>
              <div className="flex gap-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground">
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
                <Link href="#" className="text-muted-foreground hover:text-foreground">
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
                <Link href="#" className="text-muted-foreground hover:text-foreground">
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
              <h3 className="text-lg font-medium mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Roadmap
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
            <p>© {new Date().getFullYear()} Carbide Network. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
