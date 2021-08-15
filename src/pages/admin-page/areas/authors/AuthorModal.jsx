import React from 'react';
import { useMutation } from '@apollo/client';

import { useForm } from 'react-hook-form';

import { CREATE_AUTHOR } from '~/graphql-client/mutations/authors.mutations';
import { GET_AUTHORS } from '~/graphql-client/authors';

import crossIcon from '~/icons/cross.svg';

function AuthorModal(props) {
  const { editedAuthor, close } = props;

  const modalTitle = React.useMemo(
    () => (editedAuthor ? 'Edit Author' : 'Create Author'),
    [editedAuthor],
  );

  const [addAuthor] = useMutation(CREATE_AUTHOR, {
    refetchQueries: [
      {
        query: GET_AUTHORS,
      },
    ],
  });

  const { register, handleSubmit } = useForm();

  function onSubmit(formData) {
    if (editedAuthor) {
      // edit
    } else {
      // create
      addAuthor({
        variables: { name: formData.name, surname: formData.surname, patronum: formData.patronum },
      });
    }
  }

  return (
    <div className="w-96">
      <header className="mb-3 flex justify-between">
        <h3 className="text-lg font-semibold">{modalTitle}</h3>
        <button type="button" onClick={close}>
          <img height="18" width="18" src={crossIcon} alt="cross" />
        </button>
      </header>
      <hr />
      <section>
        <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
          <label className="flex items-baseline" htmlFor="author-modal-name">
            <strong className="mr-1">Name </strong>
            <input
              {...register('name')}
              id="author-modal-name"
              type="text"
              className="flex-grow border-b-2 border-gray-500 focus:border-black focus:outline-none"
            />
          </label>

          <label className="flex items-baseline" htmlFor="author-modal-patronum">
            <strong className="mr-1">Patroum</strong>
            <input
              {...register('patronum')}
              id="author-modal-patronum"
              type="text"
              className="flex-grow border-b-2 border-gray-500 focus:border-black focus:outline-none"
            />
          </label>

          <label className="flex items-baseline" htmlFor="author-modal-surname">
            <strong className="mr-1">Surname</strong>
            <input
              {...register('surname')}
              id="author-modal-surname"
              type="text"
              className="flex-grow border-b-2 border-gray-500 focus:border-black focus:outline-none"
            />
          </label>

          <div className="space-x-2 flex justify-end">
            <button className="px-2 rounded-md bg-green-200 hover:bg-green-300" type="submit">
              Save
            </button>

            <button
              className="px-2 rounded-md bg-gray-200 hover:bg-gray-300"
              type="button"
              onClick={close}
            >
              Cancel
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default AuthorModal;
