'use client'

import Accordion from '@/components/ui/Accordion'
import { useLanguage } from '@/context/LanguageContext'
import type { FAQ } from '@/types'

const faqsMap: Record<string, FAQ[]> = {
  ko: [
    { question: '게스트 리스트 신청은 무료인가요?', answer: '클럽 에이스(레이스), 플러스82 및 압구정 로데오·청담 라운지 게스트 리스트 신청 시 무료 입장이 가능합니다. 라이언은 테이블 예약 위주로 운영됩니다.' },
    { question: '테이블 예약과 게스트 신청의 차이는 무엇인가요?', answer: '테이블 예약은 지정된 자리와 최소 주류 소비 패키지를 구매하는 프리미엄 서비스입니다. 게스트 신청은 별도 좌석 없이 자유롭게 클럽을 이용하는 입장권 개념입니다.' },
    { question: '당일 예약도 가능한가요?', answer: '네, 미리 예약 시 좋은 자리 선택이 가능하나 당일까지 방문 및 예약이 가능합니다. 전화 또는 카카오톡으로 문의 주시면 바로 안내해 드립니다.' },
    { question: '미성년자도 입장 가능한가요?', answer: '만 20세 이상만 입장 가능합니다. 신분증(주민등록증, 운전면허증, 여권) 지참이 필수입니다.' },
    { question: '클럽의 경우 입장 제한이 많이 심한가요?', answer: '아니요, 저희를 통해 테이블 예약 시 내·외국인 모두 차별 없이 프리패스로 입장 가능합니다. 안심하셔도 됩니다.' },
  ],
  en: [
    { question: 'Is the guest list free?', answer: 'Club ACE (RACE), PLUS82, and all Apgujeong Rodeo & Cheongdam lounges offer free entry via guest list registration. LION operates mainly with table reservations.' },
    { question: "What's the difference between table reservation and guest list?", answer: 'Table reservation is a premium service with a designated seat and minimum spend package. Guest list is a free entry option without a reserved seat.' },
    { question: 'Can I book on the same day?', answer: 'Yes, advance booking is recommended for the best seats, but same-day bookings and walk-ins are also welcome. Contact us by phone or WeChat/LINE and we will assist you right away.' },
    { question: 'Is there an age restriction?', answer: 'Entry is restricted to those aged 20 and above. A valid ID (national ID, driver\'s license, or passport) is required.' },
    { question: 'Are there strict entry restrictions at the clubs?', answer: 'Not at all. When you book a table through us, both Korean and international guests are welcomed with a free pass — no discrimination whatsoever. You can rest assured.' },
  ],
  zh: [
    { question: '宾客名单申请免费吗？', answer: '俱乐部ACE（RACE）、PLUS82及狎鸥亭罗德奥·清潭洞所有酒廊均可通过宾客名单登记免费入场。LION主要以餐桌预约为主。' },
    { question: '餐桌预约和宾客申请有什么区别？', answer: '餐桌预约是包含指定座位和最低消费套餐的高级服务。宾客申请是无固定座位的免费入场方式。' },
    { question: '当天可以预约吗？', answer: '可以，提前预约可选择更好的座位，但当天预约和到场同样欢迎。请通过电话或微信/LINE联系我们，我们将立即为您安排。' },
    { question: '有年龄限制吗？', answer: '仅限20岁及以上人士入场。必须携带有效身份证件（身份证、驾照或护照）。' },
    { question: '俱乐部的入场限制很严格吗？', answer: '不是的。通过我们预约餐桌时，无论韩国人还是外国人，均可无差别地凭免费通行证入场，请放心。' },
  ],
  ja: [
    { question: 'ゲストリスト申請は無料ですか？', answer: 'クラブACE（RACE）、PLUS82、および狎鷗亭ロデオ・清潭洞の全ラウンジはゲストリスト登録で無料入場が可能です。LIONはテーブル予約が中心です。' },
    { question: 'テーブル予約とゲスト申請の違いは？', answer: 'テーブル予約は指定席と最低消費パッケージを含むプレミアムサービスです。ゲスト申請は指定席なしで自由に入場できる方法です。' },
    { question: '当日予約はできますか？', answer: 'はい、事前予約で良いお席をご確保いただけますが、当日のご予約・ご来店も歓迎しております。お電話またはLINE/WeChatでご連絡いただければすぐにご案内します。' },
    { question: '年齢制限はありますか？', answer: '満20歳以上のみ入場可能です。身分証明書（住民票、運転免許証、パスポート）の持参が必須です。' },
    { question: 'クラブの入場制限は厳しいですか？', answer: 'いいえ、私どもを通じてテーブルをご予約いただいた場合、日本人を含む外国人の方も韓国人と同様に差別なくフリーパスで入場いただけます。ご安心ください。' },
  ],
}

export default function FAQSection() {
  const { lang, t } = useLanguage()
  const faqs = faqsMap[lang] ?? faqsMap.ko

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
          {t('faq.title')} <span className="text-gradient">{t('faq.title2')}</span>
        </h2>
        <p className="text-gray-400">{t('faq.desc')}</p>
      </div>

      <Accordion items={faqs} />

      <div className="mt-10 text-center">
        <p className="text-gray-500 text-sm mb-4">{t('faq.moreQuestion')}</p>
        <a href="https://open.kakao.com" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-6 py-3 rounded-xl transition-colors text-sm">
          {t('faq.kakao')}
        </a>
      </div>
    </section>
  )
}
