"use client"

import { useEffect, useState } from "react"

export function HeroIllustration() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Glow effect behind */}
      <div
        className="absolute inset-0 blur-3xl opacity-30"
        style={{
          background: "radial-gradient(circle at 50% 50%, #3b82f6, transparent 70%)",
        }}
      />

      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-auto relative z-10 transition-all duration-1000 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <defs>
          <linearGradient id="heroGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          <linearGradient id="heroGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>
          <linearGradient id="heroGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6">
              <animate attributeName="stop-color" values="#3b82f6;#8b5cf6;#3b82f6" dur="4s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#8b5cf6">
              <animate attributeName="stop-color" values="#8b5cf6;#ec4899;#8b5cf6" dur="4s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Animated circle ring */}
        <circle
          cx="200"
          cy="200"
          r="160"
          fill="none"
          stroke="url(#heroGrad2)"
          strokeWidth="1"
          strokeDasharray="10 10"
          opacity="0.3"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 200 200"
            to="360 200 200"
            dur="60s"
            repeatCount="indefinite"
          />
        </circle>

        <circle
          cx="200"
          cy="200"
          r="130"
          fill="none"
          stroke="url(#heroGrad1)"
          strokeWidth="1"
          strokeDasharray="5 15"
          opacity="0.2"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="360 200 200"
            to="0 200 200"
            dur="40s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Main app card */}
        <g filter="url(#glow)">
          <rect x="110" y="130" width="180" height="140" rx="12" fill="white" />

          {/* Header gradient bar */}
          <rect x="110" y="130" width="180" height="36" rx="12" fill="url(#heroGrad3)" />
          <rect x="110" y="154" width="180" height="12" fill="url(#heroGrad3)" />

          {/* Traffic lights */}
          <circle cx="130" cy="148" r="5" fill="#ff5f57" />
          <circle cx="146" cy="148" r="5" fill="#febc2e" />
          <circle cx="162" cy="148" r="5" fill="#28c840" />

          {/* Content with animated loading */}
          <rect x="125" y="180" width="100" height="10" rx="5" fill="#e5e7eb">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
          </rect>
          <rect x="125" y="196" width="70" height="10" rx="5" fill="#e5e7eb">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" begin="0.3s" />
          </rect>
          <rect x="125" y="212" width="85" height="10" rx="5" fill="#e5e7eb">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" begin="0.6s" />
          </rect>

          {/* Status indicators */}
          <circle cx="255" cy="185" r="6" fill="#28c840">
            <animate attributeName="r" values="5;7;5" dur="1.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="255" cy="201" r="6" fill="#28c840">
            <animate attributeName="r" values="5;7;5" dur="1.5s" repeatCount="indefinite" begin="0.2s" />
          </circle>
          <circle cx="255" cy="217" r="6" fill="#febc2e">
            <animate attributeName="r" values="5;7;5" dur="1.5s" repeatCount="indefinite" begin="0.4s" />
          </circle>

          {/* Progress bar */}
          <rect x="125" y="238" width="140" height="8" rx="4" fill="#e5e7eb" />
          <rect x="125" y="238" rx="4" height="8" fill="url(#heroGrad2)">
            <animate attributeName="width" values="0;100;140;100" dur="4s" repeatCount="indefinite" />
          </rect>
        </g>

        {/* Floating nodes */}
        <g>
          <circle cx="80" cy="100" r="20" fill="url(#heroGrad2)" opacity="0.9" filter="url(#glow)">
            <animate attributeName="cy" values="100;90;100" dur="3s" repeatCount="indefinite" />
          </circle>
          <path d="M72 100h16M80 92v16" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        </g>

        <g>
          <circle cx="320" cy="130" r="18" fill="#22c55e" opacity="0.9" filter="url(#glow)">
            <animate attributeName="cy" values="130;120;130" dur="4s" repeatCount="indefinite" />
          </circle>
          <path d="M312 130l5 5 8-10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        <g>
          <circle cx="330" cy="270" r="16" fill="#f59e0b" opacity="0.9" filter="url(#glow)">
            <animate attributeName="cx" values="330;340;330" dur="5s" repeatCount="indefinite" />
          </circle>
          <text x="330" y="275" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">$</text>
        </g>

        <g>
          <circle cx="70" cy="280" r="22" fill="url(#heroGrad1)" opacity="0.9" filter="url(#glow)">
            <animate attributeName="cy" values="280;290;280" dur="3.5s" repeatCount="indefinite" />
          </circle>
          {/* Lock icon */}
          <rect x="62" y="278" width="16" height="12" rx="2" fill="white" />
          <path d="M65 278v-4a5 5 0 0110 0v4" stroke="white" strokeWidth="2" fill="none" />
        </g>

        {/* Connection lines with animation */}
        <g stroke="url(#heroGrad2)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4">
          <line x1="100" y1="100" x2="110" y2="150">
            <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2s" repeatCount="indefinite" />
          </line>
          <line x1="302" y1="130" x2="290" y2="150">
            <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2s" repeatCount="indefinite" begin="0.5s" />
          </line>
          <line x1="314" y1="270" x2="290" y2="260">
            <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2s" repeatCount="indefinite" begin="1s" />
          </line>
          <line x1="92" y1="280" x2="110" y2="260">
            <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2s" repeatCount="indefinite" begin="1.5s" />
          </line>
        </g>

        {/* Data transfer particles */}
        {[0, 1, 2, 3].map((i) => (
          <circle key={i} r="3" fill="#3b82f6" opacity="0.8">
            <animateMotion
              dur={`${2 + i * 0.5}s`}
              repeatCount="indefinite"
              path="M100,100 Q200,80 290,150"
              begin={`${i * 0.5}s`}
            />
          </circle>
        ))}
      </svg>
    </div>
  )
}
