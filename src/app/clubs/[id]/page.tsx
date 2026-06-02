import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getVenueById, venues } from '@/data/venues'
import VenueHero from '@/components/venue/VenueHero'
import VenueDetailTabs from '@/components/venue/VenueDetailTabs'
import { VenueJsonLd, BreadcrumbJsonLd, FaqJsonLd } from '@/components/seo/JsonLd'

const BASE = 'https://allnight.kr'

interface Props { params: { id: string } }

const clubMeta: Record<string, { title: string; description: string; keywords: string[] }> = {
  clubace: {
    title: '클럽 레이스(RACE) 예약 및 게스트 신청 | 강남 대형 클럽',
    description: '서초구 잠원동 클럽 레이스(RACE, 구 에이스) 실시간 테이블 예약 및 무료 게스트 입장 안내. 화~일 연중무휴 시스템과 압도적인 사운드, 파워풀한 댄스 플로어를 자랑하는 강남 대표 클럽의 테이블 현황을 지금 확인하세요.',
    keywords: ['클럽 레이스', 'CLUB RACE', '클럽 레이스 예약', '클럽 레이스 게스트 입장', '잠원동 레이스', '강남 클럽 예약', '클럽 게스트 무료', '테이블 예약', '강남 레이스 가격', '클럽 레이스 테이블 예약'],
  },
  lionsuperclub: {
    title: '클럽 라이언(LION) 예약 | 청담동 초대형 클럽',
    description: '강남구 청담동 도산대로 535 위치, 클럽 라이언(CLUB LION) 테이블 예약. 압도적인 스케일과 최첨단 인프라를 갖춘 청담 하이엔드 클럽의 당일 잔여 좌석 및 공식 테이블 견적을 실시간으로 안내합니다.',
    keywords: ['클럽 라이언', 'CLUB LION', '클럽 라이언 예약', '청담동 클럽 라이언', '강남 클럽 예약', '테이블 예약', '라이언 클럽 테이블', '라이언 클럽 가격'],
  },
  clubplus82: {
    title: '클럽 플러스82(플팔) 예약 및 게스트 신청 | 강남 대표 애프터 클럽',
    description: '청담동 도산대로 539 위치, 클럽 플러스82(CLUB PLUS82) 테이블 예약 및 게스트 안내. 금·토 새벽 3시부터 아침 10시까지 달리는 대한민국 No.1 일렉트로닉 애프터 클럽의 당일 테이블 정보와 무료 입장 혜택을 확인하세요.',
    keywords: ['클럽 플러스82', '클럽 플팔', 'CLUB PLUS82', '플러스82 예약', '플러스82 게스트', '청담동 플러스82', '강남 애프터 클럽', '게스트 무료', '테이블 예약'],
  },
}

export async function generateStaticParams() {
  return venues.filter((v) => v.type === 'club').map((v) => ({ id: v.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const venue = getVenueById(params.id)
  if (!venue) return {}
  const meta = clubMeta[params.id]
  const title = meta?.title ?? `${venue.name} 예약 | 강남 클럽`
  const description = meta?.description ?? `${venue.name}(${venue.nameEn}) 테이블 예약 & 게스트리스트. ${venue.location} 위치.`
  const keywords = meta?.keywords ?? [venue.name, venue.nameEn, `${venue.name} 예약`]

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: `${BASE}/clubs/${venue.id}`,
      images: [{ url: venue.heroImage }],
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
