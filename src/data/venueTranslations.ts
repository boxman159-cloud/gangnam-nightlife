import type { Lang } from '@/context/LanguageContext'

interface VenueI18n {
  description: string
  features: string[]
  tablePrice: string
  guestFee: string
  dressCode: string
  operatingHours: string
  faqs: { question: string; answer: string }[]
}

type VenueTranslationMap = Record<string, Record<Exclude<Lang, 'ko'>, VenueI18n>>

export const venueTranslations: VenueTranslationMap = {
  'club-ace': {
    en: {
      description: 'A large club near Sinsa Station renowned for its year-round operation and powerful dance floor energy. It targets fashionable and trendy young crowds, drawing the most energetic clubbers in Gangnam. Unlike most venues, it maintains consistent energy not just on weekends but late into weekday nights as well. Commercial EDM, bounce, and house music dominate, and champagne shows with VIP bottle parades keep the atmosphere lively and vibrant.',
      features: ['Year-round · Weekday late-night energy', 'Commercial EDM · Bounce · Open Format', 'High floor density · Energetic crowd', 'Champagne Show & VIP Bottle Parade'],
      tablePrice: 'Inquire for pricing',
      guestFee: 'Male: Paid / Female: Free',
      dressCode: 'Smart Casual or above (No slippers, Crocs, tracksuits)',
      operatingHours: 'Tue–Sun 23:00 ~ 07:00',
      faqs: [
        { question: 'What are the operating days?', answer: 'Open Tuesday through Sunday. Closed on Mondays.' },
        { question: 'Where is it located?', answer: 'Jamwon-dong 22-19, Seocho-gu, Seoul — near Sinsa Station.' },
        { question: 'How do I join the guest list?', answer: 'Submit a guest list request via the quick inquiry form for free or discounted entry.' },
        { question: 'Is parking available?', answer: 'Paid parking nearby. Public transport is recommended.' },
      ],
    },
    zh: {
      description: '位于新沙站附近的大型俱乐部，以全年无休的运营模式和强劲的舞池氛围著称。以时尚潮流的年轻群体为目标，汇聚了江南最有活力的俱乐部爱好者。不仅周末，平日深夜也能保持稳定的热度，是为数不多的全时段活跃场所。商业EDM、Bounce和House音乐为主，香槟秀和华丽的VIP瓶装游行让现场气氛始终热闹非凡。',
      features: ['全年无休 · 平日深夜持续活跃', '商业EDM · Bounce · 开放格式', '高密度舞池 · 积极互动的观众', '香槟秀 & VIP瓶装游行'],
      tablePrice: '询价',
      guestFee: '男性：收费 / 女性：免费',
      dressCode: '商务休闲或以上（禁止拖鞋、洞洞鞋、运动服）',
      operatingHours: '周二至周日 23:00 ~ 07:00',
      faqs: [
        { question: '营业时间是哪几天？', answer: '周二至周日营业，周一休息。' },
        { question: '在哪里？', answer: '首尔瑞草区蚕院洞22-19，新沙站附近。' },
        { question: '如何申请宾客名单？', answer: '通过快速申请表提交宾客名单申请，可享受免费或优惠入场。' },
        { question: '有停车场吗？', answer: '附近有收费停车场，建议乘坐公共交通。' },
      ],
    },
    ja: {
      description: '新沙駅近くに位置する大型クラブで、年中無休の運営と力強いダンスフロアの雰囲気で有名です。ファッショナブルでトレンディな若い層をターゲットとし、江南で最もエネルギッシュなクラバーが集まる場所として知られています。週末の夜だけでなく、平日の深夜まで安定した熱気が維持される数少ないベニューです。コマーシャルEDM・バウンス・ハウスが中心で、シャンパンショーやVIPボトルパレードで常に活気あふれる雰囲気です。',
      features: ['年中無休 · 平日深夜も熱気持続', 'コマーシャルEDM · バウンス · オープンフォーマット', '高密度フロア · 積極的な観客', 'シャンパンショー & VIPボトルパレード'],
      tablePrice: 'お問い合わせください',
      guestFee: '男性：有料 / 女性：無料',
      dressCode: 'スマートカジュアル以上（スリッパ・クロックス・ジャージ不可）',
      operatingHours: '火〜日 23:00 〜 07:00',
      faqs: [
        { question: '営業日はいつですか？', answer: '火曜日から日曜日まで営業。月曜日は定休日です。' },
        { question: '場所はどこですか？', answer: 'ソウル瑞草区蚕院洞22-19、新沙駅近く。' },
        { question: 'ゲストリストへの申請方法は？', answer: '簡単申請フォームからゲストリスト登録で無料または割引入場が可能です。' },
        { question: '駐車場はありますか？', answer: '近隣に有料駐車場あり。公共交通機関の利用を推奨します。' },
      ],
    },
  },

  'club-lion': {
    en: {
      description: 'A super-large club on Cheongdam\'s Dosan Boulevard, boasting an unmatched scale and infrastructure in the Gangnam area. Its high ceiling and open feel, massive LED screens, and cutting-edge laser systems deliver the overwhelming sensation of an indoor music festival. EDM, progressive house, and electro house are the main sounds, and large-scale events like \'GLOBAL CALLING\' featuring top domestic and international artists are frequently held. On peak weekend nights, it fills to capacity with an electrifying energy.',
      features: ['Mega-scale · High ceiling open feel', 'EDM · Progressive House · Festival-grade sound', 'Giant LED Screen & Cutting-edge Lasers', 'GLOBAL CALLING International Artist Events'],
      tablePrice: 'Inquire for pricing',
      guestFee: 'Male: Paid / Female: Free',
      dressCode: 'Smart Casual or above',
      operatingHours: 'Fri–Sat 23:00 ~ 06:00',
      faqs: [
        { question: 'What are the operating days?', answer: 'Open Friday and Saturday from midnight (23:00) to 6am the next morning.' },
        { question: 'Where is it located?', answer: '535 Dosan-daero, Cheongdam-dong, Gangnam-gu.' },
        { question: 'Is the dress code strict?', answer: 'Slippers and shorts may result in entry refusal. Smart casual or above is recommended.' },
        { question: 'How do I make a table reservation?', answer: 'Contact us via the quick inquiry form or KakaoTalk.' },
      ],
    },
    zh: {
      description: '位于清潭洞道山大路边的超大型俱乐部，拥有江南地区首屈一指的宏大规模和压倒性的基础设施。一层特有的超高层高、宽阔开放感、巨型LED大屏和顶尖激光系统，带来如同室内音乐节般的视觉震撼。EDM、Progressive House、Electro House等节日级音效为主，国内顶级DJ及"GLOBAL CALLING"等大型海外艺人邀请活动频繁举办。周末高峰时段人山人海，热力四射。',
      features: ['超大规模 · 超高层高开放感', 'EDM · Progressive House · 节日级音响', '巨型LED大屏 & 顶尖激光系统', 'GLOBAL CALLING 海外艺人邀请活动'],
      tablePrice: '询价',
      guestFee: '男性：收费 / 女性：免费',
      dressCode: '商务休闲或以上',
      operatingHours: '周五至周六 23:00 ~ 06:00',
      faqs: [
        { question: '营业时间是哪几天？', answer: '周五和周六从23:00营业至次日早上6点。' },
        { question: '在哪里？', answer: '江南区道山大路535，清潭洞。' },
        { question: '着装要求严格吗？', answer: '拖鞋、短裤等可能被拒绝入场，建议商务休闲或以上着装。' },
        { question: '如何预约餐桌？', answer: '请通过快速申请表或KakaoTalk联系我们。' },
      ],
    },
    ja: {
      description: '清潭洞のドサン大路沿いに位置する超大型クラブで、江南エリアで随一の巨大スケールと圧倒的なインフラを誇ります。1階特有の高い天井と広々とした開放感、巨大なLEDスクリーンと最先端のレーザーシステムが、まるで屋内音楽フェスのような圧倒感を演出します。EDM・プログレッシブハウス・エレクトロハウスなどフェスティバル級のサウンドと共に、「GLOBAL CALLING」のような海外アーティストを招いた大型イベントが頻繁に開催されます。',
      features: ['超大スケール · 高天井の開放感', 'EDM · プログレッシブハウス · フェスティバル級サウンド', '巨大LEDスクリーン & 最先端レーザー', 'GLOBAL CALLING 海外アーティスト招待イベント'],
      tablePrice: 'お問い合わせください',
      guestFee: '男性：有料 / 女性：無料',
      dressCode: 'スマートカジュアル以上',
      operatingHours: '金・土 23:00 〜 06:00',
      faqs: [
        { question: '営業日はいつですか？', answer: '金曜日と土曜日の23:00から翌朝6時まで営業します。' },
        { question: '場所はどこですか？', answer: '江南区道山大路535、清潭洞。' },
        { question: 'ドレスコードは厳しいですか？', answer: 'スリッパや短パンなどは入場拒否となる場合があります。スマートカジュアル以上を推奨します。' },
        { question: 'テーブル予約はどうすれば？', answer: '簡単申請フォームまたはKakaoTalkでお問い合わせください。' },
      ],
    },
  },

  'club-plus82': {
    en: {
      description: 'One of Korea\'s leading EDM after-clubs, firmly established in the Sinsa-Cheongdam area of Gangnam. Named after Korea\'s country code (+82), it showcases the essence of local club culture. Electro house, minimal bounce, and techno dominate the heavy, commercial EDM sound. Pro clubbers from nearby clubs pour in after 3–4am, and the venue maintains non-stop energy from the early hours all the way through the morning.',
      features: ['Korea\'s Premier EDM After-Club', 'Electro House · Minimal Bounce · Techno', 'Fri–Sat 03:00~10:00 · Morning energy stays strong', 'Pro clubbers\' 2nd & 3rd stop destination'],
      tablePrice: 'Inquire for pricing',
      guestFee: 'Male: Paid / Female: Free',
      dressCode: 'Casual (No slippers)',
      operatingHours: 'Fri–Sat 03:00 ~ 10:00 (After Club)',
      faqs: [
        { question: 'What is an after-club?', answer: 'A special type of club operating from 3am to 10am after other club parties end.' },
        { question: 'Where is it located?', answer: '539 Dosan-daero, Cheongdam-dong, Gangnam-gu. Near LION Super Club.' },
        { question: 'When does entry open?', answer: 'Entry available from 3am on Friday and Saturday.' },
        { question: 'How do I join the guest list?', answer: 'Submit a guest list request via the quick inquiry form for priority entry.' },
      ],
    },
    zh: {
      description: '以韩国国家代码(+82)命名的江南新沙·清潭地区代表性EDM After-Club之一，展示着本土俱乐部文化的精髓。Electro House、Minimal Bounce、Techno等震撼心脏的厚重商业EDM音效为主，从凌晨到上午全程无间断狂欢。附近俱乐部的"职业玩家"们在凌晨3-4点后涌入，直到上午仍保持不衰的气势是其最大特色。',
      features: ['韩国代表性EDM After-Club', 'Electro House · Minimal Bounce · Techno', '周五至周六 03:00~10:00 · 上午仍保持活力', '职业玩家的二次、三次圣地'],
      tablePrice: '询价',
      guestFee: '男性：收费 / 女性：免费',
      dressCode: '休闲（禁止拖鞋）',
      operatingHours: '周五至周六 03:00 ~ 10:00（After Club）',
      faqs: [
        { question: 'After-Club是什么？', answer: '其他俱乐部派对结束后，从凌晨3点营业至上午10点的特殊形式俱乐部。' },
        { question: '在哪里？', answer: '江南区道山大路539，清潭洞，LION超级俱乐部附近。' },
        { question: '几点可以入场？', answer: '周五、周六凌晨3点起可入场。' },
        { question: '如何申请宾客名单？', answer: '通过快速申请表提交宾客名单申请可享受优先入场。' },
      ],
    },
    ja: {
      description: '韓国の国番号(+82)を名前に冠した江南新沙·清潭エリアを代表するEDMアフタークラブのひとつ。エレクトロハウス・ミニマルバウンス・テクノなど重厚でコマーシャルなEDMサウンドが中心で、夜明けから朝まで休みなく駆け抜けます。近隣クラブから流れてくるプロクラバーたちが深夜3~4時以降にフロアを埋め尽くし、朝まで衰えないテンションを維持するのが最大の特徴です。',
      features: ['韓国を代表するEDMアフタークラブ', 'エレクトロハウス · ミニマルバウンス · テクノ', '金・土 03:00~10:00 · 朝までテンション持続', 'プロクラバーの2次・3次の聖地'],
      tablePrice: 'お問い合わせください',
      guestFee: '男性：有料 / 女性：無料',
      dressCode: 'カジュアル（スリッパ不可）',
      operatingHours: '金・土 03:00 〜 10:00（アフタークラブ）',
      faqs: [
        { question: 'アフタークラブとは？', answer: '他のクラブパーティが終わった深夜3時から午前10時まで営業する特別な形態のクラブです。' },
        { question: '場所はどこですか？', answer: '江南区道山大路539、清潭洞。LIONスーパークラブの近く。' },
        { question: '何時から入場できますか？', answer: '金・土曜日の深夜3時から入場可能です。' },
        { question: 'ゲストリスト申請方法は？', answer: '簡単申請フォームからゲストリスト登録で優先入場が可能です。' },
      ],
    },
  },

  'bellair-cheongdam': {
    en: {
      description: 'A luxurious and trendy lounge bar in Cheongdam that embodies the identity of the premium champagne brand "Luc Belaire." Dark, sophisticated interiors blend with Bellair\'s signature neon lighting and premium sofas, while artistic installations create a private yet trendy Cheongdam atmosphere. Extremely popular for birthday parties, gatherings, and romantic dates. The champagne lineup is exceptional, and the well-equipped private room is a well-known hideaway for celebrities and influencers.',
      features: ['Luc Belaire Brand Identity Space', 'Private Room · Celebrity & Influencer Hotspot', 'Premium Champagne Lineup', 'Birthday Party · Date · Small Gathering'],
      tablePrice: 'Inquire for pricing',
      guestFee: 'Free (Reservation required)',
      dressCode: 'Smart Casual',
      operatingHours: '24/7 inquiry available',
      faqs: [
        { question: 'How do I make a reservation?', answer: 'Call 010-8215-8571 or contact us via KakaoTalk (alrep0410) for immediate availability check. Same-day bookings available.' },
        { question: 'How do I book the private room?', answer: 'The private party room requires advance reservation. Please let us know the number of guests, date, and purpose.' },
        { question: 'Is it good for a date?', answer: 'Yes, with its mood lighting and sophisticated atmosphere, it\'s very popular for couples. Great for intimate conversations.' },
        { question: 'Can you arrange birthday party events?', answer: 'Yes, we specialize in birthday events and small parties. Let us know your requirements at the time of booking.' },
      ],
    },
    zh: {
      description: '以名品香槟品牌"Luc Belaire"为空间理念打造的高端时尚清潭洞酒廊吧。昏暗沉稳的室内装修与Bellair标志性的霓虹灯光和高级沙发完美融合，感性的艺术装置营造出私密而时尚的清潭风情。深受生日派对、聚会和约会人群喜爱，香槟阵容出色，私密包房设施完善，也是明星和网红的秘密据点。',
      features: ['Luc Belaire品牌理念空间', '私密包房 · 明星·网红常来打卡', '高端香槟阵容', '生日派对 · 约会 · 小型聚会最佳'],
      tablePrice: '询价',
      guestFee: '免费（需预约）',
      dressCode: '商务休闲',
      operatingHours: '24小时均可预约咨询',
      faqs: [
        { question: '如何预约？', answer: '致电010-8215-8571或通过KakaoTalk(alrep0410)联系，可立即确认是否有位。当天预约也可以。' },
        { question: '如何预订私密包房？', answer: '私密包房需提前预订，请告知人数、日期和用途，我们将为您量身安排。' },
        { question: '适合约会吗？', answer: '是的，昏暗的氛围灯光和精致环境非常适合情侣约会，是安静聊天的好地方。' },
        { question: '可以安排生日派对活动吗？', answer: '可以，我们专注于生日活动和小型派对，预约时告知需求我们将特别为您准备。' },
      ],
    },
    ja: {
      description: 'プレミアムシャンパンブランド「Luc Belaire」のアイデンティティを空間で体現した清潭洞の高級トレンディラウンジバー。ダークで落ち着いたインテリアにBellair特有のネオン照明と高級ソファが調和し、感性的なオブジェがプライベートかつトレンディな清潭ムードを醸し出します。誕生日パーティー・集まり・デートコースとして非常に人気が高く、プライベートルームも充実しており、芸能人やインフルエンサーが通うアジトとしても有名です。',
      features: ['Luc Belairブランドアイデンティティ空間', 'プライベートルーム · 芸能人・インフルエンサー御用達', 'プレミアムシャンパンラインナップ', '誕生日パーティー · デート · 少人数集まり最適'],
      tablePrice: 'お問い合わせください',
      guestFee: '無料（要予約）',
      dressCode: 'スマートカジュアル',
      operatingHours: '24時間予約お問い合わせ可能',
      faqs: [
        { question: '予約方法は？', answer: '010-8215-8571またはKakaoTalk(alrep0410)でお問い合わせいただければすぐにご案内します。当日予約も可能です。' },
        { question: 'プライベートルームの予約方法は？', answer: 'プライベートルームは事前予約が必要です。人数・日程・目的をお知らせください。' },
        { question: 'デートに向いていますか？', answer: 'はい、ムード照明と洗練された雰囲気でカップルのデートに非常に人気があります。' },
        { question: '誕生日イベントも対応できますか？', answer: 'はい、誕生日イベントや小規模パーティーを専門としています。ご予約時にご要望をお知らせください。' },
      ],
    },
  },

  'arju-cheongdam': {
    en: {
      description: 'A luxury lounge near Apgujeong Rodeo Station and Cheongdam\'s luxury street, renowned as an "Instagram-worthy spot" with unrivaled popularity among female guests and couples. Stunning media art, grand chandeliers, mirrors, and refined marble interiors captivate from the moment you enter. The flattering lighting tone makes it one of the hottest spaces on social media. Exquisite birthday party setups including dedicated plates, tiaras, and lettering services stand out, along with visually stunning signature cocktails.',
      features: ['Instagram Hotspot · Media Art & Marble Interior', 'Birthday Plates · Tiara · Lettering Party Service', 'Visual Signature Cocktails', 'Weekend House Music · Cheongdam Party Vibes'],
      tablePrice: 'Inquire for pricing',
      guestFee: 'Free (Reservation required)',
      dressCode: 'Smart Casual',
      operatingHours: '24/7 inquiry available',
      faqs: [
        { question: 'How do I make a reservation?', answer: 'Call 010-8215-8571 or KakaoTalk (alrep0410). Same-day bookings available.' },
        { question: 'Is there a private room?', answer: 'Yes, private rooms and terrace seating are available. Please request in advance for VIP or blind date settings.' },
        { question: 'What is the atmosphere like?', answer: 'Hotel lounge-inspired luxury and sophistication. It transitions naturally from a calm lounge mood early on to a club atmosphere later in the night.' },
        { question: 'Can I hold a birthday party or group gathering?', answer: 'Yes — birthday parties, blind dates, VIP gatherings, and group bookings are all available.' },
      ],
    },
    zh: {
      description: '位于狎鸥亭罗德奥站和清潭名品街附近，以"人生照片圣地"著称，深受女性顾客和情侣追捧的奢华酒廊。华丽的媒体艺术、大型吊灯、镜面装饰与精致大理石室内设计令人一进门便目不转睛。让人物显得光彩夺目的灯光色调使其成为SNS上最热门的打卡空间之一。生日专属拼盘、皇冠、字母装饰等细腻的派对演出令人印象深刻，视觉系招牌鸡尾酒也深受欢迎。',
      features: ['人生照片圣地 · 媒体艺术 & 大理石室内', '生日专属拼盘 · 皇冠 · 字母装饰派对演出', '视觉系招牌鸡尾酒', '周末House音乐 · 清潭派对氛围'],
      tablePrice: '询价',
      guestFee: '免费（需预约）',
      dressCode: '商务休闲',
      operatingHours: '24小时均可预约咨询',
      faqs: [
        { question: '如何预约？', answer: '致电010-8215-8571或KakaoTalk(alrep0410)联系，当天预约也可以。' },
        { question: '有私密包房吗？', answer: '有，私密包房和露台座位均可预订。需要相亲或VIP场合请提前说明。' },
        { question: '氛围怎么样？', answer: '如酒店大堂般奢华精致，早段时间宁静优雅，深夜自然过渡到俱乐部氛围。' },
        { question: '可以举办生日派对或团体聚会吗？', answer: '可以，生日派对、相亲、VIP聚会、团体预约均可接受。' },
      ],
    },
    ja: {
      description: '狎鷗亭ロデオ駅と清潭洞のラグジュアリーストリート近くに位置し、「インスタ映えスポット」として女性客やカップルに絶大な支持を受けるラグジュアリーラウンジ。入口から目を奪う華やかなメディアアート・大型シャンデリア・鏡・大理石インテリアが特徴的で、人物を美しく見せる照明トーンのおかげでSNSで最もバズる空間のひとつです。誕生日専用プレート・ティアラ・レタリングなど繊細なパーティー演出が光り、ビジュアル系のシグネチャーカクテルも人気です。',
      features: ['インスタ映えスポット · メディアアート & 大理石インテリア', '誕生日専用プレート · ティアラ · レタリングパーティー演出', 'ビジュアル系シグネチャーカクテル', '週末ハウスミュージック · 清潭パーティーバイブス'],
      tablePrice: 'お問い合わせください',
      guestFee: '無料（要予約）',
      dressCode: 'スマートカジュアル',
      operatingHours: '24時間予約お問い合わせ可能',
      faqs: [
        { question: '予約方法は？', answer: '010-8215-8571またはKakaoTalk(alrep0410)でご連絡ください。当日予約も可能です。' },
        { question: 'プライベートルームはありますか？', answer: 'はい、プライベートルームとテラス席があります。お見合いやVIP利用の場合は事前にお伝えください。' },
        { question: '雰囲気はどんな感じですか？', answer: 'ホテルラウンジのような高級感。早い時間帯は落ち着いたムードで、深夜になるとクラブの雰囲気に自然に変わります。' },
        { question: '誕生日パーティーや団体予約はできますか？', answer: 'はい、誕生日パーティー・お見合い・VIP集まり・団体予約すべて対応可能です。' },
      ],
    },
  },

  'people-terrace': {
    en: {
      description: 'A dining lounge bar in the heart of Cheongdam where you can experience the exotic feel of a European resort outdoor terrace. The signature outdoor terrace with its white building, arched windows, and lush landscaping is iconic. Inside, a luxurious grand chandelier and gold-tone lighting create a glamorous ambiance. Known as "a lounge with great food," it boasts signature bucket chicken, pasta, steak, and more. The venue transforms from a calm dining mood in the early evening to a champagne party spot as the night progresses.',
      features: ['European Resort-Style Outdoor Terrace', 'Grand Chandelier · Gold-Tone Luxury Interior', 'Signature Bucket Chicken · Pasta · Steak', 'Evening Dining → Night Champagne Party Transformation'],
      tablePrice: 'Inquire for pricing',
      guestFee: 'Free (Reservation required)',
      dressCode: 'Smart Casual',
      operatingHours: '24/7 inquiry available',
      faqs: [
        { question: 'How do I make a reservation?', answer: 'Call 010-8215-8571 or KakaoTalk (alrep0410). Same-day bookings available.' },
        { question: 'Do terrace seats require separate booking?', answer: 'Yes, terrace and rooftop seats are very popular so advance reservation is strongly recommended.' },
        { question: 'Is food available?', answer: 'Yes, high-quality western dishes including pasta and steak are served. You can enjoy both dining and drinks.' },
        { question: 'Can I book for a group event?', answer: 'Yes, birthday parties, corporate events, and group reservations are all available.' },
      ],
    },
    zh: {
      description: '清潭洞中心地带，可以感受欧洲度假胜地感性的异国风情露天露台的餐饮酒廊吧。白色建筑配以拱形窗户和绿植景观的露天露台是标志性特色，内部以豪华大型吊灯和金色调灯光华丽装饰。以"下酒菜好吃的酒廊"著称，招牌水桶炸鸡、意大利面、牛排等餐饮菜单出色。傍晚可享受安静的餐饮氛围，随着夜色深沉华丽转变为香槟派对场所。',
      features: ['欧洲度假胜地感性露天露台', '大型吊灯 · 金色调奢华室内', '招牌水桶炸鸡 · 意面 · 牛排', '傍晚餐饮 → 深夜香槟派对华丽变身'],
      tablePrice: '询价',
      guestFee: '免费（需预约）',
      dressCode: '商务休闲',
      operatingHours: '24小时均可预约咨询',
      faqs: [
        { question: '如何预约？', answer: '致电010-8215-8571或KakaoTalk(alrep0410)，当天预约也可以。' },
        { question: '露台座位需要单独预约吗？', answer: '是的，露台和屋顶座位非常抢手，强烈建议提前预约。' },
        { question: '可以用餐吗？', answer: '可以，提供意大利面、牛排等高品质西餐，可同时享受餐饮和酒水。' },
        { question: '可以团体大包场吗？', answer: '可以，生日派对、企业活动、团体预约均可接受。' },
      ],
    },
    ja: {
      description: '清潭洞の中心部で、ヨーロッパのリゾート感性の異国情緒あふれるアウトドアテラスを体感できるダイニングラウンジバー。白いトーンの建物にアーチ窓と緑豊かな造景が融合したテラス席がシグネチャーで、内部は豪華な大型シャンデリアとゴールドトーンの照明で華やかに飾られています。「フードが美味しいラウンジ」としても名高く、シグネチャーバケツチキン・パスタ・ステーキなど優れたダイニングメニューを誇ります。夕方はダイニングムードから、夜が深まるにつれシャンパンパーティースポットへと変身します。',
      features: ['ヨーロッパリゾート感性のアウトドアテラス席', '大型シャンデリア · ゴールドトーン豪華インテリア', 'シグネチャーバケツチキン · パスタ · ステーキ', '夕方ダイニング → 深夜シャンパンパーティーへ変身'],
      tablePrice: 'お問い合わせください',
      guestFee: '無料（要予約）',
      dressCode: 'スマートカジュアル',
      operatingHours: '24時間予約お問い合わせ可能',
      faqs: [
        { question: '予約方法は？', answer: '010-8215-8571またはKakaoTalk(alrep0410)でご連絡ください。当日予約も可能です。' },
        { question: 'テラス席は別途予約が必要ですか？', answer: 'はい、テラス・ルーフトップ席は人気なので事前予約を強くお勧めします。' },
        { question: '食事はできますか？', answer: 'はい、パスタ・ステーキなどクオリティの高い西洋料理を提供しています。' },
        { question: '団体貸切はできますか？', answer: 'はい、誕生日パーティー・企業イベント・団体予約すべて対応可能です。' },
      ],
    },
  },

  'color-lounge': {
    en: {
      description: 'Currently one of the most energetic and club-like dynamic party venues in Apgujeong Rodeo. Large countdown parties and named DJ lineup events are frequently held. EDM, electro house, and hip-hop dominate the wide range of music with a powerful sound system and dazzling laser lights. This venue has a strong party character — more about dancing, popping champagne, and having a great time on weekend nights rather than casual conversation. Main weekend seats are highly sought-after through competitive bidding.',
      features: ['Top Energy Party Venue in Apgujeong', 'EDM · Electro House · Hip-Hop', 'Named DJ Lineup Events', 'Dazzling Laser Lights & Sound System'],
      tablePrice: 'Inquire for pricing',
      guestFee: 'Free',
      dressCode: 'Casual',
      operatingHours: '24/7 inquiry available',
      faqs: [
        { question: 'How do I make a reservation?', answer: 'Call 010-8215-8571 or KakaoTalk (alrep0410). Same-day bookings available.' },
        { question: 'What is the atmosphere like?', answer: 'Trendy lounge with energetic and dynamic party vibes. Hip-hop music and private seating create a lively young atmosphere.' },
        { question: 'Is it a good place for photos?', answer: 'Yes, the interior and lighting are designed to be photogenic, making it very popular for SNS content.' },
        { question: 'Can I make a group reservation?', answer: 'Yes, group and VIP reservations are always in high demand. Let us know your party size and schedule.' },
      ],
    },
    zh: {
      description: '目前狎鸥亭罗德奥最具活力、最接近俱乐部的动感派对场所之一。大型倒计时派对和知名DJ阵容活动频繁举行。EDM、Electro House、Hip-Hop等多样音乐配合强劲音响系统和华丽激光灯演出。周末晚上更适合跳舞、开香槟、尽情狂欢，而非轻松聊天的派对场所特性强烈。周末主要座位竞争激烈。',
      features: ['狎鸥亭最高能量派对场地', 'EDM · Electro House · Hip-Hop', '知名DJ阵容活动', '华丽激光灯 & 音响系统'],
      tablePrice: '询价',
      guestFee: '免费',
      dressCode: '休闲',
      operatingHours: '24小时均可预约咨询',
      faqs: [
        { question: '如何预约？', answer: '致电010-8215-8571或KakaoTalk(alrep0410)，当天预约也可以。' },
        { question: '氛围怎么样？', answer: '时尚有活力的派对氛围酒廊，Hip-Hop音乐配合私密座位，年轻活跃。' },
        { question: '适合拍照吗？', answer: '是的，室内装修和灯光专为拍照而设计，是SNS打卡热门地。' },
        { question: '可以团体预约吗？', answer: '可以，团体和VIP预约一直供不应求，请告知人数和日程。' },
      ],
    },
    ja: {
      description: '現在、狎鷗亭ロデオで最もエネルギッシュでクラブに近いダイナミックなパーティーベニューのひとつ。大型カウントダウンパーティーやネームドDJのラインナップイベントが頻繁に開催されます。EDM・エレクトロハウス・ヒップホップまで幅広い音楽と強力なサウンドシステム、派手なレーザー照明が演出されます。週末のメイン席はビッディング（予約競争）が激しいほど人気があります。',
      features: ['狎鷗亭最高エネルギーパーティーベニュー', 'EDM · エレクトロハウス · ヒップホップ', 'ネームドDJラインナップイベント', '派手なレーザーライト & サウンドシステム'],
      tablePrice: 'お問い合わせください',
      guestFee: '無料',
      dressCode: 'カジュアル',
      operatingHours: '24時間予約お問い合わせ可能',
      faqs: [
        { question: '予約方法は？', answer: '010-8215-8571またはKakaoTalk(alrep0410)でご連絡ください。当日予約も可能です。' },
        { question: '雰囲気はどうですか？', answer: 'トレンディでエネルギッシュなパーティー雰囲気のラウンジです。ヒップホップ音楽とプライベート席が若々しい活気を作り出します。' },
        { question: '写真撮影に向いていますか？', answer: 'はい、インテリアと照明が感覚的に設計されており、SNS映えスポットとして人気です。' },
        { question: '団体予約はできますか？', answer: 'はい、団体・VIP予約は常に需要が高いです。人数とスケジュールをお知らせください。' },
      ],
    },
  },

  'hype-seoul': {
    en: {
      description: 'A space that garnered attention for its interior from the very beginning, designed by Studio Sayun. True to its name, it balances a \'Hype\' sensibility with a minimal yet hip street mood. Trendy hip-hop and open-format music dominate, and with sophisticated lighting tones and hip visual elements, it\'s optimized for fashion and trend-savvy young crowds who want to take photos and enjoy themselves. The longest-running lounge in Apgujeong Rodeo, beloved by many.',
      features: ['Studio Sayun Interior Design', 'Minimal & Hip Street Mood', 'Trendy Hip-Hop · Open Format Music', 'Photo-Optimized · Trend-Sensitive Crowd'],
      tablePrice: 'Inquire for pricing',
      guestFee: 'Free',
      dressCode: 'Casual',
      operatingHours: '24/7 inquiry available',
      faqs: [
        { question: 'How do I make a reservation?', answer: 'Call 010-8215-8571 or KakaoTalk (alrep0410). Same-day bookings available.' },
        { question: 'What music plays here?', answer: 'Mainly trendy hip-hop and open-format playlists with an Apgujeong sensibility for a lively atmosphere.' },
        { question: 'Is it a good birthday party venue?', answer: 'Yes, it\'s a very popular spot for birthday parties and social gatherings with spacious tables and comfortable seating.' },
        { question: 'Are HYPE Seoul and Hype Seoul the same place?', answer: 'Yes, they are the same lounge — the representative trendy lounge of Apgujeong Rodeo.' },
      ],
    },
    zh: {
      description: '由Studio Sayun负责空间设计，从开业起就以室内设计备受关注的场所。名副其实的"Hype"感性与极简而潮流的街头风格完美融合。流行Hip-Hop和开放格式音乐为主，精致的灯光和潮流视觉元素让对时尚和潮流敏感的年轻群体拍照留念、尽情享乐。是狎鸥亭罗德奥运营最久的酒廊，一直深受众多人喜爱。',
      features: ['Studio Sayun空间设计', '极简 & 潮流街头风格', '流行Hip-Hop · 开放格式音乐', '拍照最优化 · 潮流达人聚集'],
      tablePrice: '询价',
      guestFee: '免费',
      dressCode: '休闲',
      operatingHours: '24小时均可预约咨询',
      faqs: [
        { question: '如何预约？', answer: '致电010-8215-8571或KakaoTalk(alrep0410)，当天预约也可以。' },
        { question: '放什么音乐？', answer: '以潮流Hip-Hop和开放格式为主，充满狎鸥亭特有的时尚感，气氛活跃。' },
        { question: '适合生日派对吗？', answer: '非常适合，宽敞的桌椅和舒适的座位让生日派对和各种聚会都非常受欢迎。' },
        { question: 'HYPE Seoul和하잎서울是同一家吗？', answer: '是的，是同一家酒廊，是狎鸥亭罗德奥的代表性潮流酒廊。' },
      ],
    },
    ja: {
      description: 'スタジオ セイウン(Studio Sayun)が空間設計を担当し、オープン当初からインテリアで注目を浴びた場所。名前の通り「Hype」な感性と、ミニマルでありながらヒップなストリートムードが融合しています。トレンディなヒップホップとオープンフォーマット中心の音楽、洗練された照明トーンとヒップな視覚的要素のおかげで、ファッションやトレンドに敏感な若い層が写真を撮って楽しむのに最適化された空間です。狎鷗亭ロデオで最も長く営業するラウンジとして多くの人に愛されています。',
      features: ['スタジオ セイウン空間設計', 'ミニマル & ヒップ ストリートムード', 'トレンディヒップホップ · オープンフォーマット', '写真最適化 · トレンドセンシティブな若い層'],
      tablePrice: 'お問い合わせください',
      guestFee: '無料',
      dressCode: 'カジュアル',
      operatingHours: '24時間予約お問い合わせ可能',
      faqs: [
        { question: '予約方法は？', answer: '010-8215-8571またはKakaoTalk(alrep0410)でご連絡ください。当日予約も可能です。' },
        { question: 'どんな音楽が流れますか？', answer: 'トレンディなヒップホップとオープンフォーマット中心のプレイリストで、活気ある雰囲気を楽しめます。' },
        { question: '誕生日パーティーに向いていますか？', answer: 'はい、広いテーブルと快適な席で誕生日パーティーや各種集まりに非常に人気があります。' },
        { question: 'HYPEソウルとハイプソウルは同じ場所ですか？', answer: 'はい、同じラウンジです。狎鷗亭ロデオを代表するトレンディラウンジです。' },
      ],
    },
  },

  'dm-intro': {
    en: {
      description: 'A modern and intuitive lounge equipped with a massive LED display, vibrant party lighting, and a stylish DJ booth. Clean table and sofa seating arrangements are a hallmark. It captures the casual yet trendy Apgujeong sensibility perfectly. On Friday and Saturday weekends it operates as a hot lounge bar, while on weekdays it actively functions as a rental space for shoots, corporate events, and large party rooms — a testament to its high-quality and comfortable facilities.',
      features: ['Massive LED Display & Party Lighting', 'Stylish DJ Booth', 'Weekday Venue Rental Available (Shoots · Events)', 'Comfortable Sofa & Table Seating'],
      tablePrice: 'Inquire for pricing',
      guestFee: 'Free',
      dressCode: 'Smart Casual',
      operatingHours: '24/7 inquiry available',
      faqs: [
        { question: 'How do I make a reservation?', answer: 'Call 010-8215-8571 or KakaoTalk (alrep0410). Same-day bookings available.' },
        { question: 'Are DM Lounge and Intro Lounge combined?', answer: 'Yes, the original DM Lounge and Intro Lounge merged as a collaboration. The sound system and interior were significantly upgraded after the renewal.' },
        { question: 'What music plays here?', answer: 'A trendy mix of hip-hop and EDM. A powerful sound system provides an immersive atmosphere.' },
        { question: 'Is group party and event booking available?', answer: 'Yes, group gatherings, birthday parties, and various events are all welcome. Let us know your party size and schedule.' },
      ],
    },
    zh: {
      description: '配备大型LED显示屏、华丽派对灯光和精致DJ台的现代直观酒廊。整洁的桌椅和沙发座位布局是其特色，完美呈现了休闲而时尚的狎鸥亭风情。周五、周六作为热门酒廊吧运营，平日则积极用于拍摄、企业活动、大型包房等大包场，设施完善舒适。',
      features: ['大型LED显示屏 & 派对灯光', '精致DJ台', '平日可大包场（拍摄·企业活动）', '舒适沙发 & 桌椅座位'],
      tablePrice: '询价',
      guestFee: '免费',
      dressCode: '商务休闲',
      operatingHours: '24小时均可预约咨询',
      faqs: [
        { question: '如何预约？', answer: '致电010-8215-8571或KakaoTalk(alrep0410)，当天预约也可以。' },
        { question: 'DM酒廊和INTRO酒廊合并了吗？', answer: '是的，原DM酒廊和INTRO酒廊以合作形式合并重新开业，翻新后音响系统和室内装修大幅升级。' },
        { question: '放什么音乐？', answer: 'Hip-Hop和EDM混合的潮流音乐，强劲的音响系统提供身临其境的现场感。' },
        { question: '可以团体派对或活动预约吗？', answer: '可以，团体聚会、生日派对、各种活动均可预约，请告知人数和日程。' },
      ],
    },
    ja: {
      description: '巨大なLEDディスプレイ・華やかなパーティー照明・スタイリッシュなDJブースを備えたモダンで直感的なラウンジ。きれいに整えられたテーブルとソファ席の配置が特徴で、カジュアルながらもトレンディな狎鷗亭の感性をうまく体現しています。金・土の週末はホットなラウンジバーとして、平日は撮影・企業イベント・大型パーティールームのレンタルとしても活発に活用されるほど施設のクオリティが高く快適です。',
      features: ['巨大LEDディスプレイ & パーティー照明', 'スタイリッシュなDJブース', '平日ベニューレンタル可（撮影・企業イベント）', '快適なソファ & テーブル席配置'],
      tablePrice: 'お問い合わせください',
      guestFee: '無料',
      dressCode: 'スマートカジュアル',
      operatingHours: '24時間予約お問い合わせ可能',
      faqs: [
        { question: '予約方法は？', answer: '010-8215-8571またはKakaoTalk(alrep0410)でご連絡ください。当日予約も可能です。' },
        { question: 'DMラウンジとINTROラウンジが合体したのですか？', answer: 'はい、既存のDMラウンジとINTROラウンジがコラボレーションで合体し新たにオープンしました。リニューアル後サウンドシステムとインテリアが大幅にアップグレードされました。' },
        { question: 'どんな音楽が流れますか？', answer: 'ヒップホップとEDMがミックスされたトレンディな音楽。強力なサウンドシステムで臨場感ある雰囲気を楽しめます。' },
        { question: '団体パーティーやイベント予約はできますか？', answer: 'はい、団体集まり・誕生日パーティー・各種イベント予約が可能です。人数とスケジュールをお知らせください。' },
      ],
    },
  },
}

export function getVenueI18n(venueId: string, lang: Lang): VenueI18n | null {
  if (lang === 'ko') return null
  return venueTranslations[venueId]?.[lang] ?? null
}
