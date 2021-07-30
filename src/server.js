// importing dependencies
const { ApolloServer } = require("apollo-server");

// importing dev created dependencies
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

// creating the server
const server = new ApolloServer({ resolvers, typeDefs });

// running the server
server.listen().then(({ url }) => {
  console.info(`🚀  Server ready at ${url}`);
});
