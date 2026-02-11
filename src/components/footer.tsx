import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-black/5">
      <div className="max-w-[1440px] mx-auto section-padding">
        {/* Main footer grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-0 mb-4">
              <span className="text-lg font-semibold tracking-tight">carbide</span>
              <span className="text-lg font-semibold tracking-tight italic-serif">.network</span>
            </div>
            <p className="text-sm text-black/40 leading-relaxed max-w-xs">
              Decentralized storage for everyone. Your files, your keys, your control.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-medium mb-4">Product</h4>
            <ul className="space-y-3">
              {[
                { label: "Technology", href: "#technology" },
                { label: "Providers", href: "#providers" },
                { label: "Pricing", href: "#pricing" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-black/40 hover:text-black transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-medium mb-4">Resources</h4>
            <ul className="space-y-3">
              {[
                { label: "GitHub", href: "https://github.com/carbidenetwork", external: true },
                { label: "Documentation", href: "#", external: false },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    className="text-sm text-black/40 hover:text-black transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-sm font-medium mb-4">Community</h4>
            <ul className="space-y-3">
              {[
                { label: "Twitter", href: "https://x.com/carbidenetwork", external: true },
                { label: "Telegram", href: "https://t.me/carbidenetwork", external: true },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    className="text-sm text-black/40 hover:text-black transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-black/5">
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs text-black/30 hover:text-black transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-black/30 hover:text-black transition-colors"
            >
              Terms of Service
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="https://x.com/carbidenetwork"
              target="_blank"
              className="text-xs text-black/30 hover:text-black transition-colors"
            >
              Twitter
            </Link>
            <Link
              href="https://github.com/carbidenetwork"
              target="_blank"
              className="text-xs text-black/30 hover:text-black transition-colors"
            >
              GitHub
            </Link>
            <Link
              href="https://t.me/carbidenetwork"
              target="_blank"
              className="text-xs text-black/30 hover:text-black transition-colors"
            >
              Telegram
            </Link>
          </div>

          <p className="text-xs text-black/30">
            &copy; {new Date().getFullYear()} Carbide Network. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
