import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getVenueById, venues } from '@/data/venues'
import VenueHero from '@/components/venue/VenueHero'
import VenueDetailTabs from '@/components/venue/VenueDetailTabs'
import { VenueJsonLd, BreadcrumbJsonLd, FaqJsonLd } from '@/components/seo/JsonLd'

const BASE = 'https://gangnam-clubnlounge.com'

interface Props { params: { id: string } }

export async function generateStaticParams() {
  return venues.filter((v) => v.type === 'lounge').map((v) => ({ id: v.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const venue = getVenueById(params.id)
  if (!venue) return {}
  return {
    title: `${venue.name} 예약 | ${venue.region} 라운지`,
    description: `${venue.name}(${venue.nameEn}) 테이블 예약 & 게스트리스트. ${venue.location} 위치. ${venue.region} 라운지. ${venue.description.slice(0, 80)}`,
    keywords: [
      venue.name, venue.nameEn, `${venue.name} 예약`, `${venue.name} 게스트리스트`,
      `${venue.region} 라운지`, `${venue.location} 라운지`, '청담 라운지 예약',
      '압구정 라운지 예약', '게스트리스트 무료',
    ],
    openGraph: {
      title: `${venue.name} 예약 | 강남 클럽앤라운지`,
      description: venue.description.slice(0, 120),
      url: `${BASE}/lounges/${venue.id}`,
      images: [{ url: venue.heroImage }],
    },
    alternates: { canonical: `${BASE}/lounges/${venue.id}` },
  }
}

export default function LoungeDetailPage({ params }: Props) {
  const venue = getVenueById(params.id)
  if (!venue || venue.type !== 'lounge') notFound()

  return (
    <>
      <VenueJsonLd venue={venue} />
      <BreadcrumbJsonLd items={[
        { name: '홈', url: BASE },
        { name: '라운지', url: `${BASE}/#lounges` },
        { name: venue.region ?? '라운지', url: `${BASE}/#lounges` },
        { name: venue.name, url: `${BASE}/lounges/${venue.id}` },
      ]} />
      <FaqJsonLd faqs={venue.faqs} />
      <VenueHero venue={venue} />
      <VenueDetailTabs venue={venue} />
    </>
  )
}
