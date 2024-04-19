// lib/urql.ts
import { cookies } from "next/headers";
import { Client, createClient, cacheExchange, fetchExchange, ssrExchange } from "urql/core";
let _client: Client | null = null;

export const getUrqlClient = () => {
  if (!_client) {
    const isServerSide = typeof window === "undefined";

    const ssr = ssrExchange({
      isClient: !isServerSide,
      initialState: !isServerSide ? window.__URQL_DATA__ : undefined,
    });
    _client = createClient({
      url: process.env.GRAPHQL_API_URL,
      fetchOptions: () => {
        // Agregamos el token de autenticación (si es que está guardado en las cookies o no ha expirado)
        // De no insertarse el token en los headers, solo se podrán hacer consultas que no requieran autenticación
        const webAppToken = cookies().get("web_app_token");
        return {
          headers: { authorization: webAppToken?.value ? `Bearer ${webAppToken.value}` : "" },
        };
      },
      requestPolicy: "cache-and-network",
      exchanges: [cacheExchange, ssr, fetchExchange],
    });
  }
  const client = _client;
  return { client };
};
