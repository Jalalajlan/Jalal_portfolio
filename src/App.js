import React from "react";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Skills from "./pages/skills/skill";
import Projects from "./pages/projects/projects";
import Contact from "./pages/contact/contact";

const App = () => {
  return (
    <div className="container">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
