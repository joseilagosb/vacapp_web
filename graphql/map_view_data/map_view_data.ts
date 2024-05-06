import { MapViewDataQuery, MapViewDataQueryVariables } from "./map_view_data.types";
import { MapViewDataDocument } from "./map_view_data.document";
import { Client } from "urql";

export async function mapViewDataQuery(client: () => Client) {
  return client().query<MapViewDataQuery, MapViewDataQueryVariables>(MapViewDataDocument, {});
}
