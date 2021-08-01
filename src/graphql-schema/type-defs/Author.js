import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';

export const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    surname: { type: GraphQLString },
    patronum: { type: GraphQLString },
  }),
});
