import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function NavBar () {

  return (
    <nav className="navbar">
      <Link to="/" className="title">
        Tahsin's Portfolio
      </Link>
      
      <ul>
        <li>
          <NavLink to="/AboutMe">About Me</NavLink>
        </li>
        <li>
          <NavLink to="/Projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/WorkHistory">Work Experiences</NavLink>
        </li>
        <li>
          <NavLink to="/SkillsandTech">Skills+</NavLink>
        </li>
      </ul>
    </nav>
  );
};
