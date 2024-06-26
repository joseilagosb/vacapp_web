import React from "react";
import { motion } from "framer-motion";
import { useShallow } from "zustand/react/shallow";

import { usePlacesIndexStore } from "@/stores/places_index/places_index.hooks";

import PlaceCard from "./place_card";

import animations from "./places_list.animations";

const PlacesList = () => {
  const { places, filterValue, checkedPlaceTypes, checkedServices } = usePlacesIndexStore(
    useShallow((state) => ({
      places: state.places,
      filterValue: state.filterValue,
      checkedPlaceTypes: state.checkedPlaceTypes,
      checkedServices: state.checkedServices,
    }))
  );

  let filteredPlaces = places.filter(
    (place) =>
      place.place_name.toLowerCase().includes(filterValue) ||
      place.place_short_name.toLowerCase().includes(filterValue)
  );

  filteredPlaces = filteredPlaces.filter((place) => {
    if (checkedPlaceTypes.length > 0 && !checkedPlaceTypes.includes(+place.place_type.id)) {
      return false;
    }

    if (checkedServices.length === 0) {
      return true;
    }

    return checkedServices.some((checkedService) =>
      place.services.map((service) => +service.id).includes(checkedService)
    );
  });

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
