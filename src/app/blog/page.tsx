import type { Metadata } from 'next'
import Link from 'next/link'
import { posts } from '@/data/posts'

export const metadata: Metadata = {
  title: '블로그 | 강남 클럽앤라운지',
  description: '강남 클럽 & 압구정·청담 라운지 최신 정보와 가이드',
}

const categoryColors: Record<string, string> = {
  가이드: 'text-neon-cyan border-neon-cyan/40 bg-neon-cyan/10',
  추천:  'text-neon-pink border-neon-pink/40 bg-neon-pink/10',
  비교:  'text-neon-purple border-neon-purple/40 bg-neon-purple/10',
}

export default function BlogPage() {
  const featured = posts[0]
  const rest = posts.slice(1)

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            나이트라이프 <span className="text-gradient">블로그</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            강남 클럽 & 압구정·청담 라운지 최신 소식, 비교 가이드, 예약 팁
          </p>
        </div>

        {/* Featured */}
        <div className="mb-16">
          <Link href={`/blog/${featured.slug}`}>
            <div className="relative h-80 md:h-[480px] rounded-3xl overflow-hidden group cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                style={{ backgroundImage: `url('${featured.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <span className={`text-xs font-bold uppercase tracking-widest border px-2.5 py-1 rounded-full ${categoryColors[featured.category]}`}>
                  {featured.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-black text-white mt-3 mb-2 max-w-2xl leading-tight group-hover:text-neon-pink transition-colors">
                  {featured.title}
                </h2>
                <p className="text-gray-400 text-sm md:text-base max-w-xl line-clamp-2">{featured.excerpt}</p>
                <div className="flex items-center gap-3 mt-4 text-gray-500 text-xs">
                  <span>{featured.date}</span>
                  <span>·</span>
                  <span>읽는 시간 {featured.readTime}</span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <article className="glass-card rounded-2xl overflow-hidden group cursor-pointer hover:border-neon-pink/20 border border-white/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-neon-pink/5 h-full">
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url('${post.image}')` }}
                  />
                  <div className="absolute inset-0 bg-dark-900/30" />
                  <div className="absolute top-3 left-3">
                    <span className={`text-xs font-bold uppercase tracking-widest border px-2.5 py-1 rounded-full backdrop-blur-sm ${categoryColors[post.category]}`}>
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-white font-bold text-base leading-snug mb-2 group-hover:text-neon-pink transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-gray-600 text-xs">
                    <span>{post.date}</span>
                    <span>읽는 시간 {post.readTime}</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

      </div>
    </div>
  )
}
