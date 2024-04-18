import { LoginDocument, LoginMutation, LoginMutationVariables } from "@/graphql/operations";
import { jwtDecode } from "jwt-decode";
import { NextResponse } from "next/server";

import { login } from "./services/api";

export async function middleware() {
  const response = NextResponse.next();

  // Antes de cargar la solicitud, verificamos que el token de autenticación siga vigente
  if (response.cookies.has("web_app_token")) {
    const webAppToken = response.cookies.get("web_app_token");
    const decodedWebAppToken = jwtDecode(webAppToken!.value);
    if (Date.now() <= decodedWebAppToken.exp! * 1000) {
      return response;
    }
  }

  // En caso contrario, iniciamos sesión haciendo una mutación a la API endpoint
  const { data, error } = await login();

  if (error) {
    return Response.json(
      { success: false, message: "Ocurrió un error al iniciar sesión, intente otra vez recargando la página" },
      { status: 401 }
    );
  }

  response.cookies.set("web_app_token", data!.login!.token);

  return response;
}

export const config = {
  matcher: "/",
};
