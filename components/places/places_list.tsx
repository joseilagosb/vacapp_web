import React from "react";
import { motion } from "framer-motion";

import PlaceCard from "./place_card";

import animations from "./places_list.animations";
import { PlacesListProps } from "@/ts/types/components/places_list.types";

const PlacesList = ({ places, currentFilter }: PlacesListProps) => {
  const filteredPlaces = places.filter(
    (place) =>
      place.place_name?.toLowerCase().includes(currentFilter) ||
      place.place_short_name?.toLowerCase().includes(currentFilter)
  );

  if (filteredPlaces.length === 0) {
    return "No hay lugares...";
  }

  return (
    <motion.div
      className="grid gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 overflow-y-auto pt-3 pb-4 px-4 md:pb-8 md:px-8"
      {...animations.placesList}
    >
      {filteredPlaces.map((place) => (
        <PlaceCard key={place.id} place={place} />
      ))}
    </motion.div>
  );
};

export default PlacesList;
