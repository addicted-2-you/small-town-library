import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';

export const PhysicalBookType = new GraphQLObjectType({
  name: 'PhysicalBook',

  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    publishing_date: { type: GraphQLString },
  }),
});
