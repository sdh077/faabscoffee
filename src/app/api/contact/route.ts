import { createClient } from "@/lib/supabase/server"

export async function POST(request: Request) {
  const body = await request.json()
  const supabase = await createClient('public')
  const { data, error } = await supabase.from('contact_business').insert(body).select()
  console.log(error)
  if (error)
    return Response.json({ error })

  const webhookUrl = process.env.GOOGLE_CHAT_WEBHOOK_URL
  if (webhookUrl) {
    const purpose = body.purpose === 'sample' ? '샘플 신청' : '납품 상담 신청'
    const beanList = Array.isArray(body.bean) && body.bean.length > 0
      ? `\n희망 원두: ${body.bean.join(', ')}`
      : ''
    const memoLine = body.memo ? `\n메모: ${body.memo}` : ''
    const shopNoLine = body.shop_no ? `\n사업자 번호: ${body.shop_no}` : ''
    const addressLine = body.address ? `\n사업자 소재지: ${body.address}` : ''
    const descriptionLine = body.description ? `\n\n[상세 정보]\n${body.description}` : ''

    const text = `🔔 [${purpose}] 새로운 신청이 접수되었습니다.\n\n이름: ${body.name}\n연락처: ${body.phone}\n사업장: ${body.shop}${shopNoLine}${addressLine}${beanList}${memoLine}${descriptionLine}`

    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    }).catch((err) => console.error('Google Chat 알림 실패:', err))
  }

  return Response.json({ data })
}