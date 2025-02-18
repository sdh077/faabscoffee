import { Sale } from "@/interface/business"
import { createClient } from '@/lib/supabase/server'
import React from 'react'
import OrderTable from "./order-table"
import SectionTitle from "@/components/root/SectionTitle"

const getProducts = async () => {
  const supabase = await createClient()
  const { data: user } = await supabase.auth.getUser()
  return await supabase
    .from('custom_price')
    .select('*, product(*)')
    .eq('user_id', user.user?.id)
    .returns<Sale[]>()
}

const page = async () => {
  const { data: products, error } = await getProducts()
  return (
    <div className='w-full'>
      {products && <OrderTable products={products} />}
    </div>
  )
}

export default page