import React from "react";

import Button from "./button";
import { TabsProps } from "@/ts/types/components/tabs.types";

const Tabs = <T,>({ containerId, currentTab, tabs }: TabsProps<T>) => {
  const numberOfTabs = tabs.filter((tab) => !tab.hidden).length;

  return (
    <ul className="flex text-sm font-medium text-center rounded-lg shadow dark:divide-gray-700 dark:text-gray-400">
      {tabs.map((tab, tabIndex) => {
        const tabKey = `${containerId}__${tab.slug}`;
        return (
          <li key={tabKey} className="w-full focus-within:z-10">
            {tab.hidden ? (
              <></>
            ) : (
              <Button
                onClick={tab.onClick}
                aria-current="page"
                className={`relative inline-block w-full p-4 text-gray-900 bg-tertiary focus:ring-4 focus:ring-secondary active focus:outline-none dark:text-white ${
                  tabIndex === 0 && `rounded-s-lg`
                } ${
                  tabIndex === tabs.length - 1
                    ? "rounded-e-lg"
                    : "after:absolute after:right-0 after:top-[10px] after:bottom-[10px] after:content-[''] after:w-px after:bg-primary"
                }`}
              >
                {tab.title}
              </Button>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Tabs;
