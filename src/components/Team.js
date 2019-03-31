import React, { useState, useEffect } from "react";
import "../styles/Team.scss";
import workerPhoto from "../images/worker1.jpg";
import linkedIn from "../images/icons/linkedin.png";
import facebook from "../images/icons/fb.png";

const team = [
  {
    name: "Tom Wolf",
    position: "WEB Designer",
    photo: workerPhoto,
    label: "Creative, smart, funny"
  },
  {
    name: "John Wright",
    position: "SEO Specialist",
    photo: workerPhoto,
    label: "Creative, smart, funny"
  },
  {
    name: "Jimmy Black",
    position: "Developer",
    photo: workerPhoto,
    label: "Creative, smart, funny"
  },
  {
    name: "Tom Wolf",
    position: "WEB Designer",
    photo: workerPhoto,
    label: "Creative, smart, funny"
  },
  {
    name: "Tom Wolf",
    position: "WEB Designer",
    photo: workerPhoto,
    label: "Creative, smart, funny"
  },
  {
    name: "Tom Wolf",
    position: "WEB Designer",
    photo: workerPhoto,
    label: "Creative, smart, funny"
  }
];

function Team() {
  const [loadMore, setLoadMore] = useState(false);

  function loadMoreTeam() {
    document
      .getElementById("team-content")
      .classList.remove("team-content-animation");

    setLoadMore(!loadMore);
  }

  useEffect(() => {
    document
      .getElementById("team-content")
      .classList.add("team-content-animation");
  });
  return (
    <section className="section team" id="team">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="section-header">
              <h1>Our Team</h1>
            </div>
          </div>
          <div className="col-sm-10 offset-sm-1">
            <div className="section-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
        </div>
      </div>
      <div className="team-content" id="team-content">
        <div className="container">
          <div className="row">
            {team.slice(0, loadMore ? team.length : 3).map((person, index) => {
              return (
                <div className="col-md-4" key={index}>
                  <div className="team-member">
                    <div className="member-photo">
                      <img src={person.photo} alt="Mark Dol" />
                    </div>
                    <div className="member-content">
                      <h1 className="member-name">{person.name}</h1>
                      <h3 className={`member-function member-${index}`}>
                        {person.position}
                      </h3>
                      <p className="member-label">{person.label}</p>
                      <div className="member-socials ">
                        <img src={linkedIn} alt="Linked In" />
                        <img src={facebook} alt="Facebook" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="container">
          <div className="load-more-container">
            <button className="load-more-button" onClick={loadMoreTeam}>
              {loadMore ? "Hide" : "Load More"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
