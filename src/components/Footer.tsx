import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer id="site-footer" className="w-full bg-black text-white container py-8">
      <div className='flex flex-col gap-8'>
        <div>
          <Image src={'/reward.png'} width={200} height={200} alt='logo' />
        </div>
        <div className='border-[1px] border-white'></div>

        <div className='grid md:grid-cols-5'>
          <div className=''>
            <div className='text-2xl'>
              Our Roastery
            </div>
            <div className='text-md'>
              Faasbs
            </div>
          </div>
          <div className=''>
            <div className='text-2xl'>
              Our Roastery
            </div>
            <div className='text-md'>
              Faasbs
            </div>
          </div>
          <div className=''>
            <div className='text-2xl'>
              Our Roastery
            </div>
            <div className='text-md'>
              Faasbs
            </div>
          </div>
          <div className=''>
            <div className='text-2xl'>
              Our Roastery
            </div>
            <div className='text-md'>
              Faasbs
            </div>
            <div className='text-md'>
              Faasbs
            </div>
            <div className='text-md'>
              Faasbs
            </div>
            <div className='text-md'>
              Faasbs
            </div>
            <div className='text-md'>
              Faasbs
            </div>
          </div>
          <div className=''>
            <div className='text-2xl'>
              Our Roastery
            </div>
            <div className='text-md'>
              Faasbs
            </div>
          </div>
        </div>
        <div>
          <Image src={'/logo.svg'} alt='footer logo' width={2400} height={500} />
        </div>
        <div className='flex justify-between'>
          <p>Copyright © 2025, Ozone Coffee</p>
          <p>
            Feeling adventurous?
            <a className="anchor anchor-white anchor-none" href="/products/honduras-la-orquidea">Try a lucky dip coffee</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer