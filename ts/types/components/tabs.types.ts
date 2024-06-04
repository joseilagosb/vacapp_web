export type TabsProps<T> = {
  containerId: string;
  tabs: Array<Tab>;
  currentTab: T;
};

export type Tab = {
  slug: string;
  title: string;
  onClick: () => void;
  hidden?: boolean;
};
