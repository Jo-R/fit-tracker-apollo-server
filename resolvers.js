exports.resolvers = {
  Query: {
    runActivity: async (_source, { id }, { dataSources }) => {
      return dataSources.fitTrackerApi.getRun(id);
    },
    user: (id) => {},
  },
};
