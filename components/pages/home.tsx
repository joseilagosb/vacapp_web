"use client";

import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

import { useMapStore } from "@/stores/map/map.hooks";

import Places from "../places";
import FloatingButtonsContainer from "../floating_buttons_container";
import PlaceFiltersModal from "../place_filters_modal";

import { PlaceFilterType } from "@/ts/enums/stores.types";

const HomePage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const filterPlaces = useMapStore((state) => state.filterPlaces);

  return (
    <>
      <Places />
      <FloatingButtonsContainer>
        <button
          className="rounded-xl p-4 bg-primary"
          onClick={() => filterPlaces(PlaceFilterType.PlaceTypes, [3, 4, 5])}
        >
          Filtrar por tipo de lugar 3, 4 y 5
        </button>
        <button className="rounded-xl p-4 bg-primary" onClick={() => setIsModalVisible(true)}>
          Mostrar modal
        </button>
      </FloatingButtonsContainer>
      <AnimatePresence>
        {isModalVisible && <PlaceFiltersModal onCloseModal={() => setIsModalVisible(false)} />}
      </AnimatePresence>
    </>
  );
};

export default HomePage;
