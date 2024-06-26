import React from "react";
import Image from "react-bootstrap/image";
import "../styles/projectcard-styles.css";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

function ProjectCard(props) {
  const projectData = props.projectData;

  function makeLinks() {
    if (projectData.links.length > 0) {
      return projectData.links.map((link, id) => {
        return (
          <a
            className="d-block pb-1"
            key={id}
            href={
              link.url
                ? link.url
                : process.env.PUBLIC_URL +
                  "/project-media/" +
                  projectData.image_folder_path +
                  link.path
            }
            onClick={(e) => {
              e.stopPropagation();
            }}
            target="_blank">
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
      <div
        className="card shadow h-100 project-card"
        onClick={(e) => {
          e.stopPropagation();
          props.handleProjectClick(projectData);
        }}
        role="button">
        <small className="card-header text-center"> {projectData.dates}</small>

        <div className="card-body">
          <h5 className="card-title text-center mb-3">
            {projectData.project_name}
          </h5>
          <Image
            className="card-img"
            src={
              process.env.PUBLIC_URL +
              "/project-media/" +
              projectData.image_folder_path +
              projectData["image_files"][0]
            }
            alt={projectData["image_files"][0]}
          />
          <p className="card-text mt-4 mb-0">
            {projectData.info.description.brief}
          </p>
          <p className="text-center m-0 text-muted read-more">
            <Button
              variant="link"
              className="text-decoration-none py-0 text-muted">
              Read More
            </Button>
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <ListGroup.Item>{makeLinks()}</ListGroup.Item>
        </ul>
        <div className="card-footer">{makeTags()}</div>
      </div>
    </div>
  );
}

export default ProjectCard;
