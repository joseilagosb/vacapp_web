"use client";

import { UseQueryArgs, useQuery } from "urql";
import { MapViewDataDocument } from "./map_view_data.document";
import {
  MapViewDataQuery,
  MapViewDataQueryVariables,
} from "@/ts/types/graphql/queries/map_view_data.types";

export function useMapViewDataQuery(
  options?: Omit<UseQueryArgs<MapViewDataQueryVariables>, "query">
) {
  return useQuery<MapViewDataQuery, MapViewDataQueryVariables>({
    query: MapViewDataDocument,
    ...options,
  });
}
