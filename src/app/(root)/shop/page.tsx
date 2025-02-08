import { Suspense } from 'react'
import SectionTitle from '@/components/root/SectionTitle'
import { createClient } from '@/lib/supabase/server'
import Image from 'next/image'
import React, { Fragment } from 'react'
import { FilterSelection } from './FilterSelection'
import { ICategoryOption, IGoods, IGoodsCategory, IProductOption, ProductProp3 } from '@/interface/goods'
import { Button } from '@/components/ui/button'
import { CategoryButton } from './CategoryButton'
import { ProductView, ProductRow } from '@/components/root/ProductView'

const getCategory = async () => {
  const supabase = await createClient()
  return supabase
    .from('goods_category')
    .select('*')
    .eq('use_yn', true)
    .returns<IGoodsCategory[]>()
}


const getGoods = async (category: string): Promise<ProductProp3[]> => {
  return await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/goods?category=${category}`)
    .then(res => res.json())
    .catch((e) => {
      console.log(e)
      return []
    })
}

async function page({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>
}) {
  const { category } = await searchParams

  const { data: goodsCategory } = await getCategory()
  const categoryNo = (category ?? '1') as string
  const goods = await getGoods(categoryNo)
  return (
    <section className="container py-6 flex flex-col gap-4 ">
      <SectionTitle>
        FRESHEST ARRIVALS
      </SectionTitle>
      <Suspense fallback={<div></div>}>
        <div className='flex gap-8'>
          {goodsCategory && goodsCategory.map(category =>
            <CategoryButton key={category.id} category={category}></CategoryButton>
          )}
        </div>
        <ProductView>
          <>
            {goods && goods.map(item =>
              <ProductRow key={item.id} item={item} />
            )}
          </>
        </ProductView>
      </Suspense>
    </section >
  )
}

export default page