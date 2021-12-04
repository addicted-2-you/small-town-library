import React from 'react';

// components
import PageWrapper from '~/components/PageWrapper';

// pages
import MainPage from './main-page/MainPage';
import AuthPage from './auth-page/AuthPage';
import AdminPage from './admin-page/AdminPage';
import AuthorsPage from './authors-page/AuthorsPage';
import AuthorPage from './author-page/AuthorPage';
import BooksPage from './books-page/BooksPage';
import AbstractBookPage from './abstract-book-page/AbstractBookPage';

export default [
  { id: '0', path: '/', component: MainPage, exact: true },

  { id: '1', path: '/auth', component: AuthPage, exact: false },

  {
    id: '2',
    path: '/admin',
    exact: false,
    component: () => (
      <PageWrapper>
        <AdminPage />
      </PageWrapper>
    ),
  },

  {
    id: '3',
    path: '/authors',
    exact: true,
    component: () => (
      <PageWrapper>
        <AuthorsPage />
      </PageWrapper>
    ),
  },

  {
    id: '4',
    path: '/authors/:authorId',
    exact: true,
    component: () => (
      <PageWrapper>
        <AuthorPage />
      </PageWrapper>
    ),
  },

  {
    id: '5',
    path: '/books',
    exact: true,
    component: () => <BooksPage />,
  },

  {
    id: '6',
    path: '/abstract-books/:bookId',
    exact: true,
    component: () => (
      <PageWrapper>
        <AbstractBookPage />
      </PageWrapper>
    ),
  },
];
