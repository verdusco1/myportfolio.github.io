import React from "react";
import background from "../images/background.jpg";
import avatar from "../images/avataaars.png";
import '../App.css';



function About(props) {
    return (

        <div class="container-fluid" >

            <div class="about-background"></div>




            <div class="home-text">
                <h1>Hi, I'm Eddie</h1>
                <h3>An aspiring front-end developer that loves to create things.</h3>
            </div>

            <img class="avatar" src={avatar} alt="Eddie's avatar"/>

            <div class="col-lg-12 banner-background">
                <p class="col-sm-5 banner-text">
                When I look back to the first application that I created, I remember being so excited when everything finally rendered. A spark was ignited that day and the path to self-taught programming was revealed. As time has gone my passion for development has only grown and is fueled by my excitement of always being able to learn something new.
                </p>
            </div>

       </div>

    )
}

export default About;
