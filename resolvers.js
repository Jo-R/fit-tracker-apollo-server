exports.resolvers = {
  Query: {
    runActivity: (_source, { id }, { dataSources }) => {
      return dataSources.fitTrackerApi.getRun(id);
    },
    runActivitiesForUser: (
      _source,
      { input: { id, pageNo, pageSize } },
      { dataSources }
    ) => {
      return dataSources.fitTrackerApi.getRunsForUser(id, pageNo, pageSize);
    },
    user: (_source, { id }, { dataSources }) => {
      return dataSources.fitTrackerApi.getUser(id);
    },
  },
  RunActivity: {
    user: (runActivity, args, { dataSources }) => {
      return dataSources.fitTrackerApi.getUser(runActivity.userId);
    },
  },
  User: {
    activities: (user, { pageNo, pageSize }, { dataSources }) => {
      return dataSources.fitTrackerApi.getRunsForUser(
        user.id,
        pageNo,
        pageSize
      );
    },
  },
};
