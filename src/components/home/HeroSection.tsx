'use client'

import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import ContactButtons from '@/components/ui/ContactButtons'

export default function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=1920&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/70 via-dark-900/50 to-dark-900" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/60 via-transparent to-dark-900/60" />
      </div>

      {/* Neon glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto w-full">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-neon-pink/30 rounded-full px-3 py-1.5 mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 bg-neon-pink rounded-full animate-pulse flex-shrink-0" />
          <span className="text-neon-pink text-xs sm:text-sm font-medium tracking-wide whitespace-nowrap">{t('hero.badge')}</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none mb-6 tracking-tight">
          <span className="block text-gradient">{t('hero.title1')}</span>
          <span className="block text-gradient">{t('hero.title2')}</span>
        </h1>

        <p className="text-gray-300 text-base md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          {t('hero.desc')}
          <br />
          <span className="text-neon-cyan font-semibold">{t('hero.subDesc')}</span>
        </p>

        {/* Primary CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-10">
          <Link
            href="/#quick-booking"
            className="btn-primary w-full sm:w-auto text-center text-sm md:text-base px-6 py-3.5 rounded-xl"
          >
            {t('hero.tableBook')}
          </Link>
          <Link
            href="/#quick-booking"
            className="btn-outline w-full sm:w-auto text-center text-sm md:text-base px-6 py-3.5 rounded-xl"
          >
            {t('hero.guestApply')}
          </Link>
        </div>

        {/* ── 연락처 CTA 바 ── */}
        <div className="relative max-w-2xl mx-auto rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/20 via-neon-purple/10 to-neon-cyan/20 blur-sm" />
          <div className="relative glass-card border border-neon-pink/20 rounded-2xl px-6 py-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-1.5 h-1.5 bg-neon-pink rounded-full animate-pulse" />
              <p className="text-white font-bold text-sm tracking-wide">
                {t('hero.contactLabel')}
              </p>
              <div className="w-1.5 h-1.5 bg-neon-pink rounded-full animate-pulse" />
            </div>
            <ContactButtons size="md" />
          </div>
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-3 gap-4 max-w-lg mx-auto">
          {[
            { value: '9+', label: t('hero.stat1') },
            { value: '10만+', label: t('hero.stat2') },
            { value: '100%', label: t('hero.stat3') },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-black text-gradient">{stat.value}</div>
              <div className="text-gray-400 text-xs md:text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-gray-500 text-xs">{t('hero.scroll')}</span>
        <div className="w-px h-8 bg-gradient-to-b from-neon-pink to-transparent" />
      </div>
    </section>
  )
}
