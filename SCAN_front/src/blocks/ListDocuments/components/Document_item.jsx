import React from 'react';
import s from './Document_item.module.css'
import Button from '../../../components/Button/Button';


const Rate = ({card_document}) => {

    const { 
        title = 'Premium',
        comment = 'Архивный тариф',
        activ = false, 
    } = card_document;

    return (
        <div className={s.item}>
            <div className={s.item_title}>
                <h3>{title}</h3>
                <p>{comment}</p>
            </div> 
            <div className={s.item_content + (activ ? " " + s.activ : "")}>
                <Button className={s.rate_button}>Подробнее</Button>
            </div>
            
        </div>
    );
};

export default Rate;