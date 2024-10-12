

export interface PaginatedResponse<T> {
  totalItems: number;
  page: number;
  pageSize: number;
  data: T[];
}