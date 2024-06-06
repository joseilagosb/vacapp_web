import { PlaceFilterType } from "@/ts/enums/stores.types";
import { MapViewDataQuery } from "@/ts/types/graphql/queries/map_view_data.types";
import { Area, Place, PlaceType, Service } from "@/ts/types/models.types";
import { HomeState } from "@/ts/types/stores/home.types";
import { DefaultCameraPosition } from "@/utils/constants";

export const initHomeStore = (data: MapViewDataQuery): HomeState => {
  return {
    places: data.allPlaces as Array<Place>,
    areas: data.allAreas as Array<Area>,
    placeTypes: data.allPlaceTypes as Array<PlaceType>,
    services: data.allServices as Array<Service>,
    filteredPlaces: data.allPlaces as Array<Place>,
    visiblePlaces: [],
    placeFilterType: PlaceFilterType.None,
    cameraPosition: DefaultCameraPosition,
  };
};
