import React from "react";
import '../App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Projects from './Projects.js';
import Contact from './Contact.js';
import About from './About.js';

function Navbar(props) {
    return (
<div class="navbar-container">
      <nav class="navbar navbar-default">
        <ul class="nav navbar-nav">
          <li><a href="">About</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>
</div>





    )
}

export default Navbar;
