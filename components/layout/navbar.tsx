"use client";

import React from "react";
import { useTheme } from "next-themes";

import styles from "../../styles/components/navbar.module.scss";
import { Theme } from "@/ts/enums/constants.enums";
import { TextButton } from "../ui/button";
import { ButtonColor } from "@/ts/enums/components/button.enums";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => setTheme(theme === Theme.Dark ? Theme.Light : Theme.Dark);

  return (
    <>
      <div className={styles.navbar}>
        <h1 className={styles.title}>VACAPP</h1>
        <TextButton
          color={ButtonColor.Secondary}
          onClick={toggleTheme}
          text={theme === Theme.Light ? Theme.Dark : Theme.Light}
        />
      </div>
    </>
  );
};

export default Navbar;
