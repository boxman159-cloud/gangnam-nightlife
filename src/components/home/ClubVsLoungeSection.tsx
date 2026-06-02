'use client'

export default function ClubVsLoungeSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
          클럽과 라운지,{' '}
          <span className="text-gradient">어떻게 다를까요?</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          강남의 밤을 즐기는 세 가지 방식 — 당신에게 맞는 선택을 찾아보세요
        </p>
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto mb-20">
        <table className="w-full text-sm min-w-[640px]">
          <thead>
            <tr>
              <th className="w-1/5 pb-4 text-left text-gray-500 font-semibold">구분</th>
              <th className="pb-4 text-center">
                <span className="inline-block px-4 py-2 rounded-xl bg-neon-pink/10 border border-neon-pink/30 text-neon-pink font-black text-base">
                  🎵 강남 대형 클럽
                </span>
                <div className="text-gray-500 text-xs mt-1">레이스, 라이언 등</div>
              </th>
              <th className="pb-4 text-center">
                <span className="inline-block px-4 py-2 rounded-xl bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan font-black text-base">
                  🥂 압구정 라운지
                </span>
                <div className="text-gray-500 text-xs mt-1">컬러, DM 등</div>
              </th>
              <th className="pb-4 text-center">
                <span className="inline-block px-4 py-2 rounded-xl bg-neon-purple/10 border border-neon-purple/30 text-neon-purple font-black text-base">
                  💎 청담 라운지
                </span>
                <div className="text-gray-500 text-xs mt-1">아르쥬, 벨레어 등</div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {[
              {
                label: '공간 성격',
                club: '하드코어 댄스, 웅장한 사운드, 메가급 규모',
                lounge: '힙하고 감각적인 인테리어, 클럽 믹스 바',
                cheongdam: '최고급 인테리어, 정제된 조명, 하이엔드 멤버십 스타일',
              },
              {
                label: '주요 음악',
                club: '하이 앤드 EDM, 일렉트릭, 대형 힙합존',
                lounge: '트렌디한 힙합, 하우스, 대중적인 매시업',
                cheongdam: '딥하우스, 재즈 감성 비트, 대화를 방해하지 않는 고급 사운드',
              },
              {
                label: '소비 규모',
                club: '수백만 원~천만 원대 초고액 테이블 위주',
                lounge: '바(Bar) 주류 소비 가능, 비교적 합리적인 바틀가',
                cheongdam: '최고급 샴페인·싱글몰트 위스키·파인 다이닝급 핑거 푸드',
              },
              {
                label: '입장 제한',
                club: '매우 엄격 (외모/복장/나이 컷 높음)',
                lounge: '상대적으로 유연 (스타일리시한 캐주얼 허용)',
                cheongdam: '프라이빗 VIP 중심, 프라이버시 최우선',
              },
              {
                label: '바이브',
                club: '폭발적인 에너지, 적극적인 유흥 및 헌팅',
                lounge: '세련된 사교, 인스타그래머블, 자연스러운 교류',
                cheongdam: '깊이 있는 대화, 비즈니스 사교, 기업가·셀럽·자산가 아지트',
              },
            ].map((row) => (
              <tr key={row.label} className="group">
                <td className="py-4 pr-4 text-gray-400 font-semibold align-top">{row.label}</td>
                <td className="py-4 px-4 text-gray-300 text-center align-top bg-neon-pink/[0.03] group-hover:bg-neon-pink/[0.06] transition-colors">
                  {row.club}
                </td>
                <td className="py-4 px-4 text-gray-300 text-center align-top bg-neon-cyan/[0.03] group-hover:bg-neon-cyan/[0.06] transition-colors">
                  {row.lounge}
                </td>
                <td className="py-4 px-4 text-gray-300 text-center align-top bg-neon-purple/[0.03] group-hover:bg-neon-purple/[0.06] transition-colors">
                  {row.cheongdam}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Detail Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Club Card */}
        <div className="rounded-2xl border border-neon-pink/20 bg-neon-pink/5 p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">🎵</span>
            <h3 className="text-xl font-black text-white">강남 클럽</h3>
          </div>
          <p className="text-neon-pink text-sm font-semibold mb-4">
            웅장한 스케일과 압도적인 에너지의 중심
          </p>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            강남 클럽은 세계적인 수준의 사운드 시스템과 대형 LED 스크린, 화려한 특수효과가 결합한
            초대형 복합 문화 엔터테인먼트 공간입니다. 페스티벌을 방불케 하는 강렬한 EDM과 힙합
            사운드가 중심을 이루며, 공간 전체를 가득 채우는 에너지를 온몸으로 만끽할 수 있는
            곳입니다.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
            국내외 탑클래스 DJ들의 플레이를 눈앞에서 즐길 수 있으며, 특별한 기념일이나 VIP 케어를
            원하는 글로벌 게스트들과 하이엔드 파티 마니아들이 모여 서울에서 가장 뜨거운 밤의 열기를
            만들어냅니다.
          </p>
        </div>

        {/* Apgujeong Lounge Card */}
        <div className="rounded-2xl border border-neon-cyan/20 bg-neon-cyan/5 p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">🥂</span>
            <h3 className="text-xl font-black text-white">압구정 라운지</h3>
          </div>
          <p className="text-neon-cyan text-sm font-semibold mb-4">
            트렌디한 감성과 소셜 네트워킹의 허브
          </p>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            압구정로데오를 중심으로 형성된 클럽형 라운지는 감각적인 인테리어와 예술적인 조명이
            어우러진 프라이빗하고 세련된 사교 공간입니다. 너무 무겁지 않으면서도 리드미컬한 하우스,
            트렌디 힙합 음악이 흐르며, 감도 높은 패션과 라이프스타일을 향유하는 크리에이터들과
            트렌드세터들이 주로 찾습니다.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
            시그니처 칵테일과 샴페인을 즐기며 지인들과 편안하게 대화를 나누거나, 감성적인 공간
            안에서 자연스럽게 교류하는 소셜 바이브(Social Vibe)를 지향합니다. 인스타그램 등 미디어를
            통해 자신만의 개성을 표현하기 좋아하는 젊은 층에게 가장 완벽한 플레이스입니다.
          </p>
        </div>

        {/* Cheongdam Lounge Card */}
        <div className="rounded-2xl border border-neon-purple/20 bg-neon-purple/5 p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">💎</span>
            <h3 className="text-xl font-black text-white">청담 라운지</h3>
          </div>
          <p className="text-neon-purple text-sm font-semibold mb-4">
            프라이빗 럭셔리와 최고급 소셜 웰니스의 정점
          </p>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            청담동 라운지는 최고급 인테리어와 정제된 조명, 클래식한 감성이 어우러진 하이엔드 멤버십
            스타일의 사교 공간입니다. 음악은 대화를 방해하지 않는 정통 하우스, 딥하우스, 혹은 재즈
            감성이 가미된 고급스러운 비트가 주를 이룹니다.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
            화려한 퍼포먼스나 시끄러운 분위기보다는, 최고급 샴페인과 싱글몰트 위스키, 파인 다이닝급
            핑거 푸드를 즐기며 비즈니스 파트너나 소중한 지인들과 깊이 있는 대화를 나누는 프라이빗한
            바이브를 제공합니다. 기업가, 셀럽, 자산가 등 프라이버시를 중요하게 생각하는 VIP
            게스트들이 주로 찾는 아지트 같은 공간입니다.
          </p>
        </div>
      </div>
    </section>
  )
}
