import { StringSchema, string } from 'yup';

import type { StringValidationRules } from '~/types';

export const VALIDATION = {
  INPUT_MAX: 255,
  EMAIL_REGEX: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  PASSWORD_REGEX:
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?/~`\\|-]).{8,20}$/,
};

const applyRequiredInput = (
  schema: StringSchema,
  fieldKey: string
): StringSchema => {
  const { t } = useI18n();
  return schema.required(
    t('error.validate.required_input', {
      field: t(fieldKey),
    })
  );
};

const applyMax = (
  schema: StringSchema,
  fieldKey: string,
  max: number
): StringSchema => {
  const { t } = useI18n();
  return schema.max(
    max,
    t('error.validate.max', {
      field: t(fieldKey),
      length: max,
    })
  );
};

const applyMatches = (
  schema: StringSchema,
  fieldKey: string,
  regex: RegExp,
  errorKey: string
): StringSchema => {
  const { t } = useI18n();
  return schema.matches(
    regex,
    t(`error.validate.${errorKey}`, {
      field: t(fieldKey),
    })
  );
};

export const createStringValidation = (
  fieldKey: string,
  rules: StringValidationRules,
  errorKey?: string
): StringSchema => {
  let schema = string();

  if (rules.required) {
    schema = applyRequiredInput(schema, fieldKey);
  }

  if (rules.max) {
    schema = applyMax(schema, fieldKey, rules.max);
  }

  if (rules.regex && errorKey) {
    schema = applyMatches(schema, fieldKey, rules.regex, errorKey);
  }

  return schema;
};
