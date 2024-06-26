import { createStore } from "zustand";

import { toggleItemInArray } from "@/utils/common";

import { PlacesIndexState, PlacesIndexStore } from "@/ts/types/stores/places_index.types";
import { SortPlacesBy } from "@/ts/enums/components/places_index.enums";

export const initialPlacesIndexState: PlacesIndexState = {
  places: [],
  placeTypes: [],
  services: [],
  filterValue: "",
  checkedPlaceTypes: [],
  checkedServices: [],
  sortBy: SortPlacesBy.Default,
};

export const createPlacesIndexStore = (initialState: PlacesIndexState = initialPlacesIndexState) => {
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
    updateSortBy: (sortBy) => set({ sortBy }),
    clearSortBy: () => set({ sortBy: SortPlacesBy.Default }),
    clearAllFilters: () => {
      get().clearPlaceTypes();
      get().clearServices();
      get().clearFilterValue();
      get().clearSortBy();
    },
  }));
};
