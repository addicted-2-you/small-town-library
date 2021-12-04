import React from 'react';
import { useQuery } from '@apollo/client';

// gql
import { GET_ABSTRACT_BOOKS } from '~/graphql-client/queries/abstract-books.queries';

// hooks
import { useAbstractBookDelete } from '~/hooks/abstract-books/useAbstractBookDelete';

// icons
import plusIcon from '~/icons/plus.svg';
import editIcon from '~/icons/edit.svg';
import trashIcon from '~/icons/trash.svg';

function AbstractBooksArea({ searchQuery }) {
  const { loading, error, data } = useQuery(GET_ABSTRACT_BOOKS, { variables: { searchQuery } });

  const deleteAbstractBookMutation = useAbstractBookDelete();

  function deleteAbstractBookHandler(bookId) {
    deleteAbstractBookMutation({ variables: { bookId } });
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error {JSON.stringify(error)}</p>;
  }

  const { getAbstractBooks: abstractBooks } = data;

  return (
    <div className="px-3 py-2">
      <h3 className="text-md font-semibold">Абстрактные книги</h3>

      <div className="mt-3">
        <button className="p-1 rounded-md bg-green-200 hover:bg-green-300" type="button">
          <img width="18" height="18" src={plusIcon} alt="plus" />
        </button>
      </div>

      <ul className="mt-1 space-y-2">
        {abstractBooks.map((book) => (
          <li
            key={book.id}
            className="relative py-1 px-2 flex justify-between items-center rounded-md bg-gray-100 even:bg-gray-200"
          >
            <span className="space-x-5">
              <a
                href={`/abstract-books/${book.id}`}
                className="hover:text-blue-500 hover:underline"
              >
                {book.name}
              </a>
            </span>

            <span className="space-x-2">
              <button type="button" className="p-1 rounded-md bg-yellow-200 hover:bg-yellow-300">
                <img width="18" height="18" src={editIcon} alt="edit" />
              </button>

              <button
                type="button"
                className="p-1 rounded-md bg-red-200 hover:bg-red-300"
                onClick={() => deleteAbstractBookHandler(book.id)}
              >
                <img width="18" height="18" src={trashIcon} alt="delete" />
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AbstractBooksArea;