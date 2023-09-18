import { randomBytes } from 'crypto';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  type messageType {
    id: String
    message: String
  }

  input messageInput {
    message: String
  }

  type Mutation {
    createMessage (message: String): messageType
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  type Query {
    getMessage: String
  }
`;

const messages = [
  
];

// Resolvers define how to fetch the types defined in your schema.
const resolvers = {
  Query: {
    getMessage: () => {
      return "Hello World!"
    }
  },
  Mutation: {
    createMessage: (_, {message}) => {
      console.log(message)
      let id = randomBytes(10).toString("hex")
      console.log("id", id)
      messages[id] = {id, message}
      return {id, message}
    }
  }
};


// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);