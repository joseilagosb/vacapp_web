"use client";

import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useShallow } from "zustand/react/shallow";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faTimes } from "@fortawesome/free-solid-svg-icons";

import Places from "../places";
import FloatingButtonsContainer from "../floating_buttons_container";
import PlaceFiltersModal from "../place_filters_modal";
import FilterDialog from "../filter_dialog";

import { useMapStore } from "@/stores/map/map.hooks";

import { PlaceFilterType } from "@/ts/enums/stores.types";

const HomePage = () => {
  const [isPlaceFiltersModalVisible, setIsPlaceFiltersModalVisible] = useState(false);
  const [isFilterDialogVisible, setIsFilterDialogVisible] = useState(false);
  const [selectedFilterType, setSelectedFilterType] = useState(PlaceFilterType.None);

  const { filterPlaces, placeFilterType, restoreFilters } = useMapStore(
    useShallow((state) => ({
      placeFilterType: state.placeFilterType,
      filterPlaces: state.filterPlaces,
      restoreFilters: state.restoreFilters,
    }))
  );

  const renderFilterButton = () => {
    switch (placeFilterType) {
      case PlaceFilterType.PlaceTypes:
      case PlaceFilterType.Services:
        return (
          <button className="rounded-xl p-4 bg-red-700" onClick={() => restoreFilters()}>
            <FontAwesomeIcon icon={faTimes} className="mr-2" />
            <span>Restaurar</span>
          </button>
        );
      case PlaceFilterType.None:
      default:
        return (
          <button
            className="rounded-xl p-4 bg-primary"
            onClick={() => setIsFilterDialogVisible(true)}
          >
            <FontAwesomeIcon icon={faFilter} className="mr-2" />
            <span>Filtrar</span>
          </button>
        );
    }
  };

  const onSelectedFilterType = (filterType: PlaceFilterType) => {
    setIsFilterDialogVisible(false);
    setSelectedFilterType(filterType);
    setIsPlaceFiltersModalVisible(true);
  }

  const onClickFilter = (filterType: PlaceFilterType, filtersList: Array<number>) => {
    filterPlaces(filterType, filtersList);
    setIsPlaceFiltersModalVisible(false);
  }

  return (
    <>
      <Places />
      <FloatingButtonsContainer>
        <button className="rounded-xl p-4 bg-primary" onClick={() => { }}>
          Sectores
        </button>
        {renderFilterButton()}
      </FloatingButtonsContainer>
      <AnimatePresence>
        {isFilterDialogVisible &&
          <FilterDialog
            onCloseModal={() => setIsFilterDialogVisible(false)}
            onSelectedFilterType={onSelectedFilterType}
          />
        }
      </AnimatePresence>
      <AnimatePresence>
        {isPlaceFiltersModalVisible &&
          <PlaceFiltersModal
            filterType={selectedFilterType}
            onClickFilter={onClickFilter}
            onCloseModal={() => setIsPlaceFiltersModalVisible(false)}
          />
        }
      </AnimatePresence>
    </>
  );
};

export default HomePage;
