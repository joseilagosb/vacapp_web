import { MapState } from "@/ts/types/stores/map.types";

export const initMapStore = (): MapState => {
  const {
    allPlaces: places,
    allAreas: areas,
    allPlaceTypes: placeTypes,
    allServices: services,
  } = window.__URQL_DATA__;

  return { places, areas, placeTypes, services, filteredPlaces: null, visiblePlaces: [] };
};
