const { gql } = require("apollo-server");

exports.typeDefs = gql`
  type RunActivity {
    id: Int
    user: User
    date: String
    title: String
    distanceMile: Float
    duration: String
    averageHr: Int
    maxHr: Int
    averagePaceMile: String
    notes: String
  }

  type RunActivities {
    items: [RunActivity]
  }

  type User {
    id: ID!
    firstName: String
    lastName: String
    dateOfBirth: String
    email: String
    phoneNumber: String
    userProfile: String
    activities(pageNo: Int!, pageSize: Int!): RunActivities
  }

  input UserActivitiesInput {
    id: String!
    pageNo: Int!
    pageSize: Int!
  }

  input RunActivityInput {
    userId: String!
    date: String!
    title: String!
    distanceMile: Float!
    duration: String!
    averageHr: Int!
    maxHr: Int!
    averagePaceMile: String!
    notes: String!
  }

  type Query {
    runActivity(id: Int!): RunActivity
    runActivitiesForUser(input: UserActivitiesInput): RunActivities
    user(id: String!): User
  }

  type Mutation {
    addRunActivity(input: RunActivityInput): RunActivity
  }
`;
