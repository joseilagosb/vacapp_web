import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { retrieveCookie } from "./cookies";

// Agregamos el token de autenticación (si es que está guardado en las cookies o no ha expirado)
// De no insertarse el token en los headers, solo se podrán hacer consultas que no requieran autenticación
export const appendTokenToHeaders = (): RequestInit => {
  // Extraemos el token del header 'set-cookie' ya que está actualizado con las operaciones del middleware
  const webAppToken = retrieveCookie("web_app_token");

  return {
    headers: { authorization: webAppToken?.value ? `Bearer ${webAppToken.value}` : "" },
  };
};

// Genera un nuevo objeto de tipo ResponseCookie con la configuración necesaria para crear una cookie segura
// y solo accesible desde el servidor
export const generateNewTokenCookie = (token: string): ResponseCookie => {
  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  return {
    name: "web_app_token",
    value: token,
    expires: expires,
    httpOnly: true,
    secure: true,
    sameSite: "lax",
  };
};
