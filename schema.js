const { gql } = require("apollo-server");

exports.typeDefs = gql`
  type RunActivity {
    id: Int
    userId: String
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
  }

  type Query {
    runActivity(id: Int): RunActivity
    runActivitiesForUser(
      userId: String
      pageNo: Int
      pageSize: Int
    ): RunActivities
    user(id: String): User
  }
`;
