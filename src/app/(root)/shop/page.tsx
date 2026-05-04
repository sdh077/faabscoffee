export const dynamic = 'force-dynamic'

import { Suspense } from 'react'
import SectionTitle from '@/components/root/SectionTitle'
import { createClient } from '@/lib/supabase/server'
import React from 'react'
import { CategoryButton } from './CategoryButton'
import { ProductView, ProductRow } from '@/components/root/ProductView'
import { ICategory, ProductProp3 } from '@/interface/product'

async function page({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>
}) {
  const { category } = await searchParams
  const categoryNo = (category ?? '1') as string

  const supabase = await createClient()
  const [{ data: categories }, { data: products }] = await Promise.all([
    supabase.from('category').select('*').eq('use_yn', true).returns<ICategory[]>(),
    supabase
      .from('product')
      .select('*, product_option(*,category_option(*))')
      .eq('is_delete', false)
      .eq('category_id', categoryNo)
      .order('id', { ascending: false })
      .returns<ProductProp3[]>(),
  ])
  return (
    <section className="container py-6 flex flex-col gap-4 ">
      <SectionTitle>
        FRESHEST ARRIVALS
      </SectionTitle>
      <Suspense fallback={<div></div>}>
        <div className='flex gap-8'>
          {categories && categories.map(category =>
            <CategoryButton key={category.id} category={category}></CategoryButton>
          )}
        </div>
        <ProductView>
          <>
            {products && products.map(item =>
              <ProductRow key={item.id} item={item} />
            )}
          </>
        </ProductView>
      </Suspense>
    </section >
  )
}

export default page