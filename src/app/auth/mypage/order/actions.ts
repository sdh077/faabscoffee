'use server'

import { Cart, Order } from "@/interface/business"
import { createClient } from "@/lib/supabase/server"


export async function orderCustom(status: string, name: string, price: number, products: Cart[], user_id: string) {
  const order: Order = {
    status,
    name,
    price,
    products,
    user_id,
    invoice: null,
    delivery: null,
    start_date: ''
  }
  const supabase = await createClient()
  const { data, error } = await supabase.from('custom_order')
    .insert(order)
    .select()

  return Response.json(data)
}