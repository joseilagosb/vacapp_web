import React from "react";

import Modal from "./ui/modal";

import { ModalPosition, ModalSize } from "@/ts/enums/components/modal.enums";
import { LegendModalProps } from "@/ts/types/components/legend_modal.types";

import animations from "@/components/legend_modal.animations";

const LegendModal = ({ onCloseModal }: LegendModalProps) => {
  return (
    <Modal
      animations={animations.legendModal}
      position={ModalPosition.BottomRight}
      size={ModalSize.Small}
      onCloseModal={onCloseModal}
      translation={{ x: 32, y: 160 }}
      transparentBackdrop
      header={{
        title: "Símbolos",
      }}
    >
      LegendModal
    </Modal>
  );
};

export default LegendModal;
