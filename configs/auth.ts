import { object } from 'yup';

import { VALIDATION, createStringValidation } from './validation';

export const loginSchema = () => {
  return object().shape({
    email: createStringValidation(
      'auth.login.form.email.label',
      {
        required: true,
        max: VALIDATION.INPUT_MAX,
        regex: VALIDATION.EMAIL_REGEX,
      },
      'email'
    ),
    password: createStringValidation('auth.login.form.password.label', {
      required: true,
      max: VALIDATION.INPUT_MAX,
    }),
  });
};

export const forgotPasswordSchema = () => {
  return object().shape({
    email: createStringValidation(
      'auth.forgot_password.form.email.label',
      {
        required: true,
        max: VALIDATION.INPUT_MAX,
        regex: VALIDATION.EMAIL_REGEX,
      },
      'email'
    ),
  });
};
