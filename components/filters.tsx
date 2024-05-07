"use client";

import { useMapStore } from "@/stores/map/map.hooks";
import React from "react";

const Filters = () => {
  const places = useMapStore((state) => state.places);

  return places.map((place) => (
    <div key={place.id}>
      #{place?.id}. {place?.place_name}
    </div>
  ));
};

export default Filters;
