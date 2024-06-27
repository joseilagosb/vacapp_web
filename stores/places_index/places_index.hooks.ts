import { useContext } from "react";
import { useStore } from "zustand";

import { PlacesIndexStoreContext } from "@/providers/places_index_store_provider";

import { PlacesIndexStore } from "@/ts/types/stores/places_index.types";

export const usePlacesIndexStore = <T>(selector: (store: PlacesIndexStore) => T): T => {
  const placesIndexStoreContext = useContext(PlacesIndexStoreContext);

  if (!placesIndexStoreContext) {
    throw new Error("usePlacesIndexStore must be used within PlacesIndexStoreProvider");
  }

  return useStore(placesIndexStoreContext, selector);
};
