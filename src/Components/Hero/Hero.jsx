import React from "react";
import profileImg from '../../Assets/profile_img.svg';
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import './Hero.css';

const Hero = () => {
    const [text] = useTypewriter({
        words: ['Developer', 'Designer', 'Photographer'],
        loop: true,
        deleteSpeed: 50,
        typeSpeed: 80,
        delaySpeed: 1000,
    });

    return (
        <div id="home" className="hero">
            <img src={profileImg} alt="Profile" />
            <h1>
                <span>I'm ARYA GUPTA </span>
                <span className="typewriter-container">
                    {text}
                    <Cursor cursorStyle="|" />
                </span>
            </h1>
            <p>B.Tech in Artificial Intelligence and Machine Learning</p>
            <div className="hero-action">
                <div className="hero-connect">
                    <AnchorLink className="anchor-link" offset={75} href="#contact">Connect With Me</AnchorLink>
                </div>
                <div className="hero-resume">My Resume</div>
            </div>
        </div>
    );
};

export default Hero;
