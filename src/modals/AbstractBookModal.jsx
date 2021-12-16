import React from 'react';
import { useForm } from 'react-hook-form';

// hooks
import { useAbstractBookCreate } from '~/hooks/abstract-books/useAbstractBookCreate';
import { useAbstractBookUpdate } from '~/hooks/abstract-books/useAbstractBookUpdate';

function AbstractBookModal({ searchQuery, editedBook }) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: editedBook ? editedBook.name : '',
    },
  });

  const createAbstractBookMutation = useAbstractBookCreate(searchQuery);

  const updateAbstractBookMutation = useAbstractBookUpdate(searchQuery);

  function onSubmit(data) {
    if (editedBook) {
      updateAbstractBookMutation({ variables: { bookId: editedBook.id, name: data.name } });
    } else {
      createAbstractBookMutation({ variables: { name: data.name } });
    }
  }

  return (
    <form className="w-80 flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <input
        className="p-1 text-base border-2 border-gray-200 rounded-lg"
        {...register('name')}
        placeholder="Название"
      />

      <input
        className="mt-5 p-2 text-green-900 cursor-pointer rounded-md bg-green-300 hover:bg-green-400"
        type="submit"
        value="Сохранить"
      />
    </form>
  );
}

export default AbstractBookModal;
