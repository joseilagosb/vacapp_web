import { Exact, Scalars } from "../utils.types";

export type PlaceQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type PlaceQuery = {
  __typename?: "Query";
  placeById?: {
    id: string;
    place_name?: string | null;
    place_short_name?: string | null;
    place_address?: string | null;
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
    current_crowds?: Array<{
      __typename?: "CurrentCrowd";
      id: string;
      people_no?: number | null;
      crowd_day_of_week: number | null;
      crowd_hour: number | null;
    } | null> | null;
    current_queues?: Array<{
      __typename?: "CurrentQueue";
      id: string;
      queue_day_of_week: number | null;
      queue_hour: number | null;
    } | null> | null;
    indicators?: Array<{
      __typename?: "PlaceIndicator";
      indicator_name?: string | null;
      indicator_type?: number | null;
      indicator_description?: string | null;
      indicator_value?: number | null;
      opinion_no?: number | null;
    } | null> | null;
  } | null;
};
