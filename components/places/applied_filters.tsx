import React from "react";
import { useShallow } from "zustand/react/shallow";

import { usePlacesIndexStore } from "@/stores/places_index/places_index.hooks";

import Button from "../ui/button";
import { ButtonSize } from "@/ts/enums/components/button.enums";
import { ComponentColor } from "@/ts/enums/constants.enums";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const AppliedFilters = () => {
  const {
    placeTypes,
    services,
    checkedPlaceTypes,
    checkedServices,
    filterValue,
    togglePlaceType,
    toggleService,
    clearAllFilters,
  } = usePlacesIndexStore(
    useShallow((state) => ({
      placeTypes: state.placeTypes,
      services: state.services,
      checkedPlaceTypes: state.checkedPlaceTypes,
      checkedServices: state.checkedServices,
      filterValue: state.filterValue,
      togglePlaceType: state.togglePlaceType,
      toggleService: state.toggleService,
      clearAllFilters: state.clearAllFilters,
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
      <div className="flex flex-wrap gap-1">
        {checkedPlaceTypes.map((checkedPlaceType, checkedPlaceTypeIndex) => {
          const placeTypeName = checkedPlaceTypeNames[checkedPlaceTypeIndex];
          return (
            <div className="rounded-lg bg-secondary p-2 flex items-center self-center gap-2">
              <span className="text-sm">{placeTypeName || ""}</span>
              <FontAwesomeIcon
                icon={faTimes}
                className="cursor-pointer"
                onClick={() => togglePlaceType(checkedPlaceType)}
              />
            </div>
          );
        })}
        {checkedServices.map((checkedService, checkedServiceIndex) => {
          const serviceName = checkedServiceNames[checkedServiceIndex];
          return (
            <div className="rounded-lg bg-secondary px-2 flex items-center gap-2">
              <span className="text-sm">{serviceName || ""}</span>
              <FontAwesomeIcon
                icon={faTimes}
                className="cursor-pointer"
                onClick={() => toggleService(checkedService)}
              />
            </div>
          );
        })}
      </div>
      <Button onClick={clearAllFilters} size={ButtonSize.Small} color={ComponentColor.Alert}>
        Limpiar filtros
      </Button>
    </div>
  );
};

export default AppliedFilters;
