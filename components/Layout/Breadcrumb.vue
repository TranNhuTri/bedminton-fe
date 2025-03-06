<script lang="ts" setup>
import { ROUTE_NAME } from '~/configs';
import type { BreadcrumbItem } from '~/types';

const IconArrowRight = resolveComponent('IconArrowRight');

const { t } = useI18n();
const route = useRoute();

const breadcrumbItems = computed<BreadcrumbItem[]>(() => {
  const routeName = route.name?.toString().split('___')[0];
  if (!routeName) return [];

  const items: BreadcrumbItem[] = routeName
    .split('-')
    .map((_, index, arr) => ({
      key: arr.slice(0, index + 1).join('_'),
      routeName: arr.slice(0, index + 1).join('-'),
    }))
    .filter((item) => Object.values(ROUTE_NAME).includes(item.routeName));

  if (items.length) {
    items[items.length - 1].routeName = undefined;
  }

  return items;
});
</script>

<template>
  <el-breadcrumb v-if="breadcrumbItems.length" :separator-icon="IconArrowRight">
    <el-breadcrumb-item
      v-for="item in breadcrumbItems"
      :key="item.key"
      :to="item.routeName ? { path: `/${item.routeName}` } : null"
    >
      {{ t(`screen.${item.key}`) }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
