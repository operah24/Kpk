import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <div className="nav">
     <h2 className="logo">HNG</h2>
      <ul className="links">
        <li>
          <NavLink exact to="#" className="about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className="login">Login</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
