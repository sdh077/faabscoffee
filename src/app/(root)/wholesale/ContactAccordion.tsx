'use client'

import { useState } from 'react'
import ContactForm from '@/components/root/ContactForm'
import { ChevronDown } from 'lucide-react'

const ContactAccordion = () => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <button
        onClick={() => setOpen(prev => !prev)}
        className={`group w-full flex items-center justify-between px-8 md:px-16 py-12 md:py-16 text-left transition-colors duration-300 ${
          open ? 'bg-foreground text-background' : 'bg-foreground text-background hover:bg-foreground/90'
        }`}
      >
        <div className='flex flex-col gap-2'>
          <span className='text-xs uppercase tracking-[0.3em] opacity-60'>Contact Us</span>
          <span className='text-4xl md:text-6xl font-light tracking-tight'>
            파브스 커피 납품 신청
          </span>
        </div>
        <div className={`shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full border border-background/40 flex items-center justify-center transition-transform duration-300 ${open ? 'rotate-180' : 'group-hover:scale-110'}`}>
          <ChevronDown className='w-5 h-5 md:w-6 md:h-6' />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? 'max-h-[9999px]' : 'max-h-0'}`}
      >
        <ContactForm purpose='' />
      </div>
    </div>
  )
}

export default ContactAccordion
