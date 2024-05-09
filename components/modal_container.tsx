"use client";

import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Modal from "./ui/modal";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { ModalPosition, ModalSize } from "@/ts/enums/ui.enums";

const ModalContainer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onCloseModal = () => setIsVisible(false);

  return (
    <>
      <div className="absolute bottom-8 right-8">
        <button
          className="rounded-xl p-4 bg-primary"
          onClick={() => setIsVisible((isVisible) => !isVisible)}
        >
          Mostrar modal
        </button>
      </div>
      <AnimatePresence>
        {isVisible && (
          <Modal
            position={ModalPosition.BottomRight}
            size={ModalSize.Small}
            headerProps={{
              title: "Filtro de lugar",
              subtitle: "Selecciona entre tipos de lugar o servicios",
              icon: faCopyright,
            }}
            translateModal
            translationProps={{ x: -32, y: -96 }}
            transparentBackdrop
            onCloseModal={onCloseModal}
          >
            <div>Hola</div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalContainer;
