import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '강남 클럽·라운지 대관 | 기업파티·촬영·프라이빗 파티',
  description: '강남(신사·청담·압구정) 클럽·라운지 대관 전문. 라이언 슈퍼클럽, 에이스, 플러스82, 벨레어청담, 피플더테라스 등 9개 베뉴 원스톱 매칭. 기업파티·촬영·프라이빗파티·팝업스토어 대관 문의 010-8215-8571',
  keywords: ['강남 클럽 대관', '강남 라운지 대관', '청담 대관', '압구정 대관', '기업 파티 대관', '클럽 대관', '라운지 대관', '촬영 대관', '프라이빗 파티'],
  alternates: { canonical: 'https://allnight.kr/rental' },
}

export default function RentalLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
