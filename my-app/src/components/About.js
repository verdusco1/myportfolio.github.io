import React from "react";
import background from "../images/background.jpg";
import avatar from "../images/avataaars.png";
import '../App.css';



function About(props) {
    return (

    <div class="container-fluid about-container" >
        <div class="row home-text">
            <h1>Hi, I'm Eddie</h1>
            <h3>An aspiring  front-end developer that loves <br/>to create things.</h3>
        </div>
        <button type="buton" class="btn btn-primary btn-lg">Message Me!</button>

        <div class="row bio-container">
            <img class="avatar" src={avatar} alt="Eddie's avatar"/>
            <p class="col-sm-6">
    When I look back to the first application that I created, I remember being so excited when everything finally rendered. A spark was ignited that day and the path to self-taught programming was revealed. As time has gone my passion for development has only grown and is fueled by my excitement of always being able to learn something new.
    </p>
        </div>

       </div>

    )
}

export default About;
