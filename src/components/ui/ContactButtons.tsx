'use client'

import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'

const PHONE = '010-8215-8571'
const KAKAO_ID = 'alrep0410'
const WECHAT_ID = 'club_jack_livin'
const LINE_ID = 'clubjacklivn'

interface Props {
  size?: 'sm' | 'md' | 'lg'
}

export default function ContactButtons({ size = 'md' }: Props) {
  const { lang } = useLanguage()
  const [popup, setPopup] = useState<null | 'kakao' | 'wechat' | 'line'>(null)
  const [copied, setCopied] = useState(false)

  const isKo = lang === 'ko'

  const px =
    size === 'lg' ? 'px-8 py-4 text-base' :
    size === 'sm' ? 'px-4 py-2 text-xs' :
    'px-5 py-3 text-sm'

  const copyId = (id: string) => {
    navigator.clipboard.writeText(id)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const popupId = popup === 'kakao' ? KAKAO_ID : popup === 'wechat' ? WECHAT_ID : LINE_ID
  const popupLabel = popup === 'kakao' ? '카카오톡' : popup === 'wechat' ? 'WeChat' : 'LINE'
  const copyLabel = lang === 'zh' ? '复制ID' : lang === 'ja' ? 'IDをコピー' : 'Copy ID'

  return (
    <>
      <div className="flex flex-wrap gap-3 justify-center">
        {/* 전화 — 모든 언어 공통 */}
        <a
          href={`tel:${PHONE}`}
          className={`inline-flex items-center gap-2 font-bold text-white rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${px}`}
          style={{ background: 'linear-gradient(135deg,#FF2D78,#BF00FF)', boxShadow: '0 0 18px rgba(255,45,120,0.35)' }}
        >
          📞 {PHONE}
        </a>

        {/* 카카오톡 — 한국어만 */}
        {isKo && (
          <button
            onClick={() => setPopup('kakao')}
            className={`inline-flex items-center gap-2 font-bold text-black rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${px}`}
            style={{ background: '#FAE100', boxShadow: '0 0 14px rgba(250,225,0,0.3)' }}
          >
            💬 카카오톡
          </button>
        )}

        {/* WeChat — 영·중·일만 */}
        {!isKo && (
          <button
            onClick={() => setPopup('wechat')}
            className={`inline-flex items-center gap-2 font-bold text-white rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${px}`}
            style={{ background: 'linear-gradient(135deg,#07C160,#05a050)', boxShadow: '0 0 14px rgba(7,193,96,0.3)' }}
          >
            💚 WeChat
          </button>
        )}

        {/* LINE — 영·중·일만 */}
        {!isKo && (
          <button
            onClick={() => setPopup('line')}
            className={`inline-flex items-center gap-2 font-bold text-white rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${px}`}
            style={{ background: 'linear-gradient(135deg,#06C755,#04a344)', boxShadow: '0 0 14px rgba(6,199,85,0.3)' }}
          >
            💚 LINE
          </button>
        )}
      </div>

      {/* ID 팝업 */}
      {popup && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 backdrop-blur-sm"
          onClick={() => { setPopup(null); setCopied(false) }}
        >
          <div
            className="relative bg-dark-700 border border-white/10 rounded-2xl p-8 text-center w-80 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => { setPopup(null); setCopied(false) }}
              className="absolute top-3 right-4 text-gray-400 hover:text-white text-2xl leading-none"
            >✕</button>

            <div className="text-5xl mb-3">
              {popup === 'kakao' ? '💬' : '💚'}
            </div>
            <h3 className="text-white font-bold text-xl mb-2">{popupLabel}</h3>
            <p className="text-gray-400 text-sm mb-5 leading-relaxed">
              {popup === 'kakao'
                ? '아래 ID를 검색해서 친구 추가 후 문의해 주세요.'
                : lang === 'zh'
                  ? `请添加以下${popupLabel} ID后发消息咨询。`
                  : `Add the ID below on ${popupLabel} and send a message.`}
            </p>

            <div className="bg-dark-800 border border-white/10 rounded-xl px-6 py-3 mb-5">
              <span className="text-white font-mono text-lg font-bold tracking-widest">{popupId}</span>
            </div>

            <button
              onClick={() => copyId(popupId)}
              className={`w-full py-2.5 rounded-xl text-sm font-bold transition-all ${
                copied
                  ? 'bg-green-500 text-white'
                  : 'btn-primary'
              }`}
            >
              {copied ? '✓ 복사 완료!' : copyLabel}
            </button>
          </div>
        </div>
      )}
    </>
  )
}
