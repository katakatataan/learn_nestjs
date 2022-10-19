import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone';
import {GraphQLError, GraphQLScalarType, Kind} from 'graphql';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  scalar Date
  # This "Book" type defines the queryable fields for every book in our data source.
  scalar Odd

  type Event {
    id: ID!
    date: Date!
  }

  type Query {
    events: [Event!]
    echoOdd(odd: Odd!): Odd!
  }`;

function oddValue(value: number) {
  if (typeof value === 'number' && Number.isInteger(value) && value % 2 !== 0) {
    return value;
  }
  throw new GraphQLError('Provided value is not an odd integer', {
    extensions: {code: 'BAD_USER_INPUT'},
  });
}

const dateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  serialize(value: Date) {
    return value.getTime(); // Convert outgoing Date to integer for JSON
  },
  parseValue(value: number) {
    return new Date(value); // Convert incoming integer to Date
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      // Convert hard-coded AST string to integer and then to Date
      return new Date(parseInt(ast.value, 10));
    }
    // Invalid hard-coded value (not an integer)
    return null;
  },
});

const resolvers = {
  Date: dateScalar,
  Odd: new GraphQLScalarType({
    name: 'Odd',
    description: 'Odd custom scalar type',
    parseValue: oddValue,
    serialize: oddValue,
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return oddValue(parseInt(ast.value, 10));
      }
      throw new GraphQLError('Provided value is not an odd integer', {
        extensions: {code: 'BAD_USER_INPUT'},
      });
    },
  }),
  Query: {
    events: () => {
      return [{date: new Date()}];
    },
    echoOdd(_, {odd}) {
      return odd;
    },
  },
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
const {url} = await startStandaloneServer(server, {
  listen: {port: 4000},
});

console.log(`🚀  Server ready at: ${url}`);
