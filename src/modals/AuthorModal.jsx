import React from 'react';
import { useForm } from 'react-hook-form';

// hooks
import { useAuthorCreate } from '~/hooks/useAuthorCreate';

function AuthorModal() {
  const { register, handleSubmit } = useForm();

  const createAuthorMutation = useAuthorCreate();

  function onSubmit({ name, surname, patronum }) {
    createAuthorMutation({ variables: { name, surname, patronum } });
  }

  return (
    <form className="w-80 flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="px-4 py-2 flex flex-col space-y-3 border-2 border-gray-100 rounded-xl">
        <legend className="text-sm">Личные данные</legend>

        <input
          className="p-1 text-base border-2 border-gray-200 rounded-lg"
          {...register('name')}
          placeholder="Имя"
        />

        <input
          className="p-1 text-base border-2 border-gray-200 rounded-lg"
          {...register('patronum')}
          placeholder="Отчество"
        />

        <input
          className="p-1 text-base border-2 border-gray-200 rounded-lg"
          {...register('surname')}
          placeholder="Фамилия"
        />
      </fieldset>

      <input
        className="mt-5 p-2 text-green-900 cursor-pointer rounded-md bg-green-300 hover:bg-green-400"
        type="submit"
        value="Сохранить"
      />
    </form>
  );
}

export default AuthorModal;
