import { GraphQLList, GraphQLString } from 'graphql';

import myKnex from '~/server/my-knex';

// type defs
import { AbstractBookType } from '~/graphql-schema/type-defs/AbstractBookType';

// utils
import { formatAbstractBooksResult } from '~/utils/abstract-books.utils';

export const GET_ABSTRACT_BOOKS = {
  type: new GraphQLList(AbstractBookType),

  args: {
    bookId: { type: GraphQLString },
    searchQuery: { type: GraphQLString },
  },

  async resolve(parent, args) {
    const { bookId, searchQuery = '' } = args;

    let books = [];
    if (bookId) {
      books = await myKnex.select('*').from('abstract_books_tbl').where('ab_id', '=', bookId);
    } else {
      books = await myKnex
        .select('*')
        .from('abstract_books_tbl')
        .where((builder) => {
          builder.where('ab_name', 'like', `%${searchQuery}%`);
        });
    }

    return books.map(formatAbstractBooksResult);
  },
};
