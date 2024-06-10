import {
  MapViewDataQuery,
  MapViewDataQueryVariables,
} from "@/ts/types/graphql/queries/map_view_data.types";
import { MapViewDataDocument } from "./map_view_data.document";
import { getUrqlClient } from "@/services/urql";
import { Client } from "urql";

export async function mapViewDataQuery(ssrClient?: () => Client) {
  let client = ssrClient || getUrqlClient;
  return client().query<MapViewDataQuery, MapViewDataQueryVariables>(MapViewDataDocument, {});
}
