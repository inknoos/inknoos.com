import React from 'react';
import "./AboutTextContent.scss"
import {store} from "../../store/store";

const {textSectionData} = store;
const AboutTextContent = () => {
    return (
        <>
            {
                textSectionData.map(data => {
                    return (
                        <div className="about__cover" key={data.id}>
                            <div className="about__subtitle">{data.subtitle}</div>
                            <div className="about__text">{data.text}</div>
                        </div>
                    )
                })
            }
        </>
    )
};

export default AboutTextContent;