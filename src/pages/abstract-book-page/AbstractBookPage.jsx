import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { useQuery } from '@apollo/client';

// gql
import { GET_ABSTRACT_BOOK } from '~/graphql-client/queries/abstract-books.queries';

// icons
import editIcon from '~/icons/edit.svg';
import trashIcon from '~/icons/trash.svg';
import chevronLeftSolid from '~/icons/chevron-left-solid.svg';

function AbstractBookPage() {
  const { bookId } = useParams();

  const { loading, error, data } = useQuery(GET_ABSTRACT_BOOK, { variables: { id: bookId } });

  const {
    abstractBooks: [abstractBook],
  } = data || { abstractBooks: [null] };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error {JSON.stringify(error)}</p>;
  }

  return (
    <>
      <header className="px-4 flex justify-between">
        <NavLink
          className="space-x-2 flex items-center text-blue-500 cursor-pointer hover:underline"
          to="/books"
        >
          <img height="8" width="8" src={chevronLeftSolid} alt="back" />

          <span>Назад</span>
        </NavLink>

        <div className="space-x-2">
          <button
            className="p-1 rounded-md cursor-pointer bg-yellow-200 hover:bg-yellow-300"
            type="button"
          >
            <img width="18" height="18" src={editIcon} alt="create" />
          </button>

          <button
            className="p-1 rounded-md cursor-pointer bg-red-200 hover:bg-red-300"
            type="button"
          >
            <img width="18" height="18" src={trashIcon} alt="trash" />
          </button>
        </div>
      </header>

      <h1 className="pl-4 text-lg font-bold">{abstractBook.name}</h1>

      {/* {abstractBook.authors.length ? (
        <>
          <h2 className="pl-4 font-semibold">Авторы</h2>

          <ul className="p-4 bg-gray-200 rounded-xl">
            {abstractBook.authors.map((author) => (
              <li key={author.id}>
                <NavLink
                  className="flex items-center text-blue-500 cursor-pointer hover:underline"
                  to={`/authors/${author.id}`}
                >{`${author.surname} ${author.name} ${author.patronum || ''}`}</NavLink>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <h2 className="pl-4 font-semibold">У этой книги пока не выбраны авторы :/</h2>
      )} */}
    </>
  );
}

export default AbstractBookPage;
