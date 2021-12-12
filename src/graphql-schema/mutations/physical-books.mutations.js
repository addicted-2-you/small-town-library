import { GraphQLString } from 'graphql';

import myKnex from '~/server/my-knex';

import { formatPhysicalBookRaw } from '~/utils/physical-books.util';

import { PhysicalBookType } from '../type-defs/PhysicalBookType';

export const CREATE_PHYSICAL_BOOK = {
  type: PhysicalBookType,

  args: {
    name: { type: GraphQLString },
    publishingDate: { type: GraphQLString },
  },

  async resolve(parent, args) {
    const resultId = await myKnex('physical_books_tbl').insert({
      pb_name: args.name,
      pb_publishingdate: args.publishingDate,
    });

    const result = await myKnex('physical_books_tbl').where('pb_id', resultId).first();
    return formatPhysicalBookRaw(result);
  },
};

export const DELETE_PHYSICAL_BOOK = {
  type: PhysicalBookType,

  args: {
    bookId: { type: GraphQLString },
  },

  async resolve(parent, args) {
    const deletedBook = await myKnex('physical_books_tbl').where('pb_id', args.bookId).first();
    await myKnex('physical_books_tbl').where('pb_id', args.bookId).delete();
    return formatPhysicalBookRaw(deletedBook);
  },
};
