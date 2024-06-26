import { createStore } from "zustand";

import { toggleItemInArray } from "@/utils/common";

import { PlacesIndexState, PlacesIndexStore } from "@/ts/types/stores/places_index.types";

export const initialPlacesIndexState: PlacesIndexState = {
  places: [],
  placeTypes: [],
  services: [],
  filterValue: "",
  checkedPlaceTypes: [],
  checkedServices: [],
};

export const createPlacesIndexStore = (
  initialState: PlacesIndexState = initialPlacesIndexState
) => {
  return createStore<PlacesIndexStore>()((set, get) => ({
    ...initialState,
    updateFilterValue: (newFilterValue) => set({ filterValue: newFilterValue }),
    clearFilterValue: () => set({ filterValue: "" }),
    togglePlaceType: (placeType) =>
      set((state) => ({
        checkedPlaceTypes: toggleItemInArray(state.checkedPlaceTypes, placeType),
      })),
    toggleService: (service) =>
      set((state) => ({
        checkedServices: toggleItemInArray(state.checkedServices, service),
      })),
    clearPlaceTypes: () => set({ checkedPlaceTypes: [] }),
    clearServices: () => set({ checkedServices: [] }),
    clearAllFilters: () => {
      get().clearPlaceTypes();
      get().clearServices();
      get().clearFilterValue();
    }
  }));
};
