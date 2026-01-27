import Image from "next/image"
import { Calendar, MapPin, ExternalLink } from "lucide-react"

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
      className="group relative flex-shrink-0 w-[320px] overflow-hidden rounded-2xl bg-white border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Badge */}
        {isPastEvent && (
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-700">
              Past Event
            </span>
          </div>
        )}

        {/* External link indicator */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm">
            <ExternalLink className="h-4 w-4 text-gray-700" />
          </span>
        </div>

        {/* Location overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center gap-1.5 text-white/90 text-sm">
            <MapPin className="h-4 w-4" />
            <span className="font-medium">{location}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-1.5 text-muted-foreground text-xs mb-3">
          <Calendar className="h-3.5 w-3.5" />
          <span>{date}</span>
        </div>

        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-1">
          {title}
        </h3>

        <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
          {description}
        </p>
      </div>
    </a>
  )
}
