import React from 'react';
import s from './Request.module.css';
import FormRequest from './FormRequest/FormRequest';

const Request = () => {
    return (
        <div className={s.unit}>
            
            <h3 className={s.title}>
            Найдите необходимые
            данные в пару кликов.<br />
            </h3>
            <p className={s.text_description}>
            Задайте параметры поиска. <br />
            Чем больше заполните, тем точнее поиск
            </p>
            <div className={s.form} >
                <FormRequest />
                <div className={s.mascot}></div>
            </div>
            
            
            
        </div>
    );
};

export default Request;

