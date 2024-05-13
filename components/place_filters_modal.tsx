import React, { useMemo, useState } from "react";
import { useShallow } from "zustand/react/shallow";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

import Modal from "./ui/modal";
import { TextButton } from "./ui/button";

import { useMapStore } from "@/stores/map/map.hooks";

import { ModalPosition, ModalSize } from "@/ts/enums/components/modal.enums";
import { PlaceFiltersModalProps } from "@/ts/types/components/place_filters_modal.types";
import { PlaceFilterType } from "@/ts/enums/stores.types";
import { ButtonColor, ButtonSize } from "@/ts/enums/components/button.enums";

import styles from "../styles/components/place_filters_dialog.module.scss";

const PlaceFiltersModal = ({ onCloseModal, filterType, onClickFilter }: PlaceFiltersModalProps) => {
  const { placeTypes, services } = useMapStore(
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
  const [filtersList, setFiltersList] = useState<Array<number>>([]);
  const filterButtonDisabled = filtersList.length === 0 || filtersList.length === items.length;

  const isItemSelected = (item: number) => {
    return filtersList.includes(item);
  };

  const toggleItemInFiltersList = (item: number) => {
    setFiltersList(
      filtersList.includes(item)
        ? filtersList.filter((filter) => filter !== item)
        : [...filtersList, item]
    );
  };

  const selectAllItems = () => setFiltersList(items.map((item) => item.id));
  const deselectAllItems = () => setFiltersList([]);

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
      <div className={styles.placeFiltersModal}>
        <div className={styles.itemsList}>
          {items.map((item) => (
            <TextButton
              key={`place-filters-item-${item.id}`}
              color={isItemSelected(item.id) ? ButtonColor.Tertiary : ButtonColor.Secondary}
              onClick={() => toggleItemInFiltersList(item.id)}
              text={item.name}
            />
          ))}
        </div>
        <div className={styles.actionButtons}>
          <TextButton
            onClick={selectAllItems}
            size={ButtonSize.Small}
            color={ButtonColor.Secondary}
            text="Todos"
          />
          <TextButton
            onClick={deselectAllItems}
            size={ButtonSize.Small}
            color={ButtonColor.Secondary}
            text="Ninguno"
          />
          <TextButton
            onClick={() => onClickFilter(filterType, filtersList)}
            size={ButtonSize.Small}
            color={ButtonColor.Secondary}
            text="Filtrar"
            {...(filterButtonDisabled ? { disabled: true } : {})}
          />
        </div>
      </div>
    </Modal>
  );
};

export default PlaceFiltersModal;
