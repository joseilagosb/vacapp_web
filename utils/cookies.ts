import setCookie from "set-cookie-parser";
import { cookies, headers } from "next/headers";

// Dependiendo de lo realizado en el middleware, la cookie puede venir en el header set-cookie o ya
// estar almacenada en las cookies del navegador
//    - Si se hizo mutation y se creó / modificó la cookie, va a estar en set-cookie
//    - Si no se modificó la cookie, la cookie se puede encontrar con la función cookies()
export const retrieveCookie = (key: string) => {
  const setCookieMap = setCookie.parse(headers().get("set-cookie") || "", {
    decodeValues: true,
    map: true,
  });

  if (key in setCookieMap) {
    return setCookieMap[key];
  }

  return cookies().get(key);
};
