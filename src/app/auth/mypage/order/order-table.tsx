'use client'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Cart, Order, Sale } from "@/interface/business"
import React, { useState } from 'react'
import { orderCustom } from "./actions"
import { createClient } from "@/lib/supabase/client"
import SectionTitle from "@/components/root/SectionTitle"
import { Input } from "@/components/ui/input"
import ShipmentDatePicker from "./shipment-date"


const OrderTable = ({ products }: { products: Sale[] }) => {
  const init = products.reduce<Cart[]>((cur, p) => {
    cur.push({ count: 0, price: p.price ?? p.product.price_sale, product: p })
    return cur
  }, [])
  const [items, setItems] = useState<Cart[]>(init)
  const totalPrice = items.reduce((cur, item) => cur + item.price * item.count, 0)
  const handleCount = (id: number, oper: number) => {
    setItems(items.map(item => item.product.id === id ? { ...item, count: item.count + oper } : item))
  }
  const [open, onOpenChange] = useState(false)

  const [date, setDate] = useState<Date | null>(null)
  const handleOrder = async () => {
    if (totalPrice === 0) return
    const supabase = createClient()
    const { data: user } = await supabase.auth.getUser()

    const order: Order = {
      status: '주문확인',
      name: '',
      price: totalPrice,
      products: items,
      user_id: user.user?.id!,
      invoice: null,
      delivery: null,
      start_date: date?.toISOString() ?? ''
    }
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/order`, {
      method: 'POST',
      body: JSON.stringify(order)
    }).then(res => {
      console.log(res)
      onOpenChange(false)
    }).catch(error => console.log(error))
  }

  return (
    <div className='w-full h-[90vh] flex flex-col justify-between'>
      <div className="">
        <SectionTitle>
          <div className="flex justify-between">
            신규 주문
            <div>
              <div className="flex justify-end align-bottom gap-16 text-base">
                <div>
                  <div>Total {totalPrice}원</div>
                </div>
                <div>
                  <ShipmentDatePicker date={date} setDate={setDate} />
                </div>
                <Dialog open={open} onOpenChange={onOpenChange}>
                  <DialogTrigger asChild><Button>주문하기</Button></DialogTrigger>
                  <DialogContent className="w-80">
                    <DialogHeader>
                      <DialogTitle>Are you absolutely sure?</DialogTitle>
                      <DialogDescription>
                        <span>
                          {items.map(item =>
                            <span key={item.product.id} className="flex justify-between">
                              <span>{item.product.product.name}</span>
                              <span>{item.count}개 {item.price}원</span>
                              <span>{item.count * item.price}개 </span>
                            </span>
                          )}
                        </span>
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <Button type="submit" onClick={() => handleOrder()}>Confirm</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </SectionTitle>
        <Table className="w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="">주문 가능 상품</TableHead>
              <TableHead className="w-[200px]">가격</TableHead>
              <TableHead className="w-[200px]">수량</TableHead>
              <TableHead className="w-[200px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.product.id}>
                <TableCell>{item.product.product.name}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>
                  <div className="flex gap-1">
                    <button onClick={() => {
                      if (item.count > 0)
                        handleCount(item.product.id, -1)
                    }
                    }>-</button>
                    {item.count}
                    <button onClick={() => handleCount(item.product.id, 1)}>+</button>
                  </div>
                </TableCell>
                <TableCell>{item.count * item.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default OrderTable