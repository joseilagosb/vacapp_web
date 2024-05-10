"use client";

import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useShallow } from "zustand/react/shallow";

import { useMapStore } from "@/stores/map/map.hooks";

import Places from "../places";
import FloatingButtonsContainer from "../floating_buttons_container";
import PlaceFiltersModal from "../place_filters_modal";
import { PlaceFilterType } from "@/ts/enums/stores.types";

const HomePage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { placeFilterType, filterPlaces, restoreFilters } = useMapStore(
    useShallow((state) => ({
      filterPlaces: state.filterPlaces,
      restoreFilters: state.restoreFilters,
      placeFilterType: state.placeFilterType,
    }))
  );

  const renderFilterButton = () => {
    switch (placeFilterType) {
      case PlaceFilterType.PlaceTypes:
      case PlaceFilterType.Services:
        return (
          <button className="rounded-xl p-4 bg-red-700" onClick={() => restoreFilters()}>
            Restaurar filtros
          </button>
        );
      case PlaceFilterType.None:
      default:
        return (
          <>
            <button
              className="rounded-xl p-4 bg-primary"
              onClick={() => filterPlaces(PlaceFilterType.PlaceTypes, [3, 4, 5])}
            >
              Filtrar por tipo de lugar 3, 4 y 5
            </button>
            <button
              className="rounded-xl p-4 bg-primary"
              onClick={() => filterPlaces(PlaceFilterType.Services, [4, 6])}
            >
              Filtrar por tipo de servicio 4 y 6
            </button>
          </>
        );
    }
  };

  return (
    <>
      <Places />
      <FloatingButtonsContainer>
        {renderFilterButton()}
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
