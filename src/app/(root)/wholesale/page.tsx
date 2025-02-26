import ContactForm from '@/components/root/ContactForm'
import SectionTitle from '@/components/root/SectionTitle'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <section className=' h-[300px] md:h-[80vh] bg-cover relative overflow-x-hidden' style={{
        }}>
            <div className='container '>
                <div className='absolute bottom-24 flex flex-col gap-36 w-full'>
                    <div className=' text-3xl md:text-[120px]'>Wholesale</div>
                    <div className='flex justify-between w-[50%]'>
                        <div className='text-2xl'>
                            전세계의 다양한 커피 생산자와 소비자를 연결하는 <br /> 파브스커피의 파트너가 되어주세요.
                        </div>
                        {/* <Link href={'/auth/signin'}><Button>파트너사 로그인</Button></Link> */}
                    </div>
                </div>
                <div className='right-2 md:right-24 top-[30%] absolute w-32 h-32 md:w-96 md:h-32'>
                    <Image src='/beans2.png' width={1000} height={700} alt='beans' />
                </div>
            </div>
        </section>
    )
}
const WholesaleLink = ({ links }: { links: { title: string, description: string, sub?: string }[] }) => {
    return (
        <section className="container py-6 ">
            <SectionTitle>
                커피 솔루션
            </SectionTitle>
            <ul className="home-items grid grid-cols-1 gap-12 py-16 xl:grid-cols-3 ">
                {links.map(link =>
                    <li className="home-item relative flex flex-col gap-6 w-full" key={link.title}>
                        <div className="flex flex-col gap-6 w-full">
                            <div className="font-semibold text-2xl">
                                {link.title}
                            </div>
                        </div>
                        <div className='text-xs'>
                            {link.sub}
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
const WholesaleBanner = () => {
    return (
        <section className=' h-full w-full py-8'>
            <div className='grid md:grid-cols-2 mx-16'>
                <div className='relative min-h-[300px] w-full mx-auto'>
                    <Image src='/fafabean.png' alt='circle' width={300} height={300} />
                </div>
                <div>
                    <div className='leading-10 text-3xl'>
                        커피 솔루션
                    </div>
                    <div>
                        <br />
                        파트너사의 추출 환경에 맞는 최적의 레시피 제공
                        사용 중인 머신과 그라인더, 컵 사이즈, 메뉴에 따른 추출환경 개선과 솔루션 제공
                        머신 및 그라인더 관리 노하우 전달
                        커피 맛에 영향을 주는 데일리 청소법, 주기적으로 교체해야 하는 소모품도 안내드립니다.
                        <br />
                        <br />
                        <br />
                        <br />

                        <div className='leading-10 text-3xl'>
                            창업 교육, 팀원 교육
                        </div>

                        <br />
                        창업을 준비하는 파트너사의 상황에 맞는 교육
                        창업컨설팅, 커피 추출 교육
                        팀원간의 센서리 칼리브레이션, 팀워크 교육
                        팀원간의 커피 세팅 의사소통 지원, 팀워크 센서리 칼리브레이션 교육을 진행합니다.

                    </div>
                </div>

            </div>
        </section>
    )
}
const page = () => {

    const links = [
        // {
        //     title: 'FAABS DARK BLEND',
        //     description: '땅콩, 호두 등 견과의 고소한 아로마와 다크 초콜릿의 단맛 ',
        //     sub: '고소한 맛 원두 DARK ROAST',
        //     link: ''
        // },
        // {
        //     title: "MORGAN TOWN BLEND",
        //     description: "아몬드의 고소함과 밀크초콜릿의 부드러움, 오렌지의 여운이 있는 원두",
        //     sub: '고소한 맛, 약간의 산미 MEDIUM DARK ROAST',
        //     link: ''
        // },
        // {
        //     title: 'HOMETOWN BLEND',
        //     description: '복숭아 리치의 향미, 단맛과 부드러운 질감',
        //     sub: '과일맛, 산미 원두 MEDIUM LIGHT ROAST',
        //     link: ''
        // }
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
        <main className='flex flex-col gap-32 '>
            <Hero />
            <div className=''>

                <div className='flex flex-col md:w-[50%] gap-16 mx-[2rem] leading-8'>
                    <div>
                        에스프레소 원두 납품 블랜드 원두, 싱글 오리진, 디카페인 원두
                        파브스 커피는 파트너사의 운영이 순조롭게 진행될 수 있는
                        균일한 맛표현의 블랜드 커피와 싱글 오리진, 디카페인 커피를 에스프레소용 원두로 로스팅합니다.
                    </div>
                    <div>
                        핸드드립용 싱글오리진 원두 납품
                        다양한 국가와 지역 프로세싱의 싱글오리진 원두를 파트너사의 핸드드립 운영방침에 맞게 추천, 제공드립니다.
                    </div>
                </div>
                <WholesaleLink links={links} />
                <WholesaleBanner />
                <ContactForm purpose={''} />
            </div>
        </main>
    )
}

export default page

