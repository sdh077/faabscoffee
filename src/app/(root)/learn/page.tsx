import SectionTitle from '@/components/root/SectionTitle'
import { Button } from '@/components/ui/button'
import { Link } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
const Hero = () => {
  return (
    <section className='container h-[300px] md:h-[80vh] bg-cover relative object-center' style={{
      backgroundImage: 'url(/2000.jpg)'
    }}>
      <div className='text-white absolute bottom-24 flex flex-col gap-36'>
        <div className=' text-3xl md:text-[120px]'>
          FAABS’ Philosophy
        </div>
        <div className='md:w-[600px] text-2xl'>
          커피의 다양한 얼굴을 표현하다.
        </div>
      </div>
    </section>
  )
}
const MainLink = ({ links }: { links: { title: string, description: string, link?: string }[] }) => {
  return (
    <section className="container pt-6 ">
      <SectionTitle>
        커피의 다양한 얼굴을 표현하다.
      </SectionTitle>
      <ul className="home-items grid grid-cols-1 gap-12 pt-16 md:grid-cols-2 xl:grid-cols-4 ">
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
    {
      title: '파트너사와의 공동의 성장',
      description: '커피 원두를 납품받는 파트너사들의 간절함을 잘 압니다. 커피를 추출하고 고객을 응대하는 삶을 살아가는 대표, 점주들의 운영 방향성에 맞춰 함께 성장하도록 서로를 돕는 관계를 형성하는 것이 파브스 커피 원두 납품의 특징입니다. 정보를 교류하고, 필요시 교육을 지원하며, 커피와 함께 매장이 순조롭게 운영되도록 솔루션을 제공드립니다.'
    },
    {
      title: '호스피탈리티 / 팀 칼리브레이션과 팀 워크 교육',
      description: '팀원들의 커피 칼리브레이션 (커피 맛에 대한 소통)/ 팀워크 교육이 가능합니다. 매장을 운영하는 팀원들간의 소통, 팀원들의 호스피탈리티에 대한 방향성 설정은 성공적인 매장 운영의 기본 중 하나입니다. 파브스 커피의 소통 방식을 공유하며 매장 성장에 도움을 드립니다.'
    },
    {
      title: '창업 컨설팅/ 기기 장비/ 바 동선 솔루션 프로그램',
      description: '매장 규모에 맞는 장비 선택과 바 작업 동선에 대한 솔루션을 제공합니다. 창업 컨설팅 지원 시 바 동선 설정과 기기장비, 기물 등의 선택에 솔루션을 드립니다.'
    }
  ]
  return (
    <main className='flex flex-col gap-32'>
      <Hero />
      <MainLink links={items} />
      <div className='md:w-[50%] flex gap-4 flex-col ml-[2rem]'>
        <div>
          에스프레소 원두 납품 블랜드 원두, 싱글 오리진, 디카페인 원두
        </div>
        <div>
          파브스 커피는 파트너사의 운영이 순조롭게 진행될 수 있는
        </div>
        <div>
          균일한 맛표현의 블랜드 커피와 싱글 오리진, 디카페인 커피를 에스프레소용 원두로 로스팅합니다.
        </div>
      </div>
    </main>
  )
}

export default page