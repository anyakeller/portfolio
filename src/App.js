import React from "react";
import { Home, Portfolio } from "./routes";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="container pt-3 pb-2">
        <Home />
      </div>
      <div className="container pt-3 pb-2">
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
