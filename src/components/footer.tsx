import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/5">
      <div className="max-w-[1440px] mx-auto section-padding">
        {/* Main footer grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-0 mb-4">
              <span className="text-xl font-bold tracking-tighter">carbide</span>
              <span className="text-xl font-bold tracking-tighter italic-serif">.network</span>
            </div>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              Decentralized storage for everyone. Your files, your keys, your control.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-medium mb-6 uppercase tracking-widest text-white/20">Product</h4>
            <ul className="space-y-4">
              {[
                { label: "Install Node", href: "#install-node" },
                { label: "Ecosystem", href: "#products" },
                { label: "Team", href: "#team" },
                { label: "How it Works", href: "#how-it-works" },
                { label: "Events", href: "#events" },
                { label: "Providers", href: "#providers" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-medium mb-6 uppercase tracking-widest text-white/20">Resources</h4>
            <ul className="space-y-4">
              {[
                { label: "GitHub", href: "https://github.com/carbidenetwork", external: true },
                { label: "Documentation", href: "#", external: false },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    className="text-sm text-white/40 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-sm font-medium mb-6 uppercase tracking-widest text-white/20">Community</h4>
            <ul className="space-y-4">
              {[
                { label: "Twitter", href: "https://x.com/carbidenetwork", external: true },
                { label: "Telegram", href: "https://t.me/carbidenetwork", external: true },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    className="text-sm text-white/40 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-white/5">
          <div className="flex items-center gap-8">
            <Link
              href="/privacy"
              className="text-[11px] uppercase tracking-widest font-bold text-white/20 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-[11px] uppercase tracking-widest font-bold text-white/20 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>

          <div className="flex items-center gap-8">
            <Link
              href="https://x.com/carbidenetwork"
              target="_blank"
              className="text-[11px] uppercase tracking-widest font-bold text-white/20 hover:text-white transition-colors"
            >
              Twitter
            </Link>
            <Link
              href="https://github.com/carbidenetwork"
              target="_blank"
              className="text-[11px] uppercase tracking-widest font-bold text-white/20 hover:text-white transition-colors"
            >
              GitHub
            </Link>
            <Link
              href="https://t.me/carbidenetwork"
              target="_blank"
              className="text-[11px] uppercase tracking-widest font-bold text-white/20 hover:text-white transition-colors"
            >
              Telegram
            </Link>
          </div>

          <p className="text-[11px] uppercase tracking-widest font-bold text-white/20">
            &copy; {new Date().getFullYear()} Carbide Network. Built for privacy.
          </p>
        </div>
      </div>
    </footer>
  )
}
