import { GraphQLObjectType, GraphQLSchema } from 'graphql';

// queries
import { GET_ABSTRACT_BOOKS } from './queries/abstract-books.queries';
import { GET_PHYSICAL_BOOKS } from './queries/physical-books.queries';
import { GET_AUTHORS } from './queries/authors.queries';

// mutations
import { AUTHORIZE } from './mutations/user.mutations';
import { CREATE_AUTHOR, UPDATE_AUTHOR, DELETE_AUTHOR } from './mutations/author.mutations';

export const query = new GraphQLObjectType({
  name: 'RootQuery',

  fields: {
    // abstract books
    getAbstractBooks: GET_ABSTRACT_BOOKS,

    // physical books
    getPhysicalBooks: GET_PHYSICAL_BOOKS,

    // authors
    getAuthors: GET_AUTHORS,
  },
});

export const mutation = new GraphQLObjectType({
  name: 'RootMutation',

  fields: {
    // users
    authorize: AUTHORIZE,

    // authors
    createAuthor: CREATE_AUTHOR,
    updateAuthor: UPDATE_AUTHOR,
    deleteAuthor: DELETE_AUTHOR,
  },
});

export const schema = new GraphQLSchema({ query, mutation });
