

export interface PaginatedRequest extends Record<string, any> {
  currentPage : number;
  pageSize : number;
}