"use client";

import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import ThemeSwitch from "../theme_switch";

import styles from "../../styles/components/layout/navbar.module.scss";
import animations from "../../styles/components/layout/navbar.animations";

const Navbar = () => {
  return (
    <motion.div className={styles.navbar} {...animations.navbar}>
      <div className={styles.menu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className={styles.header}>
        <h1 className={styles.title}>VACAPP</h1>
      </div>
      <div className={styles.actionButtons}>
        <ThemeSwitch />
      </div>
    </motion.div>
  );
};

export default Navbar;
