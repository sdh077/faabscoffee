import SectionTitle from '@/components/root/SectionTitle'
import { Button } from '@/components/ui/button'
import { BiRightArrow } from "react-icons/bi";
import Link from 'next/link'
import React from 'react'
const Hero = () => {
  return (
    <section className=' h-[300px] md:h-[80vh] bg-cover flex items-end object-center' style={{
      backgroundImage: 'url(/bgbg.png)'
    }}>
      {/* <div className='container text-white flex flex-col gap-36 '>
        <div className='text-3xl md:text-[120px]'>
          FAABS’ Philosophy
        </div>
        <div className='md:w-[600px] text-2xl'>
          커피의 다양한 얼굴을 표현하다.
        </div>
      </div> */}
    </section>
  )
}
const MainLink = ({ links }: { links: { title: string, description: string, link?: string }[] }) => {
  return (
    <section className="container pt-6 ">
      <SectionTitle>
        커피의 다양한 얼굴을 표현하다.
      </SectionTitle>
      <ul className="home-items grid grid-cols-1 gap-12 pt-16 md:grid-cols-2 xl:grid-cols-3 ">
        {links.map(link =>
          <li className="home-item relative flex flex-col gap-6 w-full" key={link.title}>
            <div className="flex flex-col gap-6 w-full">
              <div className="font-semibold text-2xl">
                {link.title}
              </div>
            </div>
            <div className="">
              {link.description}
            </div>
            {link.link && <div className="">
              <Link href={link.link}>
                <Button
                  type="button"
                  variant={'outline'}
                  tabIndex={0}
                  data-button-root=""
                >
                  Start a {link.title}
                </Button>
              </Link>
            </div>}
          </li>
        )}
      </ul>
    </section >
  )
}
const Docs = () => {
  return (
    <div className='flex flex-col gap-8 container my-16'>
      <SectionTitle>ARCHIVE</SectionTitle>
      {[1, 2, 3, 4, 5, 6, 7, 8].map(i =>
        <div className='flex justify-between' key={i}>
          <div className='text-2xl'>원가 및 마진율 계산</div>
          <div className='flex items-center'>
            이준선
            <Link href={`/learn/${i}`} >
              <BiRightArrow />
            </Link>
          </div>
        </div>
      )
      }
    </div >
  )
}
const page = () => {
  const items = [
    {
      title: '파브스 커피의 마스코트 파파빈은 커피에 인격을 부여한 캐릭터입니다.',
      description: '커피는 살아있는 유기물이며 매 해 농작물로 재배됩니다. 우리는 커피가 가진 다양한 얼굴을 표현합니다. 생산국, 지역, 커피 프로세싱, 품종의 다양성을 표현하는 로스팅을 추구합니다.'
    },
    {
      title: '공학적 접근의 로스팅',
      description: '공동대표이자 헤드 로스터인 이준선 대표는 전공한 공학적 이해를 바탕으로 로스팅을 연구하고 로스팅 결과물을 균일하게 도출하도록 파브스 로스터리를 이끌고 있습니다. 파브스 커피가 추구하는 클린컵, 질감의 표현을 다각도로 연구하며 커피를 로스팅하고 있습니다.'
    },
  ]
  return (
    <main className='flex flex-col gap-8 container my-16'>
      <div className='text-5xl'>공학적 접근의 로스팅</div>
      <div>공동대표이자 헤드 로스터인 이준선 대표는 전공한 공학적 이해를 바탕으로 로스팅을 연구하고 로스팅 결과물을 균일하게 도출하도록 파브스 로스터리를 이끌고 있습니다. 파브스 커피가 추구하는 클린컵, 질감의 표현을 다각도로 연구하며 커피를 로스팅하고 있습니다.</div>
      <Docs />
    </main>
  )
}

export default page