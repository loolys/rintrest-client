import gql from "graphql-tag";

export const ALL_PINS = gql`
  {
    allPins {
      _id
      image
      text
      user
      likeCount
      likes
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

export const CREATE_PIN = gql`
  mutation($image: String!, $text: String!, $user: String!) {
    createPin(image: $image, text: $text, user: $user) {
      _id
      image
      text
      user
    }
  }
`;

export const LIKE_PIN = gql`
  mutation($username: String!, $id: String!) {
    likePin(username: $username, id: $id) {
      _id
      likeCount
      likes
    }
  }
`;
