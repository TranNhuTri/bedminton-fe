import { useApiFetch } from '~/composables/useApiFetch';
import type { ApiFetchOptions } from '~/composables/useApiFetch';
import type { ApiResponse } from '~/types';

export default class RestService<T = any> {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    protected resource: string,
    protected options?: ApiFetchOptions
  ) {}

  index<R = T>(
    params?: Record<string, string | number>,
    extras: ApiFetchOptions = {}
  ) {
    return useApiFetch<ApiResponse<{ items: R[] }>>(`${this.resource}`, {
      query: params,
      immediate: true,
      ...this.options,
      ...extras,
    });
  }

  show<R = T>(
    id: number | string,
    params?: Record<string, string | number> | null,
    extras: ApiFetchOptions = {}
  ) {
    return useApiFetch<ApiResponse<R>>(`${this.resource}/${id}`, {
      query: params ?? {},
      immediate: true,
      ...this.options,
      ...extras,
    });
  }

  create<R = T>(data: Partial<T> | FormData, extras: ApiFetchOptions = {}) {
    return useApiFetch<ApiResponse<R>>(`${this.resource}`, {
      body: data,
      method: 'POST',
      immediate: true,
      ...this.options,
      ...extras,
    });
  }

  update<R = T>(
    id: number | string | null,
    data: Partial<T> | FormData,
    extras: ApiFetchOptions = {}
  ) {
    const path = id ? `${this.resource}/${id}` : this.resource;
    return useApiFetch<ApiResponse<R>>(path, {
      body: data,
      method: 'PUT',
      immediate: true,
      ...this.options,
      ...extras,
    });
  }

  delete<R = T>(id: number | string, extras: ApiFetchOptions = {}) {
    return useApiFetch<ApiResponse<R>>(`${this.resource}/${id}`, {
      method: 'DELETE',
      immediate: true,
      ...this.options,
      ...extras,
    });
  }

  collection<R = any>(
    subResource: string,
    { method = 'get', ...extras }: ApiFetchOptions = {}
  ) {
    return useApiFetch<ApiResponse<R>>(`${this.resource}/${subResource}`, {
      method,
      immediate: true,
      ...this.options,
      ...extras,
    });
  }

  member<R = any>(
    id: number | string,
    subResource: string,
    { method = 'get', ...extras }: ApiFetchOptions = {}
  ) {
    return useApiFetch<ApiResponse<R>>(
      `${this.resource}/${id}/${subResource}`,
      {
        method,
        immediate: true,
        ...this.options,
        ...extras,
      }
    );
  }
}
