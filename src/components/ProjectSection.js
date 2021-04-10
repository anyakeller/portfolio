import React from "react";
import ProjectCard from "./ProjectCard.js";

export default function ProjectSection(props){
  return props.projects.map((project, id) => {
      return (<ProjectCard key={id} projectData={project}/>);
    });
}