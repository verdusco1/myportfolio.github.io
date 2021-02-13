import React from "react";

function Navigation(props) {
    return (

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#about">E | V</a>

      <button className="navbar-toggler" type="button" data-toggle="collapse"  data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
              <li className="nav-item active">
                  <a className="nav-link" href="#">About <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#">Projects</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#">Contact</a>
              </li>
          </ul>
      </div>
  </nav>
    )
}

export default Navigation;
