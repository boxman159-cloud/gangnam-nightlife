'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { Venue } from '@/types'
import { useLanguage } from '@/context/LanguageContext'
import { getVenueI18n } from '@/data/venueTranslations'

interface VenueCardProps {
  venue: Venue
}

export default function VenueCard({ venue }: VenueCardProps) {
  const { t, lang } = useLanguage()
  const i18n = getVenueI18n(venue.id, lang)
  const tablePrice = i18n?.tablePrice ?? venue.tablePrice
  const guestFee = i18n?.guestFee ?? venue.guestFee
  const href = venue.type === 'club' ? `/clubs/${venue.id}` : `/lounges/${venue.id}`

  return (
    <div className="group glass-card rounded-2xl overflow-hidden hover:border-neon-pink/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-neon-pink/10">
      <div className="relative h-52 overflow-hidden">
        <Image src={venue.thumbnail} alt={`${venue.name} - ${venue.location} ${venue.type === 'club' ? '클럽' : '라운지'} 예약`} fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent" />
        <div className="absolute top-3 left-3">
          <span className="bg-dark-800/80 backdrop-blur-sm border border-white/10 text-xs text-gray-300 px-2.5 py-1 rounded-full">
            {venue.type === 'club' ? `🎵 ${t('venue.tabClub').replace('🎵 ', '')}` : `🥂 ${t('venue.tabLounge').replace('🥂 ', '')}`}
          </span>
        </div>
        {venue.region && (
          <div className="absolute top-3 right-3">
            <span className="bg-neon-purple/20 border border-neon-purple/40 text-neon-cyan text-xs px-2.5 py-1 rounded-full">
              {venue.region}
            </span>
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="mb-2">
          <h3 className="text-white font-bold text-lg leading-tight">{venue.name}</h3>
          <p className="text-gray-500 text-xs mt-0.5">{venue.nameEn}</p>
        </div>

        <div className="flex items-center gap-1.5 mb-4">
          <svg className="w-3.5 h-3.5 text-neon-pink flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span className="text-gray-400 text-sm">{venue.location}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-xs text-gray-500">
            <span className="text-neon-pink font-medium">{t('venue.table')} {tablePrice}</span>
            <span className="mx-1">·</span>
            <span>{t('venue.guest')} {(guestFee.includes('무료') || guestFee.toLowerCase().includes('free') || guestFee.includes('免费') || guestFee.includes('無料')) ? t('venue.free') : t('venue.paid')}</span>
          </div>
          <Link href={href}
            className="text-sm font-semibold text-neon-pink hover:text-white transition-colors flex items-center gap-1 group/link">
            {t('venue.detail')}
            <svg className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
