import { PlaceFilterType } from "@/ts/enums/stores.types";
import { MapState, MapStore } from "@/ts/types/stores/map.types";
import { createStore } from "zustand";

export const initialMapState: MapState = {
  places: [],
  areas: [],
  placeTypes: [],
  services: [],
  filteredPlaces: [],
  visiblePlaces: [],
  placeFilterType: PlaceFilterType.None,
};

export const createMapStore = (initialState: MapState = initialMapState) => {
  return createStore<MapStore>()((set) => ({
    ...initialState,
    filterPlaces: (placeFilterType, filtersList) =>
      set((state) => {
        let newFilteredPlaces;
        switch (placeFilterType) {
          case PlaceFilterType.PlaceTypes:
            newFilteredPlaces = state.places.filter((place) => filtersList.includes(+place.place_type.id));
            break;
          case PlaceFilterType.Services:
            newFilteredPlaces = state.places.filter((place) => {
              const services = place.services;
              return services.some((service) => filtersList.includes(+service.id));
            });
          default:
            break;
        }
        return { filteredPlaces: newFilteredPlaces, placeFilterType: placeFilterType };
      }),
    restoreFilters: () => set((state) => ({ filteredPlaces: state.places, placeFilterType: PlaceFilterType.None })),
  }));
};
