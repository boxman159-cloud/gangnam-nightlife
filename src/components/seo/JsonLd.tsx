// 구조화 데이터 (JSON-LD) — 구글 리치 스니펫용

export function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '강남 클럽앤라운지',
    alternateName: 'Gangnam Club & Lounge',
    url: 'https://allnight.kr',
    description: '강남(신사·청담·압구정) 클럽 & 라운지 통합 예약 플랫폼. 에이스(레이스), 라이언 슈퍼클럽, 플러스82, 벨레어청담, 아르쥬청담, 피플더테라스, 컬러라운지, 하잎서울, DM X 인트로 예약 전문.',
    telephone: '010-8215-8571',
    areaServed: ['강남구', '서초구', '청담동', '압구정동', '신사동'],
    sameAs: [
      'https://www.instagram.com/allnight.kr',
      'https://pf.kakao.com/_alrep0410',
      'https://allnight.kr',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '010-8215-8571',
      contactType: 'reservations',
      availableLanguage: ['Korean', 'English', 'Chinese', 'Japanese'],
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

export function WebSiteJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: '강남 클럽앤라운지',
    url: 'https://allnight.kr',
    description: '강남 클럽 & 라운지 예약 전문 플랫폼',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://allnight.kr/blog?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: ['ko', 'en', 'zh', 'ja'],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

interface VenueJsonLdProps {
  venue: {
    id: string
    name: string
    nameEn: string
    type: string
    description: string
    location: string
    operatingHours: string
    minAge: number
    dressCode: string
  }
}

export function VenueJsonLd({ venue }: VenueJsonLdProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': venue.type === 'club' ? 'NightClub' : 'BarOrPub',
    name: venue.name,
    alternateName: venue.nameEn,
    description: venue.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: venue.location,
      addressLocality: '강남구',
      addressRegion: '서울특별시',
      addressCountry: 'KR',
    },
    telephone: '010-8215-8571',
    url: `https://allnight.kr/${venue.type === 'club' ? 'clubs' : 'lounges'}/${venue.id}`,
    reservationUrl: 'https://allnight.kr/#quick-booking',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '128',
      bestRating: '5',
    },
    priceRange: '₩₩₩',
    paymentAccepted: 'Cash, Credit Card',
    currenciesAccepted: 'KRW',
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: '드레스코드', value: venue.dressCode },
      { '@type': 'LocationFeatureSpecification', name: '최소 연령', value: `만 ${venue.minAge}세` },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

export function ArticleJsonLd({ post }: {
  post: { title: string; excerpt: string; date: string; image: string; slug: string }
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.image.startsWith('http') ? post.image : `https://allnight.kr${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: '올나잇 (Allnight)',
      url: 'https://allnight.kr',
    },
    publisher: {
      '@type': 'Organization',
      name: '올나잇 (Allnight)',
      url: 'https://allnight.kr',
      logo: {
        '@type': 'ImageObject',
        url: 'https://allnight.kr/images/logo.webp',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://allnight.kr/blog/${post.slug}`,
    },
    keywords: '강남 클럽, 강남 라운지, 청담 라운지, 압구정 라운지, 강남 나이트',
    inLanguage: 'ko-KR',
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

export function FaqJsonLd({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
