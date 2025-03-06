export type ApiPagination = {
  count: number;
  offset: number;
  page: number;
  total: number;
  prev?: number;
  next?: number;
};

export type ApiResponse<T> = {
  data: T;
  pagination?: ApiPagination;
};

export type FieldError = {
  field: string;
  code: string;
  message: string;
};

export type ApiError = {
  type: string;
  status: string;
  message: string;
  error_code: string;
  errors?: FieldError[];
};
