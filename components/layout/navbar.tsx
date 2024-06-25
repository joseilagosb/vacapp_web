"use client";

import React from "react";
import { useRouter } from "next-nprogress-bar";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import ThemeSwitch from "../theme_switch";

import animations from "./navbar.animations";
import Button from "../ui/button";

const Navbar = () => {
  const router = useRouter();
  return (
    <motion.div
      className="w-full h-16 top-0 py-2 bg-primary flex items-center justify-between gap-2 px-4"
      {...animations.navbar}
    >
      <div className="cursor-pointer text-2xl">
        <FontAwesomeIcon icon={faBars} />
      </div>
      <Button onClick={() => router.push("/")}>
        <h1 className="uppercase tracking-widest">VACAPP</h1>
      </Button>
      <div>
        <ThemeSwitch />
      </div>
    </motion.div>
  );
};

export default Navbar;
