import { getUrqlClient } from "@/services/urql";
import { Client } from "urql";

import { PlaceDocument } from "./place.document";

import { PlaceQuery, PlaceQueryVariables } from "@/ts/types/graphql/queries/place.types";

export async function placeQuery(variables: PlaceQueryVariables, ssrClient?: () => Client) {
  let client = ssrClient || getUrqlClient;
  return client().query<PlaceQuery, PlaceQueryVariables>(PlaceDocument, variables);
}
