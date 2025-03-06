import { defineCustomValidators } from '~/validators';

export default defineNuxtPlugin(() => {
  defineCustomValidators();
});
