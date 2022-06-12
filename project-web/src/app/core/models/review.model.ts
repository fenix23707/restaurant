export interface Review {
  id: number,
  rate: number,
  review: string,
  data: Date,
  user_id: number,
  restaurantId: number
}
