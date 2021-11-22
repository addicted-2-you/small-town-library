import MainPage from './main-page/MainPage';
import AuthPage from './auth-page/AuthPage';
import AdminPage from './admin-page/AdminPage';

export default [
  { id: '0', path: '/', component: MainPage },

  { id: '1', path: '/auth', component: AuthPage },

  {
    id: '2',
    path: '/admin',
    component: AdminPage,
  },
];
