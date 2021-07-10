import http from 'http';

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { readFile } from 'utils/server.utils';

import App from '../App';

http
  .createServer(async (req, resp) => {
    resp.setHeader('Content-Type', 'text/html; charset=utf-8;');

    if (req.url.startsWith('/public')) {
      try {
        const file = await readFile(`./dist/${req.url}`, 'utf8');
        resp.end(file);
        return;
      } catch (e) {
        resp.end('<h1>404 not found</h1>');
      }
    }

    switch (req.url) {
      case '/': {
        const client = ReactDOMServer.renderToString(<App />);
        const template = await readFile('./dist/public/index.html', 'utf8');
        resp.end(template.replace('<div id="root"></div>', `<div id="root">${client}</div>`));
        break;
      }
      default: {
        resp.end('<h1>404 not found</h1>');
      }
    }
  })
  .listen(process.env.SERVER_PORT);
