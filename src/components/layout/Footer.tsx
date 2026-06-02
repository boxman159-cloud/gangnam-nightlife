import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dark-800 border-t border-white/5 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-pink to-neon-purple flex items-center justify-center">
                <span className="text-white font-black text-sm">GN</span>
              </div>
              <span className="text-white font-black text-xl">
                강남<span className="text-gradient">클럽앤라운지</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              강남 최고의 클럽과 라운지를 한 곳에서. 실시간 테이블 예약과 게스트 리스트 서비스를 제공합니다.
            </p>
            <div className="flex gap-4 mt-6">
              {['Instagram', 'KakaoTalk'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-xs text-gray-500 hover:text-neon-pink transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">서비스</h4>
            <ul className="space-y-2">
              {[
                { href: '/#clubs', label: '클럽 목록' },
                { href: '/#lounges', label: '라운지 목록' },
                { href: '/#quick-booking', label: '테이블 예약' },
                { href: '/#quick-booking', label: '게스트 신청' },
                { href: '/blog', label: '블로그' },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">연락처</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>📞 전화: 010-8215-8571</li>
              <li>💬 카카오톡: alrep0410</li>
              <li>💚 WeChat: club_jack_livin</li>
              <li>💚 LINE: clubjacklivn</li>
              <li>24시간 연중무휴 예약 문의</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
            © 2024 강남 클럽앤라운지. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['이용약관', '개인정보처리방침', '사업자정보'].map((t) => (
              <a key={t} href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
