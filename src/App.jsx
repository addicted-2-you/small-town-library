import React from 'react';
import { Route, Switch } from 'react-router-dom';

// components
import CandybarLink from './components/CandybarLink';

import routes from './pages/routes';

// icons
import authorsIcon from '~/icons/pen-fancy-solid.svg';
import booksIcon from '~/icons/book-solid.svg';

function App() {
  return (
    <div className="h-screen flex overflow-hidden bg-white">
      <div className="py-5 px-2 w-1/6 bg-purple-500">
        <ul className="flex flex-col items-center space-y-1">
          <CandybarLink link="/authors">
            <img className="mr-2" height="10" width="10" src={authorsIcon} alt="authors" />
            <span>Авторы</span>
          </CandybarLink>

          <CandybarLink link="/books">
            <img className="mr-2" height="10" width="10" src={booksIcon} alt="books" />
            <span>Книги</span>
          </CandybarLink>
        </ul>
      </div>

      <div className="flex-grow">
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.id}
              path={route.path}
              component={route.component}
              exact={route.exact}
            />
          ))}
        </Switch>
      </div>
    </div>
  );
}

export default App;
