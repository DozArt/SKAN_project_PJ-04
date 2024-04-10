import React, {useContext} from 'react';
import s from './Rate_item.module.css'
import Button from '../../Button';
import { Context } from '@/main';
import { observer } from 'mobx-react-lite'

const Rate = ({card_details}) => {
    const {store} = useContext(Context)

    const { 
        title = 'Premium',
        comment = 'Архивный тариф',
        color = 'orange', 
        icon, 
        activ = false, 
        new_price = 2048, 
        old_price = 100500, 
        text_addition = '', 
        includes = {},
    } = card_details;

    const new_price_str = new_price.toLocaleString()
    const old_price_str = old_price.toLocaleString()

    return (
        <div className={s.item + ' ' + s[color]}>
            <div className={s.item_title}>
                <div className={s.left}>
                    <h3>{title}</h3>
                    <p>{comment}</p>
                </div>
                <img src={icon} />
            </div> 
            <div className={s.item_content + (activ && store.isAuth ? " " + s.activ : "")}>
                <div>
                    <div className={s.valid_div}>
                        <div className={s.valid}>Текущий тариф</div>
                    </div>
                    <div className={s.price}>
                        <div className={s.price_new}>{new_price_str} ₽</div>
                        <div className={s.price_old}>{old_price_str} ₽</div>
                    </div>
                    
                    <p>{text_addition}</p>
                    <h4>В тариф входит:</h4>
                    <ul>
                        {includes.map(item => (
                            <li key={item}>
                                {item}
                            </li>
                        ))}
                    </ul>

                </div>
                <Button className={s.rate_button}>{(activ && store.isAuth ? "Перейти в личный кабинет" : "Подробнее")}</Button>
            </div>
            
        </div>
    );
};

export default observer(Rate);