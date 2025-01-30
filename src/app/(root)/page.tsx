
import SectionTitle from '@/components/root/SectionTitle'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const MainSection = async () => {
  return (
    <div className='container w-full mx-auto mb-16'>
      <Image src={'/bgbg.png'} width={2400} height={800} alt='main' />
    </div>
    // <section
    //   className="relative h-[300px] md:h-[80vh] min-h-[460px] w-screen object-center bg-no-repeat"
    //   style={{ backgroundImage: 'url("/bgbg.png")' }}
    // >
    //   <div className="absolute bottom-4 left-2 z-10 flex flex-col gap-16">
    //     <div className="text-5xl md:text-8xl font-bold ">
    //       <div>FAABS’</div>
    //       <div>Philosophy</div>
    //     </div>
    //     <div className="text-2xl ">
    //       생산자와 소비자를 연결하는 커피하는 사람들
    //     </div>
    //     <button className="w-64 rounded-none bg-black text-white">PREORDER</button>
    //   </div>
    // </section>
  )
}
const MainItem = ({ items }: {
  items: {
    title: string
    price: string
    roasting: string
    image: string
    link: string
  }[]
}) => {
  return (
    <section className="container py-6 ">
      <SectionTitle >
        FRESHEST ARRIVALS
      </SectionTitle>
      <ul className="home-items grid grid-cols-1 gap-12 py-16 md:grid-cols-2 xl:grid-cols-4 ">
        {items.map(item =>
          <li className="home-item relative flex flex-col items-stretch justify-between gap-6 " key={item.image}>
            <div className="mx-auto w-full ">
              <Image
                className=" w-full object-cover object-center "
                loading="lazy"
                alt="Bolivia: Brenda Palli"
                width={1966}
                height={1966.0}
                src={item.image}
              />
            </div>
            <div className="underline-black flex flex-col gap-6 ">
              <div className="font-semibold ">
                {item.title}
              </div>
              <div className="">{item.price}</div>
            </div>
            <div className="">
              <div className="">
                {item.roasting}
              </div>
            </div>
            <div className="">
              <Link href={item.link} className="ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 w-full rounded-none bg-black text-white" target='_blank'>
                스마트스토어
                <svg
                  className="icon-md tw-ml-auto "
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                >
                  <path
                    d="m16.312 9.76-1.008.992 3.072 3.36H9.24v1.44h9.136l-3.072 3.36 1.008.992 4.592-5.072-4.592-5.072Z"
                    fill="inherit"
                    className=""
                  />
                </svg>
              </Link>
            </div>
          </li>
        )}
      </ul>
    </section >
  )
}
const MainLink = ({ links }: { links: { title: string, description: string }[] }) => {
  return (
    <section className="container py-6 ">
      <SectionTitle>
        커피의 다양한 얼굴을 표현하다.
      </SectionTitle>
      <ul className="home-items grid grid-cols-1 gap-12 py-16 xl:grid-cols-4 ">
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
          </li>
        )}
      </ul>
    </section >
  )
}

const Page = () => {
  const items = [
    {
      title: '파브스 커피 블랜드 원두 3종',
      price: '11,250원~',
      roasting: 'medium light ~ dark까지 로스팅 된 다양한 추출 환경에 적합한 블랜드 원두 3종입니다.',
      image: "/shop/shop1.png",
      link: 'https://smartstore.naver.com/faabscoffee/products/5698108189'
    }, {
      title: '밀크글라스 250ml (8.5oz)',
      price: '15, 000원',
      roasting: '귀여운 파브스 로고가 그려진 밀크글라스입니다.',
      image: "/shop/shop2.png",
      link: 'https://smartstore.naver.com/faabscoffee/products/7121271220?NaPm=ct%3Dm6j7qin4%7Cci%3D6b8580997eadc7594dd2b3fc9f735443b135eb75%7Ctr%3Dslsl%7Csn%3D2694898%7Chk%3Df5b69dac8e0224166cdb377f755b828fa1ec8516&nl-query=%ED%8C%8C%EB%B8%8C%EC%8A%A4+%EC%BB%A4%ED%94%BC'
    }, {
      title: '중국 운남성 카티모르 워시드 (200g)',
      price: '13,000원',
      roasting: '컵노트: 홍차, 블랙베리, 다크 초콜릿, 실키 마우스필',
      image: "/shop/shop3.png",
      link: 'https://smartstore.naver.com/faabscoffee/products/11328935665?NaPm=ct%3Dm6j8p40g%7Cci%3Dbcdbc2d09e0003d9a8745cd07f885f29750589db%7Ctr%3Dslsl%7Csn%3D2694898%7Chk%3D33b14bc0dd4febd1737186d38a0fda5887302774&nl-query=%ED%8C%8C%EB%B8%8C%EC%8A%A4+%EC%BB%A4%ED%94%BC'
    }, {
      title: '콜롬비아 엘디비소 게이샤 세미워시드 (100g)',
      price: '15,000원',
      roasting: '컵노트: 자스민, 레몬캔디, 플로럴, 레몬글라스',
      image: "/shop/shop4.png",
      link: 'https://smartstore.naver.com/faabscoffee/products/11191778068?NaPm=ct%3Dm6j8pqe0%7Cci%3Dc0af0dd24591fd61625ceac7a8197fe7f1d848be%7Ctr%3Dslsl%7Csn%3D2694898%7Chk%3De0b1290809596bf3c65111e791d9806dd855a175&nl-query=%ED%8C%8C%EB%B8%8C%EC%8A%A4+%EC%BB%A4%ED%94%BC'
    }
  ]
  const links = [
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
    <main>
      <MainSection />
      <MainItem items={items} />
      <MainLink links={links} />
    </main>
  )
}

export default Page