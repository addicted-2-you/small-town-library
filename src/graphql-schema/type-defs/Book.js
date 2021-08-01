import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';

export const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    publishing_date: { type: GraphQLString },
    author_id: { type: GraphQLString },
    publisher_id: { type: GraphQLString },
  }),
});
