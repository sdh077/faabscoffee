'use client'
import { cn, getInitials } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Avatar, AvatarFallback } from './ui/avatar'
import { AvatarImage } from '@radix-ui/react-avatar'
import { Session } from 'next-auth'

const Header = ({ session }: { session: Session }) => {
  const pathname = usePathname()
  return (
    <header className='my-10 flex justify-between gap-5'>
      <Link href={'/'}>
        <Image src={'/window.svg'} alt='logo' width={100} height={100} />
      </Link>

      <ul className='flex -flex-row items-center gap-8'>
        <li>
          <Link href={'/library'}
            className={cn('text-base cursor-pointer capitalize', pathname === '/library' ? 'text-lime-200' : 'text-lime-100')}>
            Library
          </Link>
        </li>

        <li>
          <Link href={'/my-profile'}>

            <Avatar>
              {/* <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" /> */}
              <AvatarFallback className='bg-amber-100'>{getInitials(session?.user?.name || "IN")}</AvatarFallback>
            </Avatar>
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header