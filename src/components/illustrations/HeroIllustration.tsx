"use client"

export function HeroIllustration() {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <svg
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        {/* Background gradient circles */}
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Decorative background circles */}
        <circle cx="400" cy="300" r="250" fill="url(#grad1)" />
        <circle cx="400" cy="300" r="180" fill="url(#grad1)" />

        {/* Central storage icon */}
        <g transform="translate(320, 220)">
          {/* Main cube - front face */}
          <path
            d="M80 40 L160 80 L160 160 L80 120 Z"
            fill="url(#grad2)"
            stroke="#3b82f6"
            strokeWidth="2"
          />
          {/* Main cube - top face */}
          <path
            d="M80 40 L160 80 L80 120 L0 80 Z"
            fill="#60a5fa"
            stroke="#3b82f6"
            strokeWidth="2"
          />
          {/* Main cube - side face */}
          <path
            d="M0 80 L80 120 L80 40 L0 0 Z"
            fill="#93c5fd"
            stroke="#3b82f6"
            strokeWidth="2"
          />

          {/* Inner details */}
          <rect x="90" y="60" width="50" height="8" rx="2" fill="#ffffff" opacity="0.6" />
          <rect x="90" y="75" width="35" height="8" rx="2" fill="#ffffff" opacity="0.4" />
          <rect x="90" y="90" width="45" height="8" rx="2" fill="#ffffff" opacity="0.5" />
        </g>

        {/* Orbiting nodes */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const radius = 200
          const x = 400 + radius * Math.cos((angle * Math.PI) / 180)
          const y = 300 + radius * Math.sin((angle * Math.PI) / 180) * 0.5
          return (
            <g key={i}>
              {/* Connection line */}
              <line
                x1="400"
                y1="300"
                x2={x}
                y2={y}
                stroke="url(#grad3)"
                strokeWidth="1"
                strokeDasharray="4 4"
                opacity="0.4"
              />
              {/* Node */}
              <circle
                cx={x}
                cy={y}
                r="20"
                fill="white"
                stroke="url(#grad3)"
                strokeWidth="2"
                filter="url(#glow)"
              />
              {/* Node inner */}
              <circle cx={x} cy={y} r="8" fill="url(#grad2)" />
            </g>
          )
        })}

        {/* Floating data particles */}
        {[
          { x: 150, y: 150, size: 6 },
          { x: 650, y: 180, size: 8 },
          { x: 100, y: 400, size: 5 },
          { x: 700, y: 420, size: 7 },
          { x: 250, y: 500, size: 6 },
          { x: 550, y: 480, size: 5 },
        ].map((particle, i) => (
          <circle
            key={i}
            cx={particle.x}
            cy={particle.y}
            r={particle.size}
            fill="url(#grad2)"
            opacity="0.6"
            className="animate-pulse"
            style={{ animationDelay: `${i * 0.5}s` }}
          />
        ))}

        {/* Shield icon (security) */}
        <g transform="translate(580, 350)">
          <path
            d="M30 5 L55 15 L55 35 C55 50 42.5 60 30 65 C17.5 60 5 50 5 35 L5 15 Z"
            fill="white"
            stroke="url(#grad3)"
            strokeWidth="2"
          />
          <path
            d="M22 32 L28 38 L40 26"
            stroke="#22c55e"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>

        {/* Coin icon (rewards) */}
        <g transform="translate(160, 350)">
          <circle cx="30" cy="30" r="25" fill="white" stroke="url(#grad3)" strokeWidth="2" />
          <text
            x="30"
            y="38"
            textAnchor="middle"
            fontSize="24"
            fontWeight="bold"
            fill="url(#grad2)"
          >
            $
          </text>
        </g>
      </svg>
    </div>
  )
}
