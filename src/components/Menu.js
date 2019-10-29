import React from "react";
import { Link } from "react-router-dom";
//import Navbar from "react-bootstrap/Navbar";
//import Nav from "react-bootstrap/Nav";

const Menu = () => {
  return (
    <div className="menu">
      <ul>
        <li>
          <a className="menu-brand" href="/">
            CATMASH
          </a>
        </li>
        <li>
          <Link to="/" className="menu-button">
            Jouer
          </Link>
        </li>
        <li>
          <Link to="/score" className="menu-button">
            Scores
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
