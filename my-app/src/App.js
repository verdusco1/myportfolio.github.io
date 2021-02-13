import React from 'react';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import About from './components/About.js';
import Navigation from './components/nav.js'
import Footer from './components/footer.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (


    <div className="App">

<Navigation />
<About />
<Projects />
<Contact />
<Footer />







    </div>


  );
}

export default App;
