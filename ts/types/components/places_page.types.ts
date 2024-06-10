import { PlacesIndexQuery } from "../graphql/queries/places_index.types";

export type PlacesPageProps = {
  places: PlacesIndexQuery["allPlaces"];
};
