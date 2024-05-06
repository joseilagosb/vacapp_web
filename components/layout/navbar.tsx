"use client";

import React from "react";
import { useTheme } from "next-themes";

import styles from "../../styles/components/navbar.module.scss";
import { Theme } from "@/utils/constants";

type Props = {};

const Navbar = (props: Props) => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <div className={styles.navbar}>
        <h1 className={styles.title}>VACAPP</h1>
        <button
          className={styles.themeButton}
          onClick={() => setTheme(theme === Theme.Dark ? Theme.Light : Theme.Dark)}
        >
          {theme === Theme.Light ? Theme.Dark : Theme.Light}
        </button>
      </div>
    </>
  );
};

export default Navbar;
