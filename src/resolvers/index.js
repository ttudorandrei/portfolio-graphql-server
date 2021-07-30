// importing dev created dependencies
const user = require("./user");
const repos = require("./repos");

// creating resolvers object
const resolvers = {
  Query: {
    user,
    repos,
  },
};

module.exports = resolvers;
