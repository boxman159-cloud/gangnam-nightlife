'use client'

import { useLanguage } from '@/context/LanguageContext'
import ContactButtons from '@/components/ui/ContactButtons'

export default function QuickBookingForm() {
  const { t, lang } = useLanguage()

  const stepsMap = {
    ko: [
      { icon: '💬', title: '문의', desc: '전화 또는 메신저로 날짜·인원·업장을 말씀해 주세요.' },
      { icon: '✅', title: '확인', desc: '담당자가 즉시 확인 후 예약 가능 여부를 안내해 드립니다.' },
      { icon: '🎉', title: '완료', desc: '예약 확정 후 당일 안내에 따라 편하게 방문하시면 됩니다.' },
    ],
    en: [
      { icon: '💬', title: 'Enquire', desc: 'Tell us your date, party size, and preferred venue by phone or messenger.' },
      { icon: '✅', title: 'Confirm', desc: 'Our team checks availability immediately and gets back to you.' },
      { icon: '🎉', title: 'Done', desc: 'Once confirmed, just follow the on-the-day instructions and enjoy!' },
    ],
    zh: [
      { icon: '💬', title: '咨询', desc: '通过电话或即时通讯告知日期、人数和希望的场所。' },
      { icon: '✅', title: '确认', desc: '工作人员立即确认后为您告知预约是否可行。' },
      { icon: '🎉', title: '完成', desc: '预约确认后按当天指引轻松到访即可。' },
    ],
    ja: [
      { icon: '💬', title: 'お問い合わせ', desc: 'お電話またはメッセンジャーで日程・人数・ご希望の店舗をお伝えください。' },
      { icon: '✅', title: '確認', desc: '担当者がすぐに確認し、予約可否をご案内します。' },
      { icon: '🎉', title: '完了', desc: '予約確定後、当日の案内に従ってお気軽にご来場ください。' },
    ],
  }
  const steps = stepsMap[lang] ?? stepsMap.ko

  return (
    <section id="quick-booking" className="bg-dark-800 border-y border-white/5 py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-4xl font-black text-white mb-3 leading-snug">
            {t('form.title')}{' '}
            <span className="text-gradient">{t('form.title2')}</span>
          </h2>
          <p className="text-gray-400">{t('form.desc')}</p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {steps.map((step, i) => (
            <div key={i} className="relative glass-card rounded-2xl p-6 text-center border border-white/5">
              {/* connector */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-neon-pink to-transparent z-10" />
              )}
              <div className="text-4xl mb-3">{step.icon}</div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="w-5 h-5 rounded-full bg-neon-pink/20 border border-neon-pink/50 text-neon-pink text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <span className="text-white font-bold">{step.title}</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/20 via-neon-purple/10 to-neon-cyan/20 blur-sm" />
          <div className="relative glass-card border border-neon-pink/20 rounded-2xl px-6 py-8 text-center">
            <p className="text-white font-bold text-lg mb-2">{t('hero.contactLabel')}</p>
            <p className="text-gray-400 text-sm mb-6">
              {t('form.notice')}
            </p>
            <ContactButtons size="lg" />
          </div>
        </div>

      </div>
    </section>
  )
}
