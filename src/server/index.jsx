import path from 'path';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import express from 'express';
import cookieParser from 'cookie-parser';
import { graphqlHTTP } from 'express-graphql';

import { ApolloProvider } from '@apollo/client';

import { schema } from '~/graphql-schema';
import { client } from '~/graphql-client/config';

import { readFile } from '~/utils/server.utils';

import App from '../App';

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use('/public', express.static(path.resolve(__dirname, 'public')));

async function runApp() {
  async function renderClientApp(req, resp) {
    const context = {};
    const clientApp = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </StaticRouter>,
    );

    const template = await readFile('./dist/public/index.html', 'utf8');
    resp.end(template.replace('<div id="root"></div>', `<div id="root">${clientApp}</div>`));
  }

  app.use(
    '/graphql',
    graphqlHTTP({
      schema,
      graphiql: true,
    }),
  );

  app.get('/*', renderClientApp);

  app.listen(process.env.SERVER_PORT, () => {
    console.log(`listening on ${process.env.SERVER_PORT}`);
  });
}

runApp().catch((err) => {
  console.error(err);
});
