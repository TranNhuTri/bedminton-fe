import { SortOrder } from 'element-plus/es/components/table-v2/src/constants';
import type { Sort } from 'element-plus';

type UseSortOptions = {
  sortByKey?: string;
  sortDirectionKey?: string;
  defaultSortBy: string;
  defaultSortDirection: string;
};

const directionMapping = {
  ascending: SortOrder.ASC,
  descending: SortOrder.DESC,
};

export function useSort({
  sortByKey = 'sortBy',
  sortDirectionKey = 'sortDirection',
  defaultSortBy = '',
  defaultSortDirection = '',
}: UseSortOptions) {
  const router = useRouter();
  const route = useRoute();
  const sortBy = computed(() =>
    String(route.query[sortByKey] || defaultSortBy || '')
  );
  const sortDirection = computed(() =>
    String(route.query[sortDirectionKey] || defaultSortDirection || '')
  );

  const sort = ({
    prop,
    order,
  }: {
    prop: Sort['prop'];
    order: Sort['order'] | null;
  }) => {
    const newSortDirection = order ? directionMapping[order] : null;
    const newSortBy = newSortDirection ? prop : null;

    router.push({
      ...route,
      query: {
        ...route.query,
        page: 1,
        [sortByKey]: newSortBy,
        [sortDirectionKey]: newSortDirection,
      },
    });
  };

  return {
    sort,
    sortBy,
    sortDirection,
  };
}
