// TODO: delete this file

import { GraphQLObjectType, GraphQLSchema } from 'graphql';

// queries
import { GET_ABSTRACT_BOOKS } from './queries/abstract-books.queries';
import { GET_AUTHORS } from './queries/authors.queries';
import {
  GET_GROUPED_PHYSICAL_BOOKS,
  GET_PHYSICAL_BOOKS,
  GET_PHYSICAL_BOOKS_GROUP_LIST,
} from './queries/physical-books.queries';

// mutations
import {
  CREATE_ABSTRACT_BOOK,
  DELETE_ABSTRACT_BOOK,
  UPDATE_ABSTRACT_BOOK,
} from './mutations/abstract-books.mutations';
import { CREATE_AUTHOR, UPDATE_AUTHOR, DELETE_AUTHOR } from './mutations/authors.mutations';
import { CREATE_PHYSICAL_BOOK, DELETE_PHYSICAL_BOOK } from './mutations/physical-books.mutations';
import { AUTHORIZE } from './mutations/users.mutations';

export const query = new GraphQLObjectType({
  name: 'RootQuery',

  fields: {
    // abstract books
    abstractBooks: GET_ABSTRACT_BOOKS,

    // authors
    getAuthors: GET_AUTHORS,

    // physical books
    getPhysicalBooks: GET_PHYSICAL_BOOKS,
    getGroupedPhysicalBooks: GET_GROUPED_PHYSICAL_BOOKS,
    getPhysicalBooksGroupList: GET_PHYSICAL_BOOKS_GROUP_LIST,
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

    // physical books
    createPhysicalBook: CREATE_PHYSICAL_BOOK,
    deletePhysicalBook: DELETE_PHYSICAL_BOOK,

    // users
    authorize: AUTHORIZE,
  },
});

export const schema = new GraphQLSchema({ query, mutation });
