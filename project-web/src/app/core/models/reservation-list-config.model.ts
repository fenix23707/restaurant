export interface ReservationListConfig {
  sort: {
    sortBy?: string;
    order?: 'asc' | 'desc';
  }
  filters: {
    name?: string,
    pageSize?: number,
    pageNum?: number,
  };
}
