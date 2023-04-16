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

  function makeLinks() {
    if (props.selectedProject.links.length > 0) {
      return props.selectedProject.links.map((link, id) => {
        return (
          <a className="d-block" key={id} href={link.url} target="_blank">
            {link.source}
          </a>
        );
      });
    }
  }

  function makeTags() {
    if (props.selectedProject.info.tags.length > 0) {
      return props.selectedProject.info.tags.map((tag, id) => {
        return (
          <span className="badge rounded-pill bg-dark me-1" key={id}>
            {tag}
          </span>
        );
      });
    }
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
          <Row
            className="align-items-center justify-content-center">
            <Col lg="5">
              <ProjectDetailCarousel
                imageFiles={props.selectedProject.image_files}
                image_folder_path={props.selectedProject.image_folder_path}
              />
            </Col>
            <Col className="py-4 py-lg-0">{makeParagraphs()}</Col>
          </Row>
          <Row className="pt-3">
            <Col>{makeLinks()}</Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer className="justify-content-center">{makeTags()}</Modal.Footer>
    </Modal>
  );
}

export default ProjectDetail;
