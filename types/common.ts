export type Option<T = any> = {
  [K in keyof T]: {
    readonly id: T[K];
    readonly label: string;
  };
}[keyof T];
