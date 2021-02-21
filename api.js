const { RESTDataSource } = require("apollo-datasource-rest");

class FitTrackerApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://localhost:44396/api/";
  }

  async getRun(id) {
    return this.get(`runactivity/${id}`);
  }

  async getRunsForUser(userId, pageNo, pageSize) {
    return this.get(
      `runactivity/user/${userId}?pageNo=${pageNo}&pageSize=${pageSize}`
    );
  }

  async getUser(userId) {
    return this.get(`user/${userId}`);
  }

  async postRunActivity(runActivity) {
    // see https://github.com/apollographql/apollo-server/issues/1539 for why spreading obj
    return this.post(`runactivity`, { ...runActivity });
  }
}

module.exports = FitTrackerApi;
