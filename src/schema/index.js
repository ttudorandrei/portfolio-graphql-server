// importing dependencies
const Query = require("./Query");
const User = require("./User");
const Repo = require("./Repo");

// creating typeDefs array
const typeDefs = [Query, User, Repo];

module.exports = typeDefs;
