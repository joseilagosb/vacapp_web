import { Exact } from "../utils.types";

export type PlacesIndexQueryVariables = Exact<{ [key: string]: never }>;

export type PlacesIndexQuery = {
  __typename?: "Query";
  allPlaces?: Array<{
    __typename?: "Place";
    id: string;
    place_name?: string | null;
    place_short_name?: string | null;
    place_type?: { __typename?: "PlaceType"; id: string } | null;
    services?: Array<{ __typename?: "Service"; id: string } | null> | null;
    place_working_days?: Array<{
      __typename?: "PlaceWorkingDay";
      id: string;
      day_of_week?: number | null;
      opening_time?: string | null;
      closing_time?: string | null;
    } | null> | null;
  }>;
  allPlaceTypes?: Array<{
    __typename?: "PlaceType";
    id: string;
    place_type_name?: string | null;
  }>;
  allServices?: Array<{
    __typename?: "Service";
    id: string;
    service_name?: string | null;
  }>;
};
