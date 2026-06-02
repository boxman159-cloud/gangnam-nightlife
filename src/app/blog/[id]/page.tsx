import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import type React from 'react'
import Link from 'next/link'
import { posts, getPostBySlug } from '@/data/posts'
import ContactButtons from '@/components/ui/ContactButtons'
import { BreadcrumbJsonLd, ArticleJsonLd } from '@/components/seo/JsonLd'

const BASE = 'https://allnight.kr'

interface Props { params: { id: string } }

export async function generateStaticParams() {
  return posts.map((p) => ({ id: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.id)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    keywords: ['강남 클럽', '강남 라운지', '청담 라운지', '압구정 클럽', post.category, '강남 나이트'],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${BASE}/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      images: [{ url: post.image }],
    },
    alternates: { canonical: `${BASE}/blog/${post.slug}` },
  }
}

const categoryColors: Record<string, string> = {
  가이드: 'text-neon-cyan border-neon-cyan/40 bg-neon-cyan/10',
  추천:  'text-neon-pink border-neon-pink/40 bg-neon-pink/10',
  비교:  'text-neon-purple border-neon-purple/40 bg-neon-purple/10',
}

function inlineBold(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/)
  return parts.map((p, j) =>
    p.startsWith('**') ? <strong key={j} className="text-white font-semibold">{p.replace(/\*\*/g, '')}</strong> : p
  )
}

function parseTable(lines: string[], startIdx: number): { el: React.ReactNode; endIdx: number } {
  const tableLines: string[] = []
  let i = startIdx
  while (i < lines.length && lines[i].startsWith('|')) { tableLines.push(lines[i]); i++ }
  const rows = tableLines.filter((l) => !l.match(/^\|[-|: ]+\|$/))
  const parseCells = (line: string) => line.split('|').slice(1, -1).map((c) => c.trim())
  const headers = parseCells(rows[0] ?? '')
  const bodyRows = rows.slice(1)
  return {
    el: (
      <div key={startIdx} className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>{headers.map((h, j) => <th key={j} className="border border-white/10 bg-dark-700 text-neon-pink font-bold px-4 py-2 text-left whitespace-nowrap">{h}</th>)}</tr>
          </thead>
          <tbody>
            {bodyRows.map((row, ri) => {
              const cells = row.split('|').slice(1, -1).map((c) => c.trim())
              return (
                <tr key={ri} className={ri % 2 === 0 ? 'bg-dark-800' : 'bg-dark-700'}>
                  {cells.map((cell, ci) => <td key={ci} className="border border-white/10 text-gray-300 px-4 py-2 whitespace-nowrap">{cell}</td>)}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    ),
    endIdx: i,
  }
}

function renderContent(md: string) {
  const lines = md.trim().split('\n')
  const elements: React.ReactNode[] = []
  let i = 0
  while (i < lines.length) {
    const line = lines[i]
    if (line.startsWith('| ')) { const { el, endIdx } = parseTable(lines, i); elements.push(el); i = endIdx; continue }
    if (line.match(/^\d+\./)) {
      const items: string[] = []
      while (i < lines.length && lines[i].match(/^\d+\./)) { items.push(lines[i].replace(/^\d+\. /, '')); i++ }
      elements.push(<ol key={`ol-${i}`} className="list-decimal ml-6 space-y-1 my-3">{items.map((item, j) => <li key={j} className="text-gray-300 text-sm">{inlineBold(item)}</li>)}</ol>)
      continue
    }
    if (line.startsWith('- ')) {
      const items: { text: string; isX: boolean }[] = []
      while (i < lines.length && lines[i].startsWith('- ')) { items.push({ text: lines[i].replace('- ', ''), isX: lines[i].startsWith('- ❌') }); i++ }
      elements.push(<ul key={`ul-${i}`} className="ml-5 space-y-1 my-3">{items.map((item, j) => <li key={j} className={`text-sm list-disc ${item.isX ? 'text-red-400 list-none' : 'text-gray-300'}`}>{inlineBold(item.text)}</li>)}</ul>)
      continue
    }
    if (line.startsWith('## '))  { elements.push(<h2 key={i} className="text-2xl font-black text-white mt-10 mb-4">{line.replace('## ', '')}</h2>); i++; continue }
    if (line.startsWith('### ')) { elements.push(<h3 key={i} className="text-xl font-bold text-neon-pink mt-8 mb-3">{line.replace('### ', '')}</h3>); i++; continue }
    if (line.startsWith('---'))  { elements.push(<hr key={i} className="border-white/10 my-8" />); i++; continue }
    if (line.startsWith('> '))   { elements.push(<blockquote key={i} className="border-l-2 border-neon-pink pl-4 text-gray-400 italic my-4">{line.replace('> ', '')}</blockquote>); i++; continue }
    if (line === '')              { elements.push(<div key={i} className="h-2" />); i++; continue }
    elements.push(<p key={i} className="text-gray-400 leading-relaxed mb-2">{inlineBold(line)}</p>)
    i++
  }
  return elements
}

export default function BlogDetailPage({ params }: Props) {
  const post = getPostBySlug(params.id)
  if (!post) notFound()
  const otherPosts = posts.filter((p) => p.slug !== params.id).slice(0, 3)

  return (
    <div className="min-h-screen pt-24 pb-20">
      <ArticleJsonLd post={post} />
      <BreadcrumbJsonLd items={[
        { name: '홈', url: BASE },
        { name: '블로그', url: `${BASE}/blog` },
        { name: post.title, url: `${BASE}/blog/${post.slug}` },
      ]} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-8 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          블로그 목록으로
        </Link>

        <div className="mb-8">
          <span className={`text-xs font-bold uppercase tracking-widest border px-2.5 py-1 rounded-full ${categoryColors[post.category]}`}>{post.category}</span>
          <h1 className="text-3xl md:text-4xl font-black text-white mt-4 mb-3 leading-tight">{post.title}</h1>
          <div className="flex items-center gap-3 text-gray-500 text-sm">
            <span>{post.date}</span><span>·</span><span>읽는 시간 {post.readTime}</span>
          </div>
        </div>

        <div className="w-full h-64 md:h-96 rounded-2xl bg-cover bg-center mb-10" style={{ backgroundImage: `url('${post.image}')` }} />

        <article>{renderContent(post.content)}</article>

        <div className="relative rounded-2xl overflow-hidden mt-14">
          <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/20 via-neon-purple/10 to-neon-cyan/20 blur-sm" />
          <div className="relative glass-card border border-neon-pink/20 rounded-2xl px-6 py-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-1.5 h-1.5 bg-neon-pink rounded-full animate-pulse" />
              <p className="text-white font-bold">지금 바로 문의 · 예약하세요</p>
              <div className="w-1.5 h-1.5 bg-neon-pink rounded-full animate-pulse" />
            </div>
            <p className="text-gray-400 text-sm mb-6">24시간 연중무휴 · 당일 예약 가능 · 빠른 응답 보장</p>
            <ContactButtons size="md" />
          </div>
        </div>

        {otherPosts.length > 0 && (
          <div className="mt-16">
            <h3 className="text-white font-bold text-lg mb-6">다른 글 보기</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {otherPosts.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="glass-card rounded-xl overflow-hidden border border-white/5 hover:border-neon-pink/20 transition-all hover:-translate-y-0.5 group">
                  <div className="h-28 bg-cover bg-center" style={{ backgroundImage: `url('${p.image}')` }} />
                  <div className="p-3">
                    <p className="text-white text-xs font-semibold leading-snug line-clamp-2 group-hover:text-neon-pink transition-colors">{p.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
