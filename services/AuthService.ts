import { useApiFetch } from '~/composables/useApiFetch';
import type { ApiFetchOptions } from '~/composables/useApiFetch';
import type { ApiResponse } from '~/types';

export default class AuthService<T = any> {
  forgotPassword<R = T>(
    data: Partial<T> | FormData,
    extras: ApiFetchOptions = {}
  ) {
    return useApiFetch<ApiResponse<R>>('/forgot-password', {
      body: data,
      method: 'POST',
      immediate: true,
      ...extras,
    });
  }
}
