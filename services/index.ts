import AuthService from './AuthService';

export function defineApiService() {
  return {
    auth: new AuthService(),
  };
}

const apiService = defineApiService();

export type ApiService = ReturnType<typeof defineApiService>;

export function useApiService() {
  return {
    apiService,
  };
}
