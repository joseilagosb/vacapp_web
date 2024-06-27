"use client";

import React from "react";
import PlaceHeader from "../place/header";
import { useTheme } from "next-themes";
import { Theme } from "@/ts/enums/constants.enums";

const PlacePage = () => {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col h-full">
      <PlaceHeader />
      <div className="flex-grow flex flex-row">
        <div className="relative w-3/4 bg-green-100 flex flex-centered">
          <div
            className={`absolute inset-0 ${
              theme === Theme.Light ? "bg-white" : "bg-black"
            } bg-opacity-20`}
          />
          <span className="rotate-45 text-5xl font-extralight">Tabs</span>
        </div>
        <div className="relative w-1/4 bg-red-100 flex flex-centered">
          <div
            className={`absolute inset-0 ${
              theme === Theme.Light ? "bg-white" : "bg-black"
            } bg-opacity-20`}
          />
          <span className="rotate-45 text-5xl font-extralight">About the place</span>
        </div>
      </div>
    </div>
  );
};

export default PlacePage;
