import React from "react";

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
                  <a href="post.html">Read More</a>
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
