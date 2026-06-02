'use client'

import { useLanguage } from '@/context/LanguageContext'
import ContactButtons from '@/components/ui/ContactButtons'

const content = {
  ko: {
    sectionBadge: '신뢰할 수 있는 이유',
    sectionTitle: '왜 ',
    sectionTitleGradient: '저희를 통해',
    sectionTitle2: ' 예약해야 할까요?',
    sectionDesc: '수많은 채널 중 저희를 선택해야 하는 명확한 이유가 있습니다',
    reasons: [
      {
        icon: '🛡️', subtitle: '안전성과 신뢰도', title: '실패 없는 검증된 케어',
        quote: '"누군지도 모르는 인스타 MD에게 내 돈과 주말을 맡기시겠습니까?"',
        body: '개인 MD에게 예약했다가 당일 잠수, 돈만 받고 케어 없이 주말을 망치는 사례가 정말 많습니다. 저희는 엄격하게 검증한 MD들만 매칭해드리며 업장 직속과 다이렉트로 예약이 가능하기 때문에 가격 또한 최저가를 보장합니다.',
        highlight: '당일 잠수·케어 부족 없는 200% 안심 예약 시스템',
      },
      {
        icon: '💡', subtitle: '비교 가능성', title: '압도적인 정보력과 투명한 가격',
        quote: '"여기저기 DM 보내며 가격 물어보는 번거로움은 끝"',
        body: '클럽·라운지는 주말마다, 업장 상황마다 가격과 미니멈 차지가 달라 일일이 물어봐야 하는 불편함이 있습니다. 강남·청담·압구정 핫플레이스의 실시간 상황, 주류 가격, 드레스코드를 한눈에 투명하게 비교하세요.',
        highlight: '내 취향과 예산에 딱 맞는 업장을 단 1분 만에',
      },
    ],
    intlTitle: '외국인도 이용·예약 가능한가요?',
    intlAnswer: '네, 당연히 가능합니다!',
    intlDesc: '저희 플랫폼은 글로벌 고객님들을 위해 영어·중국어·일어 소통이 가능한 전담 직원 및 MD를 배치하고 있습니다. 언어의 장벽이나 복잡한 입장 절차 걱정 없이, 현장 안내부터 신속한 프리패스 입장까지 친절하고 완벽하게 케어해 드립니다.',
    intlBadge: 'For International Guests',
    careTitle: '외국인 전용 케어 서비스',
    careItems: ['다국어 전담 직원 배치', '현장 프리패스 입장 안내', '드레스코드·입장 기준 사전 안내', '실시간 카카오톡·WeChat·LINE 소통', '외국인 친구 동반 파티 지원', '당일 예약 및 즉시 확인'],
  },
  en: {
    sectionBadge: 'Why Choose Us',
    sectionTitle: 'Why Book ',
    sectionTitleGradient: 'Through Us?',
    sectionTitle2: '',
    sectionDesc: 'There are clear reasons to choose us over countless other channels',
    reasons: [
      {
        icon: '🛡️', subtitle: 'Safety & Reliability', title: 'Verified Care — Every Time',
        quote: '"Would you trust a random Instagram MD with your money and your weekend?"',
        body: 'There are far too many cases where personal MDs ghost clients on the day of the visit, or take payment without providing proper care. We only match with strictly verified MDs, and because we book directly with the venue, we guarantee the lowest prices.',
        highlight: '200% Worry-Free Booking — No Ghosting, No Poor Service',
      },
      {
        icon: '💡', subtitle: 'Transparency & Comparison', title: 'Unmatched Info & Clear Pricing',
        quote: '"Stop DMing everywhere just to ask about prices"',
        body: 'Prices and minimum charges vary every weekend and change with venue conditions — making it a hassle to check each one. Compare real-time status, drink prices, and dress codes for Gangnam, Cheongdam, and Apgujeong hotspots in one place.',
        highlight: 'Find the perfect venue for your taste & budget in just 1 minute',
      },
    ],
    intlTitle: 'Can foreigners book too?',
    intlAnswer: 'Yes, absolutely!',
    intlDesc: 'Our platform has dedicated staff and MDs fluent in English, Chinese, and Japanese for our global guests. No language barriers, no complicated entry procedures — we provide full care from on-site guidance to fast free-pass entry.',
    intlBadge: 'For International Guests',
    careTitle: 'International Guest Care Services',
    careItems: ['Multilingual dedicated staff', 'On-site free-pass entry assistance', 'Advance dress code & entry briefing', 'Real-time WeChat · LINE communication', 'Support for parties with foreign friends', 'Same-day booking & instant confirmation'],
  },
  zh: {
    sectionBadge: '选择我们的理由',
    sectionTitle: '为什么要通过',
    sectionTitleGradient: '我们',
    sectionTitle2: '来预约？',
    sectionDesc: '在众多渠道中，选择我们有明确的理由',
    reasons: [
      {
        icon: '🛡️', subtitle: '安全性与可信度', title: '万无一失的专业服务',
        quote: '"您愿意把钱和周末交给一个来历不明的Instagram中介吗？"',
        body: '通过私人中介预约后当天失联，或只收钱不负责服务，白白毁掉周末的案例实在太多。我们只与经过严格审核的专业人员合作，并可直接与场所进行预约，因此保证最低价格。',
        highlight: '零失联·零服务缺失的200%放心预约系统',
      },
      {
        icon: '💡', subtitle: '比较与透明度', title: '压倒性信息力与透明定价',
        quote: '"不用再到处私信询价了"',
        body: '俱乐部和酒廊的价格及最低消费金额每周末都会变化，一家家询问非常麻烦。一站式透明比较江南、清潭、狎鸥亭热门场所的实时状况、酒水价格和着装要求。',
        highlight: '1分钟内找到最符合您口味与预算的场所',
      },
    ],
    intlTitle: '外国人也可以预约吗？',
    intlAnswer: '是的，当然可以！',
    intlDesc: '我们的平台为全球客户配备了能够用英语、中文、日语沟通的专属工作人员和MD。无需担心语言障碍或复杂的入场流程，从现场引导到快速免费入场，我们将亲切而完善地为您全程服务。',
    intlBadge: 'For International Guests',
    careTitle: '外国人专属服务',
    careItems: ['多语言专属工作人员', '现场免费入场引导', '提前告知着装要求和入场标准', '实时WeChat·LINE沟通', '支持外国朋友同行派对', '当天预约及即时确认'],
  },
  ja: {
    sectionBadge: '選ぶ理由',
    sectionTitle: 'なぜ',
    sectionTitleGradient: '私たちを通じて',
    sectionTitle2: '予約すべきか？',
    sectionDesc: '数多くのチャンネルの中から私たちを選ぶ明確な理由があります',
    reasons: [
      {
        icon: '🛡️', subtitle: '安全性と信頼性', title: '失敗しない検証済みのケア',
        quote: '"正体不明のインスタMDにお金と週末を預けますか？"',
        body: '個人MDに予約したところ当日連絡が取れなくなったり、お金だけ受け取ってケアなしで週末を台無しにされるケースが非常に多いです。私たちは厳しく審査したMDだけをマッチングし、会場と直接予約できるため最低価格を保証します。',
        highlight: '当日失踪·ケア不足なしの200%安心予約システム',
      },
      {
        icon: '💡', subtitle: '比較可能性', title: '圧倒的な情報力と透明な価格',
        quote: '"あちこちにDMして価格を聞く手間はもう終わり"',
        body: 'クラブ・ラウンジは週末ごと、状況ごとに価格やミニマムチャージが変わり、一つひとつ確認するのが大変です。江南·清潭·狎鷗亭ホットプレイスのリアルタイム状況、ドリンク価格、ドレスコードを一目で比較できます。',
        highlight: '好みと予算にぴったりの場所を1分で見つける',
      },
    ],
    intlTitle: '外国人も利用・予約できますか？',
    intlAnswer: 'はい、もちろんできます！',
    intlDesc: '私たちのプラットフォームにはグローバルなお客様のために英語·中国語·日本語でコミュニケーションできる専任スタッフとMDを配置しています。言語の壁や複雑な入場手続きの心配なく、現場案内から迅速なフリーパス入場まで親切かつ完璧にケアいたします。',
    intlBadge: 'For International Guests',
    careTitle: '外国人専用ケアサービス',
    careItems: ['多言語対応専任スタッフ配置', '現場フリーパス入場案内', 'ドレスコード・入場基準の事前案内', 'リアルタイムWeChat·LINEサポート', '外国人の友人と一緒のパーティー対応', '当日予約および即時確認'],
  },
}

export default function WhyUsSection() {
  const { lang } = useLanguage()
  const c = content[lang] ?? content.ko
  const colors = [
    { border: 'border-neon-pink/30', glow: 'rgba(255,45,120,0.15)', accent: 'text-neon-pink', badge: 'bg-neon-pink/10 text-neon-pink border-neon-pink/30' },
    { border: 'border-neon-cyan/30', glow: 'rgba(0,245,255,0.12)', accent: 'text-neon-cyan', badge: 'bg-neon-cyan/10 text-neon-cyan border-neon-cyan/30' },
  ]

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      {/* Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-neon-pink/30 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
          <span className="w-2 h-2 bg-neon-pink rounded-full animate-pulse" />
          <span className="text-neon-pink text-sm font-medium tracking-wide">{c.sectionBadge}</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
          {c.sectionTitle}<span className="text-gradient">{c.sectionTitleGradient}</span>{c.sectionTitle2}
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">{c.sectionDesc}</p>
      </div>

      {/* Reason cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
        {c.reasons.map((r, i) => (
          <div key={i} className={`relative glass-card rounded-2xl p-8 border ${colors[i].border} overflow-hidden`}
            style={{ boxShadow: `0 0 40px ${colors[i].glow}` }}>
            <div className="absolute top-4 right-6 text-8xl font-black opacity-5 select-none leading-none"
              style={{ color: i === 0 ? '#FF2D78' : '#00F5FF' }}>
              0{i + 1}
            </div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{r.icon}</span>
                <div>
                  <p className={`text-xs font-bold uppercase tracking-widest mb-0.5 ${colors[i].accent}`}>{r.subtitle}</p>
                  <h3 className="text-white font-black text-xl leading-tight">{r.title}</h3>
                </div>
              </div>
              <blockquote className={`text-sm font-semibold mb-4 pl-3 border-l-2 leading-relaxed ${colors[i].accent} border-current`}>
                {r.quote}
              </blockquote>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">{r.body}</p>
              <div className={`inline-flex items-start gap-2 rounded-xl px-4 py-2 text-sm font-bold border leading-snug ${colors[i].badge}`}>
                <span className="flex-shrink-0 mt-0.5">✓</span>
                <span>{r.highlight}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* International */}
      <div className="relative rounded-3xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 via-dark-700 to-neon-pink/10" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-pink/10 rounded-full blur-3xl" />
        <div className="relative glass-card border border-neon-purple/20 rounded-3xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-4xl">🌏</span>
                <div>
                  <p className="text-neon-purple text-xs font-bold uppercase tracking-widest mb-0.5">{c.intlBadge}</p>
                  <h3 className="text-white font-black text-2xl">{c.intlTitle}</h3>
                </div>
              </div>
              <p className="text-white font-bold text-lg mb-3">{c.intlAnswer}</p>
              <p className="text-gray-400 leading-relaxed mb-6">{c.intlDesc}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {[{ flag: '🇰🇷', l: '한국어' }, { flag: '🇺🇸', l: 'English' }, { flag: '🇨🇳', l: '中文' }, { flag: '🇯🇵', l: '日本語' }].map((item) => (
                  <span key={item.l} className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 text-sm text-gray-300">
                    {item.flag} {item.l}
                  </span>
                ))}
              </div>
              <div className="space-y-2 text-xs text-gray-500 mb-8">
                <p>🇺🇸 Yes! We have dedicated staff fluent in English. Free-pass entry & full care guaranteed.</p>
                <p>🇨🇳 是的！我们有专属中文客服，为您提供无障碍预约和入场服务。</p>
                <p>🇯🇵 はい！日本語対応スタッフが親切にサポートします。フリーパス入場まで完全ケア。</p>
              </div>
              <ContactButtons size="md" />
            </div>
            <div className="md:w-72 w-full glass-card rounded-2xl p-6 border border-neon-purple/20 flex-shrink-0">
              <p className="text-white font-bold mb-4 text-sm uppercase tracking-wider">{c.careTitle}</p>
              <ul className="space-y-3">
                {c.careItems.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="text-neon-purple mt-0.5 flex-shrink-0">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
