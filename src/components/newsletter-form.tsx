"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check } from "lucide-react"

export function NewsletterForm() {
    const [email, setEmail] = useState("")
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!email) return

        setStatus("loading")
        setTimeout(() => {
            setStatus("success")
            setEmail("")
        }, 1500)
    }

    return (
        <div className="w-full max-w-md mx-auto">
            <AnimatePresence mode="wait">
                {status !== "success" ? (
                    <motion.form
                        key="form"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        onSubmit={handleSubmit}
                        className="relative flex items-center w-full bg-[#F5F5F5] rounded-full overflow-hidden p-1.5 border border-black/[0.03] focus-within:border-black/10 transition-colors"
                    >
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                            disabled={status === "loading"}
                            className="w-full bg-transparent px-6 py-3 text-sm outline-none placeholder:text-black/30 disabled:opacity-50"
                        />
                        <button
                            type="submit"
                            disabled={status === "loading"}
                            className="btn-primary shrink-0 text-sm px-6 py-2.5 min-w-[120px]"
                        >
                            {status === "loading" ? (
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                "Get Started"
                            )}
                        </button>
                    </motion.form>
                ) : (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center justify-center gap-3 bg-green-50 text-green-700 py-4 px-8 rounded-full border border-green-100"
                    >
                        <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center">
                            <Check className="h-3.5 w-3.5 text-white" />
                        </div>
                        <span className="text-sm font-medium">You&apos;re on the list!</span>
                        <button
                            onClick={() => setStatus("idle")}
                            className="ml-4 text-xs font-bold uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity"
                        >
                            Reset
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
