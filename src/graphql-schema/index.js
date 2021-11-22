import { GraphQLObjectType, GraphQLSchema } from 'graphql';

// queries
import { GET_ALL_BOOKS } from './queries/book-queries';
import { GET_AUTHORS } from './queries/author-queries';

// mutations
import { AUTHORIZE } from './mutations/user.mutations';
import { CREATE_AUTHOR, DELETE_AUTHOR } from './mutations/author.mutations';

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
    // users
    authorize: AUTHORIZE,

    // authors
    createAuthor: CREATE_AUTHOR,
    deleteAuthor: DELETE_AUTHOR,
  },
});

export const schema = new GraphQLSchema({ query, mutation });
