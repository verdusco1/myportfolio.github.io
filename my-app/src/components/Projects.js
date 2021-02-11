import React from "react";
import html from "../images/html.png";
import css from "../images/css.png";
import javascript from "../images/js.png";
import background from "../images/background.jpg";
import project1 from "../images/upwork2.PNG";
import project2 from "../images/upwork.PNG";


function Projects(props) {
    return (
        <div class="project-container container-fluid">
            <h1 id="portfolio">Latest Work</h1>

            <div class=" project-tile col-lg-8">
            <div class="project-desc">
                <h3>KOTR Reviews</h3>
                <img class="project-tile-img"src={project1}/>
                </div>
                <div class="language-image-container">
                    <img src={html} />
                    <img src={css} />
                    <img src={javascript} />
                </div>
                <div class="project-buttons  ">
                <a href="https://github.com/verdusco1/kotrreviews.github.io" target="_blank"><button type="button" class="btn btn-primary">Github</button></a>
                <a href="https://www.kotrreviews.com/index.html" target="_blank"><button type="button" class="btn btn-primary">Live</button></a>                </div>
                <p class="">Created a new fully-responsive website with an improved
                    design from provided mock-up. This video gaming news and
                    game reviews website is constructed with HTML, CSS, and
                    Javascript.
                </p>
            </div>

            <div class=" project-tile col-lg-8">
            <div class="project-desc">
                <h3>Cakes by Miss Maggie</h3>
                </div>
                <img class="project-tile-img"src={project2}/>
                <div class="language-image-container">
                    <img src={html} />
                    <img src={css} />
                    <img src={javascript} />
                </div>
                <div class="project-buttons  ">
                <a href="https://github.com/verdusco1/cakes-by-miss-maggie.github.io" target="_blank"><button type="button" class="btn btn-primary">Code</button></a>
                <a href="https://www.cakesbymissmaggie.com/" target="_blank"><button type="button" class="btn btn-primary">Live</button></a>
                </div>
                <p class="">Designed and developed a fully-responsive website with
                    HTML, CSS, and Javascript.This local baker now has a
                    website where customers can order custom cakes.
                </p>
            </div>



        </div>
    )
}

export default Projects;
