<script lang="ts" setup>
//
</script>

<template>
  <div id="__layout">
    <el-container direction="horizontal" class="bg-white h-screen flex">
      <div
        class="w-1/2 h-screen bg-primary-25 hidden sm:flex items-center justify-center border-r border-primary-200"
      >
        <CommonImage src="/logo/logo.svg" class="h-50" />
      </div>
      <el-main class="w-1/2 !p-6">
        <slot />
      </el-main>
    </el-container>
  </div>
</template>
