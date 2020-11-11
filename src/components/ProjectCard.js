import React from "react";

function ProjectCard(props) {
  const projectData = props.projectData;

  function makeLinks() {
    if (projectData.links.length > 0) {
      return projectData.links.map((link, id) => {
        return (<a key={id} href={link.url}>{link.source}</a>);
      })
    }
  }

  function makeTags() {
    if (projectData.info.tags.length > 0) {
      return projectData.info.tags.map((tag, id) => {
        return (<span className="badge badge-pill badge-dark mr-1" key={id}>{tag}</span>);
      })
    }
  }
  return (<div className="card shadow-sm">
    <img className="card-img-top" src={"project-media/" + projectData.img_file} alt="180x250 placeholder img"/>
    <div className="card-body">
      <h5 className="card-title">{projectData.project_name}</h5>
      <p className="card-text">{projectData.info.description}</p>
      {makeLinks()}
    </div>
    <div className="card-footer">
      {makeTags()}
    </div>
  </div>);
}

export default ProjectCard;
