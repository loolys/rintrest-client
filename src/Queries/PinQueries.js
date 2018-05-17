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
