import React, { ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/components/Footer'

const Layout = async ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="top-0 z-50 w-full border-b-[1px] border-white bg-white fixed">
        <div className="md:container flex w-full flex-col justify-between gap-4">
          <Link href="/" className="underline-black">
            <div className="px-2 md:px-0 w-full text-3xl font-bold md:text-4xl">FAABS COFFEE</div>
          </Link>
          <div className="px-2 md:px-0  underline-black flex justify-start gap-4 text-sm sm:text-base">
            <Link href={`/`}>
              HOME
            </Link>
            <Link href={`/wholesale`}>
              WHOLESALE
            </Link>
          </div>
        </div>
      </div>
      <div className="h-[120px]" />
      {children}
      <Footer />
    </>
  )
}

export default Layout