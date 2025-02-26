import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { createClient } from "./supabase/client"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getInitials = (name: string): string => name
  .split(' ')
  .map(part => part[0])
  .join("")
  .toUpperCase()
  .slice(0, 2)

export const updateStatus = async (id: number | number[], updateForm: object) => {
  const supabase = await createClient()
  let q = supabase
    .from('custom_order')
    .update(updateForm)
  if ('number' === typeof id) q = q.eq('id', id)
  else q = q.in('id', id)
  const { error } = await q

  if (error) return { result: false, error }
  else return { result: true, error: null }
}