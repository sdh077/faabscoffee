import React, { ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Layout = async ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="top-0 z-50 w-full border-b-[1px] border-white bg-white fixed">
        <div className="md:container flex w-full flex-col justify-between gap-4">
          <div className='flex justify-between align-middle underline-black py-4'>
            <Link href="/" className="">
              <div className="px-2 md:px-0 w-full text-2xl font-extrabold md:text-4xl">FAABS COFFEE</div>
            </Link>
          </div>
          <div className="px-2 md:px-0  underline-black flex justify-start gap-4 text-sm sm:text-base">
            <Link href={`/`}>
              HOME
            </Link>
            <Link href={`/wholesale`}>
              WHOLESALE
            </Link>
            <Link href={`/shop`}>
              SHOP
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger>LEARN</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel className='font-normal'><Link href={`/learn`}>커피의 다양한 얼굴을 표현하다.</Link></DropdownMenuLabel>
                <DropdownMenuLabel className='font-normal'><Link href={`/learn/archive`}>공학적 접근의 로스팅</Link></DropdownMenuLabel>
                <DropdownMenuLabel className='font-normal'><Link href={`/learn/about`}>파파빈</Link></DropdownMenuLabel>
              </DropdownMenuContent>
            </DropdownMenu>

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