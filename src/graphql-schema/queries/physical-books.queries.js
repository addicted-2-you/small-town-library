import { GraphQLList } from 'graphql';

import myKnex from '~/server/my-knex';

// type defs
import { PhysicalBookType } from '~/graphql-schema/type-defs/PhysicalBookType';

export const GET_PHYSICAL_BOOKS = {
  type: new GraphQLList(PhysicalBookType),

  async resolve() {
    const books = await myKnex.select('*').from('physical_books');
    return books;
  },
};
