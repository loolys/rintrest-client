import gql from "graphql-tag";

export const CREATE_USER = gql`
  mutation($username: String!, $password: String!) {
    createUser(username: $username, password: $password) {
      success
      error {
        path
        message
      }
    }
  }
`;
