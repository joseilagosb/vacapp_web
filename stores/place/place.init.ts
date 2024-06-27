import { PlaceQuery } from "@/ts/types/graphql/queries/place.types";
import { Place } from "@/ts/types/models.types";
import { PlaceState } from "@/ts/types/stores/place.types";

export const initPlaceStore = (data: PlaceQuery): PlaceState => {
  const place = data.placeById as Place;

  return {
    place,
  };
};
