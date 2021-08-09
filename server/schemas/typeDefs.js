const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Restroom {
    _id: ID
    name: String
    accessible: Boolean
    latitude: Int
    longitude: Int
    comment: String
    distance: Int
    bearing: String
  }

  type Query {
    restrooms: [Restroom]
  }
`;

module.exports = typeDefs;
