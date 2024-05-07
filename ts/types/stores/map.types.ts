import { Area, Place, PlaceType, Service } from "../models.types";

export type MapState = {
  places: Array<Place>;
  areas: Array<Area>;
  placeTypes: Array<PlaceType>;
  services: Array<Service>;
  filteredPlaces: Array<Place> | null;
  visiblePlaces: Array<Place>;
};

export type MapActions = {};

export type MapStore = MapState & MapActions;
