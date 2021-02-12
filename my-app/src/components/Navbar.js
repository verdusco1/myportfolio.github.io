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
<div class="navbar-brand-logo">
      <a href="#about">
      <p class="initials">E | V</p>
      </a>
    </div>
    <button class="navbar-toggler burger" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
  <div>
    <span></span>
    <span></span>
    <span></span>
    </div>
    </button>
  <div class="collapse navbar-collapse collapse-container" id="navbarNavAltMarkup">
    <div class="navbar-nav nav-links ">
      <div class="link-wrap first-link">
        <a class="nav-item nav-link img__description" href="#about">ABOUT</a>
      </div>
      <div class="link-wrap">
        <a class="nav-item nav-link img__description" href="#portfolio">PORTFOLIO</a>
      </div>
      <div class="link-wrap last-link">
        <a class="nav-item nav-link" href="#contact">CONTACT</a>
      </div>
    </div>
  </div>
</nav>

</div>




    )
}

export default Navbar;
