import { useContext } from "react";
import { useStore } from "zustand";

import { PlaceFiltersStoreContext } from "@/providers/place_filters_provider";

import { PlaceFiltersStore } from "@/ts/types/stores/place_filters.types";

export const usePlaceFiltersStore = <T>(selector: (store: PlaceFiltersStore) => T): T => {
  const placeFiltersStoreContext = useContext(PlaceFiltersStoreContext);

  if (!placeFiltersStoreContext) {
    throw new Error("usePlaceFiltersStore must be used within PlaceFiltersStoreProvider");
  }

  return useStore(placeFiltersStoreContext, selector);
};
