import {
  LoginDocument,
  LoginMutation,
  LoginMutationVariables,
  MapViewDataDocument,
  MapViewDataQuery,
  MapViewDataQueryVariables,
} from "@/graphql/operations";
import { getUrqlClient } from "./urql";

export async function getMapViewData() {
  const { client } = getUrqlClient();
  try {
    const result = await client.query<MapViewDataQuery, MapViewDataQueryVariables>(MapViewDataDocument, {});
    return result;
  } catch (error) {
    throw new Error("No se pudieron cargar los elementos desde la API.");
  }
}

export async function login() {
  const { client } = getUrqlClient();
  const result = await client.mutation<LoginMutation, LoginMutationVariables>(LoginDocument, {
    username: process.env.WEB_APP_USERNAME,
    password: process.env.WEB_APP_PASSWORD,
  });
  return result;
}
