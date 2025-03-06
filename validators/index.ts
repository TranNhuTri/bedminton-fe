import * as yup from 'yup';
import { testMime } from './testMime';

declare module 'yup' {
  interface MixedSchema {
    mime(this: MixedSchema, mimes: string | string[], message: string): this;
  }
}

export function defineCustomValidators() {
  yup.addMethod(yup.mixed, 'mime', testMime);
}
