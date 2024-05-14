import React from "react";
import profile_img from '../../Assets/profile_img.svg';
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useTypewriter,Cursor } from "react-simple-typewriter";
import './Hero.css'

const Hero =() => {
    const [text]=useTypewriter({
        words:['Developer','Designer','Photographer'],
        loop:true,
        deleteSpeed:50,
        typeSpeed:80,
        delaySpeed:1000,
    });
    return (
        <div id="home" className="hero">
            <img src={profile_img} alt="" />
            <h1><span>I'm ARYA GUPTA  </span><span>{text}<Cursor></Cursor></span></h1>
            <p>Btech In Artificial Inteliigence and Machine Learning</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className="anchor-link" offset={75} href="#contact">Connect With Me</AnchorLink></div>
                <div className="hero-resume">My resume</div>
            </div>

        </div>
    )
}
export default Hero
