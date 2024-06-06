import { PlaceFilterType } from "@/ts/enums/stores.types";
import { Area } from "@/ts/types/models.types";
import { HomeState, HomeStore } from "@/ts/types/stores/home.types";
import { calculateCenterOfCoordinates } from "@/utils/common";
import { DefaultCameraPosition } from "@/utils/constants";
import { createStore } from "zustand";

export const initialHomeState: HomeState = {
  places: [],
  areas: [],
  placeTypes: [],
  services: [],
  filteredPlaces: [],
  visiblePlaces: [],
  placeFilterType: PlaceFilterType.None,
  cameraPosition: DefaultCameraPosition,
};

export const createHomeStore = (initialState: HomeState = initialHomeState) => {
  return createStore<HomeStore>()((set) => ({
    ...initialState,
    filterPlaces: (placeFilterType, filtersList) =>
      set((state) => {
        let newFilteredPlaces;
        switch (placeFilterType) {
          case PlaceFilterType.PlaceTypes:
            newFilteredPlaces = state.places.filter((place) =>
              filtersList.includes(+place.place_type.id)
            );
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
    restoreFilters: () =>
      set((state) => ({ filteredPlaces: state.places, placeFilterType: PlaceFilterType.None })),
    moveCameraToArea: (area: Area) =>
      set((_) => ({ cameraPosition: calculateCenterOfCoordinates(area.coordinates) })),
  }));
};
