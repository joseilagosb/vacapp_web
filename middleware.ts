import { NextResponse } from "next/server";

import { getUrqlClient } from "./services/urql";
import { LoginDocument, LoginMutation, LoginMutationVariables } from "./graphql/operations";
import { jwtDecode } from "jwt-decode";

// Antes de ejecutar el código de servidor verificamos la existencia y vigencia del token de autenticación
// De ser necesario, se volverá a iniciar sesión con la backend API
export async function middleware() {
  const response = NextResponse.next();

  // Antes de cargar la solicitud, verificamos que el token de autenticación siga vigente
  // (que exista en las cookies y que no haya expirado)
  if (response.cookies.has("web_app_token")) {
    const webAppToken = response.cookies.get("web_app_token");
    const decodedWebAppToken = jwtDecode(webAppToken!.value);
    if (Date.now() <= decodedWebAppToken.exp! * 1000) {
      return response;
    }
  }

  // En caso contrario, iniciamos sesión haciendo una mutación a la API endpoint
  const { data, error } = await getUrqlClient().mutation<LoginMutation, LoginMutationVariables>(LoginDocument, {
    username: process.env.WEB_APP_USERNAME,
    password: process.env.WEB_APP_PASSWORD,
  });

  if (error) {
    return Response.json(
      {
        success: false,
        message: `Ha ocurrido un error al intentar iniciar sesión con las credenciales de autenticación. [${error.message}]`,
      },
      { status: 401 }
    );
  }

  // Insertamos el token en las cookies, solamente accesible para el código servidor (server components,
  // server actions y route handlers)
  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  response.cookies.set("web_app_token", data!.login!.token, {
    httpOnly: true,
    secure: true,
    expires: expires,
    sameSite: "lax",
  });

  return response;
}

export const config = {
  matcher: "/",
};
