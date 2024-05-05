// lib/urql.ts
import { headers } from "next/headers";
import { createClient, cacheExchange, fetchExchange } from "urql/core";
import setCookie from "set-cookie-parser";

// Agregamos el token de autenticación (si es que está guardado en las cookies o no ha expirado)
// De no insertarse el token en los headers, solo se podrán hacer consultas que no requieran autenticación
const appendTokenToHeaders = () => {
  // Extraemos el token del header 'set-cookie' ya que está actualizado con las operaciones del middleware
  const cookiesMap = setCookie.parse(headers().get("set-cookie") || "", {
    decodeValues: true,
    map: true,
  });
  const webAppToken = cookiesMap["web_app_token"];
  return {
    headers: { authorization: webAppToken?.value ? `Bearer ${webAppToken.value}` : "" },
  };
};

export const getUrqlClient = () => {
  return createClient({
    url: process.env.GRAPHQL_API_URL,
    fetchOptions: appendTokenToHeaders,
    requestPolicy: "cache-and-network",
    exchanges: [cacheExchange, fetchExchange],
  });
};
