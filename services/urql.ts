// lib/urql.ts
import { cookies } from "next/headers";
import { Client, cacheExchange, createClient, fetchExchange } from "urql/core";

let _client: Client | null = null;

export const getUrqlClient = () => {
  if (!_client) {
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
      exchanges: [cacheExchange, fetchExchange],
    });
  }
  const client = _client;
  return { client };
};
