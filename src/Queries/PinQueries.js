import gql from "graphql-tag";

export const ALL_PINS = gql`
  {
    allPins {
      _id
      image
      text
      user
    }
  }
`;

export const USERS_PINS = gql`
  query($header: String!) {
    usersPins(header: $header) {
      _id
      image
      text
      user
    }
  }
`;
