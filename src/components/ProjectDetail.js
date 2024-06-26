import React from "react";
import { Modal, Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ProjectDetailCarousel from "./ProjectDetailCarousel.js";
import ListGroup from "react-bootstrap/ListGroup";

function ProjectDetail(props) {
  const projectDetailModalShow = props.projectDetailModalShow;
  const handleClose = props.handleClose;

  function makeParagraphs() {
    return props.selectedProject.info.description.verbose.map(
      (paragraph, id) => {
        return (
          <ListGroup.Item key={id}>
            <div className="ms-2 me-auto">
              {paragraph.title ? (
                <span>
                  <div className="fw-bold"> {paragraph.title} </div>{" "}
                  {paragraph.text}{" "}
                </span>
              ) : (
                paragraph
              )}
            </div>
          </ListGroup.Item>
        );
      }
    );
  }

  function makeLinks() {
    if (props.selectedProject.links.length > 0) {
      return props.selectedProject.links.map((link, id) => {
        return (
          <a
            className="d-block"
            key={id}
            href={
              link.url
                ? link.url
                : process.env.PUBLIC_URL +
                  "/project-media/" +
                  props.selectedProject.image_folder_path +
                  link.path
            }
            target="_blank">
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
      <Card>
        <Modal.Header closeButton className="py-2">
          <small className="text-muted">{props.selectedProject.dates}</small>
        </Modal.Header>
        <Modal.Body>
          <Modal.Title className="text-center">
            {props.selectedProject.project_name}
          </Modal.Title>
          <Container fluid>
            <Row>
              <Col>
                <p> {props.selectedProject.info.description.brief}</p>
              </Col>
            </Row>
            <Row className="align-items-center justify-content-center">
              <Col lg={8}>
                <ProjectDetailCarousel
                  imageFiles={props.selectedProject.image_files}
                  image_folder_path={props.selectedProject.image_folder_path}
                />
              </Col>
            </Row>
            <Row>
              <Col className="text-center"></Col>
            </Row>
            <Row>
              <Col className="pt-4">
                <ul className="list-group list-group-flush">
                  {makeParagraphs()}
                </ul>
              </Col>
            </Row>
            <Row className="pt-1">
              <Col>{makeLinks()}</Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          {makeTags()}
        </Modal.Footer>
      </Card>
    </Modal>
  );
}

export default ProjectDetail;
