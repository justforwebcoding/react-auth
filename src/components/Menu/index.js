import React from "react";

import { NavLink } from "react-router-dom";

class Menu extends React.Component {
  render() {
    return (
      <div className="container">
        <ul>
          <li>
            <NavLink to="/">Main</NavLink>
          </li>
          <li>
            <NavLink to="/news">News</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Войти</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;
