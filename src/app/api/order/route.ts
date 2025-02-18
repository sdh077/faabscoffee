import { Order } from "@/interface/business"
import { createClient } from "@/lib/supabase/server"

export async function POST(request: Request) {
  const body = await request.json()
  const supabase = await createClient()
  const { data, error } = await supabase.from('custom_order')
    .insert(body)
    .select()
  return Response.json({ data, error })
}