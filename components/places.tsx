"use client";

import { useMapStore } from "@/stores/map/map.hooks";
import React, { useState } from "react";
import Modal from "./ui/modal";

const Places = () => {
  const places = useMapStore((state) => state.places);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
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
      <div className="fixed bottom-8 right-8">
        <button
          className="rounded-xl p-4 bg-primary"
          onClick={() => setIsVisible((isVisible) => !isVisible)}
        >
          Mostrar modal
        </button>
      </div>
      {places.map((place) => (
        <div key={place.id}>
          #{place?.id}. {place?.place_name}
        </div>
      ))}
    </div>
  );
};

export default Places;
