import { Client, cacheExchange, createClient, fetchExchange } from "urql/core";

import { appendTokenToHeaders } from "@/utils/token";

let _client: Client;

export const getUrqlClient = () => {
  if (_client) {
    return _client;
  }
  _client = createClient({
    url: process.env.GRAPHQL_API_URL,
    fetchOptions: appendTokenToHeaders,
    requestPolicy: "cache-first",
    exchanges: [cacheExchange, fetchExchange],
  });
  return _client;
};
