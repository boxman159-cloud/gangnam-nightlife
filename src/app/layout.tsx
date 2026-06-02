import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { LanguageProvider } from '@/context/LanguageContext'
import { OrganizationJsonLd, WebSiteJsonLd } from '@/components/seo/JsonLd'

const BASE = 'https://gangnam-clubnlounge.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: '강남 클럽앤라운지 | 강남 클럽 & 라운지 예약',
    template: '%s | 강남 클럽앤라운지',
  },
  description: '강남(신사·청담·압구정) 클럽 & 라운지 통합 예약 플랫폼. 에이스(레이스), 라이언 슈퍼클럽, 플러스82 애프터클럽, 벨레어청담, 아르쥬청담, 피플더테라스, 컬러라운지, 하잎서울 게스트리스트 무료 예약.',
  keywords: [
    '강남 클럽', '강남 클럽 예약', '강남 라운지', '청담 라운지', '압구정 라운지',
    '게스트 리스트', '테이블 예약', '클럽 에이스', '레이스 클럽', '라이언 슈퍼클럽',
    '플러스82', '애프터클럽', '벨레어청담', '아르쥬청담', '피플더테라스',
    '컬러라운지', '하잎서울', 'DM 인트로', '강남 나이트', '청담 클럽',
    '압구정 클럽', '신사 클럽', '강남 게스트리스트 무료', '청담 라운지 예약',
    'Gangnam club', 'Seoul nightclub', 'Cheongdam lounge', 'Apgujeong lounge',
    '江南俱乐部', '清潭酒廊', '江南クラブ', '清潭ラウンジ',
  ],
  authors: [{ name: '강남 클럽앤라운지' }],
  creator: '강남 클럽앤라운지',
  publisher: '강남 클럽앤라운지',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    alternateLocale: ['en_US', 'zh_CN', 'ja_JP'],
    url: BASE,
    siteName: '강남 클럽앤라운지',
    title: '강남 클럽앤라운지 | 강남 클럽 & 라운지 예약',
    description: '강남 최고의 클럽과 라운지를 한 곳에서. 게스트리스트 무료 등록, 테이블 예약 전문.',
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: '강남 클럽앤라운지' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '강남 클럽앤라운지 | 강남 클럽 & 라운지 예약',
    description: '강남 최고의 클럽과 라운지를 한 곳에서. 게스트리스트 무료 등록.',
    images: ['/opengraph-image.png'],
  },
  alternates: {
    canonical: BASE,
    languages: {
      'ko-KR': BASE,
      'en-US': BASE,
      'zh-CN': BASE,
      'ja-JP': BASE,
    },
  },
  verification: {
    google: 'google-site-verification-code-here',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <LanguageProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
