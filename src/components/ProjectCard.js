import React from "react";

function ProjectCard(props) {
  const projectData = props.projectData;

  function makeLinks() {
    if (projectData.links.length > 0) {
      return projectData.links.map((link, id) => {
        return (
          <a className="d-block" key={id} href={link.url}>
            {link.source}
          </a>
        );
      });
    }
  }

  function makeTags() {
    if (projectData.info.tags.length > 0) {
      return projectData.info.tags.map((tag, id) => {
        return (
          <span className="badge badge-pill badge-dark mr-1" key={id}>
            {tag}
          </span>
        );
      });
    }
  }
  return (
    <div className="card shadow">
      <h5 class="card-header">{projectData.project_name}</h5>
      <div className="card-body">
        <img
          className="card-img"
          src={"project-media/" + projectData.img_file}
          alt="180x250 placeholder img"
        />
        <small className="text-muted">{projectData.dates}</small>
        <p className="card-text">{projectData.info.description}</p>
        {makeLinks()}
      </div>
      <div className="card-footer">{makeTags()}</div>
    </div>
  );
}

export default ProjectCard;
