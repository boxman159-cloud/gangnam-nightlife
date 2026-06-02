import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import VenueListSection from '@/components/home/VenueListSection'
import WhyUsSection from '@/components/home/WhyUsSection'
import ClubVsLoungeSection from '@/components/home/ClubVsLoungeSection'
import QuickBookingForm from '@/components/home/QuickBookingForm'
import FAQSection from '@/components/home/FAQSection'
import { FaqJsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: '강남 클럽앤라운지 | 강남 클럽 & 라운지 예약 | 게스트리스트 무료',
  description: '강남 클럽(에이스·라이언·플러스82) & 압구정·청담 라운지(벨레어·아르쥬·피플더테라스·컬러라운지·하잎서울) 통합 예약. 게스트리스트 무료 등록, 테이블 예약 전문. 24시간 문의 010-8215-8571',
  alternates: { canonical: 'https://allnight.kr' },
  openGraph: {
    title: '강남 클럽앤라운지 | 게스트리스트 무료 · 테이블 예약',
    description: '강남 최고의 클럽 & 라운지를 한 곳에서. 에이스(레이스), 라이언 슈퍼클럽, 플러스82, 벨레어청담, 아르쥬청담, 피플더테라스, 컬러라운지, 하잎서울 예약 전문.',
    url: 'https://allnight.kr',
  },
}

const homeFaqs = [
  { question: '강남 클럽 게스트리스트 무료 신청 방법은?', answer: '클럽 에이스(레이스), 플러스82 및 압구정·청담 라운지는 게스트리스트 신청 시 무료 입장이 가능합니다. 전화(010-8215-8571) 또는 카카오톡으로 신청하시면 됩니다.' },
  { question: '강남 클럽 당일 예약이 가능한가요?', answer: '네, 미리 예약 시 좋은 자리 선택이 가능하나 당일까지 방문 및 예약이 가능합니다. 전화 또는 카카오톡으로 문의 주시면 바로 안내해 드립니다.' },
  { question: '테이블 예약과 게스트리스트의 차이는?', answer: '테이블 예약은 지정 테이블과 주류 패키지가 포함된 프리미엄 서비스입니다. 게스트리스트는 별도 좌석 없이 무료 또는 할인 입장이 가능한 서비스입니다.' },
  { question: '외국인도 강남 클럽 예약이 가능한가요?', answer: '네, 영어·중국어·일본어 소통 가능한 전담 직원이 배치되어 있습니다. WeChat과 LINE으로도 문의 가능합니다.' },
]

export default function HomePage() {
  return (
    <>
      <FaqJsonLd faqs={homeFaqs} />
      <HeroSection />
      <VenueListSection />
      <WhyUsSection />
      <ClubVsLoungeSection />
      <QuickBookingForm />
      <FAQSection />
    </>
  )
}
