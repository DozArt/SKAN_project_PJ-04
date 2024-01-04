import React from 'react';
import s from './WhyAs.module.css'
import "./slick.css";
import "./slick-theme.css";
import Slider from "react-slick";
import mascot_ok from "./images/mascot_ok.svg"
import img_clock from "./images/342eec6c4e64fc1f6123156254eb7dd3.svg"
import img_search from "./images/0fb8f25cf4a72c55c77ade958e46a450.svg"
import img_security from "./images/png-transparent-computer-icons.svg"
import useResize from '../../components/Resize/use-resize';


const WhyAs_item = ({id, icon, text}) => {
    return (
        <div key={id} className={s.item}>
            <img src={icon} />
            <p>{text}</p>
        </div>
    );
}

// на кодревью нет времени
// map крашит Slider
// а перенос строки - по другому не нашел решения


const WhyAs = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        className: s.sliderman
    };

    useResize().isScreenSm ? '' : settings.slidesToShow = 1


    return (
        <div className={s.unit}>
            <h2 className={s.title}>Почему именно&nbsp;мы</h2>
            <Slider {...settings}>

                <WhyAs_item id="1"
                            icon={img_clock} 
                            text="Высокая и оперативная скорость обработки заявки" />

                <WhyAs_item id="2"
                            icon={img_search} 
                            text='Огромная комплексная база данных, обеспечивающая объективный ответ на запрос' />
                            
                <WhyAs_item id="3"
                            icon={img_security} 
                            text="Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству" />

                <WhyAs_item id="4"
                            icon={img_clock} 
                            text="Высокая и оперативная скорость обработки заявки" />

                <WhyAs_item id="2"
                            icon={img_search} 
                            text="Огромная комплексная база данных, обеспечивающая объективный ответ на запрос" />

                <WhyAs_item id="3"
                            icon={img_security} 
                            text="Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству" />

            </Slider>
            <div className={s.mascot_ok}/>
        </div>
    );
};

export default WhyAs;