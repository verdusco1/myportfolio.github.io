import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import About from './components/About.js';
import Navbar from './components/Navbar.js'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (


    <div className="App">


<Navbar />
<About />
<Projects />
<Contact />


    </div>


  );
}

export default App;
