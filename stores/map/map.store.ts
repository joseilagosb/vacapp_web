import { MapState, MapStore } from "@/ts/types/stores/map.types";
import { createStore } from "zustand";

export const initialMapState: MapState = {
  places: [],
  areas: [],
  placeTypes: [],
  services: [],
  filteredPlaces: null,
  visiblePlaces: [],
};

export const createMapStore = (initialState: MapState = initialMapState) => {
  return createStore<MapStore>()((set) => ({
    ...initialState,
  }));
};
