import { useMutation } from "urql";
import { LoginDocument } from "./login.document";
import { LoginMutation, LoginMutationVariables } from "@/ts/types/graphql/mutations/login.types";

export function useLoginMutation() {
  return useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
}
