import { SortPlacesBy } from "@/ts/enums/components/places_index.enums";
import { Place, PlaceType, Service } from "../models.types";

export type PlacesIndexState = {
  places: Array<Place>;
  placeTypes: Array<PlaceType>;
  services: Array<Service>;
  filterValue: string;
  checkedPlaceTypes: Array<number>;
  checkedServices: Array<number>;
  sortBy: SortPlacesBy;
};

export type PlacesIndexActions = {
  updateFilterValue: (newFilterValue: string) => void;
  clearFilterValue: () => void;
  togglePlaceType: (placeType: number) => void;
  toggleService: (service: number) => void;
  clearPlaceTypes: () => void;
  clearServices: () => void;
  clearAllFilters: () => void;
  updateSortBy: (sort: SortPlacesBy) => void;
  clearSortBy: () => void;
};

export type PlacesIndexStore = PlacesIndexState & PlacesIndexActions;
