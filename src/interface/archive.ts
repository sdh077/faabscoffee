export interface IArchive {
  id: number;
  created_at: string;
  content: any
  time: string;
  page: string;
  subject: string;
  date: string;
  roasting_date: string;
  shop_user: { name: string }
}