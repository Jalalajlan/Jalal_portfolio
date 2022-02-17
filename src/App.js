import React from "react";
import Start from "./pages/start/start";
import About from "./pages/about/about";
import Skills from "./pages/skills/skill";
import Projects from "./pages/projects/projects";
import Contact from "./pages/contact/contact";

const App = () => {
  return (
    <div className="container">
      <Start />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
