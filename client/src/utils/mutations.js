import { gql } from '@apollo/client';

export const RATING = gql`
  mutation ratings($email: String!, $password: String!) {
    Rating(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;


export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_DONATION = gql`
  mutation addDonation($donation: [ID]!) {
    addDonation(donation: $donation) {
      purchaseDate
      donation {
        _id
        name
        usdAmt
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;
