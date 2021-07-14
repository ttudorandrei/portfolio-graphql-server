const { ApolloServer, makeExecutableSchema } = require("apollo-server");

const typeDefs = require("./schema");

const schema = makeExecutableSchema({ typeDefs, resolvers });

const server = new ApolloServer({ schema });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
