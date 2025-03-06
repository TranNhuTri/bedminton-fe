<script lang="ts" setup>
const IconMenu = resolveComponent('IconMenu');

const visibleAside = ref(false);
</script>

<template>
  <el-header
    height="88"
    class="w-full flex items-center justify-between sm:justify-end !p-6"
  >
    <el-button
      type="primary"
      plain
      :icon="IconMenu"
      circle
      size="large"
      class="inline-flex !sm:hidden"
      @click="visibleAside = true"
    />
    <el-drawer
      v-model="visibleAside"
      :size="280"
      :with-header="false"
      direction="ltr"
      body-class="!p-0"
    >
      <LazyLayoutAside class="flex" @select="visibleAside = false" />
    </el-drawer>
    <div class="flex items-center gap-4">
      <NotificationButton />
      <ProfileButton />
    </div>
  </el-header>
</template>
