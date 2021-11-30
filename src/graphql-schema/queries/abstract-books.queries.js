import { GraphQLList, GraphQLString } from 'graphql';

import myKnex from '~/server/my-knex';

// type defs
import { AbstractBookType } from '~/graphql-schema/type-defs/AbstractBookType';

// utils
import { formatAbstractBooksResult } from '~/utils/books.utils';

export const GET_ABSTRACT_BOOKS = {
  type: new GraphQLList(AbstractBookType),

  args: {
    searchQuery: { type: GraphQLString },
  },

  async resolve(parent, args) {
    const { searchQuery = '' } = args;

    const books = await myKnex
      .select('*')
      .from('abstract_books_tbl')
      .where((builder) => {
        builder
          .where('ab_name', 'like', `%${searchQuery}%`)
          .orWhere('ab_description', 'like', `%${searchQuery}%`);
      });

    return books.map(formatAbstractBooksResult);
  },
};
