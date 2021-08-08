import { GraphQLObjectType, GraphQLSchema } from 'graphql';

import { GET_ALL_BOOKS } from './queries/book-queries';
import { GET_AUTHORS } from './queries/author-queries';

export const query = new GraphQLObjectType({
  name: 'RootQuery',

  fields: {
    // books
    getAllBooks: GET_ALL_BOOKS,

    // authors
    authors: GET_AUTHORS,
  },
});

export const schema = new GraphQLSchema({ query });
