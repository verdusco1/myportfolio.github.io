import React from "react";
import html from "../images/html.png";
import css from "../images/css.png";
import javascript from "../images/js.png";
import background from "../images/background.jpg";

function Projects(props) {
    return (
        <div class="container-fluid">
            <h1>Latest Work</h1>

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
                <button type="button" class="btn btn-primary"><a hfer="#">Code</a></button>
                <button type="button" class="btn btn-primary"><a hfer="#">Live</a></button>
                </div>
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
                <button type="button" class="btn btn-primary"><a hfer="#">Code</a></button>
                <button type="button" class="btn btn-primary"><a hfer="#">Live</a></button>
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
