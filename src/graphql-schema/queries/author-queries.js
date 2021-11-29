import { GraphQLList, GraphQLString } from 'graphql';

import myKnex from '~/server/my-knex';

import { AuthorType } from '~/graphql-schema/type-defs/AuthorType';

import { formatAuthorsQueryResult } from '~/utils/author.utils';

export const GET_AUTHORS = {
  type: new GraphQLList(AuthorType),

  args: {
    id: { type: GraphQLString },
  },

  async resolve(parent, args) {
    let authors;
    if (args.id) {
      authors = await myKnex.select('*').where('a_id', args.id).from('authors_tbl');
    } else {
      authors = await myKnex.select('*').from('authors_tbl');
    }

    return authors.map(formatAuthorsQueryResult);
  },
};
