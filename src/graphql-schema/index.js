import { GraphQLObjectType, GraphQLSchema } from 'graphql';

import { GET_ALL_BOOKS } from '~/graphql-schema/queries/book-queries';

export const query = new GraphQLObjectType({
  name: 'RootQuery',

  fields: {
    // books
    getAllBooks: GET_ALL_BOOKS,
  },
});

export const schema = new GraphQLSchema({ query });
