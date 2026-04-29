import Link from "next/link"
import {
    ArrowRight,
    ArrowUpRight,
    BookOpen,
    Code,
    Compass,
    Cpu,
    HardDrive,
    Layers,
    Server,
    Smartphone,
    Terminal,
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageContainer, PageHeader } from "@/components/page-layout"

type Stage = "Live" | "Devnet" | "Beta" | "Preview"

const stageStyles: Record<Stage, string> = {
    Live: "bg-green-100 text-green-700",
    Devnet: "bg-amber-100 text-amber-700",
    Beta: "bg-blue-100 text-blue-700",
    Preview: "bg-black/5 text-black/50",
}

const quickstarts = [
    {
        audience: "Storage providers",
        title: "Run a node, earn USDC",
        description:
            "Install carbide-node via the Homebrew tap, edit provider.toml, and start the launchd service. Auto-registers on the Solana registry once a wallet password is exported.",
        href: "https://github.com/chaalpritam/carbide-node#running-in-production",
        cta: "Provider guide",
    },
    {
        audience: "App developers",
        title: "Build with the iOS SDK",
        description:
            "CarbideSDK ships async/await APIs for provider discovery, upload, download, and key management. AES-256-GCM happens client-side; keys live in the iOS/macOS Keychain.",
        href: "https://github.com/chaalpritam/carbide-ios-sdk#quick-start",
        cta: "SDK quick start",
    },
    {
        audience: "Network operators",
        title: "Deploy discovery & contracts",
        description:
            "Stand up carbide-discovery-service (Fastify, Dockerised) and deploy the Anchor programs to devnet or mainnet-beta. Discovery mirrors the on-chain registry over RPC.",
        href: "https://github.com/chaalpritam/carbide-discovery-service",
        cta: "Operator guide",
    },
] as const

const ecosystem: Array<{
    name: string
    repo: string
    href: string
    stage: Stage
    version?: string
    summary: string
    icon: typeof Server
}> = [
        {
            name: "carbide-node",
            repo: "chaalpritam/carbide-node",
            href: "https://github.com/chaalpritam/carbide-node",
            stage: "Live",
            version: "v1.0.0",
            summary:
                "Rust storage provider with HTTP API, SQLite metadata, proof-of-storage, Prometheus metrics, and a Tauri desktop GUI. Auto-registers on Solana when configured.",
            icon: Server,
        },
        {
            name: "carbide-contracts",
            repo: "chaalpritam/carbide-contracts",
            href: "https://github.com/chaalpritam/carbide-contracts",
            stage: "Devnet",
            summary:
                "Anchor 0.31.1 programs: carbide_registry (provider PDA + events) and carbide_escrow (USDC SPL deals with verifier co-sign and admin-resolved disputes).",
            icon: Cpu,
        },
        {
            name: "carbide-discovery-service",
            repo: "chaalpritam/carbide-discovery-service",
            href: "https://github.com/chaalpritam/carbide-discovery-service",
            stage: "Live",
            summary:
                "Fastify + TypeScript microservice. Provider registry, marketplace search, fan-out quotes, health checks, and a Solana-aware on-chain registry mirror.",
            icon: Compass,
        },
        {
            name: "carbide-ios-sdk",
            repo: "chaalpritam/carbide-ios-sdk",
            href: "https://github.com/chaalpritam/carbide-ios-sdk",
            stage: "Live",
            version: "v1.1.0",
            summary:
                "Swift SPM package for iOS 16+ / macOS 13+. Async/await, AES-256-GCM client-side encryption, Keychain key storage, exponential-backoff retry, zero deps beyond URLSession + CryptoKit.",
            icon: Code,
        },
        {
            name: "Carbide (iOS)",
            repo: "chaalpritam/Carbide",
            href: "https://github.com/chaalpritam/Carbide",
            stage: "Beta",
            summary:
                "SwiftUI + SwiftData app for iOS 18.1+. Folder management, photo upload, smart categorisation, real-time storage dashboard. TestFlight today, App Store submission pending.",
            icon: Smartphone,
        },
        {
            name: "CarbideDrive (macOS)",
            repo: "chaalpritam/CarbideDrive",
            href: "https://github.com/chaalpritam/CarbideDrive",
            stage: "Beta",
            summary:
                "Native macOS sync client (macOS 14+). FSEvents-driven file change detection, grid/list browser, settings panel for region/tier/price preferences. Notarized DMG distribution.",
            icon: HardDrive,
        },
        {
            name: "homebrew-carbide",
            repo: "chaalpritam/homebrew-carbide",
            href: "https://github.com/chaalpritam/homebrew-carbide",
            stage: "Live",
            summary:
                "Homebrew tap that builds carbide-node from source, writes a default provider.toml, and registers a launchd service. --HEAD install today; tagged release path documented.",
            icon: Terminal,
        },
        {
            name: "carbide-dev-docs",
            repo: "chaalpritam/carbide-dev-docs",
            href: "https://github.com/chaalpritam/carbide-dev-docs",
            stage: "Live",
            summary:
                "Markdown reference for architecture, provider setup, discovery API, SDK usage, and client apps. Hosts the static dev-portal site.",
            icon: BookOpen,
        },
    ]

const cliBinaries = [
    {
        binary: "carbide-provider",
        purpose: "Run a storage provider node — HTTP API, proof-of-storage, registry heartbeat.",
        example: "carbide-provider start --port 8080 --capacity-gb 25",
    },
    {
        binary: "carbide-discovery",
        purpose: "Run a self-hosted discovery service for local development or private networks.",
        example: "carbide-discovery start --port 9090 --host 0.0.0.0",
    },
    {
        binary: "carbide-client",
        purpose: "Direct upload/download against a known provider, plus quote/pay for full marketplace flow.",
        example: "carbide-client upload --provider http://127.0.0.1:8080 --file ~/file.pdf",
    },
] as const

const apiEndpoints = [
    { method: "POST", path: "/providers", note: "Provider self-registration" },
    { method: "GET", path: "/providers", note: "List with region / tier / minReputation filters" },
    { method: "GET", path: "/providers/:id", note: "Fetch a single provider record" },
    { method: "POST", path: "/providers/:id/heartbeat", note: "Provider keepalive (every 30s)" },
    { method: "DELETE", path: "/providers/:id", note: "Unregister" },
    { method: "GET", path: "/marketplace/search", note: "Sort + filter the marketplace" },
    { method: "POST", path: "/marketplace/quotes", note: "Fan-out quote request to N providers" },
    { method: "GET", path: "/marketplace/stats", note: "Total providers, capacity, average price" },
    { method: "GET", path: "/health", note: "Service liveness" },
] as const

const programs = [
    {
        name: "carbide_registry",
        address: "5rAsbS4ApXNyNqrSUXqC7ju24kpEudHxfU1Q5khmAZHD",
        instructions: ["register", "update", "set_active", "deregister"],
        summary:
            "One ProviderAccount PDA per provider, seeded by the signing pubkey. Permissionless self-registration; emits events for the discovery mirror.",
    },
    {
        name: "carbide_escrow",
        address: "FQLdMfgTtio51EiWmNC444BmVfAtG9DAdWp8dLeCycgZ",
        instructions: [
            "initialize_config",
            "transfer_admin",
            "add_verifier",
            "remove_verifier",
            "create_escrow",
            "release_payment",
            "cancel_escrow",
            "raise_dispute",
            "resolve_dispute",
        ],
        summary:
            "USDC SPL token escrow per deal. Periodic releases require provider + authorised verifier co-sign; disputes freeze the deal until the admin splits the balance.",
    },
] as const

export const metadata = {
    title: "Docs — Carbide Network",
    description:
        "Developer hub for the Carbide Network: provider, SDK, discovery service, and on-chain contracts. Current ecosystem status and entry points into every component.",
}

export default function DocsPage() {
    return (
        <div className="bg-white text-black min-h-screen">
            <Header />
            <PageContainer>
                <PageHeader
                    title={
                        <>
                            Build on <span className="italic-serif">Carbide</span>.
                        </>
                    }
                    subtitle="A developer hub for the decentralized storage network. Every component, what it does, where it is in its lifecycle, and how to get going."
                />

                {/* Quickstart paths */}
                <section className="mb-24 md:mb-32">
                    <div className="flex items-baseline justify-between flex-wrap gap-4 mb-10">
                        <h2 className="text-3xl md:text-4xl font-medium tracking-tighter">
                            Pick your <span className="italic-serif">path</span>.
                        </h2>
                        <p className="text-sm text-black/40 max-w-md">
                            Three common entry points. Each one drops you straight into the right repo and section.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {quickstarts.map((q) => (
                            <Link
                                key={q.audience}
                                href={q.href}
                                target="_blank"
                                className="group bg-[#F5F5F5] rounded-[2rem] p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                            >
                                <span className="text-xs font-medium uppercase tracking-widest text-black/30 mb-4">
                                    {q.audience}
                                </span>
                                <h3 className="text-xl font-medium tracking-tight mb-3">{q.title}</h3>
                                <p className="text-sm text-black/50 leading-relaxed mb-8 flex-grow">
                                    {q.description}
                                </p>
                                <span className="inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all">
                                    {q.cta}
                                    <ArrowUpRight className="h-4 w-4" />
                                </span>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Ecosystem status */}
                <section className="mb-24 md:mb-32">
                    <div className="flex items-baseline justify-between flex-wrap gap-4 mb-10">
                        <h2 className="text-3xl md:text-4xl font-medium tracking-tighter">
                            Ecosystem <span className="italic-serif">status</span>.
                        </h2>
                        <p className="text-sm text-black/40 max-w-md">
                            Snapshot of every Carbide component. Stage labels reflect what is actually deployed today.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {ecosystem.map((c) => (
                            <Link
                                key={c.name}
                                href={c.href}
                                target="_blank"
                                className="group bg-white border border-black/[0.06] rounded-[2rem] p-8 hover:shadow-xl hover:-translate-y-1 hover:border-black/10 transition-all duration-300 flex flex-col"
                            >
                                <div className="flex items-start justify-between mb-6">
                                    <div className="w-12 h-12 rounded-2xl bg-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                                        <c.icon className="h-5 w-5" />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {c.version && (
                                            <span className="text-[11px] font-mono text-black/40 bg-black/5 rounded-full px-3 py-1">
                                                {c.version}
                                            </span>
                                        )}
                                        <span
                                            className={`text-[11px] font-medium uppercase tracking-widest rounded-full px-3 py-1 ${stageStyles[c.stage]}`}
                                        >
                                            {c.stage}
                                        </span>
                                    </div>
                                </div>
                                <h3 className="text-lg font-medium tracking-tight mb-1">{c.name}</h3>
                                <p className="text-xs font-mono text-black/30 mb-4">{c.repo}</p>
                                <p className="text-sm text-black/50 leading-relaxed flex-grow">{c.summary}</p>
                                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                                    Open repo
                                    <ArrowUpRight className="h-4 w-4" />
                                </span>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Architecture */}
                <section className="mb-24 md:mb-32">
                    <div className="bg-black text-white rounded-[2rem] p-10 md:p-14">
                        <div className="flex items-center gap-3 mb-6">
                            <Layers className="h-5 w-5" />
                            <span className="text-xs font-medium uppercase tracking-widest text-white/50">
                                Architecture
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-medium tracking-tighter mb-8 max-w-2xl">
                            Three layers, <span className="italic-serif">one</span> network.
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Client layer",
                                    body:
                                        "iOS app, CarbideDrive on macOS, and any third-party app built on the Swift SDK. End-to-end encryption happens here, before bytes leave the device.",
                                },
                                {
                                    title: "Coordination layer",
                                    body:
                                        "Discovery service indexes the on-chain registry and exposes /api/v1 — provider search, quotes, heartbeats. Stateless and horizontally scalable.",
                                },
                                {
                                    title: "Settlement layer",
                                    body:
                                        "Solana programs hold the source of truth for providers and deals. carbide_registry for identity, carbide_escrow for USDC payments and verifier-gated releases.",
                                },
                            ].map((l) => (
                                <div key={l.title}>
                                    <h3 className="text-lg font-medium mb-3">{l.title}</h3>
                                    <p className="text-sm text-white/50 leading-relaxed">{l.body}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* On-chain */}
                <section className="mb-24 md:mb-32">
                    <div className="flex items-baseline justify-between flex-wrap gap-4 mb-10">
                        <h2 className="text-3xl md:text-4xl font-medium tracking-tighter">
                            On-chain <span className="italic-serif">programs</span>.
                        </h2>
                        <p className="text-sm text-black/40 max-w-md">
                            Anchor 0.31.1 on Solana. Devnet program IDs below; the mainnet-beta deploy path is documented in carbide-contracts.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {programs.map((p) => (
                            <div
                                key={p.name}
                                className="bg-[#F5F5F5] rounded-[2rem] p-8 flex flex-col"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-lg font-medium tracking-tight font-mono">{p.name}</h3>
                                    <span className={`text-[11px] font-medium uppercase tracking-widest rounded-full px-3 py-1 ${stageStyles.Devnet}`}>
                                        Devnet
                                    </span>
                                </div>
                                <p className="text-sm text-black/50 leading-relaxed mb-6">{p.summary}</p>
                                <div className="bg-white rounded-2xl p-4 mb-6 border border-black/5 overflow-x-auto">
                                    <div className="text-[11px] uppercase tracking-widest text-black/30 mb-1">Program ID</div>
                                    <code className="text-xs font-mono text-black/80 break-all">{p.address}</code>
                                </div>
                                <div>
                                    <div className="text-[11px] uppercase tracking-widest text-black/30 mb-3">Instructions</div>
                                    <div className="flex flex-wrap gap-2">
                                        {p.instructions.map((i) => (
                                            <code
                                                key={i}
                                                className="text-[11px] font-mono bg-white border border-black/5 rounded-full px-3 py-1 text-black/60"
                                            >
                                                {i}
                                            </code>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="mt-8 text-sm text-black/40">
                        Wallet keypairs follow Solana&apos;s standard derivation path{" "}
                        <code className="font-mono text-black/60">m/44&apos;/501&apos;/0&apos;/0&apos;</code>. Deals settle in
                        USDC; the devnet mock mint is{" "}
                        <code className="font-mono text-black/60">4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU</code>.
                    </p>
                </section>

                {/* Discovery API */}
                <section className="mb-24 md:mb-32">
                    <div className="flex items-baseline justify-between flex-wrap gap-4 mb-10">
                        <h2 className="text-3xl md:text-4xl font-medium tracking-tighter">
                            Discovery <span className="italic-serif">API</span>.
                        </h2>
                        <p className="text-sm text-black/40 max-w-md">
                            Fastify service, base path <code className="font-mono">/api/v1</code>. CORS is on by default for browser clients.
                        </p>
                    </div>

                    <div className="bg-[#F5F5F5] rounded-[2rem] overflow-hidden">
                        <div className="grid grid-cols-[80px_1fr] md:grid-cols-[100px_1fr_1fr] px-8 py-4 border-b border-black/5 text-[11px] uppercase tracking-widest font-medium text-black/30">
                            <div>Method</div>
                            <div>Path</div>
                            <div className="hidden md:block">Notes</div>
                        </div>
                        {apiEndpoints.map((e, i) => (
                            <div
                                key={`${e.method}-${e.path}`}
                                className={`grid grid-cols-[80px_1fr] md:grid-cols-[100px_1fr_1fr] px-8 py-4 items-baseline ${i !== apiEndpoints.length - 1 ? "border-b border-black/5" : ""}`}
                            >
                                <div>
                                    <span
                                        className={`text-[11px] font-mono font-semibold rounded px-2 py-0.5 ${e.method === "GET"
                                            ? "bg-blue-100 text-blue-700"
                                            : e.method === "POST"
                                                ? "bg-green-100 text-green-700"
                                                : "bg-rose-100 text-rose-700"
                                            }`}
                                    >
                                        {e.method}
                                    </span>
                                </div>
                                <code className="text-sm font-mono text-black/80 break-all">{e.path}</code>
                                <div className="hidden md:block text-sm text-black/50">{e.note}</div>
                                <div className="md:hidden col-span-2 mt-1 text-sm text-black/40">{e.note}</div>
                            </div>
                        ))}
                    </div>

                    <p className="mt-6 text-sm text-black/40">
                        Public default endpoint:{" "}
                        <code className="font-mono text-black/60">https://discovery.carbidenetwork.xyz</code>. Override the SDK&apos;s
                        <code className="font-mono text-black/60"> discoveryServiceURL</code> to point at a self-hosted instance.
                    </p>
                </section>

                {/* CLI */}
                <section className="mb-24 md:mb-32">
                    <div className="flex items-baseline justify-between flex-wrap gap-4 mb-10">
                        <h2 className="text-3xl md:text-4xl font-medium tracking-tighter">
                            <span className="italic-serif">CLI</span> binaries.
                        </h2>
                        <p className="text-sm text-black/40 max-w-md">
                            Three executables ship with the Homebrew install. All three also build from the Cargo workspace.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {cliBinaries.map((b) => (
                            <div
                                key={b.binary}
                                className="bg-white border border-black/[0.06] rounded-[2rem] p-8 flex flex-col md:flex-row gap-6 md:items-center md:justify-between"
                            >
                                <div className="md:max-w-md">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Terminal className="h-4 w-4 text-black/40" />
                                        <code className="text-sm font-mono font-semibold">{b.binary}</code>
                                    </div>
                                    <p className="text-sm text-black/50 leading-relaxed">{b.purpose}</p>
                                </div>
                                <div className="bg-black text-white rounded-2xl px-5 py-4 font-mono text-xs leading-relaxed overflow-x-auto md:max-w-lg">
                                    <span className="text-white/30 mr-2">$</span>
                                    {b.example}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 bg-black text-white rounded-[2rem] p-8">
                        <div className="text-[11px] uppercase tracking-widest text-white/40 mb-3">Install on macOS</div>
                        <pre className="font-mono text-xs leading-relaxed overflow-x-auto">
                            <code>{`brew tap chaalpritam/carbide https://github.com/chaalpritam/homebrew-carbide
brew install --HEAD chaalpritam/carbide/carbide-node
brew services start carbide-node`}</code>
                        </pre>
                    </div>
                </section>

                {/* Resources */}
                <section>
                    <div className="bg-[#F5F5F5] rounded-[2rem] p-10 md:p-14">
                        <h2 className="text-3xl md:text-4xl font-medium tracking-tighter mb-3">
                            Going <span className="italic-serif">deeper</span>.
                        </h2>
                        <p className="text-black/40 max-w-lg mb-10">
                            The reference docs live alongside each component. Pick the area you&apos;re working on.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                {
                                    label: "Architecture overview",
                                    href: "https://github.com/chaalpritam/carbide-dev-docs/blob/main/OVERVIEW.md",
                                },
                                {
                                    label: "Provider node deep-dive",
                                    href: "https://github.com/chaalpritam/carbide-dev-docs/blob/main/PROVIDER_NODE.md",
                                },
                                {
                                    label: "Discovery service reference",
                                    href: "https://github.com/chaalpritam/carbide-dev-docs/blob/main/DISCOVERY_SERVICE.md",
                                },
                                {
                                    label: "iOS SDK reference",
                                    href: "https://github.com/chaalpritam/carbide-dev-docs/blob/main/IOS_SDK.md",
                                },
                                {
                                    label: "Client app guide",
                                    href: "https://github.com/chaalpritam/carbide-dev-docs/blob/main/CLIENT_APPS.md",
                                },
                                {
                                    label: "All repositories",
                                    href: "https://github.com/chaalpritam?tab=repositories&q=carbide",
                                },
                            ].map((r) => (
                                <Link
                                    key={r.label}
                                    href={r.href}
                                    target="_blank"
                                    className="group flex items-center justify-between bg-white rounded-2xl px-6 py-5 hover:shadow-md transition-all"
                                >
                                    <span className="text-sm font-medium">{r.label}</span>
                                    <ArrowUpRight className="h-4 w-4 text-black/30 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                </Link>
                            ))}
                        </div>

                        <div className="mt-12 pt-12 border-t border-black/5 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
                            <div>
                                <h3 className="text-xl font-medium mb-2">Need a hand?</h3>
                                <p className="text-sm text-black/40 max-w-md">
                                    Telegram is the fastest way to reach a contributor. GitHub issues are great for tracked work.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <Link
                                    href="https://t.me/carbidenetwork"
                                    target="_blank"
                                    className="inline-flex items-center justify-center gap-2 bg-black text-white rounded-full px-6 py-3 text-sm font-medium hover:bg-black/90 transition-colors"
                                >
                                    Join Telegram
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                                <Link
                                    href="https://github.com/chaalpritam?tab=repositories&q=carbide"
                                    target="_blank"
                                    className="inline-flex items-center justify-center gap-2 border border-black/10 rounded-full px-6 py-3 text-sm font-medium text-black/60 hover:border-black/30 hover:text-black transition-colors"
                                >
                                    Browse on GitHub
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </PageContainer>
            <Footer />
        </div>
    )
}
