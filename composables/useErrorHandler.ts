import { FetchError } from 'ofetch';
import type { ApiError, FieldError } from '~/types';
import { ElNotification } from 'element-plus';
import type { NuxtError } from '#app';

export type RenderErrorOptions = {
  behavior?: 'screen' | 'toast';
  message?: string;
  title?: string;
  toastTimeout?: number;
  formFields?: string[];
  asyncDataKey?: string | string[];
  setErrors?: (formError: Record<string, string>) => void;
};

export function useErrorHandler() {
  const { t } = useI18n();

  function buildFormError(error?: ApiError, formFields: string[] = []) {
    if (!(error && Array.isArray(error.errors))) return null;

    return formFields.reduce((formError, field) => {
      const { message } =
        (error.errors as FieldError[]).find((e) => e.field === field) || {};
      const firstMessage = Array.isArray(message)
        ? message[0]
        : String(message ?? '');
      if (firstMessage) {
        formError = formError ?? {};
        formError[field] = firstMessage;
      }

      return formError;
    }, null as null | Record<string, string>);
  }

  function renderError(
    error: NuxtError<ApiError> | Error,
    {
      message: customMessage,
      behavior = 'screen',
      toastTimeout = 8000,
      formFields = [],
      setErrors = () => undefined,
      asyncDataKey,
    }: RenderErrorOptions = {}
  ) {
    // Since asyncData have cache, the error is cached too.
    // We need to clear the cache to make sure the next asyncData call will be fresh.
    if (behavior === 'screen') {
      clearNuxtData(asyncDataKey);
      clearError();
    }

    const { data, statusCode } = (error as NuxtError<ApiError>) || {};
    if (statusCode && statusCode <= 500) {
      const formError = buildFormError(data, formFields);
      if (formError) {
        if (typeof setErrors === 'function') setErrors(formError);
        return formError;
      }
    }
    const statusMessage =
      customMessage ??
      (Array.isArray(data?.message) ? data?.message[0] : data?.message) ??
      error.message ??
      t('error.undefined');

    switch (behavior) {
      case 'screen':
        showError({ ...error, statusMessage });
        break;
      case 'toast': {
        ElNotification({
          message: statusMessage,
          duration: toastTimeout,
          type: 'error',
          offset: 60,
        });
        break;
      }
      default:
    }
    return null;
  }

  return {
    buildFormError,
    renderError,
  };
}
