import { LoginDocument } from "./login.document";
import { LoginMutation, LoginMutationVariables } from "./login.types";

import { getUrqlClient } from "@/services/urql";

export async function loginMutation(variables: LoginMutationVariables) {
  return getUrqlClient().mutation<LoginMutation, LoginMutationVariables>(LoginDocument, variables);
}
