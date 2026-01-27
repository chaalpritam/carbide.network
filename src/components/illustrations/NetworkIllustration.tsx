"use client"

export function NetworkIllustration() {
  return (
    <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-violet-900 p-8 md:p-12">
      {/* Animated background dots */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="relative h-full flex flex-col">
        {/* Header */}
        <div className="text-center mb-8">
          <h3 className="text-white text-xl md:text-2xl font-bold mb-2">The Carbide Network</h3>
          <p className="text-blue-200 text-sm md:text-base">Your files, distributed across the globe</p>
        </div>

        {/* Network visualization */}
        <div className="flex-1 relative">
          <svg viewBox="0 0 600 250" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="netGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#a78bfa" />
              </linearGradient>
            </defs>

            {/* Connection lines */}
            <g stroke="url(#netGrad)" strokeWidth="2" opacity="0.4">
              <line x1="100" y1="80" x2="300" y2="125" />
              <line x1="100" y1="170" x2="300" y2="125" />
              <line x1="300" y1="125" x2="500" y2="80" />
              <line x1="300" y1="125" x2="500" y2="170" />
              <line x1="100" y1="80" x2="100" y2="170" />
              <line x1="500" y1="80" x2="500" y2="170" />
            </g>

            {/* Provider nodes - left */}
            <g>
              <circle cx="100" cy="80" r="28" fill="#1e3a5f" stroke="#60a5fa" strokeWidth="2" />
              <rect x="86" y="72" width="28" height="6" rx="2" fill="#60a5fa" />
              <rect x="86" y="82" width="20" height="6" rx="2" fill="#60a5fa" opacity="0.6" />
              <text x="100" y="120" textAnchor="middle" fill="#94a3b8" fontSize="10">Provider 1</text>
            </g>
            <g>
              <circle cx="100" cy="170" r="28" fill="#1e3a5f" stroke="#60a5fa" strokeWidth="2" />
              <rect x="86" y="162" width="28" height="6" rx="2" fill="#60a5fa" />
              <rect x="86" y="172" width="20" height="6" rx="2" fill="#60a5fa" opacity="0.6" />
              <text x="100" y="210" textAnchor="middle" fill="#94a3b8" fontSize="10">Provider 2</text>
            </g>

            {/* Central hub */}
            <g>
              <circle cx="300" cy="125" r="40" fill="#3b82f6" />
              <circle cx="300" cy="125" r="32" fill="#1e40af" />
              <text x="300" y="120" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">Carbide</text>
              <text x="300" y="134" textAnchor="middle" fill="#93c5fd" fontSize="9">Network</text>
            </g>

            {/* Provider nodes - right */}
            <g>
              <circle cx="500" cy="80" r="28" fill="#1e3a5f" stroke="#a78bfa" strokeWidth="2" />
              <rect x="486" y="72" width="28" height="6" rx="2" fill="#a78bfa" />
              <rect x="486" y="82" width="20" height="6" rx="2" fill="#a78bfa" opacity="0.6" />
              <text x="500" y="120" textAnchor="middle" fill="#94a3b8" fontSize="10">Provider 3</text>
            </g>
            <g>
              <circle cx="500" cy="170" r="28" fill="#1e3a5f" stroke="#a78bfa" strokeWidth="2" />
              <rect x="486" y="162" width="28" height="6" rx="2" fill="#a78bfa" />
              <rect x="486" y="172" width="20" height="6" rx="2" fill="#a78bfa" opacity="0.6" />
              <text x="500" y="210" textAnchor="middle" fill="#94a3b8" fontSize="10">Provider 4</text>
            </g>

            {/* Data packets animation simulation */}
            <circle r="4" fill="#22c55e">
              <animateMotion dur="3s" repeatCount="indefinite" path="M100,80 L300,125" />
            </circle>
            <circle r="4" fill="#22c55e">
              <animateMotion dur="2.5s" repeatCount="indefinite" path="M300,125 L500,170" />
            </circle>
            <circle r="4" fill="#60a5fa">
              <animateMotion dur="4s" repeatCount="indefinite" path="M500,80 L300,125 L100,170" />
            </circle>
          </svg>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
            <div className="text-2xl md:text-3xl font-bold text-white">1,247</div>
            <div className="text-xs md:text-sm text-blue-200">Active Providers</div>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
            <div className="text-2xl md:text-3xl font-bold text-white">2.4 PB</div>
            <div className="text-xs md:text-sm text-blue-200">Data Stored</div>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
            <div className="text-2xl md:text-3xl font-bold text-green-400">73%</div>
            <div className="text-xs md:text-sm text-blue-200">Avg. Savings</div>
          </div>
        </div>
      </div>
    </div>
  )
}
