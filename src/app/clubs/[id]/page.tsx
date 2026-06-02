import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getVenueById, venues } from '@/data/venues'
import VenueHero from '@/components/venue/VenueHero'
import VenueDetailTabs from '@/components/venue/VenueDetailTabs'
import { VenueJsonLd, BreadcrumbJsonLd, FaqJsonLd } from '@/components/seo/JsonLd'

const BASE = 'https://gangnam-clubnlounge.com'

interface Props { params: { id: string } }

export async function generateStaticParams() {
  return venues.filter((v) => v.type === 'club').map((v) => ({ id: v.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const venue = getVenueById(params.id)
  if (!venue) return {}
  return {
    title: `${venue.name} 예약 | ${venue.location} 클럽`,
    description: `${venue.name}(${venue.nameEn}) 테이블 예약 & 게스트리스트. ${venue.location} 위치. 운영시간: ${venue.operatingHours}. ${venue.description.slice(0, 80)}`,
    keywords: [
      venue.name, venue.nameEn, `${venue.name} 예약`, `${venue.name} 게스트리스트`,
      `${venue.location} 클럽`, '강남 클럽 예약', '게스트리스트 무료', '테이블 예약',
    ],
    openGraph: {
      title: `${venue.name} 예약 | 강남 클럽앤라운지`,
      description: venue.description.slice(0, 120),
      url: `${BASE}/clubs/${venue.id}`,
      images: venue.heroImage.startsWith('/') ? [{ url: venue.heroImage }] : [{ url: venue.heroImage }],
    },
    alternates: { canonical: `${BASE}/clubs/${venue.id}` },
  }
}

export default function ClubDetailPage({ params }: Props) {
  const venue = getVenueById(params.id)
  if (!venue || venue.type !== 'club') notFound()

  return (
    <>
      <VenueJsonLd venue={venue} />
      <BreadcrumbJsonLd items={[
        { name: '홈', url: BASE },
        { name: '클럽', url: `${BASE}/#clubs` },
        { name: venue.name, url: `${BASE}/clubs/${venue.id}` },
      ]} />
      <FaqJsonLd faqs={venue.faqs} />
      <VenueHero venue={venue} />
      <VenueDetailTabs venue={venue} />
    </>
  )
}
