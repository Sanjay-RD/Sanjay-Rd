import React from "react";
import Header from "./Header";

import projectInfo from "../projectInfo";

const IndividualProject = ({ match }) => {
  const project = projectInfo.find(
    (info) => info.id === parseInt(match.params.id)
  );
  console.log(project);
  return (
    <div>
      <Header />
      <h1>IndividualProject</h1>
    </div>
  );
};

export default IndividualProject;
