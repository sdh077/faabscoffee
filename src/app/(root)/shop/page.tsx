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


const getGoods = async (category: string) => {
  const supabase = await createClient()
  return await supabase
    .from('goods')
    .select('*, goods_selection(*,goods_category_option(*))')
    .eq('category_id', category)
    .returns<ProductProp3[]>()
}

async function page({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>
}) {
  const { category } = await searchParams

  const { data: goodsCategory } = await getCategory()
  const categoryNo = (category ?? '1') as string
  const { data: goods } = await getGoods(categoryNo)
  if (!goodsCategory) return <></>
  return (
    <section className="container py-6 flex flex-col gap-4 ">
      <SectionTitle>
        FRESHEST ARRIVALS
      </SectionTitle>
      <div className='flex gap-8'>
        {goodsCategory.map(category =>
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
    </section >
  )
}

export default page