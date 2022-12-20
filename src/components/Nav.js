import React from "react";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/portfolio">
          Anya Keller
        </a>
      </div>
    </nav>
  );
}

/*

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
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/portfolio">
              {" "}
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/portfolio">
              {" "}
              Portfolio
            </a>
          </li>
        </ul>
      </div>
*/
