import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const MainSection = async () => {
  return (
    <section
      className="relative h-[100vh] min-h-[460px] w-screen bg-cover"
      style={{ backgroundImage: 'url("/bg.png")' }}
    >
      <div className="absolute bottom-4 left-2 z-10 flex flex-col gap-16">
        <div className="text-5xl md:text-8xl font-bold text-white">
          <div>Koji</div>
          <div>Supernatura</div>
        </div>
        <div className="text-2xl text-white">
          Our new Extra Rare Special Reserve is here to make January a little more
          colourful.
        </div>
        <button className="w-64 rounded-none bg-black text-white">PREORDER</button>
      </div>
    </section>
  )
}
const MainItem = ({ items }: { items: { image: string }[] }) => {
  return (
    <section className="container py-6 ">
      <div className="underline-black text-4xl ">
        FRESHEST ARRIVALS
      </div>
      <ul className="home-items grid grid-cols-1 gap-12 py-16 md:grid-cols-2 xl:grid-cols-4 ">
        {items.map(item =>
          <li className="home-item relative flex flex-col gap-6 " key={item.image}>
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
                Bolivia: Brenda Palli
              </div>
              <div className="">£11.00</div>
            </div>
            <div className="">
              <div className="grid grid-cols-2 ">
                <div className="">Flavour profile</div>
                <div className="">
                  Tinned apricot, caramel, red grape
                </div>
                <div className="">Process</div>
                <div className="">Washed</div>
                <div className="">Varietal</div>
                <div className="">Caturra &amp; Catuai</div>
                <div className="">Roast</div>
                <div className="">Medium</div>
              </div>
            </div>
            <div className="">
              <button
                type="button"
                tabIndex={0}
                className="ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 w-full rounded-none bg-black text-white"
                data-button-root=""
              >

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
              </button>
            </div>
          </li>
        )}
      </ul>
    </section >
  )
}
const MainLink = ({ links }: { links: { title: string, description: string, link: string }[] }) => {
  return (
    <section className="container py-6 ">
      <div className="underline-black text-4xl ">
        SHOP COFFEE
      </div>
      <ul className="home-items grid grid-cols-1 gap-12 py-16 md:grid-cols-2 xl:grid-cols-4 ">
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
            <div className="">
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
      image: "https://ozonecoffee.co.uk/cdn/shop/files/Ozone_Coffee_Square_2025_BOLBrendaPalliv2_600x.png?v=1736434790"
    }, {
      image: "https://ozonecoffee.co.uk/cdn/shop/files/Koji_PDP_box_only_v2_600x.png?v=1737394142"
    }, {
      image: "https://ozonecoffee.co.uk/cdn/shop/files/Ozone_Coffee_Square_2024_BOLJeivertandGroverv2_600x.png?v=1735045207"
    }, {
      image: "https://ozonecoffee.co.uk/cdn/shop/files/Ozone_Coffee_Square_2024_HNDLaAlondraMarchWv2_600x.png?v=1734449212"
    }
  ]
  const links = [
    {
      title: 'Single Origins',
      description: 'Exceptional flavours sourced directly and sustainably from our long-term partners at origin.',
      link: ''
    },
    {
      title: "Subscriptions",
      description: "A sad day if you've run out! Super easy and flexible, we roast the good stuff - you pause or cancel whenever you fancy.",
      link: ''
    },
    {
      title: 'Single Origins2',
      description: 'Exceptional flavours sourced directly and sustainably from our long-term partners at origin.',
      link: ''
    },
    {
      title: "Subscriptions3",
      description: "A sad day if you've run out! Super easy and flexible, we roast the good stuff - you pause or cancel whenever you fancy.",
      link: ''
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