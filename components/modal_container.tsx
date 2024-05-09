"use client";

import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Modal from "./ui/modal";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

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
            headerTitle="Filtro de lugar"
            headerSubtitle="Selecciona entre tipos de lugar o servicios"
            headerIcon={faCopyright}
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
