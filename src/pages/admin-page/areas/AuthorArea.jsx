import React from 'react';
import { useParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';

import { GET_AUTHORS } from '~/graphql-client/authors';

function AuthorArea() {
  const { authorId } = useParams();

  const {
    loading,
    error,
    data: authorData,
  } = useQuery(GET_AUTHORS, { variables: { id: authorId } });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error {JSON.stringify(error)}</p>;
  }

  return (
    <div>
      <strong>{authorId}</strong>
      <p>{JSON.stringify(authorData)}</p>
    </div>
  );
}

export default AuthorArea;
