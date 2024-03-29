import React from "react";
import "./navBar.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <h3>Blog Post</h3>
          </Link>
        </div>
        <div>
          <ul></ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
