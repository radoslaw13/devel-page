import React from "react";
import "../styles/Projects.scss";
import project1 from "../images/project1.jpg";
import project2 from "../images/project2.jpg";
import project3 from "../images/project3.jpg";
import project4 from "../images/project4.png";

function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="section-header">
              <h1>Projects</h1>
            </div>
          </div>
          <div className="col-sm-10 offset-sm-1">
            <div className="section-description">
              See some of our proejects. Check it out!
            </div>
          </div>
        </div>
      </div>
      <div className="projects-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 col-sm-6 col-6 p-0">
              <div
                style={{ backgroundImage: `url(${project1})` }}
                className="project-photo"
              />
            </div>
            <div className="col-md-3 col-sm-6 col-6 p-0">
              <div
                style={{ backgroundImage: `url(${project2})` }}
                className="project-photo"
              />
            </div>
            <div className="col-md-3 col-sm-6 col-6 p-0">
              <div
                style={{ backgroundImage: `url(${project3})` }}
                className="project-photo"
              />
            </div>
            <div className="col-md-3 col-sm-6 col-6 p-0">
              <div
                style={{ backgroundImage: `url(${project4})` }}
                className="project-photo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
