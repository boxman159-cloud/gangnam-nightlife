'use client'

import { useState } from 'react'
import VenueCard from '@/components/ui/VenueCard'
import { venues } from '@/data/venues'
import { useLanguage } from '@/context/LanguageContext'

type Tab = 'all' | 'club' | 'lounge'
type Region = '전체' | '청담' | '압구정 로데오'

export default function VenueListSection() {
  const [activeTab, setActiveTab] = useState<Tab>('all')
  const [activeRegion, setActiveRegion] = useState<Region>('전체')
  const { t } = useLanguage()

  const regionLabels: Record<Region, string> = {
    '전체': t('venue.regionAll'),
    '청담': '청담',
    '압구정 로데오': '압구정 로데오',
  }

  const filtered = venues.filter((v) => {
    if (activeTab === 'all') return true
    if (v.type !== activeTab) return false
    if (activeTab === 'lounge' && activeRegion !== '전체') {
      return v.region === activeRegion
    }
    return true
  })

  const clubs = venues.filter((v) => v.type === 'club')
  const lounges = venues.filter((v) => v.type === 'lounge')

  return (
    <section id="clubs" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      {/* Section header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
          <span className="text-gradient">{t('venue.sectionTitle')}</span> {t('venue.sectionTitle2')}
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">{t('venue.sectionDesc')}</p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex bg-dark-700 border border-white/10 rounded-xl p-1">
          {([
            { key: 'all', label: `🔥 전체 (${venues.length})` },
            { key: 'club', label: `${t('venue.tabClub')} (${clubs.length})` },
            { key: 'lounge', label: `${t('venue.tabLounge')} (${lounges.length})` },
          ] as { key: Tab; label: string }[]).map((tab) => (
            <button
              key={tab.key}
              onClick={() => {
                setActiveTab(tab.key)
                setActiveRegion('전체')
              }}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeTab === tab.key
                  ? 'bg-gradient-to-r from-neon-pink to-neon-purple text-white shadow-lg shadow-neon-pink/20'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Region filter (lounge only) */}
      {activeTab === 'lounge' && (
        <div id="lounges" className="flex justify-center gap-2 mb-8">
          {(['전체', '청담', '압구정 로데오'] as const).map((region) => (
            <button
              key={region}
              onClick={() => setActiveRegion(region)}
              className={`px-4 py-1.5 rounded-full text-sm border transition-all duration-200 ${
                activeRegion === region
                  ? 'border-neon-cyan text-neon-cyan bg-neon-cyan/10'
                  : 'border-white/20 text-gray-400 hover:border-white/40 hover:text-white'
              }`}
            >
              {regionLabels[region]}
            </button>
          ))}
        </div>
      )}

      {/* 전체 탭: 클럽 / 라운지 그룹으로 나눠서 표시 */}
      {activeTab === 'all' ? (
        <div className="space-y-14">
          {/* 클럽 그룹 */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-neon-pink text-xl">🎵</span>
              <h3 className="text-white font-black text-xl">클럽</h3>
              <span className="text-gray-600 text-sm">({clubs.length})</span>
              <div className="flex-1 h-px bg-white/5" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {clubs.map((venue) => (
                <VenueCard key={venue.id} venue={venue} />
              ))}
            </div>
          </div>

          {/* 라운지 그룹 — 청담 */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-neon-cyan text-xl">🥂</span>
              <h3 className="text-white font-black text-xl">라운지 · 청담</h3>
              <span className="text-gray-600 text-sm">
                ({lounges.filter((v) => v.region === '청담').length})
              </span>
              <div className="flex-1 h-px bg-white/5" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {lounges
                .filter((v) => v.region === '청담')
                .map((venue) => (
                  <VenueCard key={venue.id} venue={venue} />
                ))}
            </div>
          </div>

          {/* 라운지 그룹 — 압구정 로데오 */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-neon-cyan text-xl">🥂</span>
              <h3 className="text-white font-black text-xl">라운지 · 압구정 로데오</h3>
              <span className="text-gray-600 text-sm">
                ({lounges.filter((v) => v.region === '압구정 로데오').length})
              </span>
              <div className="flex-1 h-px bg-white/5" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {lounges
                .filter((v) => v.region === '압구정 로데오')
                .map((venue) => (
                  <VenueCard key={venue.id} venue={venue} />
                ))}
            </div>
          </div>
        </div>
      ) : (
        /* 클럽 / 라운지 탭 */
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((venue) => (
              <VenueCard key={venue.id} venue={venue} />
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              {t('venue.preparing')}
            </div>
          )}
        </>
      )}
    </section>
  )
}
