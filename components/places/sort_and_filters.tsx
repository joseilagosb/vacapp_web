import React from "react";
import { useShallow } from "zustand/react/shallow";

import { usePlacesIndexStore } from "@/stores/places_index/places_index.hooks";

import Dropdown from "../ui/dropdown";
import { TextButton } from "../ui/button";
import Checkbox from "../form/checkbox";

import { ModalSize } from "@/ts/enums/components/modal.enums";
import { ButtonSize } from "@/ts/enums/components/button.enums";
import { ComponentColor } from "@/ts/enums/constants.enums";
import { SortPlacesBy } from "@/ts/enums/components/places_index.enums";
import { SortPlacesByLabels } from "@/utils/constants";

const SortAndFilters = () => {
  const {
    placeTypes,
    services,
    checkedPlaceTypes,
    checkedServices,
    togglePlaceType,
    toggleService,
    clearPlaceTypes,
    clearServices,
    updateSortBy,
  } = usePlacesIndexStore(
    useShallow((state) => ({
      placeTypes: state.placeTypes,
      services: state.services,
      checkedPlaceTypes: state.checkedPlaceTypes,
      checkedServices: state.checkedServices,
      togglePlaceType: state.togglePlaceType,
      toggleService: state.toggleService,
      clearPlaceTypes: state.clearPlaceTypes,
      clearServices: state.clearServices,
      updateSortBy: state.updateSortBy,
    }))
  );

  const onCheckedPlaceType = (index: number) => togglePlaceType(index);
  const onCheckedService = (index: number) => toggleService(index);

  return (
    <div className="w-full flex flex-row justify-between">
      <Dropdown
        id="sort"
        title="Ordenar"
        modalSize={ModalSize.ExtraSmall}
        modalColor={ComponentColor.Secondary}
      >
        <div className="flex flex-col">
          <TextButton
            size={ButtonSize.Small}
            color={ComponentColor.Transparent}
            hoverColor={ComponentColor.Primary}
            text={SortPlacesByLabels[SortPlacesBy.Nearby]}
            alignment="left"
            onClick={() => updateSortBy(SortPlacesBy.Nearby)}
          />
          <TextButton
            size={ButtonSize.Small}
            color={ComponentColor.Transparent}
            hoverColor={ComponentColor.Primary}
            text={SortPlacesByLabels[SortPlacesBy.MostVisited]}
            alignment="left"
            onClick={() => updateSortBy(SortPlacesBy.MostVisited)}
          />
          <TextButton
            size={ButtonSize.Small}
            color={ComponentColor.Transparent}
            hoverColor={ComponentColor.Primary}
            text={SortPlacesByLabels[SortPlacesBy.Safest]}
            alignment="left"
            onClick={() => updateSortBy(SortPlacesBy.Safest)}
          />
        </div>
      </Dropdown>
      <div className="flex flex-row gap-2">
        <Dropdown
          id="place-types"
          title="Tipo de lugar"
          alignment="right"
          modalColor={ComponentColor.Secondary}
        >
          <div className="flex flex-col max-h-[400px] overflow-y-auto tiny-scrollbar py-1">
            {placeTypes.map((placeType) => (
              <Checkbox
                key={`place-types-modal-${placeType.id}`}
                name={`place-types-modal-${placeType.id}`}
                label={placeType.place_type_name!}
                checked={checkedPlaceTypes.includes(+placeType.id)}
                onChange={() => onCheckedPlaceType(+placeType.id)}
              />
            ))}
          </div>
          {checkedPlaceTypes.length > 0 && (
            <div className="text-right mt-2">
              <TextButton
                text="Limpiar filtros"
                size={ButtonSize.Small}
                onClick={clearPlaceTypes}
              />
            </div>
          )}
        </Dropdown>
        <Dropdown
          id="services"
          title="Servicio"
          alignment="right"
          modalColor={ComponentColor.Secondary}
        >
          <div className="flex flex-col max-h-[400px] overflow-y-auto tiny-scrollbar py-1">
            {services.map((service) => (
              <Checkbox
                key={`services-modal-${service.id}`}
                name={`services-modal-${service.id}`}
                label={service.service_name!}
                checked={checkedServices.includes(+service.id)}
                onChange={() => onCheckedService(+service.id)}
              />
            ))}
          </div>
          {checkedServices.length > 0 && (
            <div className="text-right mt-2">
              <TextButton text="Limpiar filtros" size={ButtonSize.Small} onClick={clearServices} />
            </div>
          )}
        </Dropdown>
      </div>
    </div>
  );
};

export default SortAndFilters;
