<script lang="ts" setup>
//
</script>

<template>
  <el-button type="primary" plain round size="large" class="profile-button">
    <div class="flex items-center gap-1">
      <span>Peter Gade</span>
      <div class="profile-button__icon-outer">
        <IconUser class="profile-button__icon-inner" />
      </div>
    </div>
  </el-button>
</template>

<style lang="scss" scoped>
.profile-button {
  @apply rounded-full p-1 pl-4;

  &:hover {
    .profile-button__icon-outer {
      @apply border-white;
    }

    .profile-button__icon-inner {
      @apply text-white;
    }
  }

  &__icon-outer {
    @apply w-8 h-8 box-border flex items-center justify-center border border-primary-200 rounded-full;
  }

  &__icon-inner {
    @apply w-4 h-4 text-primary-500;
  }
}
</style>
