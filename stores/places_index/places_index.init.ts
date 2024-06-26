import { SortPlacesBy } from "@/ts/enums/components/places_index.enums";
import { PlacesIndexQuery } from "@/ts/types/graphql/queries/places_index.types";
import { Place, PlaceType, Service } from "@/ts/types/models.types";
import { PlacesIndexState } from "@/ts/types/stores/places_index.types";

export const initPlacesIndexStore = (data: PlacesIndexQuery): PlacesIndexState => {
  const placeTypes = data.allPlaceTypes as Array<PlaceType>;
  const services = data.allServices as Array<Service>;

  return {
    places: data.allPlaces as Array<Place>,
    placeTypes,
    services,
    filterValue: "",
    checkedPlaceTypes: [],
    checkedServices: [],
    sortBy: SortPlacesBy.Default,
  };
};
