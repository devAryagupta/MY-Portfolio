import React from "react";
import'./About.css'
import theme_pattern from '../../Assets/theme_pattern.svg'
import profile_img from '../../Assets/profile_img.svg'
const About =() =>{
    return(
        <div id="about" className="about">
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>
                            I am a proactive and ambitious individual with strong technical skills.
                        </p>
                        <p>
                            I have innovative problem-solving abilities and leadership qualities.
                        </p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p><hr style={{width:"50%"}}></hr>
                        </div>
                        <div className="about-skill">
                        <p>ReactJS</p><hr style={{width:"70%"}}></hr>
                        </div>
                        <div className="about-skill">
                        <p>JavaScript</p><hr style={{width:"60%"}}></hr>
                        </div>
                        <div className="about-skill">
                        <p>NextJs</p><hr style={{width:"50%"}}></hr>
                        </div>

                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p> Years of Experience </p>
                </div>
                <hr/>
                <div className="about-achievement">
                    <h1>90+</h1>
                    <p> projects completed  </p>
                </div>
                <hr/>
                <div className="about-achievement">
                    <h1>15+</h1>
                    <p> Happy Clients </p>
                </div>
            </div>

        </div>
    )
}

export default About