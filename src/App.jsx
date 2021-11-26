import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

import routes from './pages/routes';

// icons
import adminIcon from '~/icons/admin.svg';

function App() {
  return (
    <div className="p-8 h-screen overflow-hidden bg-purple-200">
      <div className="h-full flex bg-white rounded-xl">
        <div className="py-5 px-3 w-1/6 bg-purple-500 rounded-l-xl">
          <ul className="flex flex-col items-center space-y-5">
            <li className="h-16 w-16 bg-purple-200 hover:bg-purple-100">
              <NavLink
                className="h-full w-full flex justify-center items-center"
                activeClassName="bg-white"
                to="/admin"
              >
                <img height="36" width="36" src={adminIcon} alt="admin" />
              </NavLink>
            </li>

            <li className="h-16 w-16 bg-purple-200 hover:bg-purple-100">
              <NavLink
                className="h-full w-full flex justify-center items-center"
                activeClassName="bg-white"
                to="/hello"
              >
                <img height="36" width="36" src={adminIcon} alt="admin" />
              </NavLink>
            </li>

            <li className="h-16 w-16 bg-purple-200 hover:bg-purple-100">
              <NavLink
                className="h-full w-full flex justify-center items-center"
                activeClassName="bg-white"
                to="/anime"
              >
                <img height="36" width="36" src={adminIcon} alt="admin" />
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="flex-grow">
          <Switch>
            {routes.map((route) => (
              <Route
                key={route.id}
                path={route.path}
                component={route.component}
                exact={route.path === '/'}
              />
            ))}
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
