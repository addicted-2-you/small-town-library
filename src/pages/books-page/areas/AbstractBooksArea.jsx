import React from 'react';
import { useQuery } from '@apollo/client';

// gql
import { GET_ABSTRACT_BOOKS } from '~/graphql-client/queries/abstract-books.queries';

// hooks
import { useAbstractBookDelete } from '~/hooks/abstract-books/useAbstractBookDelete';
import { useModal } from '~/components/modal/useModal';

// components
import { PlusButton, EditButton, TrashButton } from '~/components/icon-buttons';

// modals
import AbstractBookModal from '~/modals/AbstractBookModal';

function AbstractBooksArea({ searchQuery }) {
  const { loading, error, data } = useQuery(GET_ABSTRACT_BOOKS, { variables: { searchQuery } });

  const { showModal: showCreateBookModal } = useModal({
    ModalContent: () => <AbstractBookModal searchQuery={searchQuery} />,
    inputs: [searchQuery],
    title: 'Добавить книгу',
  });

  const { showModal: showEditBookModal } = useModal({
    ModalContent: (props) => <AbstractBookModal {...props} searchQuery={searchQuery} />,
    inputs: [searchQuery],
    title: 'Редактировать книгу',
  });

  const deleteAbstractBookMutation = useAbstractBookDelete(searchQuery);

  function deleteAbstractBookHandler(bookId) {
    deleteAbstractBookMutation({ variables: { bookId } });
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error {JSON.stringify(error)}</p>;
  }

  const { abstractBooks } = data;

  return (
    <div className="px-3 py-2">
      <h3 className="text-md font-semibold ">Абстрактные книги</h3>

      <div className="mt-3">
        <PlusButton onClick={showCreateBookModal} />
      </div>

      <ul className="mt-1 space-y-2">
        {abstractBooks.map((book) => (
          <li
            key={book.id}
            className="relative py-1 px-2 flex justify-between items-center rounded-md bg-gray-100 even:bg-gray-200"
          >
            <span className="space-x-5">
              <a
                className="hover:text-blue-500 hover:underline"
                href={`/abstract-books/${book.id}`}
              >
                {book.name}
              </a>
            </span>

            <span className="space-x-2">
              <EditButton onClick={() => showEditBookModal({ editedBook: book })} />

              <TrashButton onClick={() => deleteAbstractBookHandler(book.id)} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AbstractBooksArea;
