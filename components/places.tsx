"use client";

import { useHomeStore } from "@/stores/home/home.hooks";
import React from "react";
import { useShallow } from "zustand/react/shallow";
import Button from "./ui/button";
import { useRouter } from "next/navigation";

const Places = () => {
  const router = useRouter();
  const { filteredPlaces, cameraPosition } = useHomeStore(
    useShallow((state) => ({
      cameraPosition: state.cameraPosition,
      filteredPlaces: state.filteredPlaces,
    }))
  );

  return (
    <div className="w-full overflow-y-auto">
      <div className="flex flex-row">
        <div className="w-1/2">
          <div className="py-2">
            <Button onClick={() => router.push("/places")}>Go to places index</Button>
          </div>
          {filteredPlaces.map((place) => (
            <div key={place.id}>
              #{place?.id}. {place?.place_name}
            </div>
          ))}
        </div>
        <div className="w-1/2 flex flex-col">
          <span className="font-bold font-italic text-2xl">Centro del mapa</span>
          <span className="font-italic text-xl">
            {cameraPosition.latitude}, {cameraPosition.longitude}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Places;
