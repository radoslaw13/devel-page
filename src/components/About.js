import React, { useEffect } from "react";
import design from "../images/icons/design.png";
import code from "../images/icons/code.png";
import wrench from "../images/icons/wrench.png";
import "../styles/About.scss";

function About() {
  let animationAdd = () => {
    let sectionPosition = document.getElementById("about").offsetTop;
    if (window.scrollY >= sectionPosition - window.innerHeight) {
      document.querySelectorAll(".progress").forEach(element => {
        element.style.cssText = "animation: loading-animation 3s;";
      });
      document.querySelectorAll(".dot").forEach(element => {
        element.style.cssText = "animation: other-animation 1s 3s forwards;";
      });
      document.querySelectorAll(".label").forEach(element => {
        element.style.cssText = "animation: other-animation 1s 3s forwards;";
      });
      window.removeEventListener("scroll", animationAdd);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", animationAdd);
  });

  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="section-header">
              <h1>About</h1>
            </div>
          </div>
          <div className="col-sm-10 offset-sm-1">
            <div className="section-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              commodo quis dui in ultrices. Interdum et malesuada fames ac ante
              ipsum primis in faucibus. Phasellus sit amet nisl porta urna
              euismod aliquam vitae ac metus. Proin ac tincidunt tellus, eu
              ornare ex. Phasellus rhoncus id enim in ornare. Maecenas id
              commodo turpis, a varius dui. Etiam semper ex vel lacus volutpat,
              ut tempus erat viverra. In eu pellentesque risus, ac volutpat
              arcu. Sed elementum at ipsum et rhoncus.
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-10 offset-1 offset-md-0">
            <div className="loading-bar-container">
              <div className="progress-bar">
                <div className="progress progress-1" />
                <div className="dot dot-1" />
                <div className="label label-1">
                  <p>80%</p>
                  <div className="triangle-1" />
                </div>
              </div>
              <div className="loading-description desc-1">
                <img src={code} alt="code" />
                Development
              </div>
            </div>
          </div>
          <div className="col-md-4 col-10 offset-1 offset-md-0">
            <div className="loading-bar-container">
              <div className="progress-bar">
                <div className="progress progress-2" />
                <div className="dot dot-2" />
                <div className="label label-2">
                  <p>40%</p>
                  <div className="triangle-2" />
                </div>
              </div>
              <div className="loading-description desc-2">
                <img src={wrench} alt="wrench" />
                Mainentance
              </div>
            </div>
          </div>
          <div className="col-md-4 col-10 offset-1 offset-md-0">
            <div className="loading-bar-container">
              <div className="progress-bar">
                <div className="progress progress-3" />
                <div className="dot dot-3" />
                <div className="label label-3">
                  <p>60%</p>
                  <div className="triangle-3" />
                </div>
              </div>
              <div className="loading-description desc-3">
                <img src={design} alt="design" /> Design
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
