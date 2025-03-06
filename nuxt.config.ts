import { resolve } from 'pathe';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: process.env.NUXT_DISABLE_SSR !== 'true',

  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap',
        },
      ],
    },
  },

  experimental: {
    appManifest: false,
  },

  plugins: ['~/plugins/api-service.ts', '~/plugins/validation.ts'],

  elementPlus: {
    importStyle: 'scss',
  },

  css: ['~/assets/sass/main.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/sass/element/index.scss" as element;',
        },
      },
    },
  },

  build: {},

  modules: [
    'nuxt-lodash',
    '@pinia/nuxt',
    '@trandaison/nuxt-3-auth',
    '@nuxtjs/i18n',
    '@element-plus/nuxt',
    '@unocss/nuxt',
    '@vee-validate/nuxt',
  ],

  routeRules: {
    '/admin/**': { ssr: false },
  },

  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE_URL,
      debugOn: process.env.NUXT_ENABLE_DEBUG === 'true',
      ssrOn: process.env.NUXT_DISABLE_SSR !== 'true',
    },
  },

  i18n: {
    baseUrl: process.env.NUXT_APP_DOMAIN,
    locales: [
      { code: 'en', iso: 'en-US', file: 'en-US.yml', name: 'English' },
      { code: 'vi', iso: 'vi-VN', file: 'vi-VN.yml', name: '日本語' },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: false,
    },
    lazy: true,
    langDir: 'lang',
    defaultLocale: 'vi',
    vueI18n: './vueI18n.config.ts',
  },

  auth: {
    endpoints: {
      baseUrl: process.env.NUXT_PUBLIC_API_BASE_URL,
      login: {
        url: '/login',
        method: 'POST',
        property: 'data',
      },
      logout: { url: '/logout', method: 'DELETE' },
      refresh: {
        url: '/refresh_tokens',
        method: 'POST',
        property: 'data',
      },
      user: {
        url: '/me',
        method: 'GET',
        property: 'data',
      },
      signup: { url: '/signup', method: 'POST' },
    },
    token: {
      headerName: 'Authorization',
      type: 'Bearer',
      property: 'token',
    },
    refreshToken: {
      paramName: 'token',
      property: 'refresh_token',
    },
    cookie: {
      ssl: process.env.NUXT_ENABLE_HTTPS === 'true',
    },
    middleware: {
      global: true,
    },
    redirect: {
      login: '/login',
      logout: '/',
      home: '/',
    },
    routes: {
      login: {
        name: 'Login',
        path: '/login',
        file: resolve(__dirname, './pages/login/index.vue'),
      },
    },
    rewriteRedirects: true,
    useI18n: true,
    debug: true,
  },

  pinia: {
    // storesDirs: ['./stores/**'],
  },

  veeValidate: {
    autoImports: true,
  },

  compatibilityDate: '2024-08-08',
});
