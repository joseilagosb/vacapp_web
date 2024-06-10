import { getUrqlClient } from "@/services/urql";
import { Client } from "urql";

import { PlacesIndexDocument } from "./places_index.document";

import {
  PlacesIndexQuery,
  PlacesIndexQueryVariables,
} from "@/ts/types/graphql/queries/places_index.types";

export async function placesIndexQuery(ssrClient?: () => Client) {
  let client = ssrClient || getUrqlClient;
  return client().query<PlacesIndexQuery, PlacesIndexQueryVariables>(PlacesIndexDocument, {});
}
