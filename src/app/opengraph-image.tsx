import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = '강남 클럽앤라운지 — 강남 클럽 & 라운지 예약'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #050508 0%, #0F0F1A 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 900, color: 'white' }}>강남 클럽앤라운지</div>
        <div style={{ fontSize: 28, color: '#FF2D78', marginTop: 16 }}>강남 클럽 & 라운지 예약 플랫폼</div>
      </div>
    ),
    size
  )
}
