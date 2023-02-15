import React from "react";
import "./App.css";
import logo from "./logo.svg";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-bar">
        <img src={logo} alt="logo" className="logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
