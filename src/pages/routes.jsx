import React from 'react';

// components
import PageWrapper from '~/components/PageWrapper';

// pages
import MainPage from './main-page/MainPage';
import AuthPage from './auth-page/AuthPage';
import AdminPage from './admin-page/AdminPage';
import AuthorsPage from './authors-page/AuthorsPage';
import AuthorPage from './author-page/AuthorPage';

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
];