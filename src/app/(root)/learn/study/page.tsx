import SectionTitle from '@/components/root/SectionTitle'
import { Button } from '@/components/ui/button'
import { BiRightArrow } from "react-icons/bi";
import Link from 'next/link'
import Image from 'next/image'
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
      {[1].map(i =>
        <Link href={`/learn/archive/${i}`} key={i}>
          <div className='flex justify-between items-center py-4 border-b hover:bg-muted/40 px-2 transition-colors cursor-pointer'>
            <div className='text-2xl'>원가 및 마진율 계산</div>
            <div className='flex items-center gap-2 text-muted-foreground text-sm'>
              이준선
              <BiRightArrow />
            </div>
          </div>
        </Link>
      )
      }
    </div >
  )
}
const youtubeVideos = [
  { id: 'Wb5mb55-wpw', title: '로스팅을 부탁해 EP.6' },
  { id: 'yPF6ngOYLT0', title: '로스팅을 부탁해 EP.5' },
  { id: 'gqsx83-Dvpg', title: '로스팅을 부탁해 EP.4' },
  { id: 'XeWAq_B00WA', title: '로스팅을 부탁해 EP.3' },
  { id: 'K9oHf4djM9E', title: '로스팅을 부탁해 EP.2' },
  { id: 'gtDu4L86hog', title: '로스팅을 부탁해 EP.1' },
]

const YoutubeSection = () => {
  return (
    <div className='flex flex-col gap-6 container my-8'>
      <div className='flex items-center justify-between'>
        <SectionTitle>YOUTUBE</SectionTitle>
        <Link
          href='https://youtube.com/playlist?list=PLeqz3CQJylxr4gEN2ucbCecFEwWfM2-g7'
          target='_blank'
          rel='noopener noreferrer'
          className='text-sm text-muted-foreground hover:underline flex items-center gap-1'
        >
          전체 재생목록 <BiRightArrow />
        </Link>
      </div>
      <p className='text-muted-foreground'>유튜브 채널 커디터 : 파브스 커피 공동대표 이준선 로스터의 로스팅을 부탁해 시리즈 연재중</p>
      <ul className='grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4'>
        {youtubeVideos.map(video => (
          <li key={video.id}>
            <Link
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target='_blank'
              rel='noopener noreferrer'
              className='flex flex-col gap-2 group'
            >
              <div className='relative aspect-video w-full overflow-hidden rounded-md'>
                <Image
                  src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                  alt={video.title}
                  fill
                  className='object-cover group-hover:scale-105 transition-transform duration-200'
                />
              </div>
              <p className='text-sm font-medium line-clamp-2 group-hover:underline'>{video.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
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
      <YoutubeSection />
    </main>
  )
}

export default page