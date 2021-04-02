import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Portfolio, Contact } from "./routes";
import Nav from "./components/Nav";
import Header from "./components/Header";

function App() {
  return (
    <Router basename={`${process.env.PUBLIC_URL}/`}>
      <div className="App">
        <Nav />
        <Header />
        <div className="container pt-3 pb-2">
          <Switch>
            <Route exact={true} path="/" component={Home}></Route>
            <Route path="/portfolio" component={Portfolio}></Route>
            <Route path="/contact" component={Contact}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
