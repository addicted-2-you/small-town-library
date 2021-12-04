import React from 'react';
import { useForm } from 'react-hook-form';

// hooks
import { useAuthorCreate } from '~/hooks/authors/useAuthorCreate';
import { useAuthorUpdate } from '~/hooks/authors/useAuthorUpdate';

function AuthorModal({ editedAuthor }) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: editedAuthor ? editedAuthor.name : '',
      patronum: editedAuthor ? editedAuthor.patronum : '',
      surname: editedAuthor ? editedAuthor.surname : '',
    },
  });

  const createAuthorMutation = useAuthorCreate();

  const updateAuthorMutation = useAuthorUpdate();

  function onSubmit(data) {
    if (editedAuthor) {
      updateAuthorMutation({
        variables: {
          authorId: editedAuthor.id,
          name: data.name,
          surname: data.surname,
          patronum: data.patronum,
        },
      });
    } else {
      createAuthorMutation({
        variables: { name: data.name, surname: data.surname, patronum: data.patronum },
      });
    }
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
