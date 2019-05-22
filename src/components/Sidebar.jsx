import React from "react";
import { Link } from 'react-router-dom';
import { routes } from "./Routes";

import '../css/sidebar.css';

export default class Sidebar extends React.Component {

  renderLinks() {
    return routes.map(({name, key, path}) => (
      <li>
        <Link to={path} key={`${key}-link`}>
          {name}
        </Link>
      </li>
    ));
  }

  render() {
    return (
      <aside className="sidebar">
        <ul className="links">
          {this.renderLinks()}
        </ul>
      </aside>
    );
  }
}
