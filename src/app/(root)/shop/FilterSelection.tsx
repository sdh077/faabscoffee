"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"
import { useRouterPush } from "@/hooks/use-create-query-string"
import { IGoodsCategory } from "@/interface/goods"
import { useSearchParams } from "next/navigation"

interface Props {
  title: string
  label: string
  items: IGoodsCategory[]
}

export function FilterSelection({ title, label, items }: Props) {
  const [open, onOpenChange] = React.useState(false)
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const routerPush = useRouterPush()
  const [position, setPosition] = React.useState(params.get(title) ?? '1')

  return (
    <DropdownMenu open={open} onOpenChange={onOpenChange}>
      <DropdownMenuTrigger asChild>
        <button className="text-xl flex gap-4">
          {title.toLocaleUpperCase()}
          <Image src={open ? '/upArrow.svg' : '/downArrow.svg'} alt='up' width={30} height={30} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{label}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          {items.map(item =>
            <DropdownMenuRadioItem key={item.id} value={item.id.toString()} onClick={() => routerPush(title, item.id.toString())}>{item.title}</DropdownMenuRadioItem>
          )}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
