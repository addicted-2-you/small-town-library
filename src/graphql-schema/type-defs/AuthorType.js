import { GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql';

import myKnex from '~/server/my-knex';

// utils
import { formatAbstractBooksResult } from '~/utils/abstract-books.utils';

import { AbstractBookType } from './AbstractBookType';

export const AuthorType = new GraphQLObjectType({
  name: 'Author',

  fields: () => ({
    id: { type: GraphQLString },

    name: { type: GraphQLString },

    surname: { type: GraphQLString },

    patronum: { type: GraphQLString },

    books: {
      type: GraphQLList(AbstractBookType),

      async resolve(parent) {
        const books = await myKnex('m2m_abstract_books_authors_tbl').join(
          'abstract_books_tbl',
          (builder) => {
            builder
              .on('m2maba_abstractbookid', '=', 'ab_id')
              .andOn('m2maba_authorid', '=', parent.id);
          },
        );

        return books.map(formatAbstractBooksResult);
      },
    },
  }),
});
