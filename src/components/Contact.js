import React from "react";
import "../styles/Contact.scss";
import linkedIn from "../images/icons/linkedin.png";
import facebook from "../images/icons/fb.png";

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="section-header">
              <h1>Contact</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-content">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="contact-us-box">
                <div className="left-box">Address</div>
                <div className="right-box">
                  <span className="box-right-row">Dluga 21, 51-123 Warsaw</span>
                  <span className="box-right-row">Poland, PL</span>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="contact-us-box">
                <div className="left-box">Customer support</div>
                <div className="right-box">
                  <span className="box-right-row">
                    E-mail: contact@gmail.com
                  </span>
                  <span className="box-right-row">Phone: (555) 555-5555</span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="contact-us-box">
                <div className="left-box">Find us on</div>
                <div className="right-box">
                  <img src={linkedIn} alt="LinkedIn" />
                  <img src={facebook} alt="Facebook" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid footer" />
    </section>
  );
}

export default Contact;
