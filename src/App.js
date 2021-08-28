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
import { animateScroll as scroll } from "react-scroll";

function App() {
  const [userInfo, setUserInfo] = useState({});
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    setUserInfo(info);
    setProjects(projectInfo);
  }, []);

  const scroolButtom = () => {
    // console.log("scroolButtom");
    scroll.scrollToBottom();
  };
  return (
    <Router>
      <Route
        exact
        path="/"
        render={(props) => (
          <>
            <Home userInfo={userInfo} scroolButtom={scroolButtom} />
            <AboutMe userInfo={userInfo} />
            <Project projects={projects} />
            <Contact />
          </>
        )}
      />
      {/* <Route path="/project/:id" component={IndividualProject} /> */}
      <Route
        path="/project/:id"
        render={(props) => (
          <React.Fragment>
            <IndividualProject {...props} />
          </React.Fragment>
        )}
      />
    </Router>
  );
}

export default App;
