import Link from "next/link"

export default function NotFound() {
  return (
    <div className="bg-white text-black min-h-screen flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-6">
        <h1 className="text-[120px] font-medium tracking-tighter leading-none mb-4">
          404
        </h1>
        <p className="text-lg text-black/40 mb-8">
          This page doesn&apos;t exist. It may have been moved or removed.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 bg-black text-white rounded-full px-8 py-4 text-sm font-medium hover:bg-black/90 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
