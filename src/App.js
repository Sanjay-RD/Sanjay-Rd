import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";
import Contact from "./components/Contact";
import IndividualProject from "./components/IndividualProject";

import info from "./aboutInfo";
import projectInfo from "./projectInfo";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const [userInfo, setUserInfo] = useState({});
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    setUserInfo(info);
    setProjects(projectInfo);
  }, []);
  return (
    <Router>
      <Route
        exact
        path="/"
        render={(props) => (
          <React.Fragment>
            <Home userInfo={userInfo} />
            <AboutMe userInfo={userInfo} />
            <Project projects={projects} />
            <Contact />
          </React.Fragment>
        )}
      />
      <Route path="/project/:id" component={IndividualProject} />
    </Router>
  );
}

export default App;
