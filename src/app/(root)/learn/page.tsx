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
          Welcome to our world!
        </div>
        <div className='md:w-[600px] text-2xl'>
          Let’s put some colour in that cup, shall we?
        </div>
      </div>
    </section>
  )
}
const MainLink = ({ links }: { links: { title: string, description: string, link?: string }[] }) => {
  return (
    <section className="container pt-6 ">
      <SectionTitle>
        SHOP COFFEE
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
      title: 'Incredible Flavour and Variety',
      description: 'A constantly evolving range of rare special editions, seasonal favourites, delicious single origins and classic Ozone blends.Handpicked by our team of experts, we bring you the best variety and flavours in specialty coffee.'
    },
    {
      title: 'Roasted fresh',
      description: 'With uncompromising quality comes uncompromising freshness.Our coffee is roasted fresh to order, every day of the working week at our Stafford roastery on either our 2kg, 12kg, 25kg or 60kg roasters.That’s a promise.'
    },
    {
      title: 'Subscription Coffee',
      description: 'Go on a new coffee adventure every week with our much - loved and always flexible In My Mug subscription.Receive a new single origin that’s handpicked and roasted by our team.'
    },
    {
      title: 'Responsibly Sourcing',
      description: 'We source directly from our long - term, world - class producer partners who are paving the way for more sustainable and ethical coffee production.'
    }
  ]
  return (
    <main className='flex flex-col gap-32'>
      <Hero />
      <MainLink links={items} />
      <div className='md:w-[50%] flex gap-4 flex-col ml-[2rem]'>
        <div>What we stand for</div>
        <div>We’ve always gone the extra mile to bring new coffee experiences to our customers. The coffee world can sometimes feel a little complex, but we pride ourselves in making specialty coffee enjoyable for everyone. Whether you’re a connoisseur or newbie, a single origin expert or a blend enthusiast, we’re always here to share the wisdom we’ve gained over the past 25 years and help you discover new coffees and classic favourites along the way.</div>
        <div>Because for us, the detail is where we thrive. From our long-term, transparent relationships with farmers to our detailed flavour descriptions and how we strive to roast each coffee perfectly for you. It’s how we get to excellence in everything we do and what drives us to continue sourcing remarkable flavours from every corner of the world.</div>
        <div>Welcome to Ozone - the home of your Ultimate Coffee Host. Let’s brew this.</div>
      </div>
    </main>
  )
}

export default page