<script lang="ts" setup>
import { DEFAULT_PER_PAGE } from '~/configs';

const IconArrowLeft = resolveComponent('IconArrowLeft');
const IconArrowRight = resolveComponent('IconArrowRight');

type Props = {
  pageSize?: number;
};

withDefaults(defineProps<Props>(), {
  pageSize: DEFAULT_PER_PAGE,
});
</script>

<template>
  <el-pagination
    v-bind="$attrs"
    background
    hide-on-single-page
    :pager-count="5"
    :page-size="pageSize"
    layout="prev, pager, next"
    :prev-icon="IconArrowLeft"
    :next-icon="IconArrowRight"
    class="mx-auto"
  />
</template>
