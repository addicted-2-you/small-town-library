import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';

import { AuthorType } from './AuthorType';

export const AbstractBookType = new GraphQLObjectType({
  name: 'AbstractBook',

  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    author: { type: AuthorType },
  }),
});
