import { GraphQLList, GraphQLString } from 'graphql';

import myKnex from '~/server/my-knex';

// type defs
import {
  GroupedPhysicalBookType,
  PhysicalBookType,
} from '~/graphql-schema/type-defs/PhysicalBookType';

// utils
import { formatGroupedPhysicalBookRaw, formatPhysicalBookRaw } from '~/utils/physical-books.util';

export const GET_PHYSICAL_BOOKS = {
  type: new GraphQLList(PhysicalBookType),

  args: {
    bookId: { type: GraphQLString },
    searchQuery: { type: GraphQLString },
  },

  async resolve(parent, args) {
    const { bookId, searchQuery = '' } = args;

    let physicalBooks = [];
    if (bookId) {
      physicalBooks = await myKnex('physical_books_tbl').select('*').where('ph_id', bookId);
    } else {
      physicalBooks = await myKnex('physical_books_tbl')
        .select('*')
        .where((builder) => {
          builder.where('pb_name', 'like', `%${searchQuery}%`);
        });
    }

    return physicalBooks.map(formatPhysicalBookRaw);
  },
};

export const GET_GROUPED_PHYSICAL_BOOKS = {
  type: new GraphQLList(GroupedPhysicalBookType),

  args: {
    searchQuery: { type: GraphQLString },
  },

  async resolve(parent, args) {
    const { searchQuery = '' } = args;

    const physicalBooks = await myKnex('physical_books_tbl')
      .select('pb_name', 'pb_publishingdate')
      .where((builder) => {
        builder.where('pb_name', 'like', `%${searchQuery}%`);
      })
      .groupBy('pb_name', 'pb_publishingdate')
      .count('*', { as: 'pb_count' });

    return physicalBooks.map(formatGroupedPhysicalBookRaw);
  },
};

export const GET_PHYSICAL_BOOKS_GROUP_LIST = {
  type: new GraphQLList(PhysicalBookType),

  args: {
    name: { type: GraphQLString },
    publishingDate: { type: GraphQLString },
  },

  async resolve(parent, args) {
    const { name, publishingDate } = args;

    const physicalBooks = await myKnex('physical_books_tbl')
      .select('*')
      .where((builder) => {
        builder.where('pb_name', name).andWhere('pb_publishingdate', publishingDate);
      });

    return physicalBooks.map(formatPhysicalBookRaw);
  },
};
