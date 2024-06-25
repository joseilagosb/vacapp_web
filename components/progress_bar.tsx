"use client";

import React from "react";

import { AppProgressBar } from "next-nprogress-bar";

const ProgressBar = () => {
  return <AppProgressBar height="4px" color="#ddfd00" options={{ showSpinner: false }} />;
};

export default ProgressBar;
