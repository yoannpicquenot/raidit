import React from 'react';
import { Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";

export const routes = [{
  path: '/',
  key: "home",
  name: "Home",
  component: Home,
}, {
  path: '/login',
  key: "login",
  name: "Login",
  component: Login,
}];

export default function Routes() {
  const renderRoutes = routes.map(({key, path, component}) => (
    <Route key={`${key}-route`} exact path={path} component={component}/>
  ));
  return (
    <main>
      <div className="routes">
        {renderRoutes}
      </div>
    </main>
  );
}
