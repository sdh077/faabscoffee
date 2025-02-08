import { IGoodsCategory, ProductProp3 } from "@/interface/goods"
import { createClient } from "@/lib/supabase/server"
import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('goods_category')
    .select('*')
    .eq('use_yn', true)
    .returns<IGoodsCategory[]>()
  return Response.json(data)
}