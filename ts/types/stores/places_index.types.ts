import { Place, PlaceType, Service } from "../models.types";

export type PlacesIndexState = {
  places: Array<Place>;
  placeTypes: Array<PlaceType>;
  services: Array<Service>;
  filterValue: string;
  checkedPlaceTypes: Array<number>;
  checkedServices: Array<number>;
};

export type PlacesIndexActions = {
  updateFilterValue: (newFilterValue: string) => void;
  clearFilterValue: () => void;
  togglePlaceType: (placeType: number) => void;
  toggleService: (service: number) => void;
  clearPlaceTypes: () => void;
  clearServices: () => void;
  clearAllFilters: () => void;
};

export type PlacesIndexStore = PlacesIndexState & PlacesIndexActions;
