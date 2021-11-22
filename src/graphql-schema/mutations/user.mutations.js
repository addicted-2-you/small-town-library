import { GraphQLString } from 'graphql';
import { UserInputError } from 'apollo-server-errors';

import { authorize } from '~/domains/user.domain';

import { RegisterUserReturnType } from '~/graphql-schema/type-defs/User';

import { ONE_WEEK_S } from '~/constants/time.constants';

export const AUTHORIZE = {
  type: RegisterUserReturnType,

  args: {
    login: { type: GraphQLString },
    password: { type: GraphQLString },
  },

  async resolve(parent, args, context) {
    try {
      const token = await authorize(args.login, args.password);
      context.res.cookie('accessToken', token, { expire: ONE_WEEK_S });
      return { token };
    } catch (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        throw new UserInputError(err.sqlMessage);
      }

      throw err;
    }
  },
};
