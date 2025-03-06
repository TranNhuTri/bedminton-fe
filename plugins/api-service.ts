import { useApiService } from '~~/services';
import type { ApiService } from '~~/services';

declare module '#app' {
  interface NuxtApp {
    $apiService: ApiService;
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $apiService: ApiService;
  }
}

export default defineNuxtPlugin(() => {
  return {
    provide: useApiService(),
  };
});
