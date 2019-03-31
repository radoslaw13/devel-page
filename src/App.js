import React, { Component } from "react";
import Header from "./components/Header";
import About from "./components/About";
import "./styles/Sections.scss";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Services from "./components/Services";
import Team from "./components/Team";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <About />
        <Projects />
        <Testimonials />
        <Services />
        <Team />
        <Contact />
      </div>
    );
  }
}

export default App;
