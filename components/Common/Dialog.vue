<script lang="ts" setup>
import { DialogWidth } from '~/configs';

const IconClose = resolveComponent('IconClose');

type Props = {
  modelValue: boolean;
  width?: DialogWidth;
};

const { modelValue, width } = withDefaults(defineProps<Props>(), {
  modelValue: false,
  width: DialogWidth.SM,
});

const emit = defineEmits<{
  'update:modelValue': [val: boolean];
}>();

const value = computed<boolean>({
  get: () => modelValue,
  set: (val) => emit('update:modelValue', val),
});
</script>

<template>
  <el-dialog
    v-bind="$attrs"
    v-model="value"
    :width="width"
    align-center
    :close-icon="IconClose"
  >
    <slot />
    <template #footer>
      <slot name="footer" />
    </template>
  </el-dialog>
</template>
