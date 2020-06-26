const { ApolloServer, gql } = require("apollo-server");

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type User {
    name: String!
    friends: [User]!
  }
  type Query {
    hello: User
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: (root, args, context) => {
      return {
        name: "hello world",
        friends: [
          {
            name: "John"
          },
          {
            name: "Cle"
          }
        ]
      };
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
