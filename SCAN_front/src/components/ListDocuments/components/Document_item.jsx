import React from 'react';
import s from './Document_item.module.css'
import Button from '../../Button';


const Rate = ({card_document}) => {

    const { 
        title = 'Premium',
        comment = 'Архивный тариф',
        activ = false, 
    } = card_document;

    return (
        <div className={s.item}>
            <div>13.09.2021 Комсомольская правда KP.RU</div>
            <h5>{title}</h5>
            <div>Тхнические новости</div>
            <div></div>
            <p>{comment}</p>
            <div>
                <Button className={s.rate_button}>Подробнее</Button>
                <div>3 233 слова</div>
            </div>
            
        </div>
    );
};

export default Rate;

