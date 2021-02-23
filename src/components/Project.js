import React from "react";
import { Link } from "react-router-dom";

const Project = ({ projects }) => {
  return (
    <section className="s1">
      <div className="main-container">
        <h3 style={{ textAlign: " center" }}>Some of my past projects</h3>

        <div className="post-wrapper">
          {projects.map((project) => (
            <div key={project.name}>
              <div className="post">
                <img className="thumbnail" src={project.image} alt="" />
                <div className="post-preview">
                  <h6 className="post-title">{project.name}</h6>
                  <p className="post-intro">{project.intro}</p>
                  <Link to={`/project/${project.id}`}>Read More</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
