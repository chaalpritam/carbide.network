"use client"

interface IconProps {
  className?: string
}

export function StorageIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="storageGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <rect x="10" y="15" width="60" height="50" rx="6" fill="url(#storageGrad)" />
      <rect x="18" y="25" width="44" height="6" rx="2" fill="white" opacity="0.9" />
      <rect x="18" y="35" width="30" height="6" rx="2" fill="white" opacity="0.7" />
      <rect x="18" y="45" width="38" height="6" rx="2" fill="white" opacity="0.8" />
      <circle cx="56" cy="28" r="3" fill="#4ade80" />
      <circle cx="56" cy="38" r="3" fill="#4ade80" />
      <circle cx="56" cy="48" r="3" fill="#facc15" />
    </svg>
  )
}

export function ReplicationIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="repGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      {/* Stacked layers representing copies */}
      <rect x="20" y="45" width="40" height="25" rx="4" fill="#93c5fd" />
      <rect x="15" y="35" width="50" height="25" rx="4" fill="#60a5fa" />
      <rect x="10" y="25" width="60" height="25" rx="4" fill="url(#repGrad)" />
      {/* Copy indicator */}
      <text x="40" y="42" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">1-10x</text>
      {/* Arrow */}
      <path d="M40 55 L40 70 M35 65 L40 70 L45 65" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function SavingsIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="savingsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="#16a34a" />
        </linearGradient>
      </defs>
      {/* Downward arrow representing cost reduction */}
      <circle cx="40" cy="40" r="30" fill="url(#savingsGrad)" />
      <path d="M40 25 L40 50 M30 42 L40 52 L50 42" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <text x="40" y="70" textAnchor="middle" fill="#22c55e" fontSize="12" fontWeight="bold">-80%</text>
    </svg>
  )
}

export function SecurityIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="securityGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      {/* Shield */}
      <path
        d="M40 10 L65 20 L65 40 C65 55 52.5 67 40 72 C27.5 67 15 55 15 40 L15 20 Z"
        fill="url(#securityGrad)"
      />
      {/* Lock */}
      <rect x="30" y="35" width="20" height="18" rx="3" fill="white" />
      <path d="M33 35 L33 30 C33 25 37 22 40 22 C43 22 47 25 47 30 L47 35" stroke="white" strokeWidth="3" fill="none" />
      <circle cx="40" cy="44" r="3" fill="#3b82f6" />
      <rect x="39" y="44" width="2" height="5" fill="#3b82f6" />
    </svg>
  )
}

export function EarningsIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="earnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
      </defs>
      {/* Coins stack */}
      <ellipse cx="40" cy="55" rx="25" ry="10" fill="#fbbf24" />
      <ellipse cx="40" cy="50" rx="25" ry="10" fill="#f59e0b" />
      <ellipse cx="40" cy="45" rx="25" ry="10" fill="url(#earnGrad)" />
      {/* Dollar sign */}
      <text x="40" y="50" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">$</text>
      {/* Rising arrow */}
      <path d="M55 20 L65 15 L60 25" stroke="#22c55e" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M50 30 L65 15" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function GlobalIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="globeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      {/* Globe */}
      <circle cx="40" cy="40" r="28" fill="url(#globeGrad)" />
      {/* Latitude lines */}
      <ellipse cx="40" cy="40" rx="28" ry="10" stroke="white" strokeWidth="1.5" fill="none" opacity="0.5" />
      <ellipse cx="40" cy="40" rx="28" ry="20" stroke="white" strokeWidth="1.5" fill="none" opacity="0.5" />
      {/* Longitude lines */}
      <ellipse cx="40" cy="40" rx="10" ry="28" stroke="white" strokeWidth="1.5" fill="none" opacity="0.5" />
      <line x1="12" y1="40" x2="68" y2="40" stroke="white" strokeWidth="1.5" opacity="0.5" />
      {/* Connection points */}
      <circle cx="25" cy="35" r="4" fill="white" />
      <circle cx="55" cy="45" r="4" fill="white" />
      <circle cx="40" cy="20" r="4" fill="white" />
      {/* Connection lines */}
      <line x1="25" y1="35" x2="55" y2="45" stroke="white" strokeWidth="1" strokeDasharray="3 3" opacity="0.8" />
      <line x1="40" y1="20" x2="55" y2="45" stroke="white" strokeWidth="1" strokeDasharray="3 3" opacity="0.8" />
    </svg>
  )
}
