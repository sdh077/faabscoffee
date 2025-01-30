import SectionTitle from '@/components/root/SectionTitle'
import { createClient } from '@/lib/supabase/server'
import Image from 'next/image'
import React from 'react'
import { FilterSelection } from './FilterSelection'
import { IGoods, IGoodsCategory } from '@/interface/goods'

const getCategory = async () => {
  const supabase = await createClient()
  return supabase
    .from('goods_category')
    .select('*')
    .eq('use_yn', true)
    .returns<IGoodsCategory[]>()
}

const getGoods = async (category: string) => {
  const supabase = await createClient()
  console.log(category)
  return await supabase
    .from('goods')
    .select('*')
    .eq('category_id', category)
    .returns<IGoods[]>()
}

export async function Page({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>
}) {
  const { category } = await searchParams

  const { data: goodsCategory, error } = await getCategory()
  const categoryNo = (category ?? '1') as string
  const { data: goods } = await getGoods(categoryNo)
  if (!goodsCategory) return <></>
  return (
    <section className="container py-6 flex flex-col gap-4 ">
      <SectionTitle>
        FRESHEST ARRIVALS
      </SectionTitle>
      <div>
        <FilterSelection title={'category'} label={'카테고리 선택'} items={goodsCategory} />
      </div>
      <ul className="home-items grid grid-cols-1 gap-12 py-8 md:grid-cols-2 xl:grid-cols-4 ">
        {goods && goods.map(item =>
          <li className="home-item relative flex flex-col gap-6 " key={item.id}>
            <div className="relative w-full h-[380px] overflow-hidden">
              <Image
                className=" w-full object-cover object-center "
                loading="lazy"
                alt="Bolivia: Brenda Palli"
                fill
                src={item.img}
              />
            </div>
            <div className="underline-black flex flex-col gap-6 ">
              <div className="font-semibold ">
                {item.name}
              </div>
              <div className="">{item.price}</div>
            </div>
            <div className="">
              <div className="grid grid-cols-2 ">
                <div className="">Flavor profile</div>
                <div className="">
                  {item.flavor}
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

export default Page