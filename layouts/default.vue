<script lang="ts" setup>
//
</script>

<template>
  <div id="__layout">
    <el-container direction="horizontal" class="bg-primary-25 min-h-screen">
      <LayoutAside class="hidden sm:flex" />
      <el-container direction="vertical" class="margin-left-aside">
        <LayoutHeader />
        <LayoutBreadcrumb />
        <el-main class="!p-6">
          <slot />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
