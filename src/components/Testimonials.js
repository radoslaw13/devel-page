import React from "react";
import Slider from "react-slick";
import tomPhoto from "../images/tom.jpg";
import "../styles/Testimonilas.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    dotsClass: "my-slick-dots",
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <section className="section testimonials" id="testimonials">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="section-header testimonials-header">
              <h1>Testimonials</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonials-container">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1 p-0">
              <div className="slider-container">
                <Slider {...settings}>
                  <div className="testimonial">
                    <div className="testimonial-image">
                      <img src={tomPhoto} alt="tom" />
                    </div>
                    <div className="testimonial-content">
                      <i>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Nullam varius, elit vitae malesuada condimentum,
                        lectus lacus aliquam quam, in facilisis lorem erat ac
                        metus. Sed sagittis sapien nunc, at cursus justo laoreet
                        quis. Morbi nec velit ac libero rhoncus ullamcorper."
                      </i>
                      <span />
                    </div>
                    <div className="testimonial-person">
                      <h1>
                        <i>Tom Johnson</i>
                      </h1>
                    </div>
                  </div>
                  <div className="testimonial">
                    <div className="testimonial-image">
                      <img src={tomPhoto} alt="tom" />
                    </div>
                    <div className="testimonial-content">
                      <i>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Nullam varius, elit vitae malesuada condimentum,
                        lectus lacus aliquam quam, in facilisis lorem erat ac
                        metus. Sed sagittis sapien nunc, at cursus justo laoreet
                        quis. Morbi nec velit ac libero rhoncus ullamcorper."
                      </i>
                      <span />
                    </div>
                    <div className="testimonial-person">
                      <h1>
                        <i>Tom Johnson</i>
                      </h1>
                    </div>
                  </div>
                  <div className="testimonial">
                    <div className="testimonial-image">
                      <img src={tomPhoto} alt="tom" />
                    </div>
                    <div className="testimonial-content">
                      <i>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Nullam varius, elit vitae malesuada condimentum,
                        lectus lacus aliquam quam, in facilisis lorem erat ac
                        metus. Sed sagittis sapien nunc, at cursus justo laoreet
                        quis. Morbi nec velit ac libero rhoncus ullamcorper."
                      </i>
                      <span />
                    </div>
                    <div className="testimonial-person">
                      <h1>
                        <i>Tom Johnson</i>
                      </h1>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
