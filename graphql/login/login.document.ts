import { gql } from "graphql-tag";

export const LoginDocument = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        username
        password
      }
    }
  }
`;
