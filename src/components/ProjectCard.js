import React from "react";
import ImageCarousel from "./ImageCarousel.js";

function ProjectCard(props) {
  const projectData = props.projectData;

  function makeLinks() {
    if (projectData.links.length > 0) {
      return projectData.links.map((link, id) => {
        return (
          <a className="d-block" key={id} href={link.url} target="_blank">
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
          <span className="badge rounded-pill bg-dark me-1" key={id}>
            {tag}
          </span>
        );
      });
    }
  }
  return (
    <div className="col my-1">
      <div className="card shadow h-100">
        <h5 className="card-header">{projectData.project_name}</h5>
        <div className="card-body">
          <ImageCarousel
            imageFiles={projectData.image_files}
            image_folder_path={projectData.image_folder_path}
          />
          <small className="text-muted">{projectData.dates}</small>
          <p className="card-text">{projectData.info.description}</p>
          {makeLinks()}
        </div>
        <div className="card-footer">{makeTags()}</div>
      </div>
    </div>
  );
}

export default ProjectCard;
