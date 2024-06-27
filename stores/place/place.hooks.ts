import { useContext } from "react";
import { useStore } from "zustand";

import { PlaceStoreContext } from "@/providers/place_store_provider";

import { PlaceStore } from "@/ts/types/stores/place.types";

export const usePlaceStore = <T>(selector: (store: PlaceStore) => T): T => {
  const placeStoreContext = useContext(PlaceStoreContext);

  if (!placeStoreContext) {
    throw new Error("usePlaceStore must be used within PlaceStoreProvider");
  }

  return useStore(placeStoreContext, selector);
};
