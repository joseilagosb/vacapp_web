import React from "react";
import { useShallow } from "zustand/react/shallow";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

import Modal from "./ui/modal";

import { useMapStore } from "@/stores/map/map.hooks";

import { ModalPosition, ModalSize } from "@/ts/enums/components/modal.enums";
import { PlaceFiltersModalProps } from "@/ts/types/components/place_filters_modal.types";
import { PlaceFilterType } from "@/ts/enums/stores.types";

const PlaceFiltersModal = ({ onCloseModal, filterType, onClickFilter }: PlaceFiltersModalProps) => {
  const { placeTypes, services } = useMapStore(
    useShallow((state) => ({ placeTypes: state.placeTypes, services: state.services }))
  );

  const renderBody = () => {
    switch (filterType) {
      case PlaceFilterType.PlaceTypes:
        return placeTypes.map((placeType) => <div>{placeType.place_type_name}</div>);
      case PlaceFilterType.Services:
        return services.map((service) => <div>{service.service_name}</div>);
      default:
        return <div></div>;
    }
  };

  return (
    <Modal
      position={ModalPosition.Center}
      size={ModalSize.Medium}
      withHeader
      headerProps={{
        title: "Filtros de lugar",
        subtitle: "Selecciona los parámetros que deseas ver en el mapa",
        icon: faFilter,
      }}
      onCloseModal={onCloseModal}
    >
      {renderBody()}
      <div className="absolute bottom-2 right-2 flex gap-2">
        <button className="bg-secondary font-xs p-2 rounded-lg">Todos</button>
        <button className="bg-secondary font-xs p-2 rounded-lg">Ninguno</button>
        <button className="bg-secondary font-xs p-2 rounded-lg" onClick={() => onClickFilter(filterType, [2, 3, 4])}>
          Filtrar
        </button>
      </div>
    </Modal>
  );
};

export default PlaceFiltersModal;
