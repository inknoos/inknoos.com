import React from 'react';
import "./AboutImage.scss";
import {store} from "../../store/store";

const {images} = store;
const AboutImage = () => {
    return (
        <>
            {
                images.map(item => <div className="image__cards" key={item.id}>
                    <img className="image" src={item.img} alt=""/>
                </div>)
            }

        </>
    );
};

export default AboutImage;