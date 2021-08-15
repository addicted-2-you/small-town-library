import { GraphQLObjectType, GraphQLSchema } from 'graphql';

// queries
import { GET_ALL_BOOKS } from './queries/book-queries';
import { GET_AUTHORS } from './queries/author-queries';

// mutations
import { CREATE_AUTHOR } from './mutations/author-mutations';

export const query = new GraphQLObjectType({
  name: 'RootQuery',

  fields: {
    // books
    getAllBooks: GET_ALL_BOOKS,

    // authors
    authors: GET_AUTHORS,
  },
});

export const mutation = new GraphQLObjectType({
  name: 'RootMutation',

  fields: {
    // authors
    createAuthor: CREATE_AUTHOR,
  },
});

export const schema = new GraphQLSchema({ query, mutation });
