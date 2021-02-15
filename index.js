const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");
const { resolvers } = require("./resolvers");
const FitTrackerApi = require("./api");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      fitTrackerApi: new FitTrackerApi(),
    };
  },
});

// TODO fix "unable to verify the first certificate" error properly but for now...
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

// The `listen` method launches a web server. Port 4000
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
