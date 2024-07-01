import { ComponentColor } from "@/ts/enums/constants.enums";

export type TabsProps<T> = {
  containerId: string;
  tabs: Array<Tab>;
  currentTab: T;
  tabsColor?: ComponentColor;
};

export type Tab = {
  slug: string;
  title: string;
  onClick: () => void;
  hidden?: boolean;
};
