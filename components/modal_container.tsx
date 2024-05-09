"use client";

import React, { useState } from "react";
import Modal from "./ui/modal";

const ModalContainer = () => {
  const [isVisible, setIsVisible] = useState(false);

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
      {isVisible && (
        <Modal
          headerTitle="A"
          headerSubtitle="B"
          headerIcon="a"
          borderRadius="xl"
          headerTextColor="red"
          size="md"
          onCloseModal={() => {
            setIsVisible(false);
          }}
        >
          <div>Hola</div>
        </Modal>
      )}
    </>
  );
};

export default ModalContainer;