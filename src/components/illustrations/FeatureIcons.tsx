"use client"

interface IconProps {
  className?: string
}

export function StorageIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="8" y="12" width="48" height="40" rx="8" fill="#dbeafe" />
      <rect x="8" y="12" width="48" height="14" rx="8" fill="#3b82f6" />
      <circle cx="18" cy="19" r="3" fill="#fff" />
      <circle cx="28" cy="19" r="3" fill="#fff" opacity="0.6" />
      <rect x="14" y="32" width="28" height="4" rx="2" fill="#93c5fd" />
      <rect x="14" y="40" width="20" height="4" rx="2" fill="#93c5fd" />
    </svg>
  )
}

export function ReplicationIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="20" y="28" width="32" height="24" rx="4" fill="#c4b5fd" />
      <rect x="14" y="20" width="32" height="24" rx="4" fill="#a78bfa" />
      <rect x="8" y="12" width="32" height="24" rx="4" fill="#8b5cf6" />
      <text x="24" y="28" fill="#fff" fontSize="12" fontWeight="bold">1-10</text>
    </svg>
  )
}

export function SavingsIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="32" cy="32" r="24" fill="#dcfce7" />
      <circle cx="32" cy="32" r="18" fill="#22c55e" />
      <path d="M32 20v24M26 38l6 6 6-6" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function SecurityIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M32 6L52 14v16c0 14-20 22-20 22S12 44 12 30V14L32 6z" fill="#dbeafe" />
      <path d="M32 10L48 16v12c0 12-16 18-16 18S16 40 16 28V16L32 10z" fill="#3b82f6" />
      <path d="M24 32l6 6 10-12" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function EarningsIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="32" cy="36" r="20" fill="#fef3c7" />
      <circle cx="32" cy="32" r="20" fill="#fbbf24" />
      <circle cx="32" cy="32" r="14" fill="#f59e0b" />
      <text x="32" y="38" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="bold">$</text>
      <path d="M48 12l6-4M54 8v8M50 12h8" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function GlobalIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="32" cy="32" r="24" fill="#dbeafe" />
      <circle cx="32" cy="32" r="20" fill="#60a5fa" />
      <ellipse cx="32" cy="32" rx="8" ry="20" stroke="#fff" strokeWidth="2" fill="none" />
      <ellipse cx="32" cy="32" rx="20" ry="8" stroke="#fff" strokeWidth="2" fill="none" />
      <circle cx="20" cy="24" r="4" fill="#fff" />
      <circle cx="44" cy="38" r="4" fill="#fff" />
      <circle cx="32" cy="48" r="3" fill="#fff" />
    </svg>
  )
}
