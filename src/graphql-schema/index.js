import { GraphQLObjectType, GraphQLSchema } from 'graphql';

// queries
import { GET_ABSTRACT_BOOKS } from './queries/abstract-books.queries';
import { GET_AUTHORS } from './queries/authors.queries';
import { GET_PHYSICAL_BOOKS } from './queries/physical-books.queries';

// mutations
import {
  CREATE_ABSTRACT_BOOK,
  DELETE_ABSTRACT_BOOK,
  UPDATE_ABSTRACT_BOOK,
} from './mutations/abstract-books.mutations';
import { CREATE_AUTHOR, UPDATE_AUTHOR, DELETE_AUTHOR } from './mutations/authors.mutations';
import { AUTHORIZE } from './mutations/users.mutations';

export const query = new GraphQLObjectType({
  name: 'RootQuery',

  fields: {
    // abstract books
    getAbstractBooks: GET_ABSTRACT_BOOKS,

    // authors
    getAuthors: GET_AUTHORS,

    // physical books
    getPhysicalBooks: GET_PHYSICAL_BOOKS,
  },
});

export const mutation = new GraphQLObjectType({
  name: 'RootMutation',

  fields: {
    // abstract books
    createAbstractBook: CREATE_ABSTRACT_BOOK,
    updateAbstractBook: UPDATE_ABSTRACT_BOOK,
    deleteAbstractBook: DELETE_ABSTRACT_BOOK,

    // authors
    createAuthor: CREATE_AUTHOR,
    updateAuthor: UPDATE_AUTHOR,
    deleteAuthor: DELETE_AUTHOR,

    // users
    authorize: AUTHORIZE,
  },
});

export const schema = new GraphQLSchema({ query, mutation });
