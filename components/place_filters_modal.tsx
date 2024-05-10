import React from "react";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

import Modal from "./ui/modal";

import { ModalPosition, ModalSize } from "@/ts/enums/components/modal.enums";

const PlaceFiltersModal = ({ onCloseModal }: { onCloseModal: () => void }) => {
  return (
    <Modal
      position={ModalPosition.BottomRight}
      size={ModalSize.Small}
      withHeader
      headerProps={{
        title: "Filtro de lugar",
        subtitle: "Selecciona entre tipos de lugar o servicios",
        icon: faCopyright,
      }}
      withTranslation
      translationProps={{ x: 32, y: 100 }}
      transparentBackdrop
      onCloseModal={onCloseModal}
    >
      <div>Hola</div>
    </Modal>
  );
};

export default PlaceFiltersModal;
