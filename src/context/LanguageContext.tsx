'use client'

import { createContext, useContext, useState } from 'react'

export type Lang = 'ko' | 'en' | 'zh' | 'ja'

interface LanguageContextType {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (key: string) => string
}

const translations: Record<Lang, Record<string, string>> = {
  ko: {
    // Navbar
    'nav.club': '클럽',
    'nav.lounge': '라운지',
    'nav.blog': '블로그',
    'nav.rental': '대관',
    'nav.guestApply': '게스트 신청',
    'nav.quickBook': '빠른 예약',

    // Hero
    'hero.badge': '강남 No.1 클럽 & 라운지 예약 플랫폼',
    'hero.title1': '강남 클럽부터',
    'hero.title2': '라운지까지',
    'hero.desc': '강남 최고의 핫플레이스를 한 번에 예약하세요.',
    'hero.subDesc': '강남클럽 & 압구정·청담 라운지 통합 안내',
    'hero.tableBook': '🍾 실시간 테이블 예약',
    'hero.guestApply': '✨ 무료 게스트 신청',
    'hero.stat1': '제휴 업장',
    'hero.stat2': '누적 예약',
    'hero.stat3': '무료 게스트',
    'hero.scroll': '스크롤',
    'hero.contactLabel': '지금 바로 문의 · 예약하세요',

    // Venue List
    'venue.sectionTitle': '제휴 업장',
    'venue.sectionTitle2': '둘러보기',
    'venue.sectionDesc': '강남 최고의 클럽과 라운지를 직접 선택하고 바로 예약하세요',
    'venue.tabClub': '🎵 클럽',
    'venue.tabLounge': '🥂 라운지',
    'venue.regionAll': '전체',
    'venue.detail': '상세보기',
    'venue.table': '테이블',
    'venue.guest': '게스트',
    'venue.free': '무료',
    'venue.paid': '유료',
    'venue.preparing': '해당 지역의 업장 정보를 준비 중입니다.',

    // Booking Form
    'form.title': '예약 &',
    'form.title2': '문의 안내',
    'form.desc': '전화 또는 메신저로 빠르게 예약하세요. 당일 예약도 가능합니다.',
    'form.type': '예약 종류',
    'form.tableType': '🍾 테이블 예약',
    'form.guestType': '✨ 게스트 신청',
    'form.date': '날짜',
    'form.venueSelect': '희망 업장',
    'form.venuePlaceholder': '업장을 선택하세요',
    'form.name': '이름',
    'form.namePlaceholder': '홍길동',
    'form.phone': '연락처',
    'form.phonePlaceholder': '010-0000-0000',
    'form.partySize': '인원수',
    'form.message': '요청사항 (선택)',
    'form.messagePlaceholder': '생일파티, 기념일 등 특별 요청사항을 입력해 주세요.',
    'form.submitTable': '테이블 예약 신청하기',
    'form.submitGuest': '무료 게스트 리스트 등록하기',
    'form.notice': '24시간 연중무휴 · 당일 예약 가능 · 빠른 응답 보장',
    'form.successTitle': '신청 완료!',
    'form.successDesc1': '테이블 예약',
    'form.successDesc2': '게스트 리스트',
    'form.successDesc3': '신청이 접수되었습니다. 빠른 시간 내에 연락드리겠습니다.',
    'form.clubGroup': '클럽',
    'form.loungeGroup': '라운지',

    // FAQ
    'faq.title': '자주 묻는',
    'faq.title2': '질문',
    'faq.desc': '궁금한 점을 빠르게 해결하세요',
    'faq.kakao': '💬 카카오톡으로 문의하기',
    'faq.moreQuestion': '더 궁금한 점이 있으신가요?',

    // Detail Tabs
    'tab.intro': '소개',
    'tab.pricing': '이용방법 & 가격',
    'tab.faq': 'FAQ',
    'tab.booking': '예약',
  },

  en: {
    'nav.club': 'Club',
    'nav.lounge': 'Lounge',
    'nav.blog': 'Blog',
    'nav.rental': 'Venue Rental',
    'nav.guestApply': 'Guest List',
    'nav.quickBook': 'Book Now',

    'hero.badge': 'Gangnam No.1 Club & Lounge Reservation Platform',
    'hero.title1': 'From Gangnam Clubs',
    'hero.title2': 'to Lounges',
    'hero.desc': "Book Gangnam's top hotspots in one place.",
    'hero.subDesc': 'ACE(RACE) · PLUS82 Free Guest Entry | LION Table Reservation',
    'hero.tableBook': '🍾 Reserve a Table',
    'hero.guestApply': '✨ Free Guest List',
    'hero.stat1': 'Venues',
    'hero.stat2': 'Bookings',
    'hero.stat3': 'Free Guest',
    'hero.scroll': 'Scroll',
    'hero.contactLabel': 'Enquire & Reserve Right Now',

    'venue.sectionTitle': 'Partner',
    'venue.sectionTitle2': 'Venues',
    'venue.sectionDesc': 'Choose and book the best clubs and lounges in Gangnam',
    'venue.tabClub': '🎵 Club',
    'venue.tabLounge': '🥂 Lounge',
    'venue.regionAll': 'All',
    'venue.detail': 'View Details',
    'venue.table': 'Table',
    'venue.guest': 'Guest',
    'venue.free': 'Free',
    'venue.paid': 'Paid',
    'venue.preparing': 'Information for this area is being prepared.',

    'form.title': 'Reservation &',
    'form.title2': 'Enquiry',
    'form.desc': 'Contact us by phone or messenger. Same-day bookings welcome.',
    'form.type': 'Booking Type',
    'form.tableType': '🍾 Table Reservation',
    'form.guestType': '✨ Guest List',
    'form.date': 'Date',
    'form.venueSelect': 'Venue',
    'form.venuePlaceholder': 'Select a venue',
    'form.name': 'Name',
    'form.namePlaceholder': 'John Doe',
    'form.phone': 'Phone',
    'form.phonePlaceholder': '010-0000-0000',
    'form.partySize': 'Party Size',
    'form.message': 'Special Requests (Optional)',
    'form.messagePlaceholder': 'Birthday party, anniversary, etc.',
    'form.submitTable': 'Submit Table Reservation',
    'form.submitGuest': 'Register Free Guest List',
    'form.notice': '24/7 available · Same-day booking · Fast response guaranteed',
    'form.successTitle': 'Done!',
    'form.successDesc1': 'Table reservation',
    'form.successDesc2': 'Guest list',
    'form.successDesc3': 'has been submitted. We will contact you soon.',
    'form.clubGroup': 'Club',
    'form.loungeGroup': 'Lounge',

    'faq.title': 'Frequently',
    'faq.title2': 'Asked Questions',
    'faq.desc': 'Get quick answers to common questions',
    'faq.kakao': '💬 Contact via KakaoTalk',
    'faq.moreQuestion': 'Have more questions?',

    'tab.intro': 'Overview',
    'tab.pricing': 'Pricing & How to Use',
    'tab.faq': 'FAQ',
    'tab.booking': 'Book',
  },

  zh: {
    'nav.club': '夜店',
    'nav.lounge': '酒廊',
    'nav.blog': '博客',
    'nav.rental': '场地租赁',
    'nav.guestApply': '免费入场',
    'nav.quickBook': '立即预约',

    'hero.badge': '江南No.1 夜店&酒廊预约平台',
    'hero.title1': '从江南夜店',
    'hero.title2': '到酒廊',
    'hero.desc': '一站式预约江南最热门场所。',
    'hero.subDesc': 'ACE(RACE)·PLUS82 免费入场 | LION 餐桌预约',
    'hero.tableBook': '🍾 预约餐桌',
    'hero.guestApply': '✨ 免费入场申请',
    'hero.stat1': '合作场所',
    'hero.stat2': '累计预约',
    'hero.stat3': '免费入场',
    'hero.scroll': '滚动',
    'hero.contactLabel': '立即咨询 · 预约',

    'venue.sectionTitle': '合作',
    'venue.sectionTitle2': '场所',
    'venue.sectionDesc': '选择并预约江南最好的夜店和酒廊',
    'venue.tabClub': '🎵 夜店',
    'venue.tabLounge': '🥂 酒廊',
    'venue.regionAll': '全部',
    'venue.detail': '查看详情',
    'venue.table': '餐桌',
    'venue.guest': '散客',
    'venue.free': '免费',
    'venue.paid': '收费',
    'venue.preparing': '该地区的场所信息正在准备中。',

    'form.title': '预约 &',
    'form.title2': '咨询',
    'form.desc': '通过电话或即时通讯联系我们，当天预约也可以。',
    'form.type': '预约类型',
    'form.tableType': '🍾 餐桌预约',
    'form.guestType': '✨ 免费入场',
    'form.date': '日期',
    'form.venueSelect': '选择场所',
    'form.venuePlaceholder': '请选择场所',
    'form.name': '姓名',
    'form.namePlaceholder': '张三',
    'form.phone': '联系方式',
    'form.phonePlaceholder': '010-0000-0000',
    'form.partySize': '人数',
    'form.message': '特殊要求（选填）',
    'form.messagePlaceholder': '生日派对、纪念日等特殊要求',
    'form.submitTable': '提交餐桌预约',
    'form.submitGuest': '登记免费入场',
    'form.notice': '24小时全年无休 · 当天可预约 · 快速响应',
    'form.successTitle': '申请成功！',
    'form.successDesc1': '餐桌预约',
    'form.successDesc2': '免费入场',
    'form.successDesc3': '申请已提交，我们将尽快与您联系。',
    'form.clubGroup': '夜店',
    'form.loungeGroup': '酒廊',

    'faq.title': '常见',
    'faq.title2': '问题',
    'faq.desc': '快速解答您的疑问',
    'faq.kakao': '💬 通过KakaoTalk咨询',
    'faq.moreQuestion': '还有其他问题吗？',

    'tab.intro': '介绍',
    'tab.pricing': '使用方式 & 价格',
    'tab.faq': '常见问题',
    'tab.booking': '预约',
  },

  ja: {
    'nav.club': 'クラブ',
    'nav.lounge': 'ラウンジ',
    'nav.blog': 'ブログ',
    'nav.rental': '会場貸切',
    'nav.guestApply': 'ゲスト申請',
    'nav.quickBook': '予約する',

    'hero.badge': '江南No.1 クラブ＆ラウンジ予約プラットフォーム',
    'hero.title1': '江南クラブから',
    'hero.title2': 'ラウンジまで',
    'hero.desc': '江南最高のホットプレイスを一括予約。',
    'hero.subDesc': 'ACE(RACE)・PLUS82 ゲスト無料入場 | LION テーブル予約',
    'hero.tableBook': '🍾 テーブル予約',
    'hero.guestApply': '✨ 無料ゲスト申請',
    'hero.stat1': '提携店舗',
    'hero.stat2': '累計予約',
    'hero.stat3': '無料入場',
    'hero.scroll': 'スクロール',
    'hero.contactLabel': '今すぐお問い合わせ・ご予約',

    'venue.sectionTitle': '提携',
    'venue.sectionTitle2': '店舗一覧',
    'venue.sectionDesc': '江南最高のクラブとラウンジを選んですぐ予約',
    'venue.tabClub': '🎵 クラブ',
    'venue.tabLounge': '🥂 ラウンジ',
    'venue.regionAll': '全て',
    'venue.detail': '詳細を見る',
    'venue.table': 'テーブル',
    'venue.guest': 'ゲスト',
    'venue.free': '無料',
    'venue.paid': '有料',
    'venue.preparing': 'このエリアの店舗情報は準備中です。',

    'form.title': '予約 &',
    'form.title2': 'お問い合わせ',
    'form.desc': 'お電話またはメッセンジャーでご連絡ください。当日予約も受付中。',
    'form.type': '予約種別',
    'form.tableType': '🍾 テーブル予約',
    'form.guestType': '✨ ゲスト申請',
    'form.date': '日付',
    'form.venueSelect': '希望店舗',
    'form.venuePlaceholder': '店舗を選択してください',
    'form.name': '氏名',
    'form.namePlaceholder': '山田太郎',
    'form.phone': '電話番号',
    'form.phonePlaceholder': '010-0000-0000',
    'form.partySize': '人数',
    'form.message': 'ご要望（任意）',
    'form.messagePlaceholder': '誕生日パーティー、記念日など特別なご要望をご記入ください。',
    'form.submitTable': 'テーブル予約を申請する',
    'form.submitGuest': '無料ゲストリストに登録する',
    'form.notice': '24時間年中無休 · 当日予約OK · 迅速対応',
    'form.successTitle': '申請完了！',
    'form.successDesc1': 'テーブル予約',
    'form.successDesc2': 'ゲストリスト',
    'form.successDesc3': 'の申請が受け付けられました。すぐにご連絡いたします。',
    'form.clubGroup': 'クラブ',
    'form.loungeGroup': 'ラウンジ',

    'faq.title': 'よくある',
    'faq.title2': '質問',
    'faq.desc': 'よくある疑問をすばやく解決',
    'faq.kakao': '💬 KakaoTalkでお問い合わせ',
    'faq.moreQuestion': 'その他ご質問はありますか？',

    'tab.intro': '紹介',
    'tab.pricing': '料金・利用方法',
    'tab.faq': 'よくある質問',
    'tab.booking': '予約',
  },
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'ko',
  setLang: () => {},
  t: (key) => key,
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('ko')

  const t = (key: string): string =>
    translations[lang][key] ?? translations['ko'][key] ?? key

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
