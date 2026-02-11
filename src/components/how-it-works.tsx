"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Lock, Share2, Download, Check, Shield, Zap, Globe } from "lucide-react"

const steps = [
    {
        num: "01",
        title: "Encrypt",
        description: "Your files are encrypted with AES-256-GCM on your device before upload. Only you hold the keys.",
        icon: Lock,
        color: "bg-blue-500",
    },
    {
        num: "02",
        title: "Distribute",
        description: "Encrypted chunks are spread across independent providers worldwide. You choose the redundancy level (1-10 copies).",
        icon: Share2,
        color: "bg-purple-500",
    },
    {
        num: "03",
        title: "Access",
        description: "Retrieve from anywhere. Data is fetched from the fastest providers and decrypted locally on your device.",
        icon: Download,
        color: "bg-emerald-500",
    },
]

export function HowItWorks() {
    const [activeStep, setActiveStep] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % steps.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [isAutoPlaying])

    return (
        <section className="section-padding bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500 blur-[120px]" />
            </div>

            <div className="max-w-[1440px] mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left: steps */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tighter mb-4">
                                How Carbide <span className="italic-serif">works</span>.
                            </h2>
                            <p className="text-lg text-black/40 mb-12 max-w-md">
                                A three-step process designed for maximum security and performance.
                            </p>
                        </motion.div>

                        <div className="space-y-2">
                            {steps.map((step, i) => (
                                <div
                                    key={i}
                                    onMouseEnter={() => {
                                        setActiveStep(i)
                                        setIsAutoPlaying(false)
                                    }}
                                    className={`group relative flex gap-6 items-start p-8 rounded-[2rem] transition-all duration-500 cursor-pointer ${activeStep === i ? "bg-[#F5F5F5]" : "hover:bg-[#F5F5F5]/50"
                                        }`}
                                >
                                    {/* Progress bar for active step */}
                                    {activeStep === i && isAutoPlaying && (
                                        <motion.div
                                            className="absolute bottom-0 left-8 right-8 h-0.5 bg-black/5"
                                        >
                                            <motion.div
                                                initial={{ width: "0%" }}
                                                animate={{ width: "100%" }}
                                                transition={{ duration: 5, ease: "linear" }}
                                                className="h-full bg-black/20"
                                            />
                                        </motion.div>
                                    )}

                                    <div className={`flex items-center justify-center w-12 h-12 rounded-2xl transition-all duration-500 ${activeStep === i ? "bg-black text-white" : "bg-black/5 text-black/20 group-hover:bg-black/10"
                                        }`}>
                                        <step.icon className="h-5 w-5" />
                                    </div>

                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-1">
                                            <span className={`text-xs font-mono font-medium transition-colors duration-500 ${activeStep === i ? "text-black/40" : "text-black/10"
                                                }`}>
                                                {step.num}
                                            </span>
                                            <h3 className={`text-xl font-medium tracking-tight transition-colors duration-500 ${activeStep === i ? "text-black" : "text-black/30"
                                                }`}>
                                                {step.title}
                                            </h3>
                                        </div>
                                        <p className={`text-sm leading-relaxed max-w-sm transition-colors duration-500 ${activeStep === i ? "text-black/60" : "text-black/20"
                                            }`}>
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Visualization */}
                    <div className="relative aspect-square">
                        <div className="absolute inset-0 bg-[#F5F5F5] rounded-[3rem] overflow-hidden border border-black/[0.03] shadow-inner">
                            <AnimatePresence mode="wait">
                                {activeStep === 0 && (
                                    <motion.div
                                        key="encrypt"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="w-full h-full flex flex-col items-center justify-center p-12"
                                    >
                                        <div className="relative w-full max-w-[280px] aspect-[4/5] bg-white rounded-[2rem] shadow-2xl border border-black/[0.05] overflow-hidden flex flex-col p-8">
                                            <div className="flex items-center justify-between mb-8">
                                                <div className="flex gap-1.5">
                                                    <div className="w-2 h-2 rounded-full bg-black/10" />
                                                    <div className="w-2 h-2 rounded-full bg-black/10" />
                                                    <div className="w-2 h-2 rounded-full bg-black/10" />
                                                </div>
                                                <div className="text-[10px] font-mono text-black/20 uppercase tracking-widest">Confidential</div>
                                            </div>

                                            <div className="space-y-4">
                                                {[...Array(6)].map((_, i) => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ width: "100%", opacity: 0.1 }}
                                                        animate={{ opacity: [0.1, 0.2, 0.1] }}
                                                        transition={{ duration: 2, delay: i * 0.1, repeat: Infinity }}
                                                        className="h-2 bg-black rounded-full"
                                                        style={{ width: `${100 - (i * 10)}%` }}
                                                    />
                                                ))}
                                            </div>

                                            <div className="mt-auto flex items-center justify-between pt-8 border-t border-black/[0.05]">
                                                <div className="text-[10px] font-medium text-black/30 uppercase tracking-widest">Encryption Status</div>
                                                <div className="flex items-center gap-1.5">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                                                    <span className="text-[10px] font-mono text-blue-500">ACTIVE</span>
                                                </div>
                                            </div>

                                            {/* The Lock Overlay */}
                                            <motion.div
                                                initial={{ scale: 0.8, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                transition={{ type: "spring", damping: 12, stiffness: 100 }}
                                                className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm"
                                            >
                                                <div className="flex flex-col items-center">
                                                    <motion.div
                                                        animate={{ y: [0, -5, 0] }}
                                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                                        className="w-20 h-20 rounded-3xl bg-white flex items-center justify-center shadow-glow"
                                                    >
                                                        <Lock className="h-8 w-8 text-black" />
                                                    </motion.div>
                                                    <motion.div
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        transition={{ delay: 0.3 }}
                                                        className="mt-6 text-white text-xs font-mono tracking-widest uppercase"
                                                    >
                                                        AES-256 SECURED
                                                    </motion.div>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                )}

                                {activeStep === 1 && (
                                    <motion.div
                                        key="distribute"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="w-full h-full flex items-center justify-center p-12"
                                    >
                                        <div className="relative w-full h-full max-w-[400px] max-h-[400px]">
                                            {/* Grid of nodes */}
                                            <div className="grid grid-cols-6 gap-6 w-full h-full opacity-20">
                                                {[...Array(36)].map((_, i) => (
                                                    <div key={i} className="aspect-square rounded-lg border border-black/10 flex items-center justify-center">
                                                        <div className="w-1 h-1 rounded-full bg-black/40" />
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Connection lines */}
                                            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                                                <defs>
                                                    <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                                        <stop offset="0%" stopColor="rgba(0,0,0,0.5)" />
                                                        <stop offset="100%" stopColor="rgba(0,0,0,0)" />
                                                    </linearGradient>
                                                </defs>
                                                {[...Array(12)].map((_, i) => {
                                                    const angle = (i / 12) * Math.PI * 2
                                                    const x2 = 50 + Math.cos(angle) * 40
                                                    const y2 = 50 + Math.sin(angle) * 40
                                                    return (
                                                        <motion.line
                                                            key={i}
                                                            x1="50%"
                                                            y1="50%"
                                                            x2={`${x2}%`}
                                                            y2={`${y2}%`}
                                                            stroke="url(#lineGrad)"
                                                            strokeWidth="1"
                                                            initial={{ pathLength: 0, opacity: 0 }}
                                                            animate={{ pathLength: 1, opacity: 1 }}
                                                            transition={{ duration: 1, delay: i * 0.05 }}
                                                        />
                                                    )
                                                })}
                                            </svg>

                                            {/* Central node */}
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <motion.div
                                                    animate={{ scale: [1, 1.1, 1] }}
                                                    transition={{ duration: 2, repeat: Infinity }}
                                                    className="w-16 h-16 rounded-2xl bg-black flex items-center justify-center shadow-2xl z-10"
                                                >
                                                    <Globe className="h-6 w-6 text-white" />
                                                </motion.div>

                                                {/* Flying chunks */}
                                                {[...Array(8)].map((_, i) => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ x: 0, y: 0, opacity: 0, scale: 1 }}
                                                        animate={{
                                                            x: (Math.random() - 0.5) * 300,
                                                            y: (Math.random() - 0.5) * 300,
                                                            opacity: [0, 1, 0],
                                                            scale: [1, 0.5]
                                                        }}
                                                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.25, ease: "easeOut" }}
                                                        className="absolute w-3 h-3 bg-purple-500 rounded-sm shadow-lg shadow-purple-500/20"
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {activeStep === 2 && (
                                    <motion.div
                                        key="access"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="w-full h-full flex flex-col items-center justify-center p-12"
                                    >
                                        <div className="relative">
                                            {/* Concentric rings */}
                                            {[...Array(3)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ scale: 0.8, opacity: 0 }}
                                                    animate={{ scale: 1 + (i * 0.3), opacity: [0, 0.1, 0] }}
                                                    transition={{ duration: 3, repeat: Infinity, delay: i * 1 }}
                                                    className="absolute inset-0 rounded-full border border-black/10"
                                                />
                                            ))}

                                            <motion.div
                                                initial={{ rotate: -10, scale: 0.9 }}
                                                animate={{ rotate: 0, scale: 1 }}
                                                className="relative w-40 h-40 rounded-[2.5rem] bg-white shadow-2xl border border-black/[0.03] flex items-center justify-center overflow-hidden"
                                            >
                                                <motion.div
                                                    initial={{ y: 20, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    transition={{ delay: 0.2 }}
                                                    className="flex flex-col items-center"
                                                >
                                                    <div className="w-16 h-16 rounded-2xl bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 mb-4">
                                                        <Check className="h-8 w-8 text-white" />
                                                    </div>
                                                    <span className="text-[10px] font-mono text-emerald-600 font-bold tracking-widest">VERIFIED</span>
                                                </motion.div>

                                                {/* Scanline effect */}
                                                <motion.div
                                                    animate={{ y: [-80, 80] }}
                                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                                    className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent pointer-events-none"
                                                />
                                            </motion.div>

                                            {/* Inbound packets */}
                                            {[...Array(6)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ x: (Math.random() - 0.5) * 400, y: (Math.random() - 0.5) * 400, opacity: 0 }}
                                                    animate={{ x: 0, y: 0, opacity: [0, 1, 0] }}
                                                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                                                    className="absolute w-2 h-2 bg-emerald-400 rounded-full blur-[2px]"
                                                />
                                            ))}
                                        </div>

                                        <div className="mt-12 flex gap-3">
                                            {[...Array(3)].map((_, i) => (
                                                <div key={i} className="h-1 w-8 rounded-full bg-black/5 overflow-hidden">
                                                    <motion.div
                                                        animate={{ x: [-32, 32] }}
                                                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                                                        className="h-full w-1/2 bg-emerald-500/20"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
