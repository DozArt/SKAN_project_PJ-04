import React, {useContext, useEffect, useState, useRef } from 'react';
import { combineDataByDate } from './DataProcessing';

import "../../public/style/slick.css";
import "../../public/style/slick-theme.css";
import s from './Summary.module.css'
import Slider from "react-slick";
import useResize from '../Resize/use-resize';
import { Context } from '@/main'
import Loading from '../Loading';


const Summary_item = ({key, period, total, risks}) => {
    return (
        <div key={key} className={s.item}>
            <div>{period}</div>
            <div>{total}</div>
            <div>{risks}</div>
        </div>
    );
}


const Summary = () => {
    const {store} = useContext(Context)
    const [isLoading, setIsLoading] = useState(false);
    const [answer, setAnswer] = useState([]);
    const res = answer.data

    let sliderRef = useRef(null);
    const next = () => {
      sliderRef.slickNext();
    };
    const previous = () => {
      sliderRef.slickPrev();
    };

    const fetchSearchResults = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(`${store.baseURL}/objectsearch/histograms`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
                },
                body: JSON.stringify(
                    store.bodyHistograms
                ),
            });

            if (response.ok) {
                const data = await response.json();
                
                const combined = combineDataByDate(data.data);
                setAnswer(combined)
                console.log('данные успешно получены')
            } else {
                console.error('Request failed');
            }
        } catch (error) {
            console.error('Error during request:', error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        if (Object.keys(store.bodyHistograms).length == 0) {
            setIsLoading(true)
        } else {
            fetchSearchResults()
        }
    }, []);

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 2,
        className: s.sliderman
    };

    const { width, isScreenSm, isScreenMd, isScreenXl} = useResize();

    if (!isScreenSm) {
        settings.slidesToShow = 1
        settings.slidesToScroll = 1
    } else if (!isScreenMd) {
        settings.slidesToShow = 2
    } else if (!isScreenXl) {
        settings.slidesToShow = 4
    }
    else {
        settings.slidesToShow = 8
    }


    return (
        <div className={s.unit}>
            <h4 className={s.title}>Общая сводка</h4>
            <p>Найдено 4 221 вариантов</p>
            <div className={s.table_summary}>

                {/* <button onClick={previous}>{'<'}</button> */}

                <div className={s.items_titles}>
                    <div>Период</div>
                    <div>Всего</div>
                    <div>Риски</div>
                </div>

                
                    {/* {console.log(answer)} */}
                    {(!isLoading && answer ? 
                    
                        <Slider
                            ref={slider => {
                                sliderRef = slider;
                            }}
                            {...settings}>
                            { answer.map((arg) => (
                                <Summary_item
                                    key={arg.period}
                                    period={arg.period}
                                    total={arg.total}
                                    risks={arg.risks}
                                />
                            )) }

                        </Slider> : <Loading className={s.sliderman}/>)}
                

                {/* <button onClick={next}>{'>'}</button> */}

            </div>
        </div>
    );
};

export default Summary;