import path from 'path';

// server
import 'reflect-metadata';
import express from 'express';
import cookieParser from 'cookie-parser';
import { createConnection } from 'typeorm';

// graphql
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'type-graphql';
import { ApolloProvider } from '@apollo/client';

// react
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

// configs
import { client } from '~/graphql-client/config';

// graphql resolvers
import { AbstractBookResolver } from '~/graphql-schema/resolvers/AbstractBookResolver';
import { AuthorResolver } from '~/graphql-schema/resolvers/AuthorResolver';
import { PhysicalBookResolver } from '~/graphql-schema/resolvers/PhysicalBookResolver';

// graphql entities
import { AbstractBook } from '~/entities/AbstractBook';
import { Author } from '~/entities/Author';
import { PhysicalBook } from '~/entities/PhysicalBook';

import App from '../App';

import { readFile } from '~/utils/server.utils';

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

  await createConnection({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'small_town_library',
    entities: [AbstractBook, Author, PhysicalBook],
    // logging: true,
    synchronize: true,
  });

  app.use(
    '/graphql',
    graphqlHTTP({
      graphiql: true,
      schema: await buildSchema({
        resolvers: [AbstractBookResolver, AuthorResolver, PhysicalBookResolver],
      }),
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
