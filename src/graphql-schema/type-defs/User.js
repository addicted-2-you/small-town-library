import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';

export const UserType = new GraphQLObjectType({
  name: 'User',

  fields: () => ({
    id: { type: GraphQLID },
    login: { type: GraphQLString },
    password_hash: { type: GraphQLString },
  }),
});

export const RegisterUserReturnType = new GraphQLObjectType({
  name: 'RegisterUserReturn',

  fields: () => ({
    token: { type: GraphQLString },
  }),
});
