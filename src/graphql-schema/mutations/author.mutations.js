import { GraphQLString } from 'graphql';

import myKnex from '~/server/my-knex';

<<<<<<< HEAD
import { formatAuthorsQueryResult } from '~/utils/author.utils';

=======
>>>>>>> afa37a92139a58704342e2a5c4aa6f2f93edcf42
import { AuthorType } from '../type-defs/AuthorType';

export const CREATE_AUTHOR = {
  type: AuthorType,

  args: {
    name: { type: GraphQLString },
    patronum: { type: GraphQLString },
    surname: { type: GraphQLString },
  },

  async resolve(parent, args) {
    const resultId = await myKnex('authors_tbl').insert({
      a_name: args.name,
      a_patronum: args.patronum,
      a_surname: args.surname,
    });

    const result = await myKnex('authors_tbl').where('a_id', resultId).first();
    return formatAuthorsQueryResult(result);
  },
};

export const UPDATE_AUTHOR = {
  type: AuthorType,

  args: {
    authorId: { type: GraphQLString },
    name: { type: GraphQLString },
    patronum: { type: GraphQLString },
    surname: { type: GraphQLString },
  },

  async resolve(parent, args) {
    const resultId = await myKnex('authors_tbl')
      .where('a_id', args.authorId)
      .update({ ...{ a_name: args.name, a_surname: args.surname, a_patronum: args.patronum } });
    const result = await myKnex('authors_tbl').where('a_id', resultId).first();
    return formatAuthorsQueryResult(result);
  },
};

export const DELETE_AUTHOR = {
  type: AuthorType,

  args: {
    authorId: { type: GraphQLString },
  },

  async resolve(parent, args) {
    await myKnex('authors_tbl').where('a_id', args.authorId).delete();
    return { id: args.authorId };
  },
};
