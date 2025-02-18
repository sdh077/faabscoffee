import { ICategory, ProductProp3 } from "@/interface/product"
import { createClient } from "@/lib/supabase/server"
import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('category')
    .select('*')
    .eq('use_yn', true)
    .returns<ICategory[]>()
  return Response.json(data)
}