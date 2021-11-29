import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { ApolloProvider } from '@apollo/client';

import { client } from '~/graphql-client/config';

import ModalProvider from '~/components/modal/ModalProvider';

import App from './App';

ReactDOM.hydrate(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <ModalProvider container={document.getElementById('modals')}>
        <App />
      </ModalProvider>
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
