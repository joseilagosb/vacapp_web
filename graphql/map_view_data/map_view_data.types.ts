import * as Types from "../types";

export type MapViewDataQueryVariables = Types.Exact<{ [key: string]: never }>;

export type MapViewDataQuery = {
  __typename?: "Query";
  allPlaces?: Array<{
    __typename?: "Place";
    id: string;
    place_name?: string | null;
    place_short_name?: string | null;
    surface?: number | null;
    attention_surface?: number | null;
    place_type?: { __typename?: "PlaceType"; id: string; place_type_name?: string | null } | null;
    services?: Array<{
      __typename?: "Service";
      id: string;
      service_name?: string | null;
    } | null> | null;
    coordinates?: Array<{
      __typename?: "Coordinate";
      latitude?: any | null;
      longitude?: any | null;
    } | null> | null;
    place_working_days?: Array<{
      __typename?: "PlaceWorkingDay";
      id: string;
      day_of_week?: number | null;
      opening_time?: string | null;
      closing_time?: string | null;
    } | null> | null;
  } | null> | null;
  allAreas?: Array<{
    __typename?: "Area";
    id: string;
    area_name?: string | null;
    coordinates?: Array<{
      __typename?: "Coordinate";
      latitude?: any | null;
      longitude?: any | null;
    } | null> | null;
  } | null> | null;
  allPlaceTypes?: Array<{
    __typename?: "PlaceType";
    id: string;
    place_type_name?: string | null;
  } | null> | null;
  allServices?: Array<{
    __typename?: "Service";
    id: string;
    service_name?: string | null;
  } | null> | null;
};
