import React from "react";
import profile from "./profile.jpg";

const Home = () => {
  return (
    <section class="s1">
      <div class="main-container">
        <div class="greeting-wrapper">
          <h1>Hi, I'm Sanjay RD</h1>
        </div>

        <div class="intro-wrapper">
          <div class="nav-wrapper">
            {/* Link around dots-wrapper added after tutorial video  */}
            <a href="index.html">
              <div class="dots-wrapper">
                <div id="dot-1" class="browser-dot"></div>
                <div id="dot-2" class="browser-dot"></div>
                <div id="dot-3" class="browser-dot"></div>
              </div>
            </a>

            <ul id="navigation">
              <li>
                <a href="index.html#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div class="left-column">
            <img id="profile_pic" src={profile} />
            <h5 style={{ textAlign: "center", lineHeight: "0" }}>
              Personalize Theme
            </h5>

            <div id="theme-options-wrapper">
              <div data-mode="light" id="light-mode" class="theme-dot"></div>
              <div data-mode="blue" id="blue-mode" class="theme-dot"></div>
              <div data-mode="green" id="green-mode" class="theme-dot"></div>
              <div data-mode="purple" id="purple-mode" class="theme-dot"></div>
            </div>

            <p id="settings-note">
              *Theme settings will be saved for <br /> your next vist
            </p>
          </div>

          <div class="right-column">
            <div id="preview-shadow">
              <div id="preview">
                <div id="corner-tl" class="corner"></div>
                <div id="corner-tr" class="corner"></div>
                <h3>What I Do</h3>
                <p>I am a Frontend Developer and make creative sites.</p>
                <div id="corner-br" class="corner"></div>
                <div id="corner-bl" class="corner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
