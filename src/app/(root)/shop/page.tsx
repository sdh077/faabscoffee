export const dynamic = 'force-dynamic'

import { Suspense } from 'react'
import SectionTitle from '@/components/root/SectionTitle'
import { createClient } from '@/lib/supabase/server'
import React from 'react'
import Link from 'next/link'
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
      <div className='flex items-center justify-between'>
        <SectionTitle>
          FRESHEST ARRIVALS
        </SectionTitle>
        <Link
          href='https://smartstore.naver.com/faabscoffee'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center gap-2 text-sm px-4 py-2 rounded-full bg-foreground text-background border border-foreground hover:bg-background hover:text-foreground transition-colors'
        >
          스마트스토어 바로가기
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </Link>
      </div>
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