import { createStore } from "zustand";

import { PlaceState, PlaceStore } from "@/ts/types/stores/place.types";
import { Place } from "@/ts/types/models.types";

export const initialPlaceState: PlaceState = {
  place: {} as Place,
};

export const createPlaceStore = (initialState: PlaceState = initialPlaceState) => {
  return createStore<PlaceStore>()((set, get) => ({
    ...initialState,
  }));
};
