"use client";

import React, { useState } from "react";
import { useShallow } from "zustand/react/shallow";
import { AnimatePresence } from "framer-motion";

import { faMapSigns, faFilter, faTimes } from "@fortawesome/free-solid-svg-icons";

import { IconButton } from "../ui/button";
import Places from "../places";
import FloatingButtonsContainer from "../floating_buttons_container";
import FilterByModal from "../filter_by_modal";
import PlaceFiltersModal from "../place_filters_modal";
import NoPlacesFoundModal from "../no_places_found_modal";
import LegendModal from "../legend_modal";

import { useHomeStore } from "@/stores/home/home.hooks";

import { PlaceFilterType } from "@/ts/enums/stores.types";
import { ButtonColor } from "@/ts/enums/components/button.enums";

import animations from "./home.animations";

const HomePage = () => {
  const [isPlaceFiltersModalVisible, setIsPlaceFiltersModalVisible] = useState(false);
  const [isFilterByModalVisible, setIsFilterByModalVisible] = useState(false);
  const [isLegendModalVisible, setIsLegendModalVisible] = useState(false);
  const [selectedFilterType, setSelectedFilterType] = useState(PlaceFilterType.None);

  const { filterPlaces, filteredPlaces, placeFilterType, restoreFilters } = useHomeStore(
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
            animations={animations.floatingButton}
          />
        );
      case PlaceFilterType.None:
      default:
        return (
          <IconButton
            onClick={() => setIsFilterByModalVisible(true)}
            icon={faFilter}
            text="Filtrar"
            animations={animations.floatingButton}
          />
        );
    }
  };

  const noPlacesFound = filteredPlaces.length === 0 && placeFilterType != PlaceFilterType.None;

  const onSelectedFilterType = (filterType: PlaceFilterType) => {
    setIsFilterByModalVisible(false);
    setSelectedFilterType(filterType);
    setIsPlaceFiltersModalVisible(true);
  };

  const onClickFilter = (filters: Array<number>) => {
    filterPlaces(selectedFilterType, filters);
    setIsPlaceFiltersModalVisible(false);
  };

  return (
    <>
      <Places />
      <FloatingButtonsContainer>
        <IconButton
          icon={faMapSigns}
          onClick={() => setIsLegendModalVisible(true)}
          text="Símbolos"
          animations={animations.floatingButton}
        />
        {renderFilterButton()}
      </FloatingButtonsContainer>
      <AnimatePresence>
        {isFilterByModalVisible && (
          <FilterByModal
            key="filter-by-modal"
            onCloseModal={() => setIsFilterByModalVisible(false)}
            onSelectedFilterType={onSelectedFilterType}
          />
        )}
        {isPlaceFiltersModalVisible && (
          <PlaceFiltersModal
            key="place-filters-modal"
            filterType={selectedFilterType}
            onClickFilter={onClickFilter}
            onCloseModal={() => setIsPlaceFiltersModalVisible(false)}
          />
        )}
        {isLegendModalVisible && (
          <LegendModal key="legend-modal" onCloseModal={() => setIsLegendModalVisible(false)} />
        )}
        {noPlacesFound && (
          <NoPlacesFoundModal key="no-places-found-modal" onClickRestore={restoreFilters} />
        )}
      </AnimatePresence>
    </>
  );
};

export default HomePage;
