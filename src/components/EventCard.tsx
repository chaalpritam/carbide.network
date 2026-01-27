import Image from "next/image"
import { Calendar, MapPin } from "lucide-react"

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
      className="group flex-shrink-0 w-72 overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-40 overflow-hidden bg-gray-100">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {isPastEvent && (
          <div className="absolute top-3 left-3">
            <span className="px-2 py-1 rounded-full bg-white/90 text-xs font-medium text-gray-600">
              Past
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-500 text-sm mb-3 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center gap-4 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {date}
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            {location}
          </span>
        </div>
      </div>
    </a>
  )
}
