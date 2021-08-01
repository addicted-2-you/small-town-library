import path from 'path';

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import express from 'express';
import { graphqlHTTP } from 'express-graphql';

import { schema } from '~/graphql-schema';

import { readFile } from '~/utils/server.utils';

import App from '../App';

const app = express();

app.use(express.json());
app.use('/public', express.static(path.resolve(__dirname, 'public')));

async function runApp() {
  async function renderClientApp(req, resp) {
    const client = ReactDOMServer.renderToString(<App />);
    const template = await readFile('./dist/public/index.html', 'utf8');
    resp.end(template.replace('<div id="root"></div>', `<div id="root">${client}</div>`));
  }

  app.get('/', renderClientApp);

  app.use(
    '/graphql',
    graphqlHTTP({
      schema,
      graphiql: true,
    }),
  );

  app.listen(process.env.SERVER_PORT, () => {
    console.log(`listening on ${process.env.SERVER_PORT}`);
  });
}

runApp().catch((err) => {
  console.error(err);
});
