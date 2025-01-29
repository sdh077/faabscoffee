export interface IGoodsCategory {
  id: number;
  created_at: string
  title: string
  use_yn: boolean
  eng_title: string
  use_main: boolean
}

export interface IGoods {
  id: number
  created_at: string
  name: string
  eng_name: string
  roasting: string
  green: string
  description: string
  flavor: string
  content: string
  shipping_id: number
  category_id: number
  img: string
  type: string
  price: number
  is_delete: boolean
}