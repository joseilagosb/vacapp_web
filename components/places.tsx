"use client";

import { useHomeStore } from "@/stores/home/home.hooks";
import React from "react";

const Places = () => {
  const filteredPlaces = useHomeStore((state) => state.filteredPlaces);

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
