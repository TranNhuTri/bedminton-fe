<script lang="ts" setup>
import type { NuxtError } from '#app';

import { HANDLED_STATUS_CODE, StatusCode } from '~/configs';

interface Props {
  error: NuxtError;
}

const { error } = defineProps<Props>();

const { t } = useI18n();

const statusCode = computed(() =>
  HANDLED_STATUS_CODE.includes(error.statusCode)
    ? Number(error.statusCode)
    : StatusCode.HTTP_500_INTERNAL_SERVER_ERROR
);

const errorTitle = computed(() =>
  HANDLED_STATUS_CODE.includes(error.statusCode)
    ? error.statusCode
    : t('error.default.title')
);
</script>

<template>
  <NuxtLayout>
    <div class="w-full bg-white rounded-[32px]">
      <div class="flex flex-col items-center gap-6 px-6 py-30">
        <IconError />
        <div class="text-primary-700 text-6xl font-bold">
          {{ errorTitle }}
        </div>
        <div class="flex flex-col items-center gap-3">
          <div class="text-3xl font-bold">
            {{ t(`error.${statusCode}.title`) }}
          </div>
          <div class="text-gray-500 text-center whitespace-pre-line">
            {{ t(`error.${statusCode}.message`) }}
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
