import React from 'react';

import { ApolloProvider } from '@apollo/client';

import { client } from '~/graphql-client/config';

import AdminPage from './pages/admin-page/AdminPage';

function App() {
  return (
    <ApolloProvider client={client}>
      <AdminPage />
    </ApolloProvider>
  );
}

export default App;
