'use client'

'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { Venue } from '@/types'
import Accordion from '@/components/ui/Accordion'
import ContactButtons from '@/components/ui/ContactButtons'
import { useLanguage } from '@/context/LanguageContext'
import { getVenueI18n } from '@/data/venueTranslations'

type Tab = 'intro' | 'pricing' | 'faq' | 'booking'

interface VenueDetailTabsProps {
  venue: Venue
}

export default function VenueDetailTabs({ venue }: VenueDetailTabsProps) {
  const [activeTab, setActiveTab] = useState<Tab>('intro')
  const { t, lang } = useLanguage()
  const i18n = getVenueI18n(venue.id, lang)
  const desc = i18n?.description ?? venue.description
  const features = i18n?.features ?? venue.features
  const faqs = i18n?.faqs ?? venue.faqs
  const tablePrice = i18n?.tablePrice ?? venue.tablePrice
  const guestFee = i18n?.guestFee ?? venue.guestFee
  const dressCode = i18n?.dressCode ?? venue.dressCode
  const operatingHours = i18n?.operatingHours ?? venue.operatingHours

  const tabs: { key: Tab; label: string }[] = [
    { key: 'intro', label: t('tab.intro') },
    { key: 'pricing', label: t('tab.pricing') },
    { key: 'faq', label: t('tab.faq') },
    { key: 'booking', label: t('tab.booking') },
  ]

  return (
    <div>
      {/* Tab bar */}
      <div className="sticky top-16 md:top-20 z-40 bg-dark-900/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex gap-0 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex-shrink-0 px-6 py-4 text-sm font-semibold border-b-2 transition-all duration-200 ${
                  activeTab === tab.key
                    ? 'border-neon-pink text-neon-pink'
                    : 'border-transparent text-gray-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">

        {/* INTRO */}
        {activeTab === 'intro' && (
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">업장 소개</h2>
              <p className="text-gray-300 leading-relaxed text-lg">{desc}</p>
            </div>

            {/* 갤러리 */}
            {venue.gallery && venue.gallery.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">📸 포토 갤러리</h3>
                <GalleryGrid images={venue.gallery} name={venue.name} />
              </div>
            )}

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">주요 특징</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((f) => (
                  <div key={f} className="glass-card rounded-xl p-4 flex items-center gap-3">
                    <div className="w-2 h-2 bg-neon-pink rounded-full flex-shrink-0" />
                    <span className="text-gray-200 text-sm font-medium">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: lang === 'en' ? 'Location' : lang === 'zh' ? '位置' : lang === 'ja' ? '場所' : '위치', value: venue.location },
                { label: lang === 'en' ? 'Hours' : lang === 'zh' ? '营业时间' : lang === 'ja' ? '営業時間' : '운영시간', value: operatingHours },
                { label: lang === 'en' ? 'Age Limit' : lang === 'zh' ? '年龄限制' : lang === 'ja' ? '年齢制限' : '나이제한', value: lang === 'ko' ? `만 ${venue.minAge}세 이상` : `${venue.minAge}+` },
                { label: lang === 'en' ? 'Dress Code' : lang === 'zh' ? '着装要求' : lang === 'ja' ? 'ドレスコード' : '드레스코드', value: dressCode },
              ].map((info) => (
                <div key={info.label} className="glass-card rounded-xl p-4 text-center">
                  <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">{info.label}</div>
                  <div className="text-white text-sm font-semibold leading-snug">{info.value}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PRICING */}
        {activeTab === 'pricing' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-white">이용방법 & 가격</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Table */}
              <div className="glass-card neon-border rounded-2xl p-6">
                <div className="text-neon-pink font-bold text-lg mb-2">🍾 테이블 예약</div>
                <div className="text-4xl font-black text-white mb-4">{tablePrice}</div>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex items-start gap-2"><span className="text-neon-pink mt-0.5">✓</span>지정 테이블 및 전담 서버 배정</li>
                  <li className="flex items-start gap-2"><span className="text-neon-pink mt-0.5">✓</span>보틀 / 음료 패키지 포함</li>
                  <li className="flex items-start gap-2"><span className="text-neon-pink mt-0.5">✓</span>VIP 입장 우선권</li>
                  <li className="flex items-start gap-2"><span className="text-neon-pink mt-0.5">✓</span>생일·기념일 이벤트 지원</li>
                </ul>
                <button onClick={() => setActiveTab('booking')} className="btn-primary w-full mt-6 rounded-xl">
                  테이블 예약하기
                </button>
              </div>

              {/* Guest */}
              <div className="glass-card rounded-2xl p-6 border border-white/10">
                <div className="text-neon-cyan font-bold text-lg mb-2">✨ 게스트 신청</div>
                <div className="text-4xl font-black text-white mb-4">{guestFee}</div>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex items-start gap-2"><span className="text-neon-cyan mt-0.5">✓</span>게스트 리스트 등록으로 무료/할인 입장</li>
                  <li className="flex items-start gap-2"><span className="text-neon-cyan mt-0.5">✓</span>당일 예약 가능</li>
                  <li className="flex items-start gap-2"><span className="text-neon-cyan mt-0.5">✓</span>빠른 확인 후 안내</li>
                  <li className="flex items-start gap-2"><span className="text-neon-cyan mt-0.5">✓</span>별도 좌석 없음 (플로어 이용)</li>
                </ul>
                <button onClick={() => setActiveTab('booking')} className="btn-outline w-full mt-6 rounded-xl">
                  게스트 신청하기
                </button>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-yellow-500/20">
              <h3 className="text-yellow-400 font-bold mb-4">⚠️ 이용 시 주의사항</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• 신분증 미지참 시 입장이 거부될 수 있습니다.</li>
                <li>• {lang === 'en' ? 'Dress Code' : lang === 'zh' ? '着装要求' : lang === 'ja' ? 'ドレスコード' : '드레스코드'}: {dressCode}</li>
                <li>• 외부 음식 및 주류 반입이 금지됩니다.</li>
                <li>• 당일까지 방문 및 예약이 가능합니다.</li>
              </ul>
              <div className="mt-5 pt-5 border-t border-yellow-500/20">
                <p className="text-yellow-300 font-semibold text-sm mb-2">👟 입장 기준 안내</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  입장 불가 기준은 쪼리, 슬리퍼, 크록스, 추리닝 등이 있으며,
                  현장 가드 판단에 따라 달라질 수 있습니다.
                </p>
                <div className="mt-3 space-y-1 text-gray-500 text-xs">
                  <p>🇺🇸 Entry may be refused for flip-flops, slippers, Crocs, or tracksuits. Final decision is at the door staff's discretion.</p>
                  <p>🇨🇳 穿着人字拖、拖鞋、洞洞鞋或运动服可能被拒绝入场，最终由现场保安判断。</p>
                  <p>🇯🇵 ビーチサンダル、スリッパ、クロックス、ジャージ等は入場不可となる場合があります。最終判断は現場スタッフに委ねられます。</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* FAQ */}
        {activeTab === 'faq' && (
          <div>
            <h2 className="text-2xl font-bold text-white mb-8">자주 묻는 질문</h2>
            <Accordion items={faqs} />
          </div>
        )}

        {/* BOOKING → CTA */}
        {activeTab === 'booking' && (
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-3">예약 · 문의</h2>
            <p className="text-gray-400 mb-10">
              <span className="font-semibold text-white">{venue.name}</span> 예약은 전화 또는 메신저로 바로 문의해 주세요.
              당일 예약도 가능합니다.
            </p>

            {/* Steps */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {[
                { icon: '💬', label: '문의', desc: '날짜·인원·업장 전달' },
                { icon: '✅', label: '확인', desc: '즉시 가능 여부 안내' },
                { icon: '🎉', label: '완료', desc: '방문 후 즐기기' },
              ].map((s, i) => (
                <div key={i} className="glass-card rounded-xl p-4 text-center border border-white/5">
                  <div className="text-3xl mb-2">{s.icon}</div>
                  <div className="text-white text-sm font-bold mb-1">{s.label}</div>
                  <div className="text-gray-500 text-xs">{s.desc}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/20 via-neon-purple/10 to-neon-cyan/20 blur-sm" />
              <div className="relative glass-card border border-neon-pink/20 rounded-2xl px-6 py-8 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 bg-neon-pink rounded-full animate-pulse" />
                  <p className="text-white font-bold">{t('hero.contactLabel')}</p>
                  <div className="w-1.5 h-1.5 bg-neon-pink rounded-full animate-pulse" />
                </div>
                <p className="text-gray-400 text-sm mb-6">24시간 연중무휴 · 빠른 응답 보장</p>
                <ContactButtons size="md" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// ── 갤러리 그리드 컴포넌트 ────────────────────────────────────
function GalleryGrid({ images, name }: { images: string[]; name: string }) {
  const [lightbox, setLightbox] = useState<number | null>(null)

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setLightbox(i)}
            className={`relative overflow-hidden rounded-xl group ${
              i === 0 ? 'col-span-2 md:col-span-2 row-span-2 h-72 md:h-80' : 'h-36 md:h-40'
            }`}
          >
            <Image
              src={src}
              alt={`${name} 사진 ${i + 1}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-2xl">🔍</span>
            </div>
          </button>
        ))}
      </div>

      {/* 라이트박스 */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-5 text-white text-3xl hover:text-neon-pink transition-colors"
            onClick={() => setLightbox(null)}
          >✕</button>

          {/* 이전 */}
          {lightbox > 0 && (
            <button
              className="absolute left-4 text-white text-4xl hover:text-neon-pink transition-colors p-2"
              onClick={(e) => { e.stopPropagation(); setLightbox(lightbox - 1) }}
            >‹</button>
          )}

          <div
            className="relative w-full max-w-3xl aspect-video rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightbox]}
              alt={`${name} ${lightbox + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>

          {/* 다음 */}
          {lightbox < images.length - 1 && (
            <button
              className="absolute right-4 text-white text-4xl hover:text-neon-pink transition-colors p-2"
              onClick={(e) => { e.stopPropagation(); setLightbox(lightbox + 1) }}
            >›</button>
          )}

          <div className="absolute bottom-5 text-gray-400 text-sm">
            {lightbox + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  )
}
