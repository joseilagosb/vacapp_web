"use client";

import { UseQueryArgs, useQuery } from "urql";
import { MapViewDataQuery, MapViewDataQueryVariables } from "./map_view_data.types";
import { MapViewDataDocument } from "./map_view_data.document";

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export function useMapViewDataQuery(
  options?: Omit<UseQueryArgs<MapViewDataQueryVariables>, "query">
) {
  return useQuery<MapViewDataQuery, MapViewDataQueryVariables>({
    query: MapViewDataDocument,
    ...options,
  });
}
