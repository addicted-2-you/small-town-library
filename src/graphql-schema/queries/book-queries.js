import { GraphQLList } from 'graphql';

import { BookType } from '~/graphql-schema/type-defs/Book';

import myKnex from '~/server/my-knex';

export const GET_ALL_BOOKS = {
  type: new GraphQLList(BookType),

  async resolve() {
    const books = await myKnex.select('*').from('books');
    return books;
  },
};
