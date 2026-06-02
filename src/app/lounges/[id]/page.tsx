import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getVenueById, venues } from '@/data/venues'
import VenueHero from '@/components/venue/VenueHero'
import VenueDetailTabs from '@/components/venue/VenueDetailTabs'
import { VenueJsonLd, BreadcrumbJsonLd, FaqJsonLd } from '@/components/seo/JsonLd'

const BASE = 'https://allnight.kr'

interface Props { params: { id: string } }

const loungeMeta: Record<string, { title: string; description: string; keywords: string[] }> = {
  bellair: {
    title: '벨레어청담 예약안내 | 하이엔드 청담 럭셔리 라운지',
    description: "서울 강남구 청담동 위치, 벨레어청담(BELLAIR) 테이블 예약 및 인포메이션. 명품 샴페인 '룩 벨레어'의 아이덴티티를 담은 차분하고 고급스러운 공간에서 최고급 샴페인과 프라이빗한 사교 파티를 즐겨보세요.",
    keywords: ['벨레어청담', 'BELLAIR CHEONGDAM', '벨레어청담 예약', '벨레어청담 게스트', '청담 라운지 바', '청담동 라운지 예약', '압구정 라운지 예약', '청담 벨레어 테이블'],
  },
  arzu: {
    title: '아르쥬청담 예약 및 좌석 안내 | 청담동 인스타 핫플레이스 라운지',
    description: '청담동 명품거리 인근 아르쥬청담(ARJU) 테이블 예약 및 안내. 독보적인 인생샷 명소로 커플 및 여성 고객들에게 뜨거운 지지를 받는 럭셔리 소셜 공간. 당일 잔여 테이블 예약 및 프라이빗 예약이 가능합니다.',
    keywords: ['아르쥬청담', 'ARZU CHEONGDAM', '아르쥬청담 예약', '아르쥬청담 게스트', '청담 라운지 추천', '청담동 라운지 예약', '압구정 라운지 예약', '아르쥬 테이블 가격', '아르쥬 예약'],
  },
  peopletheterrace: {
    title: '피플더테라스 예약 및 다이닝 안내 | 청담 야외 테라스 라운지 바',
    description: '강남구 청담동 피플더테라스(PEOPLE THE TERRACE) 테이블 예약. 유럽 휴양지 감성의 이국적인 야외 테라스와 고급스러운 아치형 인테리어가 어우러진 핫플레이스에서 파인 다이닝과 파티를 동시에 즐기세요.',
    keywords: ['피플더테라스', 'PEOPLE THE TERRACE', '피플더테라스 예약', '청담 테라스 바', '청담 라운지 예약', '서울 강남구 청담동 라운지', '압구정 라운지 예약', '피플더테라스 생일파티'],
  },
  colorlounge: {
    title: '컬러라운지 예약 및 게스트 신청 | 압구정로데오 뮤직 라운지',
    description: '압구정 로데오 컬러라운지(COLOR LOUNGE) 테이블 예약 및 무료 게스트. 현재 압구정에서 가장 에너지 넘치고 다이나믹한 파티 바이브를 자랑하는 곳. 실시간 테이블 문의 및 게스트 입장 안내.',
    keywords: ['컬러라운지', 'COLOR LOUNGE', '컬러라운지 예약', '컬러라운지 게스트', '압구정 로데오 라운지', '압구정 컬러라운지 테이블', '청담 라운지 예약', '게스트 무료'],
  },
  hypeseoul: {
    title: '하잎서울(HYPE SEOUL) 예약 안내 | 압구정 로데오 감성 라운지 바',
    description: '압구정 하잎서울(HYPE Seoul) 테이블 예약 및 게스트 입장 안내. 유명 스튜디오 설계의 감각적이고 트렌디한 인테리어로 화제를 모은 곳. 이름 그대로 가장 힙(Hype)한 음악과 감성이 흐르는 소셜 네트워크 라운지입니다.',
    keywords: ['하잎서울', 'HYPE SEOUL', '하잎서울 예약', '하잎서울 게스트', '압구정 로데오 라운지 바', '압구정 핫플 예약', '청담 라운지 예약', '게스트 무료'],
  },
  dmintro: {
    title: 'DM X 인트로 예약 및 게스트 신청 | 압구정 로데오 메인 라운지',
    description: '압구정 로데오 DM X 인트로(INTRO) 테이블 예약 및 무료 게스트 안내. 화려한 대형 LED 전광판과 파티 조명, 세련된 DJ 부스가 갖춰진 모던한 공간. 트렌디한 음악과 깔끔한 소파 부스에서 완벽한 주말을 즐기세요.',
    keywords: ['DM X 인트로', 'DM X INTRO', '압구정 DM 예약', 'DM 인트로 게스트', '압구정 로데오 라운지', '압구정 DM 테이블 가격', '압구정로데오 라운지 예약', '게스트 무료'],
  },
}

export async function generateStaticParams() {
  return venues.filter((v) => v.type === 'lounge').map((v) => ({ id: v.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const venue = getVenueById(params.id)
  if (!venue) return {}
  const meta = loungeMeta[params.id]
  const title = meta?.title ?? `${venue.name} 예약 | ${venue.region} 라운지`
  const description = meta?.description ?? `${venue.name}(${venue.nameEn}) 테이블 예약 & 게스트리스트. ${venue.location} 위치.`
  const keywords = meta?.keywords ?? [venue.name, venue.nameEn, `${venue.name} 예약`]

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
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
