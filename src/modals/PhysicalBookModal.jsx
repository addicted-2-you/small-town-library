import React from 'react';
import { useForm } from 'react-hook-form';

// hooks
import { usePhysicalBookCreate } from '~/hooks/physical-books/usePhysicalBookCreate';

function PhysicalBookModal({ searchQuery, editedBook }) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: editedBook ? editedBook.name : '',
    },
  });

  const createPhysicalBookMutation = usePhysicalBookCreate(searchQuery);

  function onSubmit(data) {
    if (editedBook) {
      //
    } else {
      createPhysicalBookMutation({
        variables: { name: data.name, publishingDate: data.publishingDate },
      });
    }
  }

  return (
    <form className="flex flex-col space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <input
        className="p-1 text-base border-2 border-gray-200 rounded-lg"
        {...register('name')}
        type="text"
        placeholder="Название"
      />

      <input
        className="mt-3 p-1 text-base border-2 border-gray-200 rounded-lg"
        {...register('publishingDate')}
        type="text"
        placeholder="Дата публикации"
      />

      <input
        className="mt-5 p-2 text-green-900 cursor-pointer rounded-md bg-green-300 hover:bg-green-400"
        type="submit"
        value="Сохранить"
      />
    </form>
  );
}

export default PhysicalBookModal;
