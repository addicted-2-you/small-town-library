import { GraphQLID, GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql';

import myKnex from '~/server/my-knex';

// utils
import { formatAuthorsQueryResult } from '~/utils/author.utils';

import { AuthorType } from './AuthorType';

export const AbstractBookType = new GraphQLObjectType({
  name: 'AbstractBook',

  fields: () => ({
    id: { type: GraphQLID },

    name: { type: GraphQLString },

    description: { type: GraphQLString },

    authors: {
      type: GraphQLList(AuthorType),

      async resolve(parent) {
        const authors = await myKnex('m2m_abstract_books_authors_tbl').join(
          'authors_tbl',
          (builder) => {
            builder
              .on('m2maba_authorid', '=', 'a_id')
              .andOn('m2maba_abstractbookid', '=', parent.id);
          },
        );

        return authors.map(formatAuthorsQueryResult);
      },
    },
  }),
});
