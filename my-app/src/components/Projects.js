import React from "react";
import html from "../images/html.png";
import css from "../images/css.png";
import javascript from "../images/js.png";
import background from "../images/background.jpg";

function Projects(props) {
    return (
        <div class="container-fluid">
            <h1 id="portfolio">Latest Work</h1>

            <div class=" project-tile ">
            <div class="project-desc">
                <h3>KOTR Reviews</h3>
                </div>
                <img class="project-tile-img"src={background}/>
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

            <div class=" project-tile ">
            <div class="project-desc">
                <h3>Cakes by Miss Maggie</h3>
                </div>
                <img class="project-tile-img"src={background}/>
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
