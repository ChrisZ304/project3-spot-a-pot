const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Restroom {
    _id: ID
    name: String
    description: String
    image: String
    Stalls: Int
    category: Category
  }

  type Donation {
    _id: ID
    purchaseDate: String
    usdAmt: [USDAmt]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    donations: [Donation]
  }

  type Donate {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    donations(category: ID, name: String): [Donation]
    donation(_id: ID!): Donation
    user: User
    donation(_id: ID!): Donation
    donate(donations: [ID]!): Donate
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addRestroom(restrooms: [ID]!): Restroom
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateRestroom(_id: ID!, stalls: Int!, category: String!): Restroom
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
