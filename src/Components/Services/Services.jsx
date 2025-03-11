import React, { useState, useRef, useEffect } from "react";
import './Services.css';
import themePattern from '../../Assets/theme_pattern.svg';
import ServicesData from "../../Assets/services_data";
import arrowIcon from '../../Assets/arrow_icon.svg';

const Services = () => {
    const [expanded, setExpanded] = useState(Array(ServicesData.length).fill(false));
    const descriptionRefs = useRef([]);

    const handleReadMore = (index) => {
        const newExpanded = [...expanded];
        newExpanded[index] = !newExpanded[index];
        setExpanded(newExpanded);
    };

    useEffect(() => {
        descriptionRefs.current.forEach((ref, index) => {
            if (ref) {
                ref.addEventListener("wheel", (e) => {
                    if (expanded[index]) {
                        e.preventDefault();
                        ref.scrollTop += e.deltaY;
                    }
                });
            }
        });
    }, [expanded]);

    return (
        <div id="services" className="services">
            <div className="services-title">
                <h1>My Projects</h1>
                <img src={themePattern} alt="Theme Pattern" />
            </div>
            <div className="services-container">
                {ServicesData.map((service, index) => (
                    <div key={index} className="services-format">
                        <h3>{service.s_no}</h3>
                        <h2>{service.s_name}</h2>
                        <p
                            className={expanded[index] ? "expanded" : "collapsed"}
                            ref={(el) => (descriptionRefs.current[index] = el)}
                        >
                            {service.s_desc}
                        </p>
                        <div className="services-readmore" onClick={() => handleReadMore(index)}>
                            <p>{expanded[index] ? "Show Less" : "Read More"}</p>
                            <img src={arrowIcon} alt="Arrow Icon" className={expanded[index] ? "arrow-up" : "arrow-down"} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;