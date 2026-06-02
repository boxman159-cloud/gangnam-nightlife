import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '강남 클럽·라운지 대관안내 | 기업행사·촬영·브랜드 팝업',
  description: '강남·청담·압구정 클럽 및 라운지 대관 전문. 라이언, 레이스, 플러스82, 벨레어 등 9개 하이엔드 베뉴 원스톱 매칭. 기업 파티, 브랜드 팝업, 촬영 전문 공간 큐레이션 및 대관 문의.',
  keywords: ['강남 클럽 대관', '강남 라운지 대관', '청담동 대관', '압구정로데오 대관', '기업행사 장소 대관', '클럽 통대관', '라운지 대관 문의', '촬영장소 섭외', '팝업스토어 대관', '프라이빗 파티룸'],
  alternates: { canonical: 'https://allnight.kr/rental' },
}

export default function RentalLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
