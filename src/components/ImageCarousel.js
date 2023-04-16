import React from "react";

function ImageCarousel(props) {
  const imageFiles = props.imageFiles;
  const image_folder_path = props.image_folder_path;

  function makeImages() {
    if (imageFiles.length === 1) {
      return (
        <img
          className="card-img"
          src={
            process.env.PUBLIC_URL +
            "/project-media/" +
            image_folder_path +
            imageFiles[0]
          }
          alt="180x250 placeholder img"
        />
      );
    }
    /*
    return (
      <img
        className="card-img"
        src={
          process.env.PUBLIC_URL +
          "/project-media/" +
          image_folder_path +
          imageFiles[0]
        }
        alt="180x250 placeholder img"
      />
    );*/

    return imageFiles.map((img_file, id) => {
      return (
        <div className="carousel-item" key={id}>
          <img
            className={` d-block w-100 card-img ${id === 0 ? "active" : ""}`}
            src={
              process.env.PUBLIC_URL +
              "/project-media/" +
              image_folder_path +
              img_file
            }
            alt="180x250 placeholder img"
          />
        </div>
      );
    });
  }

  function makeIndicators() {
    return imageFiles.map((img_file, id) => {
      return (
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to={id}
          class={`${id === 0 ? "active" : ""}`}
          key={id}></li>
      );
    });
  }

  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel">
      <div className="carousel-inner">{makeImages()}</div>
    </div>
  );
}

export default ImageCarousel;
