import type { Avatar, User as IUser } from '~~/types';

declare module '#app' {
  interface PageMeta {
    auth: 'guest' | boolean;
  }
}

declare module 'ofetch' {
  interface FetchOptions {
    auth?: boolean | 'auto';
  }
}

declare module '~~/modules/auth/types' {
  interface User extends IUser {}
}

export {};
