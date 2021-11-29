import { GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql';

import myKnex from '~/server/my-knex';

import { AbstractBookType } from './AbstractBookType';

import { formatAbstractBooksResult } from '~/utils/books.utils';

export const AuthorType = new GraphQLObjectType({
  name: 'Author',

  fields: () => ({
    id: { type: GraphQLString },

    name: { type: GraphQLString },

    surname: { type: GraphQLString },

    patronum: { type: GraphQLString },

    books: {
      type: new GraphQLList(AbstractBookType),

      resolve: async (parent) => {
        const books = await myKnex
          .table('m2m_abstract_books_authors_tbl')
          .join('abstract_books_tbl', function () {
            this.on('m2maba_abstractbookid', '=', 'ab_id').andOn('m2maba_authorid', '=', parent.id);
          })
          .select('*');

        return books.map(formatAbstractBooksResult);
      },
    },
  }),
});
