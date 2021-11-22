import { useMutation } from '@apollo/client';

import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { AUTHORIZE } from '~/graphql-client/mutations/user.mutations';

function AuthPage() {
  const [authorize] = useMutation(AUTHORIZE);

  const { register, handleSubmit } = useForm();

  const history = useHistory();

  function auth({ login, password }) {
    // 1. check if login exists
    // 2. if login exists, check password
    // 3. if password is correct, sign in under login and password (return token)
    // 4. if password is wrong show error message
    // 5. if login not exists, create user and sign in under this user (return token)
    authorize({ variables: { login, password } }).then((result) => {
      console.log(result);
    });
  }

  function cancel() {
    history.push('/');
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="py-2 px-5 w-1/5 rounded bg-gray-100">
        <h2 className="font-bold border-b-2 border-gray-200">Log In / Sign Up</h2>

        <form className="mt-6" onSubmit={handleSubmit(auth)}>
          <label className="flex flex-col" htmlFor="auth-login-input">
            <span>Login</span>
            <input className="px-2" id="auth-login-input" type="text" {...register('login')} />
          </label>

          <label className="mt-6 flex flex-col" htmlFor="auth-password-input">
            <span>Password</span>
            <input
              className="px-2"
              id="auth-password-input"
              type="password"
              {...register('password')}
            />
          </label>

          <div className="mt-6 flex space-x-2">
            <button
              className="py-1 px-2 w-1/4 bg-white border-2 border-gray-200 focus:outline-black"
              type="submit"
            >
              Ok
            </button>

            <button
              className="py-1 px-2 w-1/4 bg-white border-2 border-gray-200 focus:outline-black"
              type="button"
              onClick={cancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AuthPage;
