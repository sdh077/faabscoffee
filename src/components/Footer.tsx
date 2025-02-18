import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer id="site-footer" className="w-full bg-black text-white container py-8">
      <div className='flex flex-col gap-8'>
        <div className='flex justify-between'>
          <p>Copyright © 2025, FAABS Coffee</p>
          <p>
            <a className="anchor anchor-white anchor-none" href="/products/honduras-la-orquidea">서울 은평구 증산로15가길 15 1층 파브스커피</a>
          </p>
        </div>
        <div>
          <Link href={'/auth/signin'}>
            사업자 로그인
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer