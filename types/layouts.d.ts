export type AsideMenuItem = {
  key: string;
  icon: ConcreteComponent;
  routeName: string;
};

export type BreadcrumbItem = {
  key: string;
  routeName?: string;
};
