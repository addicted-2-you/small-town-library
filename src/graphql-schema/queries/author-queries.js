import { GraphQLList, GraphQLString } from 'graphql';

import myKnex from '~/server/my-knex';

import { AuthorType } from '~/graphql-schema/type-defs/Author';

export const GET_AUTHORS = {
  type: new GraphQLList(AuthorType),

  args: {
    id: { type: GraphQLString },
  },

  async resolve(parent, args) {
    let authors;
    if (args.id) {
      authors = await myKnex.select('*').where('id', args.id).from('authors');
    } else {
      authors = await myKnex.select('*').from('authors');
    }

    return authors;
  },
};
