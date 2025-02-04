"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { useRouterPush } from "@/hooks/use-create-query-string"
import { IGoodsCategory } from "@/interface/goods"


export function CategoryButton({ category }: { category: IGoodsCategory }) {
  const routerPush = useRouterPush()

  return (
    <Button variant={'ghost'} onClick={() => routerPush('category', category.id.toString())}>{category.title}</Button>
  )
}
