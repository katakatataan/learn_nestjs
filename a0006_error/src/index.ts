import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone';
import {GraphQLError, GraphQLScalarType, Kind} from 'graphql';
import { RESTDataSource } from '@apollo/datasource-rest';

class MoviesAPI extends RESTDataSource {
  override baseURL = 'https://movies-api.example.com/';

  async getMovie(id): Promise<any> {
    // return this.get<any>(`movies/${encodeURIComponent(id)}`);
    if (id < 1) {
      throw new GraphQLError('Invalid argument value', {
        extensions: {
          code: 'BAD_USER_INPUT',
        },
      });
    }
    return {id: id};
  }

  async getMostViewedMovies(limit = '10'): Promise<any[]> {
    const data = await this.get('movies', {
      params: {
        per_page: limit,
        order_by: 'most_viewed',
      },
    });
    return data.results;
  }
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
      return dataSources.moviesAPI.getMovie(id);
    },
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

interface ContextValue {
  dataSources: {
    moviesAPI: MoviesAPI;
  };
}

//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  context: async () => {
    const { cache } = server;
    console.log(cache)
    return {
      // We create new instances of our data sources with each request,
      // passing in our server's cache.
      dataSources: {
        moviesAPI: new MoviesAPI({ cache }),
      },
    };
  },
});

console.log(`🚀  Server ready at: ${url}`);
