import React from "react";
import Start from "./pages/start/start";
import About from "./pages/about/about";
import Skills from "./pages/skills/skill";

const App = () => {
  return (
    <div className="container">
      <Start />
      <About />
      <Skills />
    </div>
  );
};

export default App;
