'use client'

import { useState, useEffect, useRef } from 'react'

const slides = [
  {
    src: './west.mp4',
    caption: '파브스 커피 서소문점 : 온선재 with FAABS COFFEE\nin 동화약품 신사옥 1층 라운지',
  },
  {
    src: './bg-video.mp4',
    caption: 'Origin country visiting\nPanama Janson farm baby Sidra variety',
  },
]

const VideoCarousel = () => {
  const [current, setCurrent] = useState(0)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return
      if (i === current) {
        v.currentTime = 0
        v.play()
      } else {
        v.pause()
      }
    })
  }, [current])

  const prev = () => setCurrent(c => (c - 1 + slides.length) % slides.length)
  const next = () => setCurrent(c => (c + 1) % slides.length)

  return (
    <div className='h-[300px] md:h-[80vh] relative overflow-hidden bg-black'>
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <video
            ref={el => { videoRefs.current[i] = el }}
            className='w-full h-full object-cover'
            src={slide.src}
            autoPlay={i === 0}
            loop
            muted
            playsInline
          />
          {slide.caption && (
            <div className='absolute bottom-14 right-4 text-white text-sm md:text-lg font-semibold drop-shadow-md text-right whitespace-pre-line'>
              {slide.caption}
            </div>
          )}
        </div>
      ))}

      {/* 좌우 화살표 */}
      <button
        onClick={prev}
        className='absolute left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-black/30 text-white hover:bg-black/60 transition-colors'
        aria-label='이전'
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        onClick={next}
        className='absolute right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-black/30 text-white hover:bg-black/60 transition-colors'
        aria-label='다음'
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* 인디케이터 점 */}
      <div className='absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2'>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-white w-5' : 'bg-white/50'}`}
            aria-label={`슬라이드 ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default VideoCarousel
