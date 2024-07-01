import React from "react";
import { motion } from "framer-motion";

import Button from "./button";

import { TabsProps } from "@/ts/types/components/tabs.types";

import { getTabClassesObj } from "./tabs.classes";
import { ButtonSize } from "@/ts/enums/components/button.enums";
import { ComponentColor } from "@/ts/enums/constants.enums";

const Tabs = <T,>({ containerId, currentTab, tabs, tabsColor = ComponentColor.Transparent }: TabsProps<T>) => {
  return (
    <ul className="flex text-sm font-medium text-center rounded-lg shadow dark:divide-gray-700 dark:text-gray-400">
      {tabs.map((tab, tabIndex) => {
        const tabKey = `${containerId}__${tab.slug}`;
        const tabClassesObj = getTabClassesObj(tabs.length, tabIndex);
        const selected = currentTab === tab.slug;

        return (
          <li key={tabKey} className="w-full">
            {tab.hidden ? (
              <></>
            ) : (
              <Button
                onClick={tab.onClick}
                color={tabsColor}
                size={ButtonSize.Small}
                aria-current="page"
                className={`relative size-full flex justify-center p-4 text-gray-900 dark:text-white ${tabClassesObj.borderRadius} ${tabClassesObj.after}`}
              >
                {selected && (
                  <motion.div
                    layoutId="selected"
                    className={`z-10 absolute top-0 left-0 size-full bg-tertiary ${tabClassesObj.borderRadius}`}
                  />
                )}
                <span className="z-20">{tab.title}</span>
              </Button>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Tabs;
