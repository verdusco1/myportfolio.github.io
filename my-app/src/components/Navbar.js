import React from "react";
import '../App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Projects from './Projects.js';
import Contact from './Contact.js';
import About from './About.js';
import github from '../images/Github_5.png';
import linkedin from '../images/Linkedin_5.png';
import avatar from "../images/avataaars.png";

function Navbar(props) {
    return (
<div class="nav-container">
<nav class="navbar navbar-expand-lg navbar-inner">
  <button class="navbar-toggler burger" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
  <div>
    <span></span>
    <span></span>
    <span></span>
    </div>
    </button>
  <div class="collapse navbar-collapse collapse-container" id="navbarNavAltMarkup">
    <div class="navbar-nav nav-links ">
      <a class="nav-item nav-link" href="#">About</a>
      <a class="nav-item nav-link" href="#">Projects</a>
      <a class="nav-item nav-link" href="#">Contact</a>
    </div>
    <div class="social-link-container">
  <a class="" href="#">
  <img class="" src={github} alt="github logo" height="40" />
  </a>
  <a class="" href="#">
  <img class="" src={linkedin} alt="linkedin logo" height="40" />
  </a>
  </div>
  </div>
</nav>

</div>




    )
}

export default Navbar;
