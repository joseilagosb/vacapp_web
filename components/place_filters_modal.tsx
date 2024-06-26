import React, { useMemo } from "react";
import { useShallow } from "zustand/react/shallow";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

import Modal from "./ui/modal";
import { TextButton } from "./ui/button";

import { PlaceFiltersStoreProvider } from "@/providers/place_filters_provider";

import { useHomeStore } from "@/stores/home/home.hooks";
import { usePlaceFiltersStore } from "@/stores/place_filters/place_filters.hooks";

import { ModalPosition, ModalSize } from "@/ts/enums/components/modal.enums";
import { PlaceFiltersModalProps } from "@/ts/types/components/place_filters_modal.types";
import { PlaceFilterType } from "@/ts/enums/stores.types";
import { ButtonColor, ButtonSize } from "@/ts/enums/components/button.enums";

import animations from "./place_filters_modal.animations";

const PlaceFiltersModal = ({ onCloseModal, filterType, onClickFilter }: PlaceFiltersModalProps) => {
  const { placeTypes, services } = useHomeStore(
    useShallow((state) => ({ placeTypes: state.placeTypes, services: state.services }))
  );
  const items = useMemo(() => {
    switch (filterType) {
      case PlaceFilterType.PlaceTypes:
        return placeTypes.map((placeType) => ({
          id: +placeType.id,
          name: placeType.place_type_name,
        }));
      case PlaceFilterType.Services:
        return services.map((service) => ({ id: +service.id, name: service.service_name }));
      default:
        return [];
    }
  }, []);

  const { filters, toggleFilter, selectMultipleFilters, clearFilters } = usePlaceFiltersStore(
    useShallow((state) => ({
      filters: state.filters,
      toggleFilter: state.toggleFilter,
      selectMultipleFilters: state.selectMultipleFilters,
      clearFilters: state.clearFilters,
    }))
  );
  const filterButtonDisabled = filters.length === 0 || filters.length === items.length;
  const isItemSelected = (item: number) => filters.includes(item);

  return (
    <Modal
      position={ModalPosition.Center}
      size={ModalSize.Medium}
      header={{
        title: "Filtros de lugar",
        subtitle: "Selecciona los parámetros que deseas ver en el mapa",
        icon: faFilter,
      }}
      onCloseModal={onCloseModal}
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          {items.map((item) => (
            <TextButton
              key={`place-filters-item-${item.id}`}
              color={isItemSelected(item.id) ? ButtonColor.Tertiary : ButtonColor.Secondary}
              onClick={() => toggleFilter(item.id)}
              animations={{
                ...animations.filtersItem,
                initial: isItemSelected(item.id) ? "selected" : "default",
                animate: isItemSelected(item.id) ? "selected" : "default",
              }}
              text={item.name}
            />
          ))}
        </div>
        <div className="flex justify-end gap-2">
          <TextButton
            onClick={() => selectMultipleFilters(items.map((item) => item.id))}
            size={ButtonSize.Small}
            color={ButtonColor.Secondary}
            text="Todos"
            animations={animations.actionButton}
          />
          <TextButton
            onClick={clearFilters}
            size={ButtonSize.Small}
            color={ButtonColor.Secondary}
            text="Ninguno"
            animations={animations.actionButton}
          />
          <TextButton
            onClick={() => onClickFilter(filters)}
            size={ButtonSize.Small}
            color={ButtonColor.Secondary}
            text="Filtrar"
            {...(filterButtonDisabled ? { disabled: true } : {})}
            animations={animations.actionButton}
          />
        </div>
      </div>
    </Modal>
  );
};

const PlaceFiltersModalWrapper = (props: PlaceFiltersModalProps) => {
  return (
    <PlaceFiltersStoreProvider>
      <PlaceFiltersModal {...props} />
    </PlaceFiltersStoreProvider>
  );
};

export default PlaceFiltersModalWrapper;
