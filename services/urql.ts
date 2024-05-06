import { createClient, cacheExchange, fetchExchange } from "urql/core";
import { appendTokenToHeaders } from "./token";

export const getUrqlClient = () => {
  return createClient({
    url: process.env.GRAPHQL_API_URL,
    fetchOptions: appendTokenToHeaders,
    requestPolicy: "cache-and-network",
    exchanges: [cacheExchange, fetchExchange],
  });
};
