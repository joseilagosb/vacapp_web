"use client";

import { usePlaceStore } from "@/stores/place/place.hooks";
import React from "react";

const PlacePage = () => {
  const place = usePlaceStore((state) => state.place);

  return <div>{place.place_name}</div>;
};

export default PlacePage;
