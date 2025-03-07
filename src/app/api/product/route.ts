import { ProductProp3 } from "@/interface/product"
import { createClient } from "@/lib/supabase/server"
import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const ids = searchParams.get('ids')
  const category = searchParams.get('category') as string
  const supabase = await createClient()
  let q = supabase
    .from('product')
    .select('*, product_option(*,category_option(*))')
    .eq('is_delete', false)

  if (ids) q = q.in('id', ids.split(','))
  if (category) q = q.eq('category_id', category)
  const { data, error } = await q
    .order('id', { ascending: false })
    .returns<ProductProp3[]>()
  return Response.json(data)
}