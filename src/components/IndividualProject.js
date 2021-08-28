import React from "react";
import Header from "./Header";

import projectInfo from "../projectInfo";

const IndividualProject = ({ match }) => {
  const project = projectInfo.find(
    (info) => info.id === parseInt(match.params.id)
  );
  // console.log(project);
  // console.log(project.description);
  return (
    <div>
      <Header />
      <div class="main-container">
        <br />
        <div class="img-container">
          <img src={project.image} alt="project.." />
        </div>
        {project.livedemo && (
          <h2>
            LiveDemo : <a href={project.livedemo}>{project.livedemo}</a>{" "}
          </h2>
        )}
        <h3>{project.name}</h3>

        {project.description.map((desc) => (
          <p>{desc}</p>
        ))}

        <h5>Technologies:</h5>
        <ul>
          {project.technologies.map((projects) => (
            <li>{projects}</li>
          ))}
        </ul>

        {project.moreImage.map((image) => (
          <div>
            <h5>{image.imgTitle}</h5>
            <div class="img-container">
              <img style={{ width: "70%" }} src={image.image} alt="images.." />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndividualProject;
