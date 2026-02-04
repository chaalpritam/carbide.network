"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function Globe() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div className="relative w-full max-w-[600px] aspect-square mx-auto flex items-center justify-center">
            {/* Outer glow */}
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-[100px] animate-pulse-glow" />

            {/* Globe spheres */}
            <div className="relative w-4/5 h-4/5 rounded-full border border-primary/20 flex items-center justify-center overflow-hidden bg-slate-950/20 backdrop-blur-sm">
                {/* Grids */}
                <div className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `linear-gradient(to right, rgba(59, 130, 246, 0.5) 1px, transparent 1px), 
                              linear-gradient(to bottom, rgba(59, 130, 246, 0.5) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}
                />

                {/* Animated Orbits */}
                {[1, 2, 3].map((i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full border border-primary/30"
                        style={{
                            width: `${100 - i * 15}%`,
                            height: `${100 - i * 15}%`,
                            rotateX: 60,
                            rotateY: i * 30,
                        }}
                        animate={{
                            rotateZ: 360,
                        }}
                        transition={{
                            duration: 15 + i * 5,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                ))}

                {/* Central Hub */}
                <div className="relative w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-primary rounded-full animate-ping" />
                    <div className="absolute inset-0 bg-primary/40 rounded-full blur-md" />
                </div>

                {/* Floating Data Points */}
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-primary rounded-full"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            opacity: [0, 1, 0],
                            scale: [0.5, 1.5, 0.5],
                        }}
                        transition={{
                            duration: 2 + Math.random() * 3,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                        }}
                    />
                ))}
            </div>

            {/* Satellite rings */}
            <motion.div
                className="absolute w-full h-full rounded-full border border-dashed border-primary/10"
                style={{ rotateX: 75 }}
                animate={{ rotateZ: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />

            <motion.div
                className="absolute w-[110%] h-[110%] rounded-full border border-dashed border-purple-500/10"
                style={{ rotateX: 80, rotateY: 20 }}
                animate={{ rotateZ: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />
        </div>
    )
}
