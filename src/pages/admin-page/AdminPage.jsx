import React from 'react';
import { NavLink, Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';

import { useQuery } from '@apollo/client';

import { GET_ALL_BOOKS } from '~/graphql-client/books';

import BooksArea from './areas/BooksArea';
import AuthorsArea from './areas/authors/AuthorsArea';

import NoDataSelected from './NoDataSelected';
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
    <div className="h-screen w-full flex">
      <div className="p-2 w-1/6  bg-gray-700 text-gray-300 font-bold">
        <ul>
          <li>
            <NavLink activeClassName="text-white" to={`${url}/books`}>
              Books
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="text-white" to={`${url}/authors`}>
              Authors
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="text-white" to={`${url}/publishing-houses`}>
              Publishing Houses
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="flex-grow py-2 px-5">
        <Switch>
          <Route exact path={url}>
            <NoDataSelected />
          </Route>

          <Route path={`${url}/books`}>
            <BooksArea books={[]} />
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
