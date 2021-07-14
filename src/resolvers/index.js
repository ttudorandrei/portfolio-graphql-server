const user = require("./user");
const repos = require("./repos");

const resolvers = {
  Query: {
    user,
    repos,
  },
};

module.exports = resolvers;
