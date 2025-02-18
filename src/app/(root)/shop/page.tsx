import { Suspense } from 'react'
import SectionTitle from '@/components/root/SectionTitle'
import { createClient } from '@/lib/supabase/server'
import Image from 'next/image'
import React, { Fragment } from 'react'
import { FilterSelection } from './FilterSelection'
import { Button } from '@/components/ui/button'
import { CategoryButton } from './CategoryButton'
import { ProductView, ProductRow } from '@/components/root/ProductView'
import { ICategory, ProductProp3 } from '@/interface/product'

const getCategory = async (): Promise<ICategory[]> => {
  return await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/category`)
    .then(res => res.json())
    .catch((e) => {
      console.log(e)
      return []
    })
}


const getProducts = async (category: string): Promise<ProductProp3[]> => {
  return await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/product?category=${category}`)
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

  const categories = await getCategory()
  const categoryNo = (category ?? '1') as string
  const products = await getProducts(categoryNo)
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