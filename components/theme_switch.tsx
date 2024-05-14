import React from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Theme } from "@/ts/enums/constants.enums";

import { ThemeIcons } from "@/utils/constants";

import styles from "../styles/components/theme_switch.module.scss";
import animations from "../styles/components/theme_switch.animations";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => setTheme(theme === Theme.Dark ? Theme.Light : Theme.Dark);

  return (
    <div className={`${styles.themeSwitch} ${theme && styles[theme]}`} onClick={toggleTheme}>
      <motion.div className={styles.toggler} {...animations.switch}>
        {theme && <FontAwesomeIcon icon={ThemeIcons[theme]} />}
      </motion.div>
    </div>
  );
};

export default ThemeSwitch;
