"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

import { TextButton } from "../ui/button";

import { Theme } from "@/ts/enums/constants.enums";
import { ButtonColor } from "@/ts/enums/components/button.enums";

import styles from "../../styles/components/navbar.module.scss";
import animations from "../../styles/components/navbar.animations";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => setTheme(theme === Theme.Dark ? Theme.Light : Theme.Dark);

  return (
    <motion.div className={styles.navbar} {...animations.navbar}>
      <h1 className={styles.title}>VACAPP</h1>
      <TextButton
        color={ButtonColor.Secondary}
        onClick={toggleTheme}
        text={theme === Theme.Light ? Theme.Dark : Theme.Light}
      />
    </motion.div>
  );
};

export default Navbar;
