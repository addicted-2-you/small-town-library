import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { GET_ABSTRACT_BOOKS } from '~/graphql-client/books';

// icons
import plusIcon from '~/icons/plus.svg';
import editIcon from '~/icons/edit.svg';
import trashIcon from '~/icons/trash.svg';

function AbstractBooksArea() {
  const { loading, error, data } = useQuery(GET_ABSTRACT_BOOKS);

  // [QUESTION]: в каждом компоненте, которому нужно подтянуть данные
  // я дублирую этот кусок кода
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error {JSON.stringify(error)}</p>;
  }

  const { getAbstractBooks: abstractBooksData } = data;

  const { url } = useRouteMatch();

  return (
    <>
      <ul className="py-2 space-y-2">
        {abstractBooksData.map((book) => (
          <li
            key={book.id}
            className="relative py-1 px-2 flex justify-between items-center rounded-md bg-gray-100 even:bg-gray-200"
          >
            <span className="space-x-5">
              <a href={`${url}/${book.id}`} className="hover:text-blue-500 hover:underline">
                {book.name}
              </a>

              <a
                href={`/admin/authors/${book.author.id}`}
                className="hover:text-blue-500 hover:underline"
              >
                ({`${book.author.surname} ${book.author.name} ${book.author.patronum || ''}`})
              </a>
            </span>

            <span className="space-x-2">
              <button type="button" className="p-1 rounded-md bg-yellow-200 hover:bg-yellow-300">
                <img width="18" height="18" src={editIcon} alt="edit" />
              </button>

              <button type="button" className="p-1 rounded-md bg-red-200 hover:bg-red-300">
                <img width="18" height="18" src={trashIcon} alt="delete" />
              </button>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default AbstractBooksArea;
