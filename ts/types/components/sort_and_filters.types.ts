import { PlaceType, Service } from "../graphql/schemas.types";

export type SortAndFilterProps = {
  placeTypes: Array<PlaceType>;
  services: Array<Service>;
};
