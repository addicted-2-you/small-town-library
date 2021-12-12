import { GraphQLID, GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql';

export const PhysicalBookType = new GraphQLObjectType({
  name: 'PhysicalBook',

  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    publishingDate: { type: GraphQLString },
  }),
});

export const GroupedPhysicalBookType = new GraphQLObjectType({
  name: 'GroupedPhysicalBook',

  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    publishingDate: { type: GraphQLString },
    count: { type: GraphQLInt },
  }),
});
