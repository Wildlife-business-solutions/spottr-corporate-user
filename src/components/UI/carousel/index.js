import React from 'react';
import Slider from "react-slick";
import "./style.css";
import "./theme.css"

const Carousel = ({children, slides, scrolls, isOnAutoplay, hasDots}) => {
    const settings = {
        dots: hasDots,
        infinite: true,
        speed: 500,
        slidesToShow: slides,
        slidesToScroll: scrolls,
        autoplay: isOnAutoplay
    };

    

    return (
        <div>
            <div>
                <Slider {...settings}>
                    {children}
                </Slider>
            </div>

        </div>
    )
}

export default Carousel
