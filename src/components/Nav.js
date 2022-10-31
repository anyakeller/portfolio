import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div class="container-fluid">
        <Link className="navbar-brand" to="/">
          Anya Keller
        </Link>

        <button
          className="navbar-toggler hamburger collapsed hamburger--squeeze"
          data-target="#navbar-collapse-content"
          data-toggle="collapse"
          type="button"
          aria-controls="navbar-collapse-content"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbar-collapse-content">
          <div className="navbar-nav">
            <NavLink
              exact={true}
              to="/"
              className="nav-link"
              activeClassName="active">
              Home
            </NavLink>
            <NavLink
              to="/portfolio"
              className="nav-link"
              activeClassName="active">
              Portfolio
            </NavLink>
            <NavLink
              to="/contact"
              className="nav-link"
              activeClassName="active">
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
