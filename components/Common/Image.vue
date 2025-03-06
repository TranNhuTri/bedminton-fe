<script lang="ts" setup>
type Props = {
  src?: string;
  alt?: string;
};

withDefaults(defineProps<Props>(), {
  src: '/fallback/default.svg',
  alt: 'Badminton Hub',
});
</script>

<template>
  <el-image v-bind="$attrs" :src="src" :alt="alt" fit="cover">
    <template #error>
      <img
        src="/fallback/default.svg"
        class="w-full h-full"
        alt="Badminton Hub"
      />
    </template>
  </el-image>
</template>
