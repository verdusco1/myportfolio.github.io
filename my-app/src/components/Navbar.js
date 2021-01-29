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
<div class="navbar-container">
<nav class="navbar navbar-default">
        <ul class="nav navbar-nav">
          <li ><a href="">About</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Contact</a></li>
        </ul>


    <div class="social-links" >
<img class="" src={github} alt="Eddie's avatar"/>
<img class="" src={linkedin} alt="Eddie's avatar"/>
</div>
      </nav>




</div>




    )
}

export default Navbar;
