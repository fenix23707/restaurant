export interface Review {
  id?: number,
  rate: number,
  review: string,
  date?: Date,
  user_id: number,
  restaurant_id: number
}
