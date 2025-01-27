import React, { ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Layout = async ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="top-0 z-50 w-full border-b-[1px] border-white bg-white md:fixed">
        <div className="container flex w-full flex-col justify-between gap-4">
          <Link href="/" className="underline-black">
            <Image src="/faabslogo.png" className="w-80 pt-2" alt="logo" />
            {/* <div class="w-full text-2xl font-thin md:text-4xl">FAABS COFFEE</div> */}
          </Link>
          <div className="underline-black flex justify-start gap-4 text-sm sm:text-base">
            {['ABOUT', 'HISTORY', 'PRODUCT', 'CONTACT'].map(menu =>
              <Link href={`/${menu}`} key={menu}>
                {menu}
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="h-[120px]" />
      {children}
    </>
  )
}

export default Layout