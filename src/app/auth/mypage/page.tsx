import SectionTitle from '@/components/root/SectionTitle'
import { createClient } from '@/lib/supabase/server'
import React from 'react'

const getInfo = async () => {
  const supabase = await createClient()
  const { data: user } = await supabase.auth.getUser()
  return await supabase
    .from('custom')
    .select('*')
    .eq('id', user.user?.id)
    .single()
}

const page = async () => {
  const { data, error } = await getInfo()
  if (!data) return <></>
  return (
    <div>
      <SectionTitle>{data.name}</SectionTitle>
      <div>배송지: {data.address}</div>
      <div>
        <button
          className="relative z-30 flex flex-1 flex-col justify-center gap-1 border px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
        >
          <span className="text-xs text-muted-foreground">
            주문수
          </span>
          <span className="text-lg font-bold leading-none sm:text-3xl">
            25042
          </span>
        </button>
      </div>
    </div>
  )
}

export default page