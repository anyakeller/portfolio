import React from "react";
import Projects from "./../projects.json";
import ProjectSection from "./../components/ProjectSection.js";

function Portfolio(props) {
  return (<div>
    <div className="row">
      <div className="col">
        <div className="bg-gradient-light mx-auto shadow-sm px-4 py-4 clearfix" style={{
            maxWidth: "690px"
          }}>
          <div className="mb-3 mb-md-0">
            <h1>
              <small className="text-muted text-small mr-2 d-block d-sm-inline">
                garbage by
              </small>
              <span className="display-4">Anya Keller</span>
            </h1>
            <p className="lead pl-2" style={{
                whiteSpace: "pre-line"
              }}>
              I can sometimes make things
            </p>
            <small className="text-muted float-right">Disclaimer: I am not that smart. Some of these projects were a team effort</small>
          </div>
        </div>
      </div>
    </div>
    <div className="row my-4">
      <div className="col">
        <div className="card-columns">
          <ProjectSection projects={Projects}/>
        </div>
      </div>
    </div>
  </div>)
}

export default Portfolio;
