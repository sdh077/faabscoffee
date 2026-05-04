import SectionTitle from '@/components/root/SectionTitle'
import React from 'react'

const videos = [
  { id: 'MY4ogLO3dsI', title: '물음 인터뷰' },
  { id: 'ZjsZJB0RPDs', title: '언스페셜티 스몰월픽' },
  { id: 'N9cqCAPMoi4', title: '커디터 CC' },
  { id: 'jQzERBmFcbY', title: 'MMS 파브스 커피 소개' },
  { id: 'qhWkdNlJVaI', title: '파브스 커피 삥타이거' },
]

const page = () => {
  return (
    <main className='flex flex-col'>

      {/* 브랜드 스토리 인포그래픽 */}
      <section className='w-full'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src='https://d22c6ea6lqg2pi.cloudfront.net/faabs/static/FBS2.svg'
          alt='파브스 커피 브랜드 스토리'
          className='w-full h-auto'
        />
      </section>

      {/* 파브스 커피 소개 영상 */}
      <section className='border-t py-16 md:py-20 container'>
        <div className='flex flex-col gap-10'>
          <SectionTitle>파브스 커피 소개</SectionTitle>
          <ul className='grid grid-cols-1 md:grid-cols-3 gap-10'>
            {videos.map((video) => (
              <li key={video.id} className='flex flex-col gap-3'>
                <div className='relative w-full aspect-video rounded-md overflow-hidden'>
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                    className='absolute inset-0 w-full h-full'
                  />
                </div>
                <p className='text-base font-medium'>{video.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 주요 수상 & 타이틀 */}
      <section className='border-t py-16 md:py-24'>
        <div className='container max-w-3xl flex flex-col gap-6 text-center'>
          <p className='text-xs tracking-[0.3em] uppercase text-muted-foreground'>Awards & Titles</p>
          <h2 className='text-4xl md:text-6xl font-bold leading-tight'>파브스가 걸어온 길</h2>
          <div className='flex flex-col gap-4 mt-6 text-lg md:text-2xl font-medium leading-loose'>
            <p><strong>2024</strong> 카누바리스타챔피언십 파이널리스트 6th</p>
            <p><strong>2024</strong> <em>KCRC</em> 국가대표 로스팅 챔피언십 센서리 심사위원</p>
            <p><strong>2023</strong> <em>KCRC</em> 국가대표 로스팅 챔피언십 5th</p>
            <p><strong>2022–2024</strong> <em>KNBC</em> 바리스타 챔피언십 참가</p>
          </div>
        </div>
      </section>

      {/* 대회, 도전, 배움과 성장 */}
      <section className='border-t py-16 md:py-20 bg-muted/30'>
        <div className='container max-w-3xl flex flex-col gap-10'>
          <h3 className='text-2xl md:text-3xl font-semibold'>대회, 도전, 배움과 성장</h3>
          <ul className='flex flex-col gap-3 text-sm md:text-base leading-7 text-muted-foreground'>
            {[
              '2020.07 파브스 커피 은평매장 오픈',
              '2022, 2023, 2024년 KNBC 대회 참여 (다양성, 지속가능성을 주제로 참여)',
              '2021, 2022년 SCAK주관 로스팅 대회 참여',
              '2022, 2023년 WBC주관 로스팅 대회 참여',
              '2022년 GCA 로스팅 대회 참여',
              '2023년 KCL주관 MOC, KCR대회 참여',
              '2023년 Foosung주관 F.A.B.A. 대회 참여',
              '2023년 에어로프레스 챔피언십 참여',
              '2023년 KCRC 국가대표 로스팅 챔피언십 Finalist 5th',
              '2024년 KCRC 국가대표 로스팅 챔피언십 센서리 심사위원',
              '2024년 커피브루잉토너먼트 참여',
              '2024년 WBR 30강 진출',
              '2024년 어라운지 스로다운 3rd',
              '2025년 KCRC 대회 참여',
              '2024년 카누 바리스타 챔피언십 Finalist 6th',
              '2024년 KCL주관 KCR TOP41 진출',
              '2025년 파브스 커피 로스팅 팩토리 오픈',
            ].map((item, i) => (
              <li key={i} className='flex gap-3'>
                <span className='mt-2 w-1.5 h-1.5 rounded-full bg-foreground shrink-0' />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 기념 행사 */}
      <section className='border-t py-16 md:py-20'>
        <div className='container max-w-3xl flex flex-col gap-10'>
          <h3 className='text-2xl md:text-3xl font-semibold'>기념 행사</h3>
          <ul className='flex flex-col gap-3 text-sm md:text-base leading-7 text-muted-foreground'>
            {[
              '1주년 기념 게이샤 에스프레소 판매',
              '2주년 기념 디카페인 골드브루 베리에이션 음료 판매',
              '3주년 기념 아자메인 (오트아이보카도스무디, 자두에쓰서벗) 출시 및 3행시 이벤트',
              '2023년 12월 크리스마스 및 신년 기념 플래터',
              '4주년 기념 Birthday menu (에티오피아 핸드드립과 참외셔벗, 오렌지 크림 아포가토)',
              '2024년 12월 크리스마스 기념 플래터',
              '2024년 1월 카누바리스타 챔피언쉽 갈라쇼 진행',
            ].map((item, i) => (
              <li key={i} className='flex gap-3'>
                <span className='mt-2 w-1.5 h-1.5 rounded-full bg-foreground shrink-0' />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 활동 */}
      <section className='border-t py-16 md:py-20 bg-muted/30'>
        <div className='container max-w-3xl flex flex-col gap-10'>
          <h3 className='text-2xl md:text-3xl font-semibold'>활동</h3>
          <ul className='flex flex-col gap-3 text-sm md:text-base leading-7 text-muted-foreground'>
            {[
              '모건타운 블렌딩 출시 2020년 7월',
              '2021년 2월 다크 블렌딩 출시',
              '2021년 타 브랜드들과 불광천 팝업스토어 행사 진행',
              '2021~2023년 정기 재즈공연 진행',
              '2021년 12월 홈타운 블렌드 출시',
              '2022년 은평구 문화의 거리 조성 사업 위원 위촉',
              '2022년 기업과 개인을 대상으로 커피 교육과 컨설팅을 진행',
              '2022년 기업은행 광고 촬영 대관',
              '2022년 경동 나비엔 광고 소품 지원',
              '2022년 은평구 아티스트들과 재능기부 공연',
              '2022년 R&B공연과 Jazz공연 진행',
              '2022년 12월 파나마 게이샤, 레드카투아이 다이렉트 트레이딩',
              '2022년 12월 명지전문대 창업특강',
              '2023년 1월 에티오피아 산지 방문',
              '2023년 4월 TYPICA 생두업체 세미나',
              '2023년 5월 모모스 커피 세미나',
              '2023년 5월 내숭거리 재즈공연 진행',
              '2023년 6월 응암2동 주민센터 커피 강의',
              '2023년 6월 커피브루잉책 오픈스터디 진행',
              '2023년 6월 월간커피 지속가능성 세미나',
              '2023년 7월 노르딕어프로치 비즈니스커핑 진행',
              '2023년 8월 Axil&St.ALi with NOOK Coffee 호주 멜번카페에 한국 로스터리원두 소개',
              '2023년 8월 Airdrop NFT기반 카페 컨설팅',
              '2023년 8월 디자인커피 에스프레소 머신 개발 자문단 위촉',
              '2023년 10월 애견동반 음악회 주최',
              '2023년 11월 카페쇼에 리온(로스터기 공동개발)과 참여',
              '2023년 11월 Aram 커피 대표와 Aram espresso 도구 활용한 추출 시연',
              '2023년 11월 르완다 BAHO 생산자와 Public cupping 진행',
              '2024년 2월 커피클럽 시작!',
              '2024년 4월 숨실고 창업특강',
              '2024년 4월 노갈레스 커핑, 라 네그리따 농장주 통역',
              '2024년 5월 WOC(world of coffee) in Busan 리오나이 로스터기 부스 참여',
              '2024년 5월 카이로커피콜렉티브와 게스트 바리스타 행사',
              '2024년 6월 응암2동 주민센터 강의',
              '2024년 8월 월간커피 큐디터 행사',
              '2024년 8월 샘플로스터기 설명과 시연 그리고 열전달 개념을 통해 로스팅 이해 세미나',
              '2024년 8월 노드커피 이규원 대표님 로스팅 분석 세미나',
              '2024년 8월 보텍스 드립가이드 오지영 대표님 세미나',
              '2024년 8월 SAZA Coffee, Coffee me up 등 하이엔드 커피 15종 퍼블릭 커핑',
              '2024년 9월 더정진 에버퓨어 MINTEC-TASTE 170L 체험단 선정',
              '2024년 11월 카페쇼 참여 (리오나이 로스터기 개발, 원인터시스템 미티코 머신 홍보)',
              '2024년 11월 카페쇼 리오나이 부스에서 좋은 로스터기 선택을 위한 필수 요소와 쉽고 효과적인 로스팅 활용법 세미나',
              '2024년 11월 코스타리카 카페 셀렉토스 도타, 카페 노르테 샘플로스팅 및 비즈니스 커핑 진행',
              '2024년 11월 페루 옥션랏 비즈니스 커핑 및 옥션 3위 낙찰',
              '2024년 12월 프로젝트 키위 뉴질랜드 커피 팝업 행사',
              '2025년 1월 샘플로스팅 접근을 위한 개념 이해 세미나 진행 in 상두 그레이',
              '2025년 1월 커피크루즈 프로젝트 in momos coffee 팝업행사',
              '2025년 2월 CVA 커핑폼 세미나 진행 in 지촉',
              '2025년 2월 링키지 커피 주최 일본 로스터리 퍼블릭 커핑',
              '2025년 2월 노드커피 이규원 대표님 로스팅 디펙트 세미나',
              '2025년 3월 주민센터 나눔의집 협약',
              '2025년 4월 파나마 산지 방문',
              '2025년 4월 커피크루즈 프로젝트 in 연희동 팝업행사',
            ].map((item, i) => (
              <li key={i} className='flex gap-3'>
                <span className='mt-2 w-1.5 h-1.5 rounded-full bg-foreground shrink-0' />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

    </main>
  )
}

export default page
