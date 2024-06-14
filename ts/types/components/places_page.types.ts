import { Place, PlaceType, Service } from "../graphql/schemas.types";

export type PlacesPageProps = {
  places: Array<Place>;
  placeTypes: Array<PlaceType>;
  services: Array<Service>;
};
