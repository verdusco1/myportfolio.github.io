import React from "react";
import background from "../images/background.jpg";

function Projects(props) {
    return (
        <div class="container-fluid">
            <h1>Latest Work</h1>

            <div class=" project-tile ">
            <div class="project-desc">
                <h3>Project Title</h3>
                </div>
                <img class=" "src={background}/>
                <div class="project-buttons  ">
                <button type="button" class="btn btn-primary"><a hfer="#">Code</a></button>
                <button type="button" class="btn btn-primary"><a hfer="#">Live</a></button>
                </div>

            </div>



        </div>
    )
}

export default Projects;
