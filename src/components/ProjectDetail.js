import React from "react";
import ImageCarousel from "./ImageCarousel.js";
import { Button, Modal } from "react-bootstrap";

function ProjectDetail(props) {
  // const toggleDetails = () => setProjectDetailModal(!projectDetailModal);
  const projectDetailModalShow= props.projectDetailModalShow;
  const handleClose = props.handleClose;
  let projectData = props.projectData;

  console.log(props.selectedProject);
  return (
    <Modal show={projectDetailModalShow} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.selectedProject.project_name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.selectedProject.info.description}.</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProjectDetail;
