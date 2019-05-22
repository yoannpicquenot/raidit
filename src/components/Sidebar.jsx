import React from "react";
import { Link } from 'react-router-dom';
import { routes } from "./Routes";

import '../css/sidebar.css';
import logo from '../Icons/reddit_logo.png';

export default class Sidebar extends React.Component {

  renderLinks() {
    return routes.map(({name, key, path}) => (
      <li key={`${key}-link`}>
        <Link to={path}>
          {name}
        </Link>
      </li>
    ));
  }

  render() {
    return (
      <aside className="sidebar">
        <div className="header">
          <Link to="/">
            <img src={logo} alt="logo"/>
          </Link>
        </div>
        <ul className="links">
          {this.renderLinks()}
        </ul>
      </aside>
    );
  }
}
