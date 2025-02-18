import { IProduct } from "./product";

export interface Sale {
  id: number
  user_id: string
  product_id: number
  sale_record: number;
  price: number;
  product: IProduct
}

export interface Order {
  status: string;
  name: string
  price: number;
  products: Cart[];
  user_id: string;
  invoice: string | null;
  delivery: string | null;
}
export type Cart = { count: number, price: number, product: Sale }
