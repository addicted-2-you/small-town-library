import { GraphQLString } from 'graphql';

import myKnex from '~/server/my-knex';

import { AbstractBookType } from '../type-defs/AbstractBookType';

export const DELETE_ABSTRACT_BOOK = {
  type: AbstractBookType,

  args: {
    bookId: { type: GraphQLString },
  },

  async resolve(parent, args) {
    await myKnex('abstract_books_tbl').where('ab_id', args.bookId).delete();
    return { id: args.bookId };
  },
};
