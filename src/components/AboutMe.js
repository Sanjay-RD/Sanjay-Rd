import React from "react";

const AboutMe = ({ userInfo: { aboutme, topExpertise, findme } }) => {
  return (
    <section className="s2">
      <div className="main-container">
        <div className="about-wrapper">
          <div className="about-me">
            <h4>More about me</h4>

            <p>{aboutme}</p>

            <p>
              While I keep busy teaching courses, I still take interviews in
              search of a great team & projects that interest me.
            </p>

            <hr />

            <h4>TOP EXPERTISE</h4>

            <p>
              {topExpertise && topExpertise.title}{" "}
              <a target="_blank" href="resume.pdf">
                Download Resume
              </a>
            </p>

            <div id="skills">
              <ul>
                {topExpertise &&
                  topExpertise.programmingLanguage.map((lan) => (
                    <li key={lan}>{lan}</li>
                  ))}
              </ul>
            </div>
          </div>

          <div className="social-links">
            <img id="social_img" src={findme && findme.image} alt="" />
            <h3>Find me on Github & Facebook</h3>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href={findme && findme.github}
              style={{ textDecoration: "underline" }}
            >
              Github: @Sanjay-RD
            </a>
            <br />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={findme && findme.facebook}
              style={{ textDecoration: "underline" }}
            >
              Facebook: @Sanjay Rd
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
