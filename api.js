const { RESTDataSource } = require("apollo-datasource-rest");

class FitTrackerApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://localhost:44396/api/";
  }

  async getRun(id) {
    return this.get(`runactivity/${id}`);
  }
}

module.exports = FitTrackerApi;
