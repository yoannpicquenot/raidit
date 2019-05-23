import React from 'react';
import { Route } from "react-router-dom";
import Home from "../pages/Home";

export const routes = [{
  path: '/',
  key: "home",
  name: "Hot",
  component: Home,
  icon: "whatshot"
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
