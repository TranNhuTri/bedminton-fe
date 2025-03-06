<script lang="ts" setup>
import { ROUTE_NAME, AsideMenu } from '~/configs';
import type { AsideMenuItem } from '~/types';

const IconVerify = resolveComponent('IconVerify');
const IconUsers = resolveComponent('IconUsers');
const IconDocument = resolveComponent('IconDocument');
const IconInfo = resolveComponent('IconInfo');
const IconCard = resolveComponent('IconCard');
const IconText = resolveComponent('IconText');

const emit = defineEmits<{
  select: [];
}>();

const { t } = useI18n();
const route = useRoute();

const asideMenuItems: AsideMenuItem[] = [];

const defaultActive = computed(() => {
  const { path } = route;
  const routeName = path.split('/')[1];
  return routeName || ROUTE_NAME.INDEX;
});

const onSelect = (routeName: string) => {
  redirectTo({ name: routeName });
  emit('select');
};
</script>

<template>
  <el-aside
    class="fixed h-screen bg-white flex-col items-center gap-6 p-6 border-r border-primary-200"
  >
    <nuxt-link :to="localePath({ name: ROUTE_NAME.INDEX })">
      <CommonImage src="/logo/logo.svg" class="h-10" />
    </nuxt-link>
    <el-menu
      :default-active="defaultActive"
      router
      class="flex flex-col gap-3 !border-none"
      @select="onSelect"
    >
      <el-menu-item
        v-for="item in asideMenuItems"
        :key="item.key"
        :index="item.routeName"
        class="flex items-center rounded-full !p-3"
      >
        <div class="aside-menu__icon-outer">
          <component :is="item.icon" class="aside-menu__icon-inner" />
        </div>
        <span class="aside-menu__text">
          {{ t(`screen.${item.key}`) }}
        </span>
        <IconArrowRight class="aside-menu__icon-arrow" />
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<style lang="scss" scoped>
.el-menu-item {
  @apply duration-300;

  &.is-active {
    @apply bg-primary-500;

    .aside-menu {
      &__icon-outer {
        @apply bg-primary-500;
      }

      &__icon-inner {
        @apply text-white;
      }

      &__text {
        @apply text-white;
      }

      &__icon-arrow {
        @apply text-white;
      }
    }
  }
}

.aside-menu {
  &__icon-outer {
    @apply w-9 h-9 bg-primary-50 flex items-center justify-center rounded-full duration-300;
  }

  &__icon-inner {
    @apply w-5 h-5 text-primary-700;
  }

  &__text {
    @apply text-gray-700 font-medium ml-3;
  }

  &__icon-arrow {
    @apply w-5 h-5 text-primary-700 ml-auto;
  }
}
</style>
