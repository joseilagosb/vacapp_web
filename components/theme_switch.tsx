import React from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Theme } from "@/ts/enums/constants.enums";

import { ThemeIcons } from "@/utils/constants";

import animations from "./theme_switch.animations";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const themeSpecificClasses: { [key in Theme as string]: string } = {
    [Theme.Light]: "justify-start",
    [Theme.Dark]: "justify-end",
  };

  const toggleTheme = () => setTheme(theme === Theme.Dark ? Theme.Light : Theme.Dark);

  return (
    <div
      className={`w-18 h-12 bg-white bg-opacity-40 flex p-2 cursor-pointer rounded-[80px] ${
        theme && themeSpecificClasses[theme]
      }`}
      onClick={toggleTheme}
    >
      <motion.div className="w-8 bg-primary rounded-full flex-centered " {...animations.switch}>
        {theme && <FontAwesomeIcon icon={ThemeIcons[theme]} />}
      </motion.div>
    </div>
  );
};

export default ThemeSwitch;
