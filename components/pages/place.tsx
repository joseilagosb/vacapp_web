"use client";

import React from "react";

import PlaceHeader from "../place/header";
import PlaceNavigator from "../place/navigator";
import AboutPlace from "../place/about";

const PlacePage = () => {
  return (
    <div className="flex flex-col h-full">
      <PlaceHeader />
      <div className="flex-grow flex flex-row gap-4">
        <PlaceNavigator />
        <AboutPlace />
      </div>
    </div>
  );
};

export default PlacePage;
