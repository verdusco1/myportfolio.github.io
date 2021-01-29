import React from "react";
import background from "../images/background.jpg";
import '../App.css';



function About(props) {
    return (

        <div class="container-fluid" >
            <div class="wrapper">
                <img src={background} class="img-responsive" alt="Responsive image" />
            </div>
            <div class="img-title">
                <h1>Hi, I'm Eddie</h1>
                <h3>An aspiring front-end developer that loves to create things.</h3>
                <Avatar
  avatarStyle='Circle'
  topType='ShortHairTheCaesar'
  accessoriesType='Prescription02'
  hairColor='Black'
  facialHairType='BeardLight'
  facialHairColor='Black'
  clotheType='BlazerShirt'
  eyeType='Default'
  eyebrowType='DefaultNatural'
  mouthType='Smile'
  skinColor='Light'
/>
            </div>
       </div>

    )
}

export default About;
