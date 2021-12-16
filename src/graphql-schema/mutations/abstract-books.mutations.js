import { GraphQLString } from 'graphql';

import myKnex from '~/server/my-knex';

import { formatAbstractBooksResult } from '~/utils/abstract-books.utils';

import { AbstractBookType } from '../type-defs/AbstractBookType';

export const CREATE_ABSTRACT_BOOK = {
  type: AbstractBookType,

  args: {
    name: { type: GraphQLString },
  },

  async resolve(parent, args) {
    const resultId = await myKnex('abstract_books_tbl').insert({ ab_name: args.name });
    const result = await myKnex('abstract_books_tbl').where('ab_id', resultId).first();
    return formatAbstractBooksResult(result);
  },
};

export const UPDATE_ABSTRACT_BOOK = {
  type: AbstractBookType,

  args: {
    bookId: { type: GraphQLString },
    name: { type: GraphQLString },
  },

  async resolve(parent, args) {
    const resultId = await myKnex('abstract_books_tbl')
      .where('ab_id', args.bookId)
      .update({
        ...{
          ab_name: args.name,
        },
      });

    const result = await myKnex('abstract_books_tbl').where('ab_id', resultId).first();
    return formatAbstractBooksResult(result);
  },
};

export const DELETE_ABSTRACT_BOOK = {
  type: AbstractBookType,

  args: {
    bookId: { type: GraphQLString },
  },

  async resolve(parent, args) {
    // TODO: return type is not AbstractBookType
    await myKnex('abstract_books_tbl').where('ab_id', args.bookId).delete();
    return { id: args.bookId };
  },
};
