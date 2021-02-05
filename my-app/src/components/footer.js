import React from "react";
import github from '../images/github-9-48.png';
import linkedin from '../images/linkedin-4-48.png';
import mail from '../images/email-14-48.png'
import background from "../images/background.jpg";


function Footer(props) {
    return (
        <div class="container-fluid footer-container">
            <div class="row">
                <p class="footer-text">Get In Touch...</p>
            </div>
            <div class="row link-container">
                <img src={github} />
                <img src={linkedin} />
                <img src={mail} />
            </div>
            <a class="arrow-container">
            <span class="glyphicon glyphicon-triangle-top" aria-hidden="true"></span>
            </a>
            <div class="row copyright-container">
                <p>Copyright {'\u00a9'} 2021 Eddie Verdusco</p>
            </div>
        </div>
    )
}

export default Footer;
