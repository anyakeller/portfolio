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
            <Col>
             <ProjectDetailCarousel imageFiles={props.selectedProject.image_files} image_folder_path={props.selectedProject.image_folder_path} />
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
