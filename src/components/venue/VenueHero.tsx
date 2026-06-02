import Image from 'next/image'
import Link from 'next/link'
import type { Venue } from '@/types'

interface VenueHeroProps {
  venue: Venue
}

export default function VenueHero({ venue }: VenueHeroProps) {
  return (
    <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
      <Image
        src={venue.heroImage}
        alt={`${venue.name}(${venue.nameEn}) - ${venue.location} ${venue.type === 'club' ? '클럽' : '라운지'} 예약`}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900/40 via-dark-900/30 to-dark-900" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark-900/50 to-transparent" />

      {/* Back button */}
      <div className="absolute top-24 left-4 sm:left-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm bg-dark-800/60 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          목록으로
        </Link>
      </div>

      {/* Info overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 max-w-5xl mx-auto">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-neon-pink border border-neon-pink/40 bg-neon-pink/10 px-2.5 py-1 rounded-full">
            {venue.type === 'club' ? '클럽' : '라운지'}
          </span>
          {venue.region && (
            <span className="text-xs font-semibold uppercase tracking-widest text-neon-cyan border border-neon-cyan/40 bg-neon-cyan/10 px-2.5 py-1 rounded-full">
              {venue.region}
            </span>
          )}
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-2 leading-none">
          {venue.name}
        </h1>
        <p className="text-gray-400 text-sm font-medium tracking-widest uppercase mb-4">{venue.nameEn}</p>
        <div className="flex items-center gap-1.5">
          <svg className="w-4 h-4 text-neon-pink" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span className="text-gray-300 text-sm">{venue.location}</span>
          <span className="text-gray-600 mx-2">·</span>
          <span className="text-gray-400 text-sm">{venue.operatingHours}</span>
        </div>
      </div>
    </div>
  )
}
