import React from 'react';
import { Route } from "react-router-dom";
import Home from "../pages/Home";
import Header from './Header';

export const routes = [{
  path: '/',
  key: "home",
  name: "Hot",
  component: Home,
  icon: "whatshot"
}];

export default function Routes() {
  const renderRoutes = routes.map(({key, path, component, name}) => (
    <div key={`${key}-route`}>
      <Header name={name} />
      <Route exact path={path} component={component}/>
    </div>
  ));
  return (
    <main>
      <div className="routes">
        {renderRoutes}
      </div>
    </main>
  );
}
