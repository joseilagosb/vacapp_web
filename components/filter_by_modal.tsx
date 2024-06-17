import React from "react";

import Modal from "./ui/modal";
import { TextButton } from "./ui/button";

import { ModalPosition, ModalSize } from "@/ts/enums/components/modal.enums";
import { ButtonSize } from "@/ts/enums/components/button.enums";
import { PlaceFilterType } from "@/ts/enums/stores.types";
import { FilterByModalProps } from "@/ts/types/components/filter_by_modal.types";

import animations from "./filter_by_modal.animations";

const FilterByModal = ({ onCloseModal, onSelectedFilterType }: FilterByModalProps) => {
  return (
    <Modal
      animations={animations.filterByModal}
      position={ModalPosition.BottomRight}
      size={ModalSize.ExtraSmall}
      onCloseModal={onCloseModal}
      translation={{ x: 32, y: 95 }}
      transparentBackdrop
    >
      <div className="flex flex-col gap-4">
        <TextButton
          size={ButtonSize.Small}
          onClick={() => onSelectedFilterType(PlaceFilterType.PlaceTypes)}
          text="Por tipo de lugar"
          alignment="right"
        />
        <div className="h-px w-full bg-secondary" />
        <TextButton
          size={ButtonSize.Small}
          onClick={() => onSelectedFilterType(PlaceFilterType.Services)}
          text="Por servicios"
          alignment="right"
        />
      </div>
    </Modal>
  );
};

export default FilterByModal;
