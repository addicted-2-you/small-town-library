import { GraphQLString } from 'graphql';

import myKnex from '~/server/my-knex';

import { AuthorType } from '../type-defs/Author';

export const CREATE_AUTHOR = {
  type: AuthorType,

  args: {
    name: { type: GraphQLString },
    patronum: { type: GraphQLString },
    surname: { type: GraphQLString },
  },

  async resolve(parent, args) {
    await myKnex('authors').insert({
      name: args.name,
      patronum: args.patronum,
      surname: args.surname,
    });
  },
};
