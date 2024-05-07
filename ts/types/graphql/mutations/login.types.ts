import { Exact, Scalars } from "../utils.types";

export type LoginMutationVariables = Exact<{
  username: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
}>;

export type LoginMutation = {
  __typename?: "Mutation";
  login?: {
    __typename?: "AuthPayload";
    token: string;
    user: { __typename?: "User"; username?: string | null; password?: string | null };
  } | null;
};
