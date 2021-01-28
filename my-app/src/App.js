import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Projects from './components/Projects.js';
import Articles from './components/Articles.js';
import About from './components/About.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>

    // Router set up
    <Route exact path="/" component={Projects} />
    <Route path="/components/articles" component={Articles} />
    <Route path="/components/about" component={About} />

    <div className="App">
      <nav id="nav-container">
        <ul class="nav-links">
          <li><Link to="/" className="item">Projects</Link></li>
          <li><Link to="/components/articles" className="item">Articles</Link></li>
          <li><Link to="/components/about" className="item">About</Link></li>
        </ul>
      </nav>

    <div>
      <Projects />
      <Articles />
    <About />
    </div>

    </div>
    </BrowserRouter>
  );
}

export default App;
