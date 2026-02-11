"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

const lines = [
    { text: "brew install carbide-node", color: "text-green-400", prefix: "$" },
    { text: "Installing Carbide Node v1.2.0...", color: "text-white/30" },
    { text: "Verifying checksums... OK", color: "text-white/30" },
    { text: "Setting up storage directory...", color: "text-white/30" },
    { text: "✓ Carbide Node installed successfully", color: "text-white/60", prefix: "" },
    { text: "carbide-node start --storage 500GB", color: "text-green-400", prefix: "$" },
    { text: "Registering on Carbide Network...", color: "text-white/30" },
    { text: "Connecting to discovery service...", color: "text-white/30" },
    { text: "✓ Node online - providing 500 GB", color: "text-white/60", prefix: "" },
]

export function InteractiveTerminal() {
    const [visibleLines, setVisibleLines] = useState<number>(0)
    const [isTyping, setIsTyping] = useState(true)

    useEffect(() => {
        if (visibleLines >= lines.length) {
            const timeout = setTimeout(() => {
                setVisibleLines(0)
            }, 5000)
            return () => clearTimeout(timeout)
        }

        const timer = setTimeout(() => {
            setVisibleLines(prev => prev + 1)
        }, visibleLines % 5 === 0 ? 1000 : 400)

        return () => clearTimeout(timer)
    }, [visibleLines])

    return (
        <div className="bg-[#0A0A0A] rounded-[2rem] p-8 border border-white/10 shadow-2xl relative overflow-hidden group">
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none" />

            <div className="flex items-center gap-2 mb-8">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                <span className="text-[10px] font-mono text-white/20 ml-2 uppercase tracking-widest">Carbide Terminal v1.2</span>
            </div>

            <div className="font-mono text-xs md:text-sm space-y-3 min-h-[300px]">
                {lines.slice(0, visibleLines).map((line, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex gap-3"
                    >
                        {line.prefix && (
                            <span className="text-white/20 shrink-0">{line.prefix}</span>
                        )}
                        <span className={line.color}>{line.text}</span>
                    </motion.div>
                ))}
                {visibleLines < lines.length && (
                    <motion.div
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                        className="w-2 h-4 bg-green-400/50 inline-block ml-1"
                    />
                )}
            </div>

            {/* Decorative pulse */}
            <div className="absolute bottom-8 right-8 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[10px] font-mono text-green-400/40">LIVE NETWORK</span>
            </div>
        </div>
    )
}
