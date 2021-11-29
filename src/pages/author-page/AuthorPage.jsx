import React from 'react';
import { useParams, useHistory, NavLink } from 'react-router-dom';
import { useQuery } from '@apollo/client';

// gql
import { GET_AUTHOR } from '~/graphql-client/authors';

// hooks
import { useAuthorDelete } from '~/hooks/useAuthorDelete';

// icons
import editIcon from '~/icons/edit.svg';
import trashIcon from '~/icons/trash.svg';
import chevronLeftSolid from '~/icons/chevron-left-solid.svg';

function AuthorPage() {
  const { authorId } = useParams();

  const history = useHistory();

  const { loading, error, data } = useQuery(GET_AUTHOR, { variables: { id: authorId } });

  const deleteAuthorMutation = useAuthorDelete();

  const deleteAuthorHandler = React.useCallback(async () => {
    // [QUESTION]: apollo-gql вынуждает меня писать логику в компоненте
    // или есть способ сделать это по-науке?
    await deleteAuthorMutation({ variables: { authorId } });
    history.push('/authors');
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error {JSON.stringify(error)}</p>;
  }

  const {
    getAuthors: [authorData],
  } = data;

  return (
    <>
      <header className="px-4 flex justify-between">
        <NavLink
          className="space-x-2 flex items-center text-blue-500 cursor-pointer hover:underline"
          to="/authors"
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
            onClick={deleteAuthorHandler}
          >
            <img width="18" height="18" src={trashIcon} alt="trash" />
          </button>
        </div>
      </header>

      <h1 className="pl-4 text-lg font-bold">{`${authorData.surname} ${authorData.name} ${
        authorData.patronum || ''
      }`}</h1>

      {authorData.books.length ? (
        <>
          <h2 className="pl-4 font-semibold">Книги автора</h2>

          <ul className="p-4 bg-gray-200 rounded-xl">
            {authorData.books.map((book) => (
              <li key={book.id}>{book.name}</li>
            ))}
          </ul>
        </>
      ) : (
        <h2 className="pl-4 font-semibold">У автора нет книг :/</h2>
      )}
    </>
  );
}

export default AuthorPage;
