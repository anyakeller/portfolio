import React from "react";

function Home(props) {
  return (<div className="row">
    <div className="col">
      <div className="bg-gradient-light shadow px-4 py-4">
        <h1>
          <small className="text-muted text-small d-block d-sm-inline mr-2">
            a bit about
          </small>
          <span className="display-4">Anya Keller</span>
        </h1>
        <p className="lead pl-2" style={{
            whiteSpace: "pre-line"
          }}>
          Sometimes I write code.{'\n'}
          Sometimes I make things.{'\n'}
          But I always desperately need to go back to collage
        </p>
      </div>
    </div>
  </div>);
}

export default Home;
