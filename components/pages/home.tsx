"use client";

import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useShallow } from "zustand/react/shallow";

import { faMapSigns, faFilter, faTimes } from "@fortawesome/free-solid-svg-icons";

import { IconButton } from "../ui/button";
import Places from "../places";
import FloatingButtonsContainer from "../floating_buttons_container";
import PlaceFiltersModal from "../place_filters_modal";
import FilterDialog from "../filter_dialog";
import NoPlacesFoundModal from "../no_places_found_modal";

import { useMapStore } from "@/stores/map/map.hooks";

import { PlaceFilterType } from "@/ts/enums/stores.types";
import { ButtonColor } from "@/ts/enums/components/button.enums";

const HomePage = () => {
  const [isPlaceFiltersModalVisible, setIsPlaceFiltersModalVisible] = useState(false);
  const [isFilterDialogVisible, setIsFilterDialogVisible] = useState(false);
  const [selectedFilterType, setSelectedFilterType] = useState(PlaceFilterType.None);

  const { filterPlaces, filteredPlaces, placeFilterType, restoreFilters } = useMapStore(
    useShallow((state) => ({
      placeFilterType: state.placeFilterType,
      filterPlaces: state.filterPlaces,
      filteredPlaces: state.filteredPlaces,
      restoreFilters: state.restoreFilters,
    }))
  );

  const renderFilterButton = () => {
    switch (placeFilterType) {
      case PlaceFilterType.PlaceTypes:
      case PlaceFilterType.Services:
        return (
          <IconButton
            color={ButtonColor.Alert}
            onClick={() => restoreFilters()}
            icon={faTimes}
            text="Restaurar"
          />
        );
      case PlaceFilterType.None:
      default:
        return (
          <IconButton
            onClick={() => setIsFilterDialogVisible(true)}
            icon={faFilter}
            text="Filtrar"
          />
        );
    }
  };

  const noPlacesFound = filteredPlaces.length === 0 && placeFilterType != PlaceFilterType.None;

  const onSelectedFilterType = (filterType: PlaceFilterType) => {
    setIsFilterDialogVisible(false);
    setSelectedFilterType(filterType);
    setIsPlaceFiltersModalVisible(true);
  };

  const onClickFilter = (filterType: PlaceFilterType, filtersList: Array<number>) => {
    filterPlaces(filterType, filtersList);
    setIsPlaceFiltersModalVisible(false);
  };

  return (
    <>
      <Places />
      <FloatingButtonsContainer>
        <IconButton icon={faMapSigns} onClick={() => {}} text="Sectores" />
        {renderFilterButton()}
      </FloatingButtonsContainer>
      <AnimatePresence>
        {isFilterDialogVisible && (
          <FilterDialog
            onCloseModal={() => setIsFilterDialogVisible(false)}
            onSelectedFilterType={onSelectedFilterType}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isPlaceFiltersModalVisible && (
          <PlaceFiltersModal
            filterType={selectedFilterType}
            onClickFilter={onClickFilter}
            onCloseModal={() => setIsPlaceFiltersModalVisible(false)}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {noPlacesFound && <NoPlacesFoundModal onClickRestore={restoreFilters} />}
      </AnimatePresence>
    </>
  );
};

export default HomePage;
