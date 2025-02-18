import { createClient } from "@/lib/supabase/server"

const getOrders = async () => {
  const supabase = await createClient()
  const { data: user } = await supabase.auth.getUser()
  return await supabase
    .from('custom_order')
    .select('*')
    .eq('user_id', user.user?.id)
}

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import SectionTitle from "@/components/root/SectionTitle"

export default async function Page() {
  const { data: invoices } = await getOrders()
  return (
    <div>
      <SectionTitle>주문 기록</SectionTitle>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>주문일</TableHead>
            <TableHead>상태</TableHead>
            <TableHead>금액</TableHead>
            <TableHead>송장번호</TableHead>
            <TableHead>배송사</TableHead>
            <TableHead>택배 위치 확인</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices && invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="font-medium">{invoice.created_at.slice(0, 10)}</TableCell>
              <TableCell className="font-medium">{invoice.status}</TableCell>
              <TableCell>{invoice.price}</TableCell>
              <TableCell>{invoice.invoice ?? ''}</TableCell>
              <TableCell>{invoice.delivery ?? ''}</TableCell>
              <TableCell></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <iframe src='https://trace.cjlogistics.com/next/tracking.html?wblNo=689942415361' width={900} height={1000}>
      </iframe>
    </div>
  )
}
