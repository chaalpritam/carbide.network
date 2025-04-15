import Image from "next/image"

interface EventCardProps {
    title: string
    description: string
    date: string
    location: string
    imageUrl: string
    tweetUrl: string
    isPastEvent?: boolean
}

export function EventCard({
    title,
    description,
    date,
    location,
    imageUrl,
    tweetUrl,
    isPastEvent = true,
}: EventCardProps) {
    return (
        <a
            href={tweetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-xl border shadow-sm hover:shadow-md transition-all duration-300 min-w-[300px] h-[400px]"
        >
            <div className="h-[250px] relative">
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {isPastEvent && (
                    <div className="absolute bottom-2 left-2 right-2">
                        <span className="inline-flex items-center rounded-full bg-white/90 px-2 py-0.5 text-xs font-medium">
                            Past Event
                        </span>
                    </div>
                )}
            </div>
            <div className="p-6">
                <h3 className="text-lg font-bold mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {description}
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-3 w-3"
                        >
                            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                            <line x1="16" x2="16" y1="2" y2="6" />
                            <line x1="8" x2="8" y1="2" y2="6" />
                            <line x1="3" x2="21" y1="10" y2="10" />
                        </svg>
                        <span>{date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-3 w-3"
                        >
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                        <span>{location}</span>
                    </div>
                </div>
            </div>
        </a>
    )
} 