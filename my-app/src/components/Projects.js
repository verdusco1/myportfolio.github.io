import React from "react";
import background from "../images/background.jpg";

function Projects(props) {
    return (
        <div class="projects-container">
            <h1>Projects</h1>

            <div class="project-tile">
                <div>
                <img src={background} />
                <p>This is a project and here is a description of the project.</p>
                </div>
                <div>
                <img src={background} />
                <p>Mobile</p>
                </div>
            </div>
            <div class="project-tile">
                <div>
                <img src={background} />
                <p>This is a project and here is a description of the project.</p>
                </div>
                <div>
                <img src={background} />
                <p>Mobile</p>
                </div>
            </div>

        </div>
    )
}

export default Projects;
