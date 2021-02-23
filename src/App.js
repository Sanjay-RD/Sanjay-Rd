import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";
import Contact from "./components/Contact";

import info from "./aboutInfo";
import projectInfo from "./projectInfo";

function App() {
  const [userInfo, setUserInfo] = useState({});
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    setUserInfo(info);
    setProjects(projectInfo);
  }, []);
  return (
    <div>
      <Home userInfo={userInfo} />
      <AboutMe userInfo={userInfo} />
      <Project projects={projects} />
      <Contact />
    </div>
  );
}

export default App;
