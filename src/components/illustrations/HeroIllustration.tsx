"use client"

export function HeroIllustration() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-2xl"
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
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#3b82f6" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Background blob */}
        <circle cx="200" cy="200" r="160" fill="#eff6ff" />
        <circle cx="200" cy="200" r="120" fill="#dbeafe" />

        {/* Main device/storage visualization */}
        <g filter="url(#shadow)">
          {/* Main card */}
          <rect x="100" y="120" width="200" height="160" rx="16" fill="white" />

          {/* Header bar */}
          <rect x="100" y="120" width="200" height="40" rx="16" fill="url(#heroGrad1)" />
          <rect x="100" y="144" width="200" height="16" fill="url(#heroGrad1)" />

          {/* Traffic lights */}
          <circle cx="124" cy="140" r="6" fill="#ef4444" />
          <circle cx="144" cy="140" r="6" fill="#fbbf24" />
          <circle cx="164" cy="140" r="6" fill="#22c55e" />

          {/* Content rows */}
          <rect x="120" y="180" width="120" height="12" rx="6" fill="#e5e7eb" />
          <rect x="120" y="200" width="80" height="12" rx="6" fill="#e5e7eb" />
          <rect x="120" y="220" width="100" height="12" rx="6" fill="#e5e7eb" />

          {/* Status indicators */}
          <circle cx="260" cy="186" r="8" fill="#22c55e" />
          <circle cx="260" cy="206" r="8" fill="#22c55e" />
          <circle cx="260" cy="226" r="8" fill="#fbbf24" />

          {/* Progress bar */}
          <rect x="120" y="250" width="160" height="8" rx="4" fill="#e5e7eb" />
          <rect x="120" y="250" width="100" height="8" rx="4" fill="url(#heroGrad2)" />
        </g>

        {/* Floating elements */}
        <g className="animate-float">
          <circle cx="80" cy="100" r="24" fill="url(#heroGrad2)" opacity="0.9" />
          <path d="M72 100h16M80 92v16" stroke="white" strokeWidth="3" strokeLinecap="round" />
        </g>

        <g className="animate-float-delayed">
          <circle cx="320" cy="140" r="20" fill="#22c55e" opacity="0.9" />
          <path d="M312 140l5 5 8-10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        <g className="animate-float">
          <circle cx="340" cy="280" r="18" fill="#f59e0b" opacity="0.9" />
          <text x="340" y="285" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">$</text>
        </g>

        <g className="animate-float-delayed">
          <circle cx="60" cy="260" r="22" fill="url(#heroGrad1)" opacity="0.9" />
          <path d="M52 260h16M60 252v16" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
          <path d="M50 270l20-20" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        </g>

        {/* Connection lines */}
        <path d="M80 124 L100 140" stroke="url(#heroGrad2)" strokeWidth="2" strokeDasharray="4 4" opacity="0.5" />
        <path d="M300 140 L320 140" stroke="#22c55e" strokeWidth="2" strokeDasharray="4 4" opacity="0.5" />
        <path d="M300 260 L322 262" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 4" opacity="0.5" />
        <path d="M82 238 L100 230" stroke="url(#heroGrad1)" strokeWidth="2" strokeDasharray="4 4" opacity="0.5" />
      </svg>
    </div>
  )
}
