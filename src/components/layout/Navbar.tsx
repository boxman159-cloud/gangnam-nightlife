'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import LanguageSwitcher from '@/components/ui/LanguageSwitcher'
import ContactButtons from '@/components/ui/ContactButtons'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const navLinks = [
    { href: '/#clubs', label: t('nav.club') },
    { href: '/#lounges', label: t('nav.lounge') },
    { href: '/rental', label: t('nav.rental') },
    { href: '/blog', label: t('nav.blog') },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-800/95 backdrop-blur-md shadow-lg shadow-black/30' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image
              src="/images/logo.webp"
              alt="강남 클럽앤라운지 로고"
              width={44}
              height={44}
              className="object-contain"
              priority
            />
            <span className="text-white font-black text-lg tracking-tight leading-tight">
              강남클럽<span className="text-gradient">&amp;라운지</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-neon-pink transition-colors duration-200 font-medium text-sm tracking-wide whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-2 flex-shrink-0">
            <LanguageSwitcher />
            <ContactButtons size="sm" />
            <Link href="/#quick-booking" className="btn-primary text-sm py-2 px-4 whitespace-nowrap">
              {t('nav.quickBook')}
            </Link>
          </div>

          {/* Mobile right */}
          <div className="flex md:hidden items-center gap-2">
            <LanguageSwitcher />
            <button
              className="text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="메뉴 열기"
            >
              <div className="w-6 h-0.5 bg-white mb-1.5" />
              <div className="w-6 h-0.5 bg-white mb-1.5" />
              <div className="w-6 h-0.5 bg-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-dark-800/98 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-gray-300 hover:text-white py-2 font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <Link href="/#quick-booking" className="btn-outline text-center text-sm" onClick={() => setMobileOpen(false)}>
                {t('nav.guestApply')}
              </Link>
              <Link href="/#quick-booking" className="btn-primary text-center text-sm" onClick={() => setMobileOpen(false)}>
                {t('nav.quickBook')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
