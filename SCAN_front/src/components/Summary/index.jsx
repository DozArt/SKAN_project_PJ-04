import React, { useRef } from 'react';
import s from './Summary.module.css'
import "../../public/style/slick.css";
import "../../public/style/slick-theme.css";
import Slider from "react-slick";
import useResize from '../Resize/use-resize';


const Summary_item = ({id, icon, text}) => {
    return (
        <div key={id} className={s.item}>
            <div>{text}</div>
            <div>{id}</div>
            <div>{id}</div>
        </div>
    );
}

// на кодревью нет времени
// map крашит Slider


const Summary = () => {

    let sliderRef = useRef(null);
    const next = () => {
      sliderRef.slickNext();
    };
    const previous = () => {
      sliderRef.slickPrev();
    };

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 2,
        className: s.sliderman
    };

    useResize().isScreenSm ? '' : settings.slidesToShow = 2


    return (
        <div className={s.unit}>
            <h2 className={s.title}>Общая сводка</h2>
            <p>Найдено 4 221 вариантов</p>
            <div className={s.table_summary}>

                {/* <button onClick={previous}>{'<'}</button> */}

                <div className={s.items_titles}>
                    <div>Период</div>
                    <div>Всего</div>
                    <div>Риски</div>
                </div>

                
                    
                    <Slider
                        ref={slider => {
                            sliderRef = slider;
                        }}
                        {...settings}>

                        <Summary_item id="1"
                                    text="10.09.2021" />

                        <Summary_item id="2"
                                    text="10.09.2021" />
                                    
                        <Summary_item id="3"
                                    text="10.09.2021" />

                        <Summary_item id="4"
                                    text="10.09.2021" />

                        <Summary_item id="5"
                                    text="10.09.2021" />

                        <Summary_item id="6"
                                    text="10.09.2021" />

                        <Summary_item id="7"
                                    text="10.09.2021" />
                                    
                        <Summary_item id="8"
                                    text="10.09.2021" />

                        <Summary_item id="9"
                                    text="10.09.2021" />
                                    
                        <Summary_item id="0"
                                    text="10.09.2021" />

                    </Slider>
                

                {/* <button onClick={next}>{'>'}</button> */}

            </div>
            
        </div>
    );
};

export default Summary;