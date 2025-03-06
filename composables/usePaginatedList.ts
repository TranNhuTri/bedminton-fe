import type { AppPagination } from '~/types';
import type { Ref } from 'vue';

export type PaginatedListOptions<T = any> = {
  pagination?: Ref<AppPagination>;
  itemsProperty?: string;
  paginationProperty?: string;
  pageProperty?: string;
  defaultItems?: () => T[];
};

export function usePaginatedList<T = any>(
  data: Ref<any>,
  {
    pagination,
    itemsProperty = 'data.items',
    paginationProperty = 'pagination',
    defaultItems = () => [],
  }: PaginatedListOptions<T> = {}
) {
  const items = ref<T[]>(defaultItems());

  watch(
    data,
    () => {
      items.value = useGet(data.value, itemsProperty) ?? defaultItems();

      if (pagination == null) return;

      const apiPagy = useGet(data.value, paginationProperty);
      if (apiPagy == null) return;

      pagination.value = createPagination(apiPagy);
    },
    { immediate: true }
  );

  return {
    items,
    pagination,
  };
}
