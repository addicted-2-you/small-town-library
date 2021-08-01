import React from 'react';

import { useQuery } from '@apollo/client';

import { GET_ALL_BOOKS } from '~/graphql-client/books';
import BooksTable from './BooksTable';

function AdminPage() {
  const { loading, error, data } = useQuery(GET_ALL_BOOKS);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error {JSON.stringify(error)}</p>;
  }

  return (
    <>
      <h2>AdminPage</h2>

      <BooksTable books={data.getAllBooks} />
    </>
  );
}

export default AdminPage;
