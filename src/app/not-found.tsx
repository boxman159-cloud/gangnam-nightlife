import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-8xl font-black text-gradient mb-4">404</div>
        <h2 className="text-2xl font-bold text-white mb-3">페이지를 찾을 수 없습니다</h2>
        <p className="text-gray-400 mb-8">요청하신 업장 정보가 없거나 이동된 페이지입니다.</p>
        <Link href="/" className="btn-primary px-8 py-3 rounded-xl">
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  )
}
