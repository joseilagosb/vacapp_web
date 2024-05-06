import * as Types from "../types";

export type LoginMutationVariables = Types.Exact<{
  username: Types.Scalars["String"]["input"];
  password: Types.Scalars["String"]["input"];
}>;

export type LoginMutation = {
  __typename?: "Mutation";
  login?: {
    __typename?: "AuthPayload";
    token: string;
    user: { __typename?: "User"; username?: string | null; password?: string | null };
  } | null;
};
