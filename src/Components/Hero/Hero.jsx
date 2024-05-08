import React from "react";
import profile_img from '../../Assets/profile_img.svg';
import AnchorLink from "react-anchor-link-smooth-scroll";

import './Hero.css'

const Hero =() => {
    return (
        <div id="home" className="hero">
            <img src={profile_img} alt="" />
            <h1><span>I'm ARYA GUPTA , frontend devloper</span></h1>
            <p>desc</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink></div>
                <div className="hero-resume">My resume</div>
            </div>

        </div>
    )
}
export default Hero