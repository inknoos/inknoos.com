import React from 'react';
import "./AboutImage.scss";
import {store} from "../../store/store";

const {images} = store;
const AboutImage = () => {
    return (
        <>
            {
                images.map(item => <img key={item.id} src={item.img} alt=""/>)
            }

        </>
    );
};

export default AboutImage;