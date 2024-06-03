import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown } from "@fortawesome/free-solid-svg-icons";

import { TextButton } from "./ui/button";
import Modal from "./ui/modal";

import { ModalSize } from "@/ts/enums/components/modal.enums";
import { NoPlacesFoundModalProps } from "@/ts/types/components/no_places_found_modal.types";

const NoPlacesFoundModal = ({ onClickRestore }: NoPlacesFoundModalProps) => {
  return (
    <Modal size={ModalSize.Small} preventCloseOnClickOutside withPaddingInBody={false}>
      <div className="flex flex-col items-center justify-center gap-2 bg-secondary p-8">
        <div
          className="size-8 flex items-center justify-center relative
          before:content-[''] before:absolute before:inset-px before:bg-current before:rounded-full"
        >
          <FontAwesomeIcon icon={faFaceFrown} className="text-3xl text-primary relative" />
        </div>
        <span className="text-xl text-center">
          No hay lugares disponibles a esta hora según los filtros que ingresaste.
        </span>
        <TextButton onClick={onClickRestore} text="Restaurar filtros" />
      </div>
    </Modal>
  );
};

export default NoPlacesFoundModal;
