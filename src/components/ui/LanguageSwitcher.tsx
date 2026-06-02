'use client'

import { useLanguage, type Lang } from '@/context/LanguageContext'

const langs: { code: Lang; label: string; flag: string }[] = [
  { code: 'ko', label: '한국어', flag: '🇰🇷' },
  { code: 'en', label: 'EN', flag: '🇺🇸' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
]

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage()

  return (
    <div className="flex items-center gap-1 bg-dark-700 border border-white/10 rounded-lg p-1">
      {langs.map((l) => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          className={`flex items-center gap-1 px-2 py-1 rounded text-xs font-semibold transition-all duration-200 ${
            lang === l.code
              ? 'bg-neon-pink/20 text-neon-pink'
              : 'text-gray-400 hover:text-white'
          }`}
          title={l.label}
        >
          <span>{l.flag}</span>
          <span className="hidden sm:inline">{l.label}</span>
        </button>
      ))}
    </div>
  )
}
