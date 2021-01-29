import React from "react";
import background from "../images/background.jpg";
import '../App.css';



function About(props) {
    return (

        <div class="">

        <div class="about-background">
        <h1 class="hello-text">Hello, I'm Eddie</h1>
        <h2  class="hello-text">An aspiring fron-end developer that loves to create.</h2>
        <img class="hello-image" src={background} width='50' ></img>
        </div>

        <div class="row p-0">
            <h2 class="about-text p-0">I am an aspiring fron-end developer that loves to create.</h2>
           </div>


       </div>

    )
}

export default About;
