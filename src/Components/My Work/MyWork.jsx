import React from "react";
import './Mywork.css'
import theme_pattern from '../../Assets/theme_pattern.svg'
const Mywork =()=> {
    return (
        <div className="mywork">
            <div className="mywork-title">
                <h1>
                    My Latest Work
                </h1>
                <img src={theme_pattern} alt="" />
            </div>
        </div>
    )
}
export default Mywork