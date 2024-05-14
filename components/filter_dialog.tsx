import React from "react";

import Modal from "./ui/modal";
import { TextButton } from "./ui/button";

import { ModalPosition, ModalSize } from "@/ts/enums/components/modal.enums";
import { ButtonSize } from "@/ts/enums/components/button.enums";
import { PlaceFilterType } from "@/ts/enums/stores.types";
import { FilterDialogProps } from "@/ts/types/components/filter_dialog.types";

import styles from "../styles/components/filter_dialog.module.scss";
import animations from "../styles/components/filter_dialog.animations";

const FilterDialog = ({ onCloseModal, onSelectedFilterType }: FilterDialogProps) => {
  return (
    <Modal
      modalAnimation={animations.filterDialog}
      position={ModalPosition.BottomRight}
      size={ModalSize.ExtraSmall}
      onCloseModal={onCloseModal}
      withTranslation
      translationProps={{ x: 32, y: 95 }}
      transparentBackdrop
    >
      <div className={styles.filterDialog}>
        <TextButton
          size={ButtonSize.Small}
          onClick={() => onSelectedFilterType(PlaceFilterType.PlaceTypes)}
          text="Por tipo de lugar"
        />
        <div className={styles.separator} />
        <TextButton
          size={ButtonSize.Small}
          onClick={() => onSelectedFilterType(PlaceFilterType.Services)}
          text="Por servicios"
        />
      </div>
    </Modal>
  );
};

export default FilterDialog;
