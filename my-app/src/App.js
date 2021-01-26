import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Projects from './Projects.js';
import Articles from './Articles.js';
import About from './About.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>

    // Router set up
    <Route exact path="/" component={Projects} />
    <Route path="/articles" component={Articles} />
    <Route path="/about" component={About} />

    <div className="App">
      <nav id="nav-container">
        <ul class="nav-links">
          <li><Link to="/" className="item">Projects</Link></li>
          <li><Link to="/articles" className="item">Articles</Link></li>
          <li><Link to="/about" className="item">About</Link></li>
        </ul>
      </nav>
    </div>
    </BrowserRouter>
  );
}

export default App;
