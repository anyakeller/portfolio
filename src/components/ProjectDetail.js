import React, { useState } from "react";
import ImageCarousel from "./ImageCarousel.js";

function ProjectDetail(props) {
  const [projectDetailModal, setProjectDetailModal] = useState(false);
  const toggleDetails = () => setProjectDetailModal(!projectDetailModal);
  let projectData = props.projectData;

  return (
    <div>
      <button onClick={toggleDetails}>LAUNCH DEMO MODAL</button>
      <div class="modal-dialog modal-lg">
        <h5 className="card-header">asdf</h5>
      </div>
    </div>
  );
}

export default ProjectDetail;
