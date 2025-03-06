<script lang="ts" setup>
import get from 'lodash/get';
import type { TableColumnInstance } from 'element-plus';

type Props = {
  data: any[];
  columns: TableColumnInstance[];
};

defineProps<Props>();

const { t } = useI18n();
</script>

<template>
  <div class="bg-white rounded-[32px] p-6">
    <el-table v-bind="$attrs" :data="data" :empty-text="t('common.empty')">
      <template v-for="column in columns" :key="column.prop">
        <el-table-column v-bind="column">
          <template #header="slotProps">
            <template v-if="$slots[`head(${column.prop})`]">
              <slot
                :name="`head(${column.prop})`"
                v-bind="{ ...slotProps, value: column.label }"
              />
            </template>
            <template v-else>{{ column.label }}</template>
          </template>
          <template #default="slotProps">
            <template v-if="$slots[`cell(${column.prop})`]">
              <slot
                :name="`cell(${column.prop})`"
                v-bind="{
                  ...slotProps,
                  value: get(slotProps.row, column.prop),
                }"
              />
            </template>
            <template v-else>
              {{
                column.formatter
                  ? column.formatter({
                      row: slotProps.row,
                      value: get(slotProps.row, column.prop),
                    })
                  : get(slotProps.row, column.prop)
              }}
            </template>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>
