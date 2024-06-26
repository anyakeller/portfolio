import React, { useState } from "react";
import Projects from "./../projects.json";
import ProjectSection from "./../components/ProjectSection.js";
import ProjectDetail from "./../components/ProjectDetail.js";

function Portfolio(props) {
  const [projectDetailModalShow, setProjectDetailModalShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState(Projects[0]);
  const handleProjectClick = (projectDetails) => {
    setProjectDetailModalShow(true);
    setSelectedProject(projectDetails);
  };
  const handleClose = () => setProjectDetailModalShow(false);

  return (
    <div>

      <ProjectDetail handleClose={handleClose} projectDetailModalShow={projectDetailModalShow} selectedProject={selectedProject}/>

      <div className="row">
        <div className="col">
          <div
            className="bg-gradient-light mx-auto shadow px-4 py-4 my-2 clearfix"
            style={{
              maxWidth: "690px"
            }}>
            <div className="mb-3 mb-md-0">
              <h1>
                <span className="display-4">Projects</span>
              </h1>
              <p
                className="lead pl-2"
                style={{
                  whiteSpace: "pre-line"
                }}>
                Click a project tile for details
              </p>
              <small className="text-muted float-right">
                This website is a work in progress and the interface is a bit wonky. I'd appreciate any suggestions! Enumerate your grievances through my
                <a href="https://forms.gle/3nZbHCbicy8cQ8rb7"> Google Form </a>
                or through
                <a href="https://github.com/anyakeller/portfolio/issues"> Github Issues </a> 
                </small>
            </div>
          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
        <ProjectSection projects={Projects} handleProjectClick={handleProjectClick}/>
      </div>
    </div>
  );
}

export default Portfolio;
