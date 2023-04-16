import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

export default function ProjectDetailCarousel(props) {
  const imageFiles = props.imageFiles;
  const image_folder_path = props.image_folder_path;

  function makeSlides() {
    return imageFiles.map(
      (img_file, id) => {
        return (
          <Carousel.Item key={id}>
            <Image 
              className="d-block w-100"
              src={
                process.env.PUBLIC_URL +
                "/project-media/" + image_folder_path +
                img_file
              }
              alt="First slide"
            />
          </Carousel.Item>
        );
      }
    );
  }

  return <Carousel >{makeSlides()}</Carousel>;
}
