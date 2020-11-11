import React from "react";

function Home(props) {
  return (<div className="row">
    <div className="col">
      <div className="bg-gradient-light mx-auto shadow px-4 py-4 clearfix" style={{
          maxWidth: "690px"
        }}>
        <div className="float-left mb-3 mb-md-0">
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
            But I always desperately need to go back to college
          </p>
        </div>
        <aside className="text-center float-md-right">
          <img className="d-block mx-auto" src="https://via.placeholder.com/180x250" alt="180x250 placeholder img"/>
          <small className="d-block text-muted">This might be my face</small>
        </aside>
      </div>
    </div>
  </div>);
}

export default Home;
