"use client";

import { useMapStore } from "@/stores/map/map.hooks";
import React from "react";

const Places = () => {
  const places = useMapStore((state) => state.places);

  return (
    <div className="w-full overflow-y-scroll">
      {places.map((place) => (
        <div key={place.id}>
          #{place?.id}. {place?.place_name}
        </div>
      ))}
    </div>
  );
};

export default Places;
