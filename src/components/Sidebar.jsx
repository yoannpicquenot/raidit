import React from "react";
import { NavLink } from 'react-router-dom';
import { routes } from "./Routes";

import '../css/sidebar.css';
import logo from '../Icons/reddit_logo.png';

export default class Sidebar extends React.Component {

  renderLinks() {
    return routes.map(({name, key, path}) => (
      <li key={`${key}-link`} className="link">
        <NavLink exact to={path} activeClassName="active">
          <span className="icon">
            <i className="material-icons">whatshot</i>
          </span>
          <span className="name">
            {name}
          </span>
        </NavLink>
      </li>
    ));
  }

  render() {
    return (
      <aside className="sidebar">
        <div className="header">
          <NavLink to="/">
            <img src={logo} alt="logo"/>
          </NavLink>
        </div>
        <ul className="links">
          {this.renderLinks()}
        </ul>
      </aside>
    );
  }
}
