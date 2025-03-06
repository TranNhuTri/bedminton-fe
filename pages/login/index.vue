<script lang="ts" setup>
import { ROUTE_NAME, loginSchema } from '~/configs';

definePageMeta({
  titleKey: 'login',
  layout: 'empty',
  auth: 'guest',
});

const { t } = useI18n();

const { credentials, pending, errorMsg, login } = useLogin({
  credentials: {
    email: '',
    password: '',
  },
  invalidErrorMessage: t('error.login.invalid_credentials'),
  otherErrorMessage: t('error.default.message'),
});

const { defineField, errors, handleSubmit } = useForm({
  initialValues: credentials.value,
  validationSchema: loginSchema(),
});

const [email, emailProps] = defineField('email', {
  props(state) {
    credentials.value.email = state.value;

    return {
      value: state.value,
    };
  },
});
const [password, passwordProps] = defineField('password', {
  props(state) {
    credentials.value.password = state.value;

    return {
      value: state.value,
    };
  },
});

const onSubmit = handleSubmit(
  () => {
    login();
  },
  () => scrollToError()
);
</script>

<template>
  <div class="h-full max-w-100 flex flex-col justify-center mx-auto">
    <div class="text-primary-700 text-4xl text-center font-bold mb-12">
      {{ t('auth.login.title') }}
    </div>
    <el-alert
      v-if="errorMsg"
      :title="errorMsg"
      type="error"
      center
      show-icon
      :closable="false"
      class="!mb-4"
    />
    <el-form label-position="top" size="large" @submit.prevent="onSubmit">
      <el-form-item
        :label="t('auth.login.form.email.label')"
        :error="errors.email"
      >
        <el-input
          v-model="email"
          v-bind="emailProps"
          :placeholder="t('auth.login.form.email.placeholder')"
          clearable
        />
      </el-form-item>
      <el-form-item
        :label="t('auth.login.form.password.label')"
        :error="errors.password"
      >
        <el-input
          v-model="password"
          v-bind="passwordProps"
          :placeholder="t('auth.login.form.password.placeholder')"
          type="password"
          show-password
          clearable
        />
      </el-form-item>
      <div class="text-right">
        <nuxt-link
          :to="
            localePath({
              name: ROUTE_NAME.FORGOT_PASSWORD,
            })
          "
          class="nuxt-link text-sm"
        >
          {{ t('auth.login.redirect_to_forgot_password') }}
        </nuxt-link>
      </div>
      <el-button
        :loading="pending"
        type="primary"
        native-type="submit"
        class="w-full mt-6"
      >
        {{ t('button.login') }}
      </el-button>
    </el-form>
  </div>
</template>
