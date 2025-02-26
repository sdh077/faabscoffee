import { createClient } from "@/lib/supabase/server"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { EstimateModal } from "./modal"
import { OrderCustom } from "@/interface/business"
import Heading from "@/components/heading"
import { StatusFilter } from "@/components/auth/status-filter"
import { cancelStatusType, statusType } from "@/lib/constants"
import { DeliveryModal } from "@/components/auth/delivery-modal"


const statusList = [...statusType, ...cancelStatusType]

const getOrders = async (status: string) => {
  const supabase = await createClient()
  const { data: user } = await supabase.auth.getUser()
  let q = supabase.from('custom_order').select('*, custom(*)')
  if (status && status !== '0') q = q.eq('status', statusList[Number(status)])
  else q = q.in('status', statusList)
  return await q.eq('user_id', user.user?.id).order('created_at', { ascending: false }).returns<OrderCustom[]>()
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { status } = await searchParams
  const { data: invoices } = await getOrders(status as string)
  return (
    <div>
      <div className='flex justify-between'>
        <Heading>{status ? statusList[Number(status)] : '전체 주문'}</Heading>
        <StatusFilter statusType={statusList} />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>주문일</TableHead>
            <TableHead>상태</TableHead>
            <TableHead>금액</TableHead>
            <TableHead>송장번호</TableHead>
            <TableHead>택배 위치 확인</TableHead>
            <TableHead>상세내용</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices && invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="font-medium">{invoice.created_at?.slice(0, 10)}</TableCell>
              <TableCell className="font-medium">{invoice.status}</TableCell>
              <TableCell>{invoice.price}</TableCell>
              <TableCell>{invoice.invoice ?? ''}</TableCell>
              <TableCell>{invoice.invoice && <DeliveryModal invoice={invoice.invoice} />}</TableCell>
              <TableCell><EstimateModal invoice={invoice} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="grid grid-cols-2">

      </div>
    </div>
  )
}
