import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone';
import {GraphQLError, GraphQLScalarType, Kind} from 'graphql';
import { RESTDataSource } from '@apollo/datasource-rest';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { addMocksToSchema } from '@graphql-tools/mock';

interface MyContext {
  // we'd define the properties a user should have
  // in a separate user interface (e.g., email, id, url, etc.)
  user: {};
}


// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql

  type Movie {
    id: ID!
  }

  type Query {
    movie(id: ID!): Movie!
  }`;

const resolvers = {
  Query: {
    movie: async (_, { id }, { dataSources }) => {
      return {};
    },
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer<MyContext>({
  typeDefs,
  resolvers,
});


//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  context: async ({ req }) => {
    // get the user token from the headers
    const token = req.headers.authorization || '';

    // try to retrieve a user with the token
    const user = null;

    // optionally block the user
    // we could also check user roles/permissions here
    if (!user)
      // throwing a `GraphQLError` here allows us to specify an HTTP status code,
      // standard `Error`s will have a 500 status code by default
      throw new GraphQLError('User is not authenticated', {
        extensions: {
          code: 'UNAUTHENTICATED',
          http: { status: 401 },
        }
      });

    // add the user to the context
    return { user };
  },
});

console.log(`🚀 Server listening at: ${url}`);