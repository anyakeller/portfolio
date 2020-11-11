import React from "react";
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom";
import {Home, Portfolio, Contact} from "./routes";
import Header from "./components/Header";

function App() {
  return (<Router basename={`${process.env.PUBLIC_URL}/`}>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          Anya Keller
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse-content" aria-controls="navbar-collapse-content" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar-collapse-content">
          <div className="navbar-nav">
            <NavLink exact={true} to="/" className="nav-link" activeClassName="active">
              Home
            </NavLink>
            <NavLink to="/portfolio" className="nav-link" activeClassName="active">
              Portfolio
            </NavLink>
            <NavLink to="/contact" className="nav-link" activeClassName="active">
              Contact
            </NavLink>
          </div>
        </div>
      </nav>
      <Header/>
      <div className="container pt-3 pb-2">
        <Switch>
          <Route exact={true} path="/" component={Home}></Route>
          <Route path="/portfolio" component={Portfolio}></Route>
          <Route path="/contact" component={Contact}></Route>
        </Switch>
      </div>
    </div>
  </Router>);
}

export default App;
