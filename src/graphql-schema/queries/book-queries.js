import { GraphQLList } from 'graphql';

import myKnex from '~/server/my-knex';

// type defs
import { AbstractBookType } from '~/graphql-schema/type-defs/AbstractBookType';
import { PhysicalBookType } from '~/graphql-schema/type-defs/PhysicalBookType';

// utils
import { formatAbstractBooksResult } from '~/utils/books.utils';

export const GET_ABSTRACT_BOOKS = {
  type: new GraphQLList(AbstractBookType),

  async resolve() {
    const books = await myKnex
      .select('*')
      .from('abstract_books_tbl')
      .join('authors_tbl', 'abstract_books_tbl.ab_authorid', '=', 'authors_tbl.a_id');

    return books.map(formatAbstractBooksResult);
  },
};

export const GET_PHYSICAL_BOOKS = {
  type: new GraphQLList(PhysicalBookType),

  async resolve() {
    const books = await myKnex.select('*').from('physical_books');
    return books;
  },
};
