import React from "react";
import { Link } from "react-router-dom";

const Header = ({ scroolButtom }) => {
  return (
    <div className="nav-wrapper">
      {/* Link around dots-wrapper added after tutorial video  */}
      <Link to="/">
        <div className="dots-wrapper">
          <div id="dot-1" className="browser-dot"></div>
          <div id="dot-2" className="browser-dot"></div>
          <div id="dot-3" className="browser-dot"></div>
        </div>
      </Link>

      <ul id="navigation">
        <li>
          <Link to="/" onClick={() => scroolButtom()}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
