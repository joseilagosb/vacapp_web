import { useMutation } from "urql";
import { LoginMutation, LoginMutationVariables } from "./login.types";
import { LoginDocument } from "./login.document";

export function useLoginMutation() {
  return useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
}
