
import { ProductRow, ProductView } from '@/components/root/ProductView'
import { Suspense } from 'react'
import SectionTitle from '@/components/root/SectionTitle'
import { ProductProp3 } from '@/interface/product'
import React from 'react'
const getProduct = async (): Promise<ProductProp3[]> => {
  return await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/product?ids=1,3,4,5,6,7`).then(res => res.json())
    .catch((e) => {
      console.log(e)
      return []
    })
}
const MainSection = async () => {
  return (
    <div className='h-[300px] md:h-[80vh] relative overflow-hidden'>
      <video
        className='absolute top-0 left-0 w-full h-full object-cover'
        src='./bg-video.mp4'
        autoPlay
        loop
        muted
        playsInline
      />
      <div className='absolute bottom-4 right-4 text-white text-sm md:text-lg font-semibold drop-shadow-md'>
        Origin country visiting
        <br />
        Panama Janson farm baby Sidra variety
      </div>
      {/* 비디오 위에 내용이 필요하면 여기에 추가 */}
    </div>
    // <div className=' h-[300px] md:h-[80vh] bg-cover relative bg-center' style={{
    //   backgroundImage: "url('/wholesale.png')"
    // }}>
    // </div>
    // <div className='container w-full mx-auto mb-16'>
    //   <Image src={'/wholesale.png'} width={2400} height={800} alt='main' />
    //   {/* <Image src={'/bgbg.png'} width={2400} height={800} alt='main' /> */}
    // </div>
  )
}
const MainItem = async ({ items }: {
  items: {
    title: string
    price: string
    roasting: string
    image: string
    link: string
  }[]
}) => {
  const products = await getProduct()
  return (
    <section className="container py-6 ">
      <SectionTitle >
        커피의 다양한 얼굴을 표현하다.
      </SectionTitle>
      <ProductView>
        <>
          {products && products.map(item =>
            <ProductRow key={item.id} item={item} />
          )}
        </>
      </ProductView>
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

const Page = async () => {
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
      <Suspense fallback={<div></div>}>
        <MainItem items={items} />
      </Suspense>
      <Suspense fallback={<div></div>}>
        <MainLink links={links} />
      </Suspense>
    </main>
  )
}

export default Page