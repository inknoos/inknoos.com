import './slider.css';
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import slide1 from '../../../assets/Slider_Img/slide1.jpg'
import slide2 from '../../../assets/Slider_Img/slide2.jpg'
import slide3 from '../../../assets/Slider_Img/slide3.jpg'

export default function App() {

    const Slides = [
        {
            src: slide1
        },
        {
            src: slide2
        },
        {
            src: slide3
        }
    ]
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    Slides.map((e) => {
                        return (
                            <SwiperSlide className='slide'><img src={e.src}></img></SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </>
    );
}
