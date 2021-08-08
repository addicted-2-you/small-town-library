import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import { useQuery } from '@apollo/client';

import { GET_AUTHORS } from '~/graphql-client/authors';

function AuthorsArea() {
  const { loading, error, data: authorsData } = useQuery(GET_AUTHORS);

  const { url } = useRouteMatch();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error {JSON.stringify(error)}</p>;
  }

  const { authors } = authorsData;

  return (
    <div>
      <div className="p-4 flex flex-wrap justify-center">
        <div className="p-1 flex flex-col items-center rounded-lg shadow-xl">
          <h4 className="font-bold">Unique authors</h4>
          <span>{authors.length}</span>
        </div>
      </div>

      <ul>
        {authors.map((author) => (
          <li key={author.id}>
            <a href={`${url}/${author.id}`}>{`${author.name} ${author.patronum || ''} ${
              author.surname
            }`}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AuthorsArea;
