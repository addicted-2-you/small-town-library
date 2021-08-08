import React from 'react';
import { Route, Switch } from 'react-router-dom';

import routes from './pages/routes';

function App() {
  return (
    <Switch>
      {routes.map((route) => (
        <Route key={route.id} path={route.path} component={route.component} />
      ))}
    </Switch>
  );
}

export default App;
