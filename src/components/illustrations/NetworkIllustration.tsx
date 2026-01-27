"use client"

import { useEffect, useState } from "react"

export function NetworkIllustration() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div
      className={`relative w-full aspect-[16/9] rounded-3xl overflow-hidden transition-all duration-1000 ${
        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-mesh" />

      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay" />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative h-full flex flex-col p-6 md:p-10">
        {/* Header */}
        <div className="text-center mb-6">
          <h3 className="text-white text-xl md:text-2xl font-bold mb-2">The Carbide Network</h3>
          <p className="text-blue-200/70 text-sm md:text-base">Decentralized storage marketplace in action</p>
        </div>

        {/* Network visualization */}
        <div className="flex-1 relative min-h-[200px]">
          <svg viewBox="0 0 700 280" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="50%" stopColor="#a78bfa" />
                <stop offset="100%" stopColor="#60a5fa" />
              </linearGradient>
              <linearGradient id="nodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
              <filter id="nodeShadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#3b82f6" floodOpacity="0.5" />
              </filter>
              <filter id="glowLine" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Animated connection lines */}
            <g stroke="url(#lineGrad)" strokeWidth="2" opacity="0.4" filter="url(#glowLine)">
              <line x1="120" y1="90" x2="350" y2="140">
                <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3s" repeatCount="indefinite" />
              </line>
              <line x1="120" y1="190" x2="350" y2="140">
                <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3s" repeatCount="indefinite" begin="0.5s" />
              </line>
              <line x1="350" y1="140" x2="580" y2="90">
                <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3s" repeatCount="indefinite" begin="1s" />
              </line>
              <line x1="350" y1="140" x2="580" y2="190">
                <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3s" repeatCount="indefinite" begin="1.5s" />
              </line>
              <line x1="120" y1="90" x2="120" y2="190">
                <animate attributeName="opacity" values="0.2;0.5;0.2" dur="4s" repeatCount="indefinite" />
              </line>
              <line x1="580" y1="90" x2="580" y2="190">
                <animate attributeName="opacity" values="0.2;0.5;0.2" dur="4s" repeatCount="indefinite" begin="2s" />
              </line>
            </g>

            {/* Data packets moving along lines */}
            {[
              { path: "M120,90 L350,140", dur: "2s", delay: "0s" },
              { path: "M120,190 L350,140", dur: "2.5s", delay: "0.5s" },
              { path: "M350,140 L580,90", dur: "2s", delay: "1s" },
              { path: "M350,140 L580,190", dur: "2.5s", delay: "1.5s" },
              { path: "M580,90 L350,140 L120,190", dur: "4s", delay: "2s" },
            ].map((item, i) => (
              <circle key={i} r="4" fill="#22c55e" filter="url(#nodeShadow)">
                <animateMotion dur={item.dur} repeatCount="indefinite" path={item.path} begin={item.delay} />
              </circle>
            ))}

            {/* Provider nodes - left */}
            <g>
              <circle cx="120" cy="90" r="32" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" filter="url(#nodeShadow)">
                <animate attributeName="r" values="30;34;30" dur="3s" repeatCount="indefinite" />
              </circle>
              <rect x="104" y="80" width="32" height="6" rx="3" fill="#60a5fa" />
              <rect x="104" y="90" width="24" height="6" rx="3" fill="#60a5fa" opacity="0.6" />
              <text x="120" y="135" textAnchor="middle" fill="#94a3b8" fontSize="11">Provider 1</text>
            </g>

            <g>
              <circle cx="120" cy="190" r="32" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" filter="url(#nodeShadow)">
                <animate attributeName="r" values="30;34;30" dur="3s" repeatCount="indefinite" begin="1s" />
              </circle>
              <rect x="104" y="180" width="32" height="6" rx="3" fill="#60a5fa" />
              <rect x="104" y="190" width="24" height="6" rx="3" fill="#60a5fa" opacity="0.6" />
              <text x="120" y="235" textAnchor="middle" fill="#94a3b8" fontSize="11">Provider 2</text>
            </g>

            {/* Central hub with pulse */}
            <g>
              <circle cx="350" cy="140" r="50" fill="#3b82f6" opacity="0.2">
                <animate attributeName="r" values="45;55;45" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.1;0.3;0.1" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="350" cy="140" r="40" fill="url(#nodeGrad)" filter="url(#nodeShadow)" />
              <circle cx="350" cy="140" r="32" fill="#1e40af" />
              <text x="350" y="135" textAnchor="middle" fill="white" fontSize="12" fontWeight="600">Carbide</text>
              <text x="350" y="150" textAnchor="middle" fill="#93c5fd" fontSize="10">Network</text>
            </g>

            {/* Provider nodes - right */}
            <g>
              <circle cx="580" cy="90" r="32" fill="#1e293b" stroke="#a78bfa" strokeWidth="2" filter="url(#nodeShadow)">
                <animate attributeName="r" values="30;34;30" dur="3s" repeatCount="indefinite" begin="0.5s" />
              </circle>
              <rect x="564" y="80" width="32" height="6" rx="3" fill="#a78bfa" />
              <rect x="564" y="90" width="24" height="6" rx="3" fill="#a78bfa" opacity="0.6" />
              <text x="580" y="135" textAnchor="middle" fill="#94a3b8" fontSize="11">Provider 3</text>
            </g>

            <g>
              <circle cx="580" cy="190" r="32" fill="#1e293b" stroke="#a78bfa" strokeWidth="2" filter="url(#nodeShadow)">
                <animate attributeName="r" values="30;34;30" dur="3s" repeatCount="indefinite" begin="1.5s" />
              </circle>
              <rect x="564" y="180" width="32" height="6" rx="3" fill="#a78bfa" />
              <rect x="564" y="190" width="24" height="6" rx="3" fill="#a78bfa" opacity="0.6" />
              <text x="580" y="235" textAnchor="middle" fill="#94a3b8" fontSize="11">Provider 4</text>
            </g>
          </svg>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-3 gap-3 mt-4">
          {[
            { value: "1,247+", label: "Providers", color: "text-white" },
            { value: "2.4 PB", label: "Stored", color: "text-white" },
            { value: "73%", label: "Savings", color: "text-green-400" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-3 md:p-4 text-center border border-white/10"
            >
              <div className={`text-xl md:text-2xl font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-xs md:text-sm text-blue-200/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
