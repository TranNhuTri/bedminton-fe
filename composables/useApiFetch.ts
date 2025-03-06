import type { NitroFetchRequest, NitroFetchOptions } from 'nitropack';
import type { FetchOptions } from 'ofetch';
import type { UnwrapRef } from 'vue';

export type ApiFetchState = 'idle' | 'pending' | 'resolved' | 'error';
export type ApiFetchOptions = NitroFetchOptions<NitroFetchRequest> &
  FetchOptions & {
    immediate?: boolean;
  };
export type ExecuteOptions = NitroFetchOptions<NitroFetchRequest> & {
  reset?: boolean;
  resetData?: boolean;
  resetError?: boolean;
};
export type ApiFetchReturn<T> = {
  status: Ref<ApiFetchState>;
  data: Ref<UnwrapRef<T> | null>;
  error: Ref<any>;
  pending: Ref<boolean>;
  execute: (opts?: ExecuteOptions) => Promise<void>;
  refresh: (opts?: ExecuteOptions) => Promise<void>;
};

export function useApiFetch<T = any>(
  url: string,
  fetchOptions?: ApiFetchOptions
): ApiFetchReturn<T> | Promise<ApiFetchReturn<T>> {
  const config = useRuntimeConfig();
  const nuxtApp = useNuxtApp();
  const { $fetch } = nuxtApp.$auth;

  const status = ref<ApiFetchState>('idle');
  const data = ref<T | null>(null);
  const error = ref();
  const pending = ref(false);

  const execute = async ({
    reset = false,
    resetData = true,
    resetError = true,
    ...executeOptions
  }: ExecuteOptions = {}) => {
    if (pending.value) return;

    pending.value = true;
    status.value = 'pending';

    if (resetData || reset) {
      data.value = null;
    }
    if (resetError || reset) {
      error.value = null;
    }

    try {
      const resp = await $fetch(url, {
        baseURL: config.public.apiBase,
        retry: false,
        ...fetchOptions,
        ...executeOptions,
      });
      data.value = resp;
      status.value = 'resolved';
      error.value = null;
    } catch (err) {
      error.value = err;
      status.value = 'error';
    } finally {
      pending.value = false;
    }
  };

  if (fetchOptions?.immediate) {
    return execute().then(() => ({
      status,
      data,
      error,
      pending,
      execute,
      refresh: execute,
    }));
  }

  return Promise.resolve({
    status,
    data,
    error,
    pending,
    execute,
    refresh: execute,
  });
}
