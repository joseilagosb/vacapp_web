import { PlaceFilterType } from "@/ts/enums/stores.types";
import { Area, Place, PlaceType, Service } from "../models.types";

export type MapState = {
  places: Array<Place>;
  areas: Array<Area>;
  placeTypes: Array<PlaceType>;
  services: Array<Service>;
  filteredPlaces: Array<Place>;
  visiblePlaces: Array<Place>;
  placeFilterType: PlaceFilterType;
};

export type MapActions = {
  filterPlaces: (placesFilterType: PlaceFilterType, filtersList: Array<number>) => void;
  restoreFilters: () => void;
};

export type MapStore = MapState & MapActions;
