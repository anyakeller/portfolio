import React from "react";
import { Home, Portfolio } from "./routes";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="App">
      <Nav />

      <div className="container pt-3 pb-2">
        <Home />
      </div>
      <div className="container mt-3 pt-3 pb-2 mb-4">
        <Portfolio />
      </div>
      <div className="container-fluid px-0">
        <Footer />
      </div>
    </div>
  );
}

export default App;
