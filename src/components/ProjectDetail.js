import React from "react";
import ImageCarousel from "./ImageCarousel.js";
import { Button, Modal } from "react-bootstrap";

function ProjectDetail(props) {
  // const toggleDetails = () => setProjectDetailModal(!projectDetailModal);
  const projectDetailModalShow= props.projectDetailModalShow;
  const handleClose = props.handleClose;
  let projectData = props.projectData;

  return (
    <Modal show={projectDetailModalShow} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Tile {props.selectedProject}</Modal.Title>
      </Modal.Header>
      <Modal.Body>This is the content of Tile {props.selectedProject}.</Modal.Body>
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
