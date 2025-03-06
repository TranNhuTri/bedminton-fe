<script lang="ts" setup>
// @ts-ignore
import ja from 'element-plus/dist/locale/ja.mjs';
// @ts-ignore
import en from 'element-plus/dist/locale/en.mjs';
// @ts-ignore
import vi from 'element-plus/dist/locale/vi.mjs';
import dayjs from 'dayjs';

import 'dayjs/locale/ja';

const { locale } = useI18n();

const themeLocale = ref();

const localeMap: any = { ja, en, vi };

watch(
  locale,
  () => {
    dayjs.locale(locale.value);
    themeLocale.value = localeMap[locale.value];
  },
  { immediate: true }
);

const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true,
});
</script>

<template>
  <el-config-provider :locale="themeLocale">
    <Html :lang="head.htmlAttrs?.lang" :dir="head.htmlAttrs?.dir">
      <Head>
        <template v-for="link in head.link" :key="link.id">
          <Link
            :id="link.id"
            :rel="link.rel"
            :href="link.href"
            :hreflang="link.hreflang"
          />
        </template>
        <template v-for="meta in head.meta" :key="meta.id">
          <Meta
            :id="meta.id"
            :property="meta.property"
            :content="meta.content"
          />
        </template>
      </Head>
      <Body>
        <NuxtLoadingIndicator
          class="loading-indicator-box-shadow"
          :duration="20000"
        />
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </Body>
    </Html>
  </el-config-provider>
</template>
