import React from "react";
import github from '../images/github-9-48.png';
import linkedin from '../images/linkedin-4-48.png';
import mail from '../images/email-14-48.png'
import background from "../images/background.jpg";


function Footer(props) {
    return (
        <div class="container-fluid footer-container">
            <div class=" link-container">
                <a href="https://github.com/verdusco1" target="_blank"><img src={github} /></a>
                <a  href="https://www.linkedin.com/in/eddie-verdusco" target="_blank"><img src={linkedin} /></a>
            </div>
            <div class="row copyright-container">
                <p>Copyright {'\u00a9'} 2021 Eddie Verdusco</p>
            </div>
        </div>
    )
}

export default Footer;
