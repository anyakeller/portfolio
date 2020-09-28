import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import { Home, About } from "./routes";
import Header from "./components/Header";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            Anya Keller
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar-collapse-content"
            aria-controls="navbar-collapse-content"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbar-collapse-content"
          >
            <div className="navbar-nav">
              <NavLink exact to="/" className="nav-link" activeClassName="active">
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="nav-link"
                activeClassName="active"
              >
                About
              </NavLink>
            </div>
          </div>
        </nav>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
