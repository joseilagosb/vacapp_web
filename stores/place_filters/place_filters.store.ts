import { createStore } from "zustand";

import { PlaceFiltersState, PlaceFiltersStore } from "@/ts/types/stores/place_filters.types";

export const initialPlaceFiltersState: PlaceFiltersState = {
  filters: [],
};

export const createPlaceFiltersStore = (
  initialState: PlaceFiltersState = initialPlaceFiltersState
) => {
  return createStore<PlaceFiltersStore>()((set, get) => ({
    ...initialState,
    selectFilter: (filter) =>
      set((state) => ({
        filters: state.filters.includes(filter) ? [...state.filters] : [...state.filters, filter],
      })),
    toggleFilter: (filter) =>
      set((state) => ({
        filters: state.filters.includes(filter)
          ? state.filters.filter((f) => f !== filter)
          : [...state.filters, filter],
      })),
    selectMultipleFilters: (filters) => filters.map((filter) => get().selectFilter(filter)),
    clearFilters: () => set({ filters: [] }),
  }));
};
