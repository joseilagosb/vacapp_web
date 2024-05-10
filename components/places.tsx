"use client";

import { useMapStore } from "@/stores/map/map.hooks";
import React from "react";

const Places = () => {
  const filteredPlaces = useMapStore((state) => state.filteredPlaces);

  return (
    <div className="w-full overflow-y-scroll">
      {filteredPlaces.map((place) => (
        <div key={place.id}>
          #{place?.id}. {place?.place_name}
        </div>
      ))}
    </div>
  );
};

export default Places;
