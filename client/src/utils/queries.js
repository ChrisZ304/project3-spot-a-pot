import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
  query getRestrooms($category: ID) {
    restrooms(category: $category) {
      _id
      name
      description
      price
      quantity
      image
      category {
        _id
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($restrooms: [ID]!) {
    checkout(restrooms: $restrooms) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
    restrooms {
      _id
      name
      description
      stalls
      category {
        name
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      donations {
        _id
        donationDate
        restrooms {
          _id
          name
          description
          image
        }
      }
    }
  }
`;


export const QUERY_RATINGS = gql`
  {
    user {
      firstName
      lastName
      restrooms {
        _id
        restrooms {
          _id
          name
          description
          image
        }
      }
    }
  }
`;





















