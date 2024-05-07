import { LoginMutation, LoginMutationVariables } from "@/ts/types/graphql/mutations/login.types";
import { LoginDocument } from "./login.document";

import { getUrqlClient } from "@/services/urql";

export async function loginMutation(variables: LoginMutationVariables) {
  return getUrqlClient().mutation<LoginMutation, LoginMutationVariables>(LoginDocument, variables);
}
