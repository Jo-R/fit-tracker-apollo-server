exports.resolvers = {
  Query: {
    runActivity: async (_source, { id }, { dataSources }) => {
      return dataSources.fitTrackerApi.getRun(id);
    },
    runActivitiesForUser: async (
      _source,
      { userId, pageNo, pageSize },
      { dataSources }
    ) => {
      console.log(userId);
      return dataSources.fitTrackerApi.getRunsForUser(userId, pageNo, pageSize);
    },
    user: (id) => {},
  },
};
