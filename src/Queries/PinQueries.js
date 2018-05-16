import gql from "graphql-tag";

export const ALL_PINS = gql`
  {
    allPins {
      image
      text
      user
    }
  }
`;
