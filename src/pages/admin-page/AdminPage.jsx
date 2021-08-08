import React from 'react';
import { NavLink, Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';

import { useQuery } from '@apollo/client';

import { GET_ALL_BOOKS } from '~/graphql-client/books';

import BooksArea from './areas/BooksArea';
import AuthorsArea from './areas/AuthorsArea';

import NoDataSelected from './NoDataSelected';
import AuthorArea from './areas/AuthorArea';

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
    <div className="h-screen flex">
      <div className="p-2 bg-gray-700 text-gray-300 font-bold">
        <ul>
          <li>
            <NavLink to={`${url}/books`}>Books</NavLink>
          </li>
          <li>
            <NavLink to={`${url}/authors`}>Authors</NavLink>
          </li>
          <li>
            <NavLink to={`${url}/publishing-houses`}>Publishing Houses</NavLink>
          </li>
        </ul>
      </div>

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
  );
}

export default AdminPage;
