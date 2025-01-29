import ContactForm from '@/components/root/ContactForm'
import SectionTitle from '@/components/root/SectionTitle'
import { Button } from '@/components/ui/button'
import { Link } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <section className='container h-[80vh] bg-cover relative' style={{
            backgroundImage: 'url(/3000.jpg)'
        }}>
            <div className='text-white absolute bottom-16'>
                <div className='text-[120px]'>Wholesale</div>
                <div className='w-[600px] text-2xl'>
                    We travel the world in search of the most diverse and flavourful range of specialty coffee for our wholesale community.
                </div>
            </div>
        </section>
    )
}
const WholesaleLink = ({ links }: { links: { title: string, description: string, link: string }[] }) => {
    return (
        <section className="container py-6 ">
            <SectionTitle>
                SHOP COFFEE
            </SectionTitle>
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
                        {!!link.link && <div className="">
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
    const links = [
        {
            title: 'Flavours from Far and Wide',
            description: 'We’re unapologetically obsessed with flavour and travel the world to find the most exciting coffees and offer boundless variety.',
            link: ''
        },
        {
            title: "Transparent, Direct Relationships",
            description: "We’ve built long-term relationships and source from world-class producers who are paving the way for more sustainable and ethical coffee.",
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

    const WholesaleBanner = () => {
        return (
            <section className='bg-[#B69FBF] h-full w-full py-8'>
                <div className='grid md:grid-cols-2'>
                    <div className='relative'>
                        <Image src='circle.svg' alt='circle' fill />
                    </div>
                    <div>
                        <div className='leading-10 text-3xl'>
                            Unlock Your Potential as an Ultimate Coffee Host with the Ozone Coffee Academy
                        </div>
                        <div>
                            Unlock your barista potential and earn the prestigious title of "Ozone Ultimate Coffee Host" at the Ozone Coffee Academy! Designed exclusively for our Wholesale Partners, this comprehensive course offers a unique opportunity to elevate your coffee expertise while deepening your connection with Ozone Coffee.
                            <br />
                            <br />
                            <br />
                            Our expertly crafted modules cater to all skill levels, covering fundamental espresso skills, advanced techniques like latte art, sensory training, and machinery maintenance. Upon completing all 6 modules, you'll have the chance to demonstrate your knowledge through a short practical and written exam. Successfully passing will earn you the exclusive Ultimate Coffee Host pin badge—a distinguished symbol of your dedication to coffee excellence and your partnership with Ozone Coffee.
                            <br />
                            <br />
                            <br />
                            Get in touch with us today to learn more about becoming an Ozone Wholesale Partner and unlocking this transformative learning experience!


                        </div>
                    </div>

                </div>
            </section>
        )
    }
    return (
        <main className='flex flex-col gap-32'>
            <Hero />
            <div className='w-[600px] ml-[2rem] leading-8'>
                Whether you’re a coffee shop, cafe, restaurant, hotel, office, or retailer, we offer everything you need to make the perfect cup, and then some. Our team is full of experts and highly trained baristas who love all things specialty coffee. We’re here to guide you with knowledge, training, great coffee experiences and more.
            </div>
            <WholesaleLink links={links} />
            <WholesaleBanner />
            <ContactForm purpose={''} />
        </main>
    )
}

export default page

