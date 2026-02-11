import { ReactNode } from "react"

export function PageContainer({ children }: { children: ReactNode }) {
    return (
        <div className="bg-white min-h-screen">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-32 md:py-40">
                {children}
            </div>
        </div>
    )
}

export function PageHeader({ title, subtitle }: { title: string | ReactNode, subtitle?: string }) {
    return (
        <div className="mb-16 md:mb-24 max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-medium tracking-tighter mb-6 leading-[0.95]">
                {title}
            </h1>
            {subtitle && (
                <p className="text-lg md:text-xl text-black/40 leading-relaxed">
                    {subtitle}
                </p>
            )}
        </div>
    )
}
