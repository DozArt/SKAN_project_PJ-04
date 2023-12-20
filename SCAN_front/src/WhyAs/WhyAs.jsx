import React from 'react';
import s from './WhyAs.module.css'
import "slick-carousel/slick/slick.css";
import "./slick-theme.css";
import Slider, {PrevArrow2} from "react-slick";


const WhyAs = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        className: s.sliderman
      };

    return (
        <div className={s.unit}>
            <h2 className={s.title}>Почему именно мы</h2>
            <Slider {...settings}>
                <div>
                    <h3>11111</h3>
                </div>
                <div>
                    <h3>22222</h3>
                </div>
                <div>
                    <h3>33333</h3>
                </div>
                <div>
                    <h3>44444</h3>
                </div>
                <div>
                    <h3>55555</h3>
                </div>
                <div>
                    <h3>66666</h3>
                </div>
            </Slider>
        </div>
    );
};

export default WhyAs;