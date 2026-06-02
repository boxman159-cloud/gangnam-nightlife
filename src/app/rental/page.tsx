'use client'

import { useState } from 'react'
import ContactButtons from '@/components/ui/ContactButtons'
import { useLanguage } from '@/context/LanguageContext'

const i18n = {
  ko: {
    badge: 'VENUE RENTAL & PARTY',
    heroTitle: '강남 최고의 클럽 & 라운지',
    heroTitleGradient: '대관, 이제 한 곳에서.',
    heroDesc: '강남(신사·청담·압구정) 전역의 핫한 클럽, 대형 슈퍼클럽, 하이엔드 라운지, 테라스 바까지. 행사의 성격과 예산에 맞는 최적의 베뉴를 연결해 드립니다.',
    heroSub: '기업 브랜드 론칭 파티 · 기업 회식 · 팝업 스토어 · 촬영 대관 · 결혼식 피로연 · 프라이빗 파티',
    advantageTitle: '⚡ 강남 클럽앤라운지 대관 서비스만의 특장점',
    advantages: [
      { icon: '🏆', title: '원스톱 베뉴 매칭', desc: '일일이 베뉴마다 전화를 돌릴 필요 없이, 원하시는 컨셉(EDM 클럽, 힙합 라운지, 하이엔드 다이닝 바 등)만 말씀해 주시면 최적의 공간 리스트를 제안합니다.' },
      { icon: '💰', title: '합리적인 견적 조율', desc: '각 베뉴와의 공식 제휴를 통해 대관료 및 주류 보증 금액(Minimum Charge)의 거품을 빼고 합리적인 조건으로 조율해 드립니다.' },
      { icon: '🎛️', title: '행사 최적화 지원', desc: '음향·조명 시스템 활용, DJ 라인업 섭외, 주류 프리셋 구성 등 행사에 필요한 인프라 연계를 도와드립니다.' },
    ],
    processTitle: '📋 대관 신청 절차',
    process: [
      { step: '01', title: '대관 신청 접수', desc: '아래 양식 또는 고객센터를 통해 희망 조건 접수' },
      { step: '02', title: '베뉴 큐레이팅', desc: '조건에 맞는 강남권 최적의 클럽·라운지 리스트업 및 견적 비교' },
      { step: '03', title: '조건 조율', desc: '희망 베뉴 선정 후 상세 대관 조건 및 일정 최종 확정' },
      { step: '04', title: '계약 및 행사 진행', desc: '안전하고 성공적인 행사 진행' },
    ],
    formTitle: '📩 대관 문의 신청하기',
    formDesc: '기본 정보를 작성하여 제출해 주시면 담당자가 신속하게 연락드립니다.',
    fields: {
      name: '신청자명 / 법인(단체)명', namePh: '홍길동 / (주)강남클럽앤라운지',
      phone: '연락처', phonePh: '010-0000-0000',
      eventType: '행사 성격',
      date: '희망 날짜 및 시간', datePh: '예: 2025.08.15 / 저녁 7시',
      headcount: '예상 참여 인원', headcountPh: '예: 50명',
      venueStyle: '선호하는 베뉴 스타일 또는 특정 매장', venueStylePh: '예: 압구정 힙합 라운지 스타일 / 라이언 슈퍼클럽 지정',
      budget: '예상 예산 범위', budgetPh: '예: 500만원 내외 / 협의 가능',
      message: '기타 요청 사항', messagePh: 'DJ 섭외, 특수 조명, 케이터링 등 추가 요청사항을 자유롭게 적어주세요.',
    },
    eventTypes: ['기업 브랜드 론칭 파티', '기업 회식 · 단체 모임', '팝업 스토어', '촬영 대관', '결혼식 피로연', '프라이빗 파티', '생일 파티 · 기념일', '기타'],
    submitBtn: '📝 대관 문의 제출하기',
    submitNote: '제출 후 담당자가 1시간 이내 연락드립니다.',
    successTitle: '신청 완료!',
    successDesc: '대관 문의가 접수되었습니다. 담당자가 빠른 시간 내에 연락드리겠습니다.',
    quickContact: '📞 실시간 빠른 문의',
    quickContactSub: '전화·카카오톡·WeChat·LINE으로 즉시 상담',
    venueListTitle: '🏢 대관 가능 업장',
    venues: [
      { name: '라이언 슈퍼클럽', tag: '초대형 클럽' }, { name: '클럽 레이스 (에이스)', tag: '대형 클럽' },
      { name: '클럽 플러스82', tag: '애프터 클럽' }, { name: '벨레어청담', tag: '하이엔드 라운지' },
      { name: '아르쥬청담', tag: '럭셔리 라운지' }, { name: '피플더테라스', tag: '테라스 다이닝' },
      { name: '컬러라운지', tag: '파티 라운지' }, { name: '하잎서울', tag: '힙 라운지' },
      { name: 'DM X 인트로', tag: '대관 특화' },
    ],
  },
  en: {
    badge: 'VENUE RENTAL & PARTY',
    heroTitle: 'Gangnam\'s Best Clubs & Lounges —',
    heroTitleGradient: 'Venue Rental, All in One Place.',
    heroDesc: 'From hot clubs and super clubs to high-end lounges and terrace bars across Gangnam (Sinsa · Cheongdam · Apgujeong). We connect you with the perfect venue for your event type and budget.',
    heroSub: 'Corporate Brand Launch · Company Dinner · Pop-Up Store · Filming Rental · Wedding Reception · Private Party',
    advantageTitle: '⚡ Why Choose Our Venue Rental Service',
    advantages: [
      { icon: '🏆', title: 'One-Stop Venue Matching', desc: 'No need to call each venue individually. Just tell us your concept (EDM club, hip-hop lounge, high-end dining bar, etc.) and we\'ll present the best options.' },
      { icon: '💰', title: 'Fair Price Negotiation', desc: 'Through official partnerships with each venue, we eliminate inflated rental fees and minimum charges to negotiate reasonable terms on your behalf.' },
      { icon: '🎛️', title: 'Event Optimization Support', desc: 'We assist with sound and lighting systems, DJ lineup booking, drink package setup, and other event infrastructure needs.' },
    ],
    processTitle: '📋 Rental Process',
    process: [
      { step: '01', title: 'Submit Inquiry', desc: 'Send your requirements via the form below or contact us directly' },
      { step: '02', title: 'Venue Curation', desc: 'We list the best matching venues in Gangnam and provide a quote comparison' },
      { step: '03', title: 'Negotiate Terms', desc: 'Select your preferred venue and finalize details and schedule' },
      { step: '04', title: 'Contract & Event', desc: 'Enjoy a safe and successful event' },
    ],
    formTitle: '📩 Submit a Rental Inquiry',
    formDesc: 'Fill in the details below and our team will get back to you quickly.',
    fields: {
      name: 'Your Name / Organization', namePh: 'John Doe / ABC Company',
      phone: 'Phone Number', phonePh: '010-0000-0000',
      eventType: 'Event Type',
      date: 'Preferred Date & Time', datePh: 'e.g. Aug 15, 2025 / 7PM',
      headcount: 'Expected Headcount', headcountPh: 'e.g. 50 people',
      venueStyle: 'Preferred Venue Style or Specific Venue', venueStylePh: 'e.g. Apgujeong hip-hop lounge / LION Super Club',
      budget: 'Estimated Budget', budgetPh: 'e.g. ~$3,500 USD / Open to discussion',
      message: 'Additional Requests', messagePh: 'DJ booking, special lighting, catering, etc.',
    },
    eventTypes: ['Corporate Brand Launch', 'Company Dinner · Group Gathering', 'Pop-Up Store', 'Filming Rental', 'Wedding Reception', 'Private Party', 'Birthday · Anniversary', 'Other'],
    submitBtn: '📝 Submit Rental Inquiry',
    submitNote: 'Our team will contact you within 1 hour of submission.',
    successTitle: 'Inquiry Received!',
    successDesc: 'Your rental inquiry has been submitted. We will contact you shortly.',
    quickContact: '📞 Quick Contact',
    quickContactSub: 'Instant consultation via Phone · WeChat · LINE',
    venueListTitle: '🏢 Available Venues',
    venues: [
      { name: 'LION Super Club', tag: 'Mega Club' }, { name: 'Club Race (Ace)', tag: 'Large Club' },
      { name: 'Club Plus82', tag: 'After Club' }, { name: 'Bellair Cheongdam', tag: 'High-End Lounge' },
      { name: 'Arju Cheongdam', tag: 'Luxury Lounge' }, { name: 'People The Terrace', tag: 'Terrace Dining' },
      { name: 'Color Lounge', tag: 'Party Lounge' }, { name: 'Hype Seoul', tag: 'Hip Lounge' },
      { name: 'DM X Intro', tag: 'Rental Specialist' },
    ],
  },
  zh: {
    badge: 'VENUE RENTAL & PARTY',
    heroTitle: '江南顶级俱乐部 & 酒廊',
    heroTitleGradient: '场地租赁，一站搞定。',
    heroDesc: '覆盖江南全域（新沙·清潭·狎鸥亭）的热门俱乐部、大型超级俱乐部、高端酒廊、露台吧。根据活动性质和预算，为您匹配最优场地。',
    heroSub: '企业品牌发布派对 · 企业聚餐 · 快闪店 · 拍摄场地 · 婚礼答谢宴 · 私人派对',
    advantageTitle: '⚡ 我们场地租赁服务的独特优势',
    advantages: [
      { icon: '🏆', title: '一站式场地匹配', desc: '无需逐一致电各场地，只需告知所需风格（EDM俱乐部、嘻哈酒廊、高端餐吧等），我们将为您推荐最佳场地列表。' },
      { icon: '💰', title: '合理报价协调', desc: '通过与各场地的官方合作关系，去除租场费及最低消费金额的水分，为您协调出最合理的条件。' },
      { icon: '🎛️', title: '活动优化支持', desc: '协助音响·灯光系统使用、DJ阵容预约、酒水套餐配置等活动所需基础设施的对接。' },
    ],
    processTitle: '📋 租场申请流程',
    process: [
      { step: '01', title: '提交申请', desc: '通过下方表格或联系我们提交需求' },
      { step: '02', title: '场地甄选', desc: '列出符合条件的江南最优俱乐部·酒廊并比较报价' },
      { step: '03', title: '条件协商', desc: '选定场地后最终确认详细租场条件及日程' },
      { step: '04', title: '签约及活动举行', desc: '安全顺利地举办活动' },
    ],
    formTitle: '📩 提交租场咨询',
    formDesc: '填写基本信息提交后，负责人将尽快与您联系。',
    fields: {
      name: '申请人姓名 / 法人(团体)名称', namePh: '张三 / ABC公司',
      phone: '联系方式', phonePh: '010-0000-0000',
      eventType: '活动性质',
      date: '希望日期及时间', datePh: '例：2025.08.15 / 晚上7点',
      headcount: '预计参与人数', headcountPh: '例：50人',
      venueStyle: '偏好的场地风格或指定场所', venueStylePh: '例：狎鸥亭嘻哈酒廊风格 / 指定LION超级俱乐部',
      budget: '预计预算范围', budgetPh: '例：500万韩元左右 / 可协商',
      message: '其他要求', messagePh: 'DJ预约、特殊灯光、餐饮等额外要求请随意填写。',
    },
    eventTypes: ['企业品牌发布派对', '企业聚餐·团体聚会', '快闪店', '拍摄场地', '婚礼答谢宴', '私人派对', '生日·纪念日', '其他'],
    submitBtn: '📝 提交租场咨询',
    submitNote: '提交后负责人将在1小时内联系您。',
    successTitle: '申请成功！',
    successDesc: '您的租场咨询已提交，负责人将尽快与您联系。',
    quickContact: '📞 实时快速咨询',
    quickContactSub: '通过电话·WeChat·LINE即时咨询',
    venueListTitle: '🏢 可租赁场地',
    venues: [
      { name: 'LION超级俱乐部', tag: '超大型俱乐部' }, { name: 'Club Race（Ace）', tag: '大型俱乐部' },
      { name: 'Club Plus82', tag: 'After Club' }, { name: '贝莱尔清潭', tag: '高端酒廊' },
      { name: '阿如清潭', tag: '奢华酒廊' }, { name: '皮普尔露台', tag: '露台餐饮' },
      { name: '彩色酒廊', tag: '派对酒廊' }, { name: 'Hype Seoul', tag: '潮流酒廊' },
      { name: 'DM X Intro', tag: '租赁专业场地' },
    ],
  },
  ja: {
    badge: 'VENUE RENTAL & PARTY',
    heroTitle: '江南最高のクラブ & ラウンジ —',
    heroTitleGradient: '会場貸切、ここ一箇所で。',
    heroDesc: '江南全域（新沙·清潭·狎鷗亭）のホットなクラブ、大型スーパークラブ、ハイエンドラウンジ、テラスバーまで。イベントの性格と予算に合った最適なベニューをご紹介します。',
    heroSub: '企業ブランドローンチパーティー · 会社宴会 · ポップアップストア · 撮影貸切 · 結婚披露宴 · プライベートパーティー',
    advantageTitle: '⚡ 私たちの会場貸切サービスの特長',
    advantages: [
      { icon: '🏆', title: 'ワンストップ ベニューマッチング', desc: '各ベニューに一つひとつ電話する必要はありません。ご希望のコンセプト（EDMクラブ、ヒップホップラウンジ、ハイエンドダイニングバーなど）をお伝えいただくだけで最適な候補リストをご提案します。' },
      { icon: '💰', title: '合理的な見積もり調整', desc: '各ベニューとの公式提携を通じて、貸切料およびミニマムチャージの上乗せをなくし、合理的な条件で調整いたします。' },
      { icon: '🎛️', title: 'イベント最適化サポート', desc: '音響・照明システムの活用、DJラインナップの手配、ドリンクパッケージ構成など、イベントに必要なインフラ連携をお手伝いします。' },
    ],
    processTitle: '📋 貸切申請の流れ',
    process: [
      { step: '01', title: '申請受付', desc: '下記フォームまたはお問い合わせ窓口からご希望条件を送信' },
      { step: '02', title: 'ベニュー選定', desc: '条件に合う江南の最適なクラブ・ラウンジをリストアップし見積もり比較' },
      { step: '03', title: '条件調整', desc: '希望ベニュー選定後、詳細な貸切条件と日程を最終確定' },
      { step: '04', title: '契約とイベント実施', desc: '安全で成功したイベントを実施' },
    ],
    formTitle: '📩 貸切お問い合わせフォーム',
    formDesc: '基本情報をご記入の上送信いただければ、担当者が迅速にご連絡いたします。',
    fields: {
      name: '申請者名 / 法人(団体)名', namePh: '山田太郎 / ABC株式会社',
      phone: '電話番号', phonePh: '010-0000-0000',
      eventType: 'イベントの種類',
      date: 'ご希望日時', datePh: '例：2025.08.15 / 夜7時',
      headcount: '参加予定人数', headcountPh: '例：50名',
      venueStyle: 'ご希望のベニュースタイルまたは特定の店舗', venueStylePh: '例：狎鷗亭ヒップホップラウンジスタイル / LIONスーパークラブ指定',
      budget: '想定予算', budgetPh: '例：50万円程度 / 応相談',
      message: 'その他ご要望', messagePh: 'DJ手配、特殊照明、ケータリングなど追加要望を自由にご記入ください。',
    },
    eventTypes: ['企業ブランドローンチパーティー', '会社宴会・団体集まり', 'ポップアップストア', '撮影貸切', '結婚披露宴', 'プライベートパーティー', '誕生日・記念日', 'その他'],
    submitBtn: '📝 貸切お問い合わせを送信',
    submitNote: '送信後、担当者が1時間以内にご連絡いたします。',
    successTitle: '申請完了！',
    successDesc: '貸切のお問い合わせを受け付けました。担当者が早急にご連絡いたします。',
    quickContact: '📞 リアルタイム迅速お問い合わせ',
    quickContactSub: '電話・WeChat・LINEで即時相談',
    venueListTitle: '🏢 貸切可能な店舗',
    venues: [
      { name: 'LIONスーパークラブ', tag: '超大型クラブ' }, { name: 'クラブRace（Ace）', tag: '大型クラブ' },
      { name: 'クラブPlus82', tag: 'アフタークラブ' }, { name: 'ベレアー清潭', tag: 'ハイエンドラウンジ' },
      { name: 'アルジュ清潭', tag: 'ラグジュアリーラウンジ' }, { name: 'ピープルザテラス', tag: 'テラスダイニング' },
      { name: 'カラーラウンジ', tag: 'パーティーラウンジ' }, { name: 'ハイプソウル', tag: 'ヒップラウンジ' },
      { name: 'DM X イントロ', tag: '貸切特化' },
    ],
  },
}

export default function RentalPage() {
  const { lang } = useLanguage()
  const c = i18n[lang] ?? i18n.ko

  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', phone: '', eventType: '', date: '', headcount: '', venueStyle: '', budget: '', message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('https://formspree.io/f/xgoqjzpg', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        이름: form.name, 연락처: form.phone, 행사성격: form.eventType,
        희망날짜: form.date, 예상인원: form.headcount,
        베뉴스타일: form.venueStyle, 예산: form.budget, 기타: form.message,
      }),
    })
    if (res.ok) setSubmitted(true)
  }

  const inputClass = 'w-full bg-dark-700 border border-white/10 text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-neon-pink/60 focus:shadow-[0_0_0_2px_rgba(255,45,120,0.15)] transition-all'
  const labelClass = 'block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2'

  return (
    <div className="min-h-screen pt-24 pb-20">

      {/* Hero */}
      <section className="relative overflow-hidden py-20 mb-10">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 via-dark-900 to-neon-pink/10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-neon-purple/30 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 bg-neon-purple rounded-full animate-pulse" />
            <span className="text-neon-purple text-sm font-medium tracking-wide">{c.badge}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            {c.heroTitle}<br /><span className="text-gradient">{c.heroTitleGradient}</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed mb-4">{c.heroDesc}</p>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">{c.heroSub}</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 특장점 */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-2">
              {c.advantageTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.advantages.map((a, i) => (
              <div key={i} className="glass-card border border-neon-purple/20 rounded-2xl p-6"
                style={{ boxShadow: '0 0 30px rgba(191,0,255,0.08)' }}>
                <div className="text-4xl mb-4">{a.icon}</div>
                <h3 className="text-white font-bold text-lg mb-3">{a.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 프로세스 */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-2">{c.processTitle}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {c.process.map((p, i) => (
              <div key={i} className="relative glass-card border border-white/5 rounded-2xl p-6 text-center">
                {i < c.process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-px bg-gradient-to-r from-neon-purple to-transparent z-10" />
                )}
                <div className="text-4xl font-black text-gradient mb-3 opacity-30">{p.step}</div>
                <h3 className="text-white font-bold text-sm mb-2">{p.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 폼 + 사이드 */}
        <section className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-20">
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-black text-white mb-2">{c.formTitle}</h2>
            <p className="text-gray-400 text-sm mb-8">{c.formDesc}</p>

            {submitted ? (
              <div className="glass-card neon-border rounded-2xl p-12 text-center">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-white mb-2">{c.successTitle}</h3>
                <p className="text-gray-400">{c.successDesc}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 space-y-5 border border-white/5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>{c.fields.name}</label>
                    <input type="text" required placeholder={c.fields.namePh}
                      value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>{c.fields.phone}</label>
                    <input type="tel" required placeholder={c.fields.phonePh}
                      value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>{c.fields.eventType}</label>
                  <div className="flex flex-wrap gap-2">
                    {c.eventTypes.map((type) => (
                      <button key={type} type="button"
                        onClick={() => setForm({ ...form, eventType: type })}
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                          form.eventType === type
                            ? 'border-neon-purple bg-neon-purple/10 text-neon-purple'
                            : 'border-white/10 text-gray-400 hover:border-white/30'
                        }`}>
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>{c.fields.date}</label>
                    <input type="text" placeholder={c.fields.datePh}
                      value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>{c.fields.headcount}</label>
                    <input type="text" placeholder={c.fields.headcountPh}
                      value={form.headcount} onChange={(e) => setForm({ ...form, headcount: e.target.value })}
                      className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>{c.fields.venueStyle}</label>
                  <input type="text" placeholder={c.fields.venueStylePh}
                    value={form.venueStyle} onChange={(e) => setForm({ ...form, venueStyle: e.target.value })}
                    className={inputClass} />
                </div>

                <div>
                  <label className={labelClass}>{c.fields.budget}</label>
                  <input type="text" placeholder={c.fields.budgetPh}
                    value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })}
                    className={inputClass} />
                </div>

                <div>
                  <label className={labelClass}>{c.fields.message}</label>
                  <textarea rows={4} placeholder={c.fields.messagePh}
                    value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputClass} resize-none`} />
                </div>

                <button type="submit" className="btn-primary w-full py-4 text-base rounded-xl">
                  {c.submitBtn}
                </button>
                <p className="text-center text-gray-600 text-xs">{c.submitNote}</p>
              </form>
            )}
          </div>

          {/* 사이드 */}
          <div className="lg:col-span-2 space-y-6">
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/20 via-neon-purple/10 to-neon-cyan/20 blur-sm" />
              <div className="relative glass-card border border-neon-pink/20 rounded-2xl p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 bg-neon-pink rounded-full animate-pulse" />
                  <p className="text-white font-bold text-sm">{c.quickContact}</p>
                  <div className="w-1.5 h-1.5 bg-neon-pink rounded-full animate-pulse" />
                </div>
                <p className="text-gray-400 text-xs mb-5">{c.quickContactSub}</p>
                <ContactButtons size="sm" />
              </div>
            </div>

            <div className="glass-card border border-white/5 rounded-2xl p-6">
              <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">{c.venueListTitle}</h3>
              <ul className="space-y-2">
                {c.venues.map((v) => (
                  <li key={v.name} className="flex items-center justify-between">
                    <span className="text-gray-300 text-sm">{v.name}</span>
                    <span className="text-xs text-gray-500 border border-white/10 px-2 py-0.5 rounded-full">{v.tag}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
