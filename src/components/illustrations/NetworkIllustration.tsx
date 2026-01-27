"use client"

export function NetworkIllustration() {
  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <svg
        viewBox="0 0 1200 675"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#a78bfa" stopOpacity="1" />
            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="nodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          <filter id="nodeShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#3b82f6" floodOpacity="0.5" />
          </filter>
        </defs>

        {/* Grid pattern */}
        <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Network connections */}
        {[
          { x1: 200, y1: 200, x2: 400, y2: 150 },
          { x1: 200, y1: 200, x2: 350, y2: 350 },
          { x1: 400, y1: 150, x2: 600, y2: 337 },
          { x1: 350, y1: 350, x2: 600, y2: 337 },
          { x1: 600, y1: 337, x2: 800, y2: 200 },
          { x1: 600, y1: 337, x2: 850, y2: 450 },
          { x1: 800, y1: 200, x2: 1000, y2: 280 },
          { x1: 850, y1: 450, x2: 1000, y2: 280 },
          { x1: 400, y1: 150, x2: 800, y2: 200 },
          { x1: 350, y1: 350, x2: 850, y2: 450 },
        ].map((line, i) => (
          <line
            key={i}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="url(#lineGrad)"
            strokeWidth="2"
            opacity="0.6"
          >
            <animate
              attributeName="opacity"
              values="0.3;0.8;0.3"
              dur={`${2 + i * 0.3}s`}
              repeatCount="indefinite"
            />
          </line>
        ))}

        {/* Data flow particles */}
        {[
          { x1: 200, y1: 200, x2: 600, y2: 337, dur: "3s" },
          { x1: 600, y1: 337, x2: 1000, y2: 280, dur: "2.5s" },
          { x1: 350, y1: 350, x2: 850, y2: 450, dur: "4s" },
        ].map((path, i) => (
          <circle key={i} r="4" fill="#60a5fa">
            <animateMotion
              dur={path.dur}
              repeatCount="indefinite"
              path={`M${path.x1},${path.y1} L${path.x2},${path.y2}`}
            />
          </circle>
        ))}

        {/* Provider nodes */}
        {[
          { x: 200, y: 200, label: "Provider", type: "provider" },
          { x: 400, y: 150, label: "Provider", type: "provider" },
          { x: 350, y: 350, label: "Provider", type: "provider" },
          { x: 800, y: 200, label: "Provider", type: "provider" },
          { x: 850, y: 450, label: "Provider", type: "provider" },
          { x: 1000, y: 280, label: "Provider", type: "provider" },
        ].map((node, i) => (
          <g key={i} transform={`translate(${node.x - 30}, ${node.y - 30})`}>
            <circle cx="30" cy="30" r="25" fill="url(#nodeGrad)" filter="url(#nodeShadow)" />
            <rect x="15" y="22" width="30" height="4" rx="1" fill="white" opacity="0.8" />
            <rect x="15" y="30" width="20" height="4" rx="1" fill="white" opacity="0.6" />
            <rect x="15" y="38" width="25" height="4" rx="1" fill="white" opacity="0.7" />
          </g>
        ))}

        {/* Central hub */}
        <g transform="translate(570, 307)">
          <circle cx="30" cy="30" r="40" fill="#1e1b4b" stroke="url(#lineGrad)" strokeWidth="3" />
          <circle cx="30" cy="30" r="30" fill="url(#nodeGrad)" filter="url(#nodeShadow)">
            <animate attributeName="r" values="28;32;28" dur="2s" repeatCount="indefinite" />
          </circle>
          {/* Carbide logo simplified */}
          <path
            d="M20 20 L40 20 L40 40 L20 40 Z"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
          <path d="M25 25 L35 30 L25 35 Z" fill="white" />
        </g>

        {/* Labels */}
        <text x="600" y="400" textAnchor="middle" fill="white" fontSize="14" fontWeight="600" opacity="0.9">
          Carbide Network
        </text>
        <text x="600" y="420" textAnchor="middle" fill="white" fontSize="12" opacity="0.6">
          Distributed Storage Marketplace
        </text>

        {/* Stats overlay */}
        <g transform="translate(50, 520)">
          <rect width="200" height="70" rx="10" fill="rgba(255,255,255,0.1)" />
          <text x="20" y="30" fill="white" fontSize="12" opacity="0.7">Active Providers</text>
          <text x="20" y="55" fill="white" fontSize="24" fontWeight="bold">1,247+</text>
        </g>

        <g transform="translate(280, 520)">
          <rect width="200" height="70" rx="10" fill="rgba(255,255,255,0.1)" />
          <text x="20" y="30" fill="white" fontSize="12" opacity="0.7">Data Stored</text>
          <text x="20" y="55" fill="white" fontSize="24" fontWeight="bold">2.4 PB</text>
        </g>

        <g transform="translate(510, 520)">
          <rect width="200" height="70" rx="10" fill="rgba(255,255,255,0.1)" />
          <text x="20" y="30" fill="white" fontSize="12" opacity="0.7">Avg. Savings</text>
          <text x="20" y="55" fill="#4ade80" fontSize="24" fontWeight="bold">73%</text>
        </g>
      </svg>
    </div>
  )
}
