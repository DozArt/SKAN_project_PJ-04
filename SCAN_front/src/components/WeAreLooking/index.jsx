import React from 'react';
import s from './WeAreLooking.module.css'
import imageMascot from './images/dars_mascot.svg'

const WeAreLooking = () => {
    return (
        <div className={s.unit}>
            <div className={s.left}>
                <h1 className={s.title}>
                    Ищем. Скоро <br />
                    будут результаты
                </h1>
                <p className={s.text_description}>
                Поиск может занять некоторое время, просим сохранять терпение.
                </p>
            </div>
            <div>
                <img className={s.mascot} src={imageMascot} />
            </div>
            
        </div>
    );
};

export default WeAreLooking;