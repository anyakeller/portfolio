import React from "react";
import { Modal, Container, Row, Col } from "react-bootstrap";
import ProjectDetailCarousel from "./ProjectDetailCarousel.js";

function ProjectDetail(props) {
  const projectDetailModalShow = props.projectDetailModalShow;
  const handleClose = props.handleClose;

  function makeParagraphs() {
    return props.selectedProject.info.description.verbose.map(
      (paragraph, id) => {
        return <p key={id}>{paragraph}</p>;
      }
    );
  }

  return (
    <Modal size="lg" show={projectDetailModalShow} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.selectedProject.project_name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container fluid>
          <Row>
            <Col>
              <p> {props.selectedProject.info.description.brief}</p>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center" style={{ minHeight: '50vh' }}>
            <Col lg="5">
              <ProjectDetailCarousel
                imageFiles={props.selectedProject.image_files}
                image_folder_path={props.selectedProject.image_folder_path}
              />
            </Col>
            <Col className="py-4 py-lg-0">{makeParagraphs()}</Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}

export default ProjectDetail;
