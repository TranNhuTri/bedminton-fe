<script lang="ts" setup>
import { ROUTE_NAME, forgotPasswordSchema } from '~/configs';

definePageMeta({
  titleKey: 'forgot_password',
  layout: 'empty',
  auth: 'guest',
});

const { t } = useI18n();
const { $apiService } = useNuxtApp();
const { buildFormError } = useErrorHandler();

const { defineField, errors, handleSubmit } = useForm({
  initialValues: {
    email: '',
  },
  validationSchema: forgotPasswordSchema(),
});

const [email, emailProps] = defineField('email');

const isLoading = ref(false);
const isSuccess = ref(false);

const onSubmit = handleSubmit(
  async ({ email }, { setErrors }) => {
    try {
      isLoading.value = true;

      const { error } = await $apiService.auth.forgotPassword({
        email,
      });

      if (error.value) {
        const errorFields = buildFormError(
          error.value?.response?._data?.error,
          ['email']
        );
        errorFields && setErrors(errorFields);
        return;
      }

      isSuccess.value = true;
    } finally {
      isLoading.value = false;
    }
  },
  () => scrollToError()
);
</script>

<template>
  <div class="h-full max-w-100 flex flex-col justify-center mx-auto">
    <div class="text-primary-700 text-4xl text-center font-bold mb-12">
      {{ t('auth.forgot_password.title') }}
    </div>
    <div v-if="isSuccess" class="mb-4">
      {{ t('auth.forgot_password.message_success') }}
    </div>
    <el-form
      v-else
      label-position="top"
      size="large"
      @submit.prevent="onSubmit"
    >
      <el-form-item
        :label="t('auth.forgot_password.form.email.label')"
        :error="errors.email"
        class="!mb-0"
      >
        <el-input
          v-model="email"
          v-bind="emailProps"
          :placeholder="t('auth.forgot_password.form.email.placeholder')"
          clearable
        />
      </el-form-item>
      <el-button
        :loading="isLoading"
        type="primary"
        native-type="submit"
        class="w-full mt-6"
      >
        {{ t('button.send') }}
      </el-button>
    </el-form>
    <div class="text-center mt-12">
      <nuxt-link
        :to="
          localePath({
            name: ROUTE_NAME.LOGIN,
          })
        "
        class="nuxt-link text-sm"
      >
        {{ t('auth.forgot_password.redirect_to_login') }}
      </nuxt-link>
    </div>
  </div>
</template>
