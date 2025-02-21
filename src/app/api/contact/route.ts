import { createClient } from "@/lib/supabase/server"

export async function POST(request: Request) {
  const body = await request.json()
  const supabase = await createClient('public')
  const { data, error } = await supabase.from('contact_business').insert(body).select()
  console.log(error)
  if (error)
    return Response.json({ error })
  return Response.json({ data })
}