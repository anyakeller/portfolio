import React from "react";
import ImageCarousel from "./ImageCarousel.js";
import { Modal, Container, Row, Col } from "react-bootstrap";

function ProjectDetail(props) {
  // const toggleDetails = () => setProjectDetailModal(!projectDetailModal);
  const projectDetailModalShow = props.projectDetailModalShow;
  const handleClose = props.handleClose;
  let projectData = props.projectData;

  function makeParagraphs() {
    return props.selectedProject.info.description.verbose.map((paragraph, id) => {
      return (
        <p>
          {paragraph}
        </p>
      );
    });
  }

  console.log(props.selectedProject);
  return (
    <Modal show={projectDetailModalShow} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.selectedProject.project_name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container fluid>
          <Row>
            <Col>
              <small>{props.selectedProject.info.description.brief}</small>
            </Col>
          </Row>
          <Row>
            <Col>{makeParagraphs()}</Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}

export default ProjectDetail;
