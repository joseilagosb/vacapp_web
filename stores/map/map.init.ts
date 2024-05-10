import { PlaceFilterType } from "@/ts/enums/stores.types";
import { MapState } from "@/ts/types/stores/map.types";

export const initMapStore = (): MapState => {
  const {
    allPlaces: places,
    allAreas: areas,
    allPlaceTypes: placeTypes,
    allServices: services,
  } = window.__URQL_DATA__;

  return {
    places,
    areas,
    placeTypes,
    services,
    filteredPlaces: places,
    visiblePlaces: [],
    placeFilterType: PlaceFilterType.None,
  };
};
