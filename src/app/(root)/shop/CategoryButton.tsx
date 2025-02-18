"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { useRouterPush } from "@/hooks/use-create-query-string"
import { ICategory } from "@/interface/product"


export function CategoryButton({ category }: { category: ICategory }) {
  const routerPush = useRouterPush()

  return (
    <Button variant={'ghost'} onClick={() => routerPush('category', category.id.toString())}>{category.title}</Button>
  )
}
