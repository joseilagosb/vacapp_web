declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      MAPBOX_GL_TOKEN: string;
      GRAPHQL_API_URL: string;
      WEB_APP_USERNAME: string;
      WEB_APP_PASSWORD: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
