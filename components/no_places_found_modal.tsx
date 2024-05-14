import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown } from "@fortawesome/free-solid-svg-icons";

import { TextButton } from "./ui/button";
import Modal from "./ui/modal";

import { ModalSize } from "@/ts/enums/components/modal.enums";
import { NoPlacesFoundModalProps } from "@/ts/types/components/no_places_found_modal.types";

import styles from "../styles/components/no_places_found_modal.module.scss";

const NoPlacesFoundModal = ({ onClickRestore }: NoPlacesFoundModalProps) => {
  return (
    <Modal size={ModalSize.Small} preventCloseOnClickOutside withPaddingInBody={false}>
      <div className={styles.noPlacesFoundModal}>
        <div className={styles.iconContainer}>
          <FontAwesomeIcon icon={faFaceFrown} className={styles.icon} />
        </div>
        <span className={styles.message}>
          No hay lugares disponibles a esta hora según los filtros que ingresaste.
        </span>
        <TextButton onClick={onClickRestore} text="Restaurar filtros" />
      </div>
    </Modal>
  );
};

export default NoPlacesFoundModal;
