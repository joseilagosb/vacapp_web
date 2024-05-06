import { NextResponse } from "next/server";

import { LoginDocument, LoginMutation, LoginMutationVariables } from "./graphql/operations";

import { getUrqlClient } from "./services/urql";
import { generateNewTokenCookie } from "./utils/token";

import { cookies } from "next/headers";

// Antes de ejecutar el código de servidor verificamos la existencia y vigencia del token de autenticación
// De ser necesario, se volverá a iniciar sesión con la backend API
export async function middleware() {
  const response = NextResponse.next();

  // Antes de cargar la solicitud, verificamos que el token de autenticación siga vigente
  // (que exista en las cookies / que no haya expirado)
  if (cookies().has("web_app_token")) {
    return response;
  }

  // En caso contrario, iniciamos sesión haciendo una mutación a la API endpoint
  const { data, error } = await getUrqlClient().mutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    {
      username: process.env.WEB_APP_USERNAME,
      password: process.env.WEB_APP_PASSWORD,
    }
  );

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
  response.cookies.set(generateNewTokenCookie(data!.login!.token));

  return response;
}

export const config = {
  matcher: "/",
};
