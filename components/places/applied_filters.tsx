import React from "react";
import { useShallow } from "zustand/react/shallow";

import { faSearch, faSort } from "@fortawesome/free-solid-svg-icons";

import { usePlacesIndexStore } from "@/stores/places_index/places_index.hooks";

import Button from "../ui/button";
import FilterBubble from "./filter_bubble";

import { ButtonSize } from "@/ts/enums/components/button.enums";
import { ComponentColor } from "@/ts/enums/constants.enums";
import { SortPlacesBy } from "@/ts/enums/components/places_index.enums";
import { SortPlacesByLabels } from "@/utils/constants";

const AppliedFilters = () => {
  const {
    placeTypes,
    services,
    checkedPlaceTypes,
    checkedServices,
    filterValue,
    clearFilterValue,
    togglePlaceType,
    toggleService,
    clearAllFilters,
    sortBy,
    clearSortBy,
  } = usePlacesIndexStore(
    useShallow((state) => ({
      placeTypes: state.placeTypes,
      services: state.services,
      checkedPlaceTypes: state.checkedPlaceTypes,
      checkedServices: state.checkedServices,
      filterValue: state.filterValue,
      clearFilterValue: state.clearFilterValue,
      togglePlaceType: state.togglePlaceType,
      toggleService: state.toggleService,
      clearAllFilters: state.clearAllFilters,
      sortBy: state.sortBy,
      updateSortBy: state.updateSortBy,
      clearSortBy: state.clearSortBy,
    }))
  );

  const checkedPlaceTypeNames = checkedPlaceTypes.map(
    (checkedPlaceType) =>
      placeTypes.find((placeType) => +placeType.id === checkedPlaceType)?.place_type_name
  );
  const checkedServiceNames = checkedServices.map(
    (checkedService) => services.find((service) => +service.id === checkedService)?.service_name
  );

  return (
    <div className="w-full min-h-[60px] bg-tertiary mt-3 px-8 py-3 flex flex-row justify-between">
      <div className="flex flex-col gap-3">
        {(filterValue != "" || sortBy !== SortPlacesBy.Default) && (
          <div className="flex flex-row">
            <span className="text-xs uppercase tracking-wide w-[80px] pt-2 pr-3 text-right">Filtros</span>
            <div className="flex flex-wrap gap-1">
              {filterValue !== "" && (
                <FilterBubble item={filterValue} icon={faSearch} onClick={clearFilterValue} />
              )}
              {sortBy !== SortPlacesBy.Default && (
                <FilterBubble item={SortPlacesByLabels[sortBy]} icon={faSort} onClick={clearSortBy} />
              )}
            </div>
          </div>
        )}
        {checkedPlaceTypes.length > 0 && (
          <div className="flex flex-row">
            <span className="text-xs uppercase tracking-wide w-[80px] pt-2 pr-3 text-right">Tipo</span>
            <div className="flex flex-wrap gap-1">
              {checkedPlaceTypes.map((checkedPlaceType, checkedPlaceTypeIndex) => (
                <FilterBubble
                  item={checkedPlaceTypeNames[checkedPlaceTypeIndex]!}
                  onClick={() => togglePlaceType(checkedPlaceType)}
                />
              ))}
            </div>
          </div>
        )}
        {checkedServices.length > 0 && (
          <div className="flex flex-row">
            <span className="text-xs uppercase tracking-wide w-[80px] pt-2 pr-3 text-right">Servicio</span>
            <div className="flex flex-wrap gap-1">
              {checkedServices.map((checkedService, checkedServiceIndex) => (
                <FilterBubble
                  item={checkedServiceNames[checkedServiceIndex]!}
                  onClick={() => toggleService(checkedService)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="w-1/6 min-w-[120px] text-right">
        <Button onClick={clearAllFilters} size={ButtonSize.Small} color={ComponentColor.Alert}>
          Limpiar filtros
        </Button>
      </div>
    </div>
  );
};

export default AppliedFilters;
