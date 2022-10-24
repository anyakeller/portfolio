import React from "react";

function Home(props) {
  return (<div className="bg-gradient-light mx-auto shadow px-4 py-4" style={{
      maxWidth: "690px"
    }}>
    <div className="row">
      <div className="col-12 col-md-8 d-flex flex-column">
        <h1>
          <small className="text-muted text-small mr-2 d-block d-sm-inline">
            a bit about
          </small>
          <span className="display-4">Anya Keller</span>
        </h1>
        <p className="lead pl-2 mt-2" style={{
            whiteSpace: "pre-line"
          }}>
          Sometimes I write code.{'\n'}
          Sometimes I make things.{'\n'}
          Full-stack website developer{'\n'}
          Mechanical Engineering Undergraduate at Boston University
        </p>
      </div>
      <div className="col mt-3 mt-md-2">
        <img className="d-block mx-auto" src="placeholder180x250.png" alt="180x250 placeholder img"/>
        <small className="d-block text-center text-muted">This might be my face</small>
      </div>
    </div>
  </div>);
}

export default Home;
