import React from 'react';
import { NavLink, Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';

import AbstractBooksArea from './areas/AbstractBooksArea';
import AuthorsArea from './areas/authors/AuthorsArea';

import AuthorArea from './areas/authors/AuthorArea';

function AdminPage() {
  // const { loading, error, data } = useQuery(GET_ALL_BOOKS);

  const { url } = useRouteMatch();

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  // if (error) {
  //   return <p>Error {JSON.stringify(error)}</p>;
  // }

  return (
    <div className="w-full flex flex-col">
      <ul className="mx-auto w-3/5 flex justify-between">
        <li>
          <NavLink
            activeClassName="text-purple-500 font-semibold underlined"
            to={`${url}/abstract-books`}
          >
            Абстрактные книги
          </NavLink>
        </li>

        <li>
          <NavLink
            activeClassName="text-purple-500  font-semibold underlined"
            to={`${url}/physical-books`}
          >
            Физические книги
          </NavLink>
        </li>

        <li>
          <NavLink
            activeClassName="text-purple-500  font-semibold underlined"
            to={`${url}/authors`}
          >
            Авторы
          </NavLink>
        </li>
      </ul>

      <div className="flex-grow py-2 px-5">
        <Switch>
          <Route path={`${url}/abstract-books`}>
            <AbstractBooksArea />
          </Route>

          <Route path={`${url}/authors/:authorId`}>
            <AuthorArea />
          </Route>

          <Route path={`${url}/authors`}>
            <AuthorsArea />
          </Route>

          <Redirect to={url} />
        </Switch>
      </div>
    </div>
  );
}

export default AdminPage;
