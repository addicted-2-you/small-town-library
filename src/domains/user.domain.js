import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import myKnex from '~/server/my-knex';

export async function authorize(login, password) {
  const [userWithProvidedLogin] = await myKnex.table('users').where({ login }).select('*');
  if (userWithProvidedLogin) {
    if (bcrypt.compareSync(password, userWithProvidedLogin.password_hash)) {
      return jwt.sign(
        { id: userWithProvidedLogin.id, login: userWithProvidedLogin.login },
        process.env.JWT_SECRET_KEY,
        {
          expiresIn: '1w',
        },
      );
    }

    return null;
  }

  const passwordHash = await bcrypt.hash(password, Number(process.env.SALT));
  const [newUserId] = await myKnex('users').insert({
    login,
    password_hash: passwordHash,
  });

  return jwt.sign({ id: newUserId, login }, process.env.JWT_SECRET_KEY, {
    expiresIn: '1w',
  });
}
