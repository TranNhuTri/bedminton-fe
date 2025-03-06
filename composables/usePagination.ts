import { DEFAULT_PER_PAGE } from '~/configs';
import type { ApiPagination, AppPagination } from '~/types';

export type UsePaginationOptions = {
  defaultPage?: number;
  scrollToTop?: boolean | ScrollBehavior;
  readQuery?: boolean | string;
  writeQuery?: boolean;
};

export function createPagination(
  options?: Partial<ApiPagination> | Partial<AppPagination>
): AppPagination {
  const perPage =
    (options as ApiPagination)?.offset ??
    (options as AppPagination)?.perPage ??
    DEFAULT_PER_PAGE;
  const totalCount =
    (options as ApiPagination)?.count ??
    (options as AppPagination)?.totalCount ??
    0;
  const pageCount = Math.ceil(totalCount / perPage);

  return {
    page: options?.page ?? 1,
    perPage,
    totalCount,
    pageCount,
  };
}

export function usePagination({
  defaultPage = 1,
  readQuery = 'page',
  writeQuery = true,
  scrollToTop = true,
}: UsePaginationOptions = {}) {
  const route = useRoute();
  const router = useRouter();

  const queryName = typeof readQuery === 'string' ? readQuery : 'page';

  const routePage = computed(() =>
    readQuery ? asNumber(route.query[queryName]) : undefined
  );

  const pagination = ref<AppPagination>(
    createPagination({ page: routePage.value ?? defaultPage })
  );

  const page = computed({
    get() {
      return pagination.value.page;
    },
    set(value: number) {
      pagination.value.page = value;
    },
  });

  const isFirstPage = computed(() => {
    return pagination.value.pageCount > 0 && pagination.value.pageCount === 1;
  });

  const isLastPage = computed(() => {
    return (
      pagination.value.pageCount > 0 &&
      pagination.value.pageCount === page.value
    );
  });

  const hasPrevPage = computed(() => page.value - 1 >= 1);

  const hasNextPage = computed(
    () => page.value + 1 <= pagination.value.pageCount
  );

  const prevPage = computed(() => (hasPrevPage.value ? page.value - 1 : null));

  const nextPage = computed(() => (hasNextPage.value ? page.value + 1 : null));

  watch(page, (value) => {
    if (writeQuery) {
      const query = { ...route.query, [queryName]: value };
      if (value === 1) delete query[queryName];
      router.push({ query });
    }

    if (scrollToTop && typeof window !== 'undefined') {
      const behavior = typeof scrollToTop === 'string' ? scrollToTop : 'auto';
      window.scrollTo({ top: 0, left: 0, behavior });
    }
  });

  watch(routePage, () => {
    pagination.value.page = routePage.value ?? defaultPage;
  });

  return {
    page,
    isFirstPage,
    isLastPage,
    hasPrevPage,
    hasNextPage,
    prevPage,
    nextPage,
    pagination,
    createPagination,
  };
}
