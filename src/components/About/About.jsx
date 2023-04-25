import React from 'react';
import "./About.scss";
import AboutTextContent from "../AboutTextContent/AboutTextContent";
import AboutImage from "../AboutImage/AboutImage";

const About = () => {
    return (
        <div className="about">
            <div className="about__content">
                <div className="about__title">
                    ABOUT THE EVENT
                </div>
                <div className="about__data">
                    <AboutTextContent/>
                </div>
                <div className="about__image">
                    <AboutImage/>
                </div>

            </div>
        </div>
    );
};

export default About;