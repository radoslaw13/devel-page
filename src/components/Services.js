import React, { useState, useEffect } from "react";
import "../styles/Services.scss";
import code from "../images/icons/code.png";
import design from "../images/icons/design2.png";
import analysis from "../images/icons/analysis.png";

function Services() {
  const [isCounted, setCounted] = useState(false);

  function count() {
    let sectionPosition = document.getElementById("counter").offsetTop;

    if (window.scrollY >= sectionPosition - window.innerHeight) {
      if (isCounted === false) {
        setCounted(true);
        let counters = document.querySelectorAll(".countTo");
        let countValues = [];

        for (let i = 0; i < counters.length; i++) {
          countValues.push(parseInt(counters[i].innerHTML));
        }

        function countTo(bound, id) {
          let start = 0;
          setInterval(() => {
            if (start < bound) {
              start += 1;
              counters[id].innerHTML = start;
            }
          }, 10);
        }

        for (let i = 0; i < countValues.length; i++) {
          countTo(countValues[i], i);
        }
        window.removeEventListener("scroll", count);
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", count);
  });

  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="section-header">
              <h1>Services</h1>
            </div>
          </div>
          <div className="col-sm-10 offset-sm-1">
            <div className="section-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum urna urna, pulvinar in nunc a, consequat feugiat diam.
              Sed iaculis sit amet est sit amet pellentesque. Cras tempor et
              ipsum ac ornare. Nam eget ex sed felis ultrices aliquet nec vel
              ipsum. Integer eget sapien at libero eleifend pulvinar vel.
            </div>
          </div>
        </div>
      </div>
      <div className="services-content">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="service">
                <div className="service-icon">
                  <img src={code} alt="code" />
                </div>
                <div className="service-title title-1">Web Development</div>
                <div className="service-label">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque malesuada venenatis justo a interdum. Cras lacus
                  justo, tempor et dictum sed, pharetra quis nisl. Quisque.
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service">
                <div className="service-icon">
                  <img src={design} alt="design" />
                </div>
                <div className="service-title title-2">Web Design</div>
                <div className="service-label">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque malesuada venenatis justo a interdum. Cras lacus
                  justo, tempor et dictum sed, pharetra quis nisl. Quisque.
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service">
                <div className="service-icon">
                  <img src={analysis} alt="analysis" />
                </div>
                <div className="service-title title-3">SEO Analysis</div>
                <div className="service-label">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque malesuada venenatis justo a interdum. Cras lacus
                  justo, tempor et dictum sed, pharetra quis nisl. Quisque.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid counter" id="counter">
        <div className="container counter-container">
          <div className="row">
            <div className="col-md-4">
              <div className="count">
                <h1 className="countTo">123</h1>
                <h3>PROJECTS</h3>
              </div>
            </div>
            <div className="col-md-4">
              <div className="count center-count">
                <h1 className="countTo">234</h1>
                <h3>CLIENTS</h3>
              </div>
            </div>
            <div className="col-md-4">
              <div className="count">
                <h1 className="countTo">200</h1>
                <h3>COFFES</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
