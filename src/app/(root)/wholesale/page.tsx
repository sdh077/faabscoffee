import ContactAccordion from './ContactAccordion'
import SectionTitle from '@/components/root/SectionTitle'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <section className='flex flex-col md:flex-row md:h-[85vh]'>
            {/* 영상 - 모바일: 상단, 데스크탑: 왼쪽 절반 */}
            <div className='w-full md:w-1/2 h-[260px] md:h-full overflow-hidden'>
                <video
                    src='/bg.mp4'
                    autoPlay
                    muted
                    loop
                    playsInline
                    className='w-full h-full object-cover'
                />
            </div>
            {/* 텍스트 - 모바일: 영상 바로 아래, 데스크탑: 오른쪽 절반 */}
            <div className='w-full md:w-1/2 flex flex-col justify-end pb-12 md:pb-24 px-8 md:px-16 gap-6 md:gap-10 bg-black text-white'>
                <div className='flex items-end gap-6'>
                    <div className='text-4xl md:text-[80px] font-light leading-none tracking-tight'>Wholesale</div>
                    <div className='hidden md:block w-px h-16 bg-white/60 mb-2' />
                    <div className='hidden md:block text-sm text-white/80 leading-7 mb-2'>
                        파트너사와 함께 성장하는 파브스 커피 원두 납품
                    </div>
                </div>
                <div className='md:hidden text-sm text-white/80 leading-6'>
                    전세계의 다양한 커피 생산자와 소비자를 연결하는<br />파브스커피의 파트너가 되어주세요.
                </div>
                <div className='w-16 h-px bg-white/60' />
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
                            <div className="font-medium text-xl">
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
const partnerImages = [
    'https://k.kakaocdn.net/dn/DJ8Td/dJMcadUH1Jv/SEiKXfVwmSSkiAOKb5SKo1/img_xl.jpg',
    'https://k.kakaocdn.net/dn/bqZWjX/dJMcajm5peA/guYYnwy0Ri1E4tcwYoYMv1/img_xl.jpg',
    'https://k.kakaocdn.net/dn/cbNfdJ/dJMcag41sCk/MkqtqPa2Kgh6o8DP1WYClK/img_xl.jpg',
    'https://k.kakaocdn.net/dn/zH0aJ/dJMcaiV1aje/2ziovaKMH0OXZNkKv2pk61/img_xl.jpg',
    'https://k.kakaocdn.net/dn/b0FDlr/dJMcahJDvoD/NJWh9rw6qbakn0tqUrqL5K/img_xl.jpg',
    'https://k.kakaocdn.net/dn/PVMaj/dJMcadUH1Jw/ZHfT7bGK1AsWi9sk3x63S0/img_xl.jpg',
    'https://k.kakaocdn.net/dn/nAg9p/dJMcag41sCj/L2Gum3K7Fqnq9yEtvEUMO1/img_xl.jpg',
    'https://k.kakaocdn.net/dn/cY8JdL/dJMcabCDKBl/6bIbGYj9uRa3k38I4CllHK/img_xl.jpg',
    'https://k.kakaocdn.net/dn/bOUgfZ/dJMcahJDvoE/KqCbwmagvDQDKNPLZ7T2U0/img_xl.jpg',
    'https://k.kakaocdn.net/dn/tbPM2/dJMcadUH1Jx/twxoUgZgRjIrdpHKMMF0q0/img_xl.jpg',
    'https://k.kakaocdn.net/dn/w7tqf/dJMcahv5Btw/nYTyWQKiUAw4oczzc5lGDK/img_xl.jpg',
    'https://k.kakaocdn.net/dn/c5kMWH/dJMcaiV1ajd/K8aQJwcYmnVc5B7SWkxNXK/img_xl.jpg',
]

const PartnerSection = () => {
    return (
        <section className='container py-16 flex flex-col gap-8'>
            <SectionTitle>파브스 커피와 함께하는 파트너사</SectionTitle>
            <p className='text-muted-foreground leading-7'>
                파브스 커피를 사랑해주시는 많은 분들께 감사 인사를 드립니다.<br />
                2020년 7월 로스터리 오픈부터 함께 해 주신 거래처부터 신규 거래처까지,
                함께하는 파트너사들이 계셔서 로스팅하며 소통할 수 있는 것 같습니다.
            </p>
            <div className='columns-2 md:columns-3 xl:columns-4 gap-3 space-y-3'>
                {partnerImages.map((src, i) => (
                    <div key={i} className='break-inside-avoid overflow-hidden rounded-md'>
                        <Image
                            src={src}
                            alt={`파트너사 ${i + 1}`}
                            width={600}
                            height={600}
                            className='w-full h-auto object-cover'
                        />
                        {i === partnerImages.length - 1 && (
                            <p className='text-xs text-muted-foreground mt-1 px-1'>카페 호기심 : 서울 서대문구 창천동</p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}

const WholesaleBanner = () => {
    return (
        <section className='h-full w-full py-8'>
            <div className='grid md:grid-cols-2 container'>
                <div className='relative min-h-[300px] w-full'>
                    <Image src='/fafabean.png' alt='circle' width={300} height={300} />
                </div>
                <div>
                    <div className='leading-10 text-xl md:text-3xl'>
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

                        <div className='leading-10 text-xl md:text-3xl'>
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
                <ContactAccordion />

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
                <PartnerSection />
                <WholesaleBanner />
            </div>
            {/* 카카오톡 채널 플로팅 버튼 */}
            <Link
                href='https://pf.kakao.com/_qZRYxb'
                target='_blank'
                rel='noopener noreferrer'
                className='fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full shadow-lg text-sm font-medium text-[#191919] transition-transform hover:scale-105 active:scale-95'
                style={{ backgroundColor: '#FEE500' }}
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 5.924 2 10.783c0 3.13 1.874 5.88 4.703 7.497L5.6 22l4.259-2.248A11.4 11.4 0 0 0 12 19.566c5.523 0 10-3.924 10-8.783C22 5.924 17.523 2 12 2Z" />
                </svg>
                카카오톡 채널 추가
            </Link>
        </main>
    )
}

export default page

