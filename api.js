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
}

module.exports = FitTrackerApi;
