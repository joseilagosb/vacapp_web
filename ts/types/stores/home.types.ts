import { PlaceFilterType } from "@/ts/enums/stores.types";
import { Area, LatLng, Place, PlaceType, Service } from "../models.types";

export type HomeState = {
  places: Array<Place>;
  areas: Array<Area>;
  placeTypes: Array<PlaceType>;
  services: Array<Service>;
  filteredPlaces: Array<Place>;
  visiblePlaces: Array<Place>;
  placeFilterType: PlaceFilterType;
  cameraPosition: LatLng;
};

export type HomeActions = {
  filterPlaces: (placesFilterType: PlaceFilterType, filtersList: Array<number>) => void;
  restoreFilters: () => void;
  moveCameraToArea: (area: Area) => void;
};

export type HomeStore = HomeState & HomeActions;
